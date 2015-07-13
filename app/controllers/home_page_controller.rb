


#网站首页
class HomePageController < ApplicationController

  before_action :set_lecturers
  layout SchoolSettings.home_page_layout_name


  def self.lecturers
    lecturers ={
        1=>{
            id:1,
            name:'Brandon Cooper',
            img:'lecturer-brandon-150x150.jpg',
            description:'北京新东方优能中学高中英语词汇教师，洞悉近十年全国重点省市高考题及模拟题，了解学生需要，针对学生薄弱点对症下药。注重培养学生的发散性思维及英语能力的全面提高，培养学生扎实打好词汇基础，并在此基础上提升学生对英语的兴趣以及掌握一门语言的使用能力。'

        },
        2=>{
            id:2,
            name:'Jamie Smith',
            img:'lecturer-jamie-150x150.jpg',
            description:'从事多年的英语教学，具有丰富的教学经验，在实践中逐步形成　自己的风格。根据学生年龄、层次设计不同的教学方案，简洁明快，课堂教学生动活泼，充分调动学生的积极性和主动性。'
        },
        3=>{
            id:3,
            name:'Sharon Lawrence',
            img:'lecturer-sharon-150x150.jpg',
            description:'授课风格清新自然，热情洋溢，有亲和力，幽默风趣但不失严谨。对待学生认真负责。主讲词汇，善于总结记忆单词的方法，提炼考试技巧，将零散的词汇构建成体系。'
        },
        4=>{
            id:4,
            name:'Susan Whatsons',
            img:'lecturer-susan-150x150.jpg',
            description:'良好的语言天赋，深厚的语言功底，加之瑞士的游学及工作经历，使其深谙法语国家文化。爱通俗也爱典雅，爱天文地理也爱八卦奇闻。她的授课风格条理清晰，重点突出，化繁为简，生动有趣。'
        },
    }
    return lecturers
  end

  def self.courses
    courses={
        1=>{
            id:1,
            name: 'TOEFL 入门',
            category:'TOEFL',
            teacherID: 1,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'
        },
        2=>{
            id:2,
            name: 'TOEFL 实战',
            category:'TOEFL',
            teacherID: 1,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'
        },
        3=>{
            id:3,
            name: 'SAT 实战',
            category:'SAT',
            teacherID: 2,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'
        },
        4=>{
            id:4,
            name: 'SAT 基础',
            category:'SAT',
            teacherID: 3,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'

        },
        5=>{
            id:5,
            name: 'IELTS 基础',
            category:'IELTS',
            teacherID: 3,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'

        },
        6=>{
            id:6,
            name: 'IELTS 入门',
            category:'IELTS',
            teacherID: 4,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'

        },
        7=>{
            id:7,
            name: 'IELTS 冲刺',
            category:'IELTS',
            teacherID: 4,
            weeks:3,
            difficulty:'初级',
            description: '课程描诉--课程描诉--课程描诉',
            startDate: '2015-8-1'

        },
    }
    return courses
  end

  def index

    render SchoolSettings.home_page_view_name
  end

  def login

  end

  def search
        @users = User.search(
             query: {
                multi_match: {
                  query: params[:q].to_s,
                  :fields => %w(name intro)
            }
          }
        ).records
  end

  def lecturer_profile
    id = params[:id].to_i
    @lecturer = HomePageController.lecturers[id]
  end

  def course_list
    @category =params[:category].upcase

    @courses = HomePageController.courses.values
    @courses = HomePageController.courses.values.select{|c| c[:category] == @category}     unless @category =='ALL'
  end

  def big_data_report_scores

    #大数据统计分析功能
    @year =params[:year]
    @exam_type = params[:exam_type]

    var_year =@year.to_i
    valid_students = Student.where( id: RealScore.send(@exam_type.downcase).true_real.where(year:var_year).map{|rs|rs.student_id} )#根据年份获取有真实考试成绩的有效学员


    @hash_students_score_trend ={}  #各个学员的考试成绩的趋势分析结果
    valid_students.each{ |stu|
      result = stu.calculate_student_scores_trend(var_year,@exam_type)

      @hash_students_score_trend[stu] =result
    }

    render layout:'application'
    #
    # @scores_grp_by_student = RealScore.sat.true_real.where(year:var_year).group_by{|record| record.student_id}
    #
    # @students=[]
    # @scores_grp_by_student.each{|key_id,value_realscores|
    #   student = Student.find(key_id)
    #   student.cache_real_scores = value_realscores
    #   student.calculate_sat_scores_trend
    #   @students<<student
    # }


  end

  def training_class_schedule
    #列出所有培训班的课程表
    dir =Dir.open(Rails.root.join('public', 'uploads'))
    @files =dir.reject { |d| d == '.' || d == '..'}

  end


  def upload
    uploaded_io = params[:schedule]
    File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
      file.write(uploaded_io.read)
    end

    redirect_to  home_page_training_class_schedule_url


  end
  def delete_schedule
    File.delete(Rails.root.join('public', 'uploads', params[:filename]))


    redirect_to  home_page_training_class_schedule_url
  end

  def set_lecturers
    @lecturers =HomePageController.lecturers
  end
end
