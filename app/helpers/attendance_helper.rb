module AttendanceHelper
  def summary_training_class_attendance_text(attendance)
    #返回培训班的所有学员考勤情况的简要说明文字


    #分别计算出所有学员的上午,下午,晚上考勤情况( 以出勤结果(迟到/早退/...)分组)
    result =[]

    group_result_morning =attendance.student_attendances.select{|item| not item.status_morning.blank?}.group_by{|item| item.status_morning}

    result<< "上午:"+ group_result_morning.map {|key,value|
      "#{value.length}人 #{key} "
    }.join(',')

    group_result_afternoon =attendance.student_attendances.select{|item| not item.status_afternoon.blank?}.group_by{|item| item.status_afternoon}

    result<< "下午:"+ group_result_afternoon.map {|key,value|
      "#{value.length}人 #{key} "
    }.join(',')

    group_result_evening =attendance.student_attendances.select{|item| not item.status_evening.blank?}.group_by{|item| item.status_evening}

    result<< "晚上:"+ group_result_evening.map {|key,value|
      "#{value.length}人 #{key} "
    }.join(',')



    #生成描述字符串
    return simple_format(result.join("\n"))
  end



  def helper__css_color_style_student_attendance(stu_atten)
    case stu_atten.description
      when '迟到'
        return  'lightblue'
      when '早退'
        return 'lightyellow'
      when '出勤'
        return 'lightgreen'
      when '未出勤'
        return 'lightred'

    end
    return ''
  end
  def helper__html_attendance_status_icon(status)
    #返回用html文本表示的 考勤状态对应的图标

    color = 'green' if status =='出勤'
    color = 'red' if status =='未出勤'
    color = 'blue' if status =='迟到'
    color = 'yellow' if status =='早退'
    return "<div class=\"ui #{color} label\"> </div>"

  end
end