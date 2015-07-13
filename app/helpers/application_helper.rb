module ApplicationHelper

  def remove_unlaw_HTML_char(str)
    str.gsub(/[\s,]/,"") #用正则表达式移除掉字符串中的 空格，逗号

  end

  def build_accordion_block(title="",content="",default_expand=false)
    #生成html 折叠块 代码

    active_str =default_expand ? ' active ' : ''

    return '<div class="ui  basic vertical fluid accordion">
    <!--基本信息-->

    <div class='+ active_str+'" title">
    <i class="dropdown icon"></i>
              <a class="ui teal circular large label">' + title + '</a>

    </div>
            <div class='+ active_str+'" content">'+
     content +
        '</div>
    </div>'

  end

  #该方法定义了在页面顶端导航菜单栏中应该出现的内容
  def build_main_nav_menu_items
    nav_menus={ }
    if current_user.nil?
      return nav_menus
    end

    if current_user.teacher?
      nav_menus={
                  '我的培训班'=>{link_path: training_classes_path,icon_name: 'flag'},
                  '我的个人信息'=>{link_path: teacher_url(current_user.teacher),icon_name: 'male'},

                  '课程表'=> {link_path: home_page_training_class_schedule_url,icon_name: 'calendar'},
      }
    end
    if current_user.student?
      nav_menus={
                  '我的个人信息'=>{link_path: student_url(current_user.student),icon_name: 'male'},
                  '我的培训班'=>{link_path: training_classes_url,icon_name: 'flag'},
                  '课程表'=> {link_path: home_page_training_class_schedule_url,icon_name: 'calendar'},
      }

    end
    if current_user.employee?
      if current_user.can_manage_basic_data?
        nav_menus={
                '学员'=>{link_path: students_path,icon_name: 'users'},
                '班级'=>{link_path: training_classes_path,icon_name: 'flag'},
                "大数据:学员成绩分析"=>{link_path: home_page_big_data_report_scores_url(year: Time.now.year,exam_type:'SAT'),icon_name: 'bar chart'},

        }
      else
        nav_menus={
                '我的班级'=>{link_path:training_classes_path,icon_name: 'flag'},
                '我的个人信息'=>{link_path:employee_url(current_user.employee),icon_name: 'male'},
                '学员管理'=>{link_path:students_path,icon_name: 'users'},
                '课程表'=> {link_path:home_page_training_class_schedule_url,icon_name: 'calendar'},
        }
      end

    end

    return nav_menus
  end


  #该方法定义了在页面左侧导航菜单栏中应该出现的内容
  def build_nav_menus
    nav_menus={ }
    if current_user.nil?
      return nav_menus
    end

    if current_user.teacher?
      nav_menus={
          "关于"=>
              {
                  '我的培训班'=>training_classes_path,
                  '我的个人信息'=>teacher_url(current_user.teacher),

                  '课程表'=> home_page_training_class_schedule_url,

              },


      }
    end

    if current_user.student?

      nav_menus={
          "关于" =>
              {

                  '我的个人信息'=>student_url(current_user.student),
                  '我的培训班'=>training_classes_url(),
                  '课程表'=> home_page_training_class_schedule_url,
              },



      }

    end
      if current_user.employee?

        if current_user.can_manage_basic_data?
          nav_menus={
            "基础数据" =>
                {
                    '试卷（套题）管理'=>test_papers_path,
                    '培训教材管理'=>text_books_path,
                    '课程表'=> home_page_training_class_schedule_url,

                },
            "讲师,学员,员工" =>
                {
                    '讲师管理'=>teachers_path,
                    '学员管理'=>students_path,
                    '员工管理'=>employees_path,
                },
            "培训班" =>{
                '班级管理'=>training_classes_path,

            },
           "大数据" =>{
              "学员成绩分析(#{Time.now.year})"=>home_page_big_data_report_scores_url(year: Time.now.year,exam_type:'SAT'),

          }


          }
        else
          nav_menus={

                  "基础数据" =>
                      {
                          '试卷（套题）管理'=>test_papers_path,
                          '培训教材管理'=>text_books_path,

                      },

              "关于" =>{
                  '我的班级'=>training_classes_path,
                  '我的个人信息'=>employee_url(current_user.employee),
                  '员工列表'=> employees_path,
                  '学员管理'=>students_path,
                  '课程表'=> home_page_training_class_schedule_url,
              }

          }
        end

      end

    return nav_menus
  end

  def link_to_add_nest_form_fields(name, f, association,init_values={}  )
    #此方法用于在表单页面中帮助生成嵌套表单的模板（动态生成嵌套表单的域空间）
    new_object = f.object.send(association).klass.new     #相当于XxxxxxField.new
    id = new_object.object_id

    #设置动态创建出来的obj的初始属性值
    unless init_values.nil?
        init_values.each{|key,value|
          method_name =key.to_s+"="
          new_object.send(method_name,value) if new_object.respond_to?(method_name)
        }

    end
    #取得嵌套表单模板的render 文本
    html_content_with_nest_form_fields = f.fields_for(association, new_object, child_index: id) do |builder|
      render(association.to_s.singularize + "_form_fields", f: builder)
    end
    #该链接的data-fields中的内容是根据嵌套表单xxxx_form_fields.html.erb  render出的html 内容文本（很大一段文本）
    link_to(name, '#', class: "add_nest_form_field_link ui yellow button",
            data: {id: id, fields: html_content_with_nest_form_fields.gsub("\n", "")})

  end

