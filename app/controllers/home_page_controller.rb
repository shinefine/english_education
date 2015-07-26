require 'IndexPageData'
#网站首页
class HomePageController < ApplicationController

  before_action :set_lecturers
  layout SchoolSettings.home_page_layout_name




  def index

    #@lastest_9_Courses=HomePageData.all_courses.shuffle.take 9
    @courses = HomePageData.all_courses
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
    @lecturer = HomePageData.lecturers[id]
  end

  def course_list
    @category_code =params[:category].upcase

    @courseCategory_code2name =HomePageData.courseCategory_code2name

    @courses = HomePageData.all_courses
    @courses = (HomePageData.courses_categoryCode2hash[@category_code].try(:values) )||{}  unless @category_code =='ALL'

    @course_description=HomePageData.course_code2description[@category_code]

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
    @lecturers =HomePageData.lecturers
  end
end