end


class WeekDate
  #一个 WeekDate  对象  将一周7天组合成一个对象 代表了学员某一周7天的考勤记录

  attr_accessor :sunday,:monday,:tuesday,:wednesday,:thursday,:friday,:saturday
  attr_accessor :tag  # 可将学员的每日考勤信息 列表或 每日听写成绩成绩列表 存储于tag属性中

  def initialize(tag_obj)
    @tag= tag_obj
  end


  def self.group_days(days_tag,training_class)
    #需要training_class 对象的起始结束时间段来算得(根据情况会延伸时间段) 每个 weekDate对象所包含的 7天时间段


    start_day =training_class.start_date.wday.days.until(training_class.start_date)
    end_day = ( 6 - training_class.end_date.wday).days.since(training_class.end_date)
    num = end_day.mjd - start_day.mjd + 1

    return_array=[]

    (num/7).times do |i|
      att_grpWeek = WeekDate.new(days_tag)
      return_array<< att_grpWeek
      att_grpWeek.sunday   = (i * 7 + 0).days.since(start_day)
      att_grpWeek.monday   = (i * 7 + 1).days.since(start_day)
      att_grpWeek.tuesday  = (i * 7 + 2).days.since(start_day)
      att_grpWeek.wednesday= (i * 7 + 3).days.since(start_day)
      att_grpWeek.thursday = (i * 7 + 4).days.since(start_day)
      att_grpWeek.friday   = (i * 7 + 5).days.since(start_day)
      att_grpWeek.saturday = (i * 7 + 6).days.since(start_day)
    end
    return return_array
  end

  def get_day(day_num)
    target_date =nil
    case day_num
      when 0
        target_date= @sunday
      when 1
        target_date= @monday
      when 2
        target_date= @tuesday
      when 3
        target_date= @wednesday
      when 4
        target_date= @thursday
      when 5
        target_date= @friday
      when 6
        target_date= @saturday
    end
    return  target_date
  end

  def has_day_attendance?(day_num)
    target_date = get_day(day_num)
    return @tag.any? {|e|e.atten_date == target_date }
  end

  def get_student_attendance_with_day(day_num)
    #返回学员一周内的某天的考勤记录,参数day 表示天数,星期日从0 开始

    target_date = get_day(day_num)

    #返回一个student_attendance 对象 或 nil
    return @tag.find {|e|e.atten_date == target_date }
  end

  def has_day_dictation_score?(day_num)
    target_date = get_day(day_num)
    return @tag.any? {|e|e.execute_date == target_date }
  end

  def get_student_dictation_score_with_day(day_num)
    #返回学员一周内的某天的听写成绩记录,参数day 表示天数,星期日从0 开始

    target_date = get_day(day_num)

    #返回一个dictation_score 对象 或 nil
    return @tag.find {|e|e.execute_date == target_date }
  end




end
