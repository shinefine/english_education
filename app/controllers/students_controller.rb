class StudentsController < ApplicationController
  #学员 控制器
  before_action :set_student, only: [:show, :edit, :update, :destroy,:freezing,:unfreezing,
                                     :show_target,:save_target,
                                     :set_finished_test_papers,:set_real_scores,:set_entry_and_target_scores]

  before_action :set_years_and_months,only: [:new, :edit,:set_real_scores,:set_entry_and_target_scores]

  I18n.locale = I18n.default_locale

  # GET /students
  # GET /students.json
  def index
    #学员列表有权限过滤数据需求,
    # 管理员能看到所有,
    # 普通员工只能看到他自己创建出的学员
    # 普通员工也能看到不是由他创建的,但属于他的培训班的学员(该员工是培训班的班主任)


    set_user_permission_students

    @students=@students.sort_by{|s| s.user.pinyin_name}

    @students =Kaminari.paginate_array(@students).page(params[:page]).per(20)

    respond_to do |format|
      format.html
      format.json { render json: @students }
    end
  end

  def search_with_trainingclass
    @training_class=TrainingClass.find(params[:training_class_id])

    if params[:q].blank?
      @students=User.all.select{|u| u.student?}.collect{|u| u.student}
    else
      set_user_permission_students
      student_ids = @students.map{|stu| stu.id}

      @students=User.where("name like ?","%#{params[:q]}%").to_a.select{|u| u.student?}.collect{|u| u.student}

    end

    @students = @students - @training_class.students

    respond_to do |format| # <- 这里
      format.html {render :partial => 'student_profileList', :object => @students }

      format.js

    end
  end

  def search


    if params[:q].blank?
      @students=Student.all
    else
      set_user_permission_students
      student_ids = @students.map{|stu| stu.id}

      @students=User.where("name like ?","%#{params[:q]}%").to_a.select{|u| u.student?}.collect{|u| u.student}

    end

    @students =Kaminari.paginate_array(@students).page(params[:page]).per(10)

    render 'index'

  end

  # GET /students/1
  # GET /students/1.json
  def show
  end

  # GET /students/new
  def new
    @student = Student.new
    @student.user =User.new
    @user=@student.user
  end

  # GET /students/1/edit
  def edit


  end

  def set_real_scores
    @real_score_exam_type =params[:exam_type]
    @score_type =params[:score_type]

  end

  def set_entry_and_target_scores
    @real_score_exam_type =params[:exam_type]
    @score_type =params[:score_type]

    if @student.real_scores.sat.entry.count==0
      @student.real_scores.build(exam_type: 'SAT',score_type:'入口成绩')
    end

    if @student.real_scores.sat.target.count==0
      @student.real_scores.build(exam_type: 'SAT',score_type:'最终期望成绩')
    end

    if @student.real_scores.toefl.target.count==0
      @student.real_scores.build(exam_type: 'TOEFL',score_type:'入口成绩')
    end

    if @student.real_scores.toefl.target.count==0
      @student.real_scores.build(exam_type: 'TOEFL',score_type:'最终期望成绩')
    end

  end

  def set_finished_test_papers

  end

  def simulate_score_list

  end

  # POST /students
  # POST /students.json
  def create
    @student = Student.new(student_params)

    @student.creator = current_user.employee if current_user.employee?


   # @student.test_papers=TestPaper.where(id: params[:student][:test_paper_ids])  #设置学员做过的试卷信息

      if @student.save
        redirect_to students_url, notice: '学员已创建'
      else
        render :new
      end

  end

  # PATCH/PUT /students/1
  # PATCH/PUT /students/1.json
  def update

    @student.test_papers=TestPaper.where(id: params[:student][:test_paper_ids])



      if @student.update(student_params)
        redirect_to student_url(@student), notice: '学员信息已保存'

      else
        render :edit
      end

  end

  # DELETE /students/1
  # DELETE /students/1.json
  def destroy
    @student.update_attribute(:delete_flag,true)
    redirect_to students_url, notice: '学员已删除'

  end

  def freezing
    @student.update_attribute(:freezing_flag,true)
    redirect_to students_url, notice: '学员已冻结'
  end

  def unfreezing
    @student.update_attribute(:freezing_flag,false)
    redirect_to students_url, notice: '学员已恢复'
  end
  private


  def set_years_and_months
    @years=[['2013','2013年'],['2014','2014年'],['2015','2015年'],['2016','2016年']]

    @toefl_months=[['1','1月'],['2','2月'],['3','3月'],['4','4月'],['5','5月'],['6','6月'],
                   ['7','7月'],['8','8月'],['9','9月'],['10','10月'],['11','11月'],['12','12月']]
    @sat_months=[['1','1月'],['2','2月'],['3','3月'],['4','4月'],['5','5月'],['6','6月'],
                   ['7','7月'],['8','8月'],['9','9月'],['10','10月'],['11','11月'],['12','12月']]




  end



    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
      @user=@student.user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def student_params
      params.require(:student).permit(
                                      :parent_name,
                                      :parent_tel,
                                      :parent2_name,
                                      :parent2_tel,
                                      :school,

                                      :birth_day,

                                      :school_rank,
                                      :total_toefl_times,
                                      :total_sat_times,
                                      :expect_toefl_times,


                                      :test_paper_ids,
                                      user_attributes: [:name,:email,:id,
                                                        :phone_number,
                                                        :qq_number,
                                                        :tinypost_number,
                                                        :identify_card,
                                                        :photo
                                      ],
                                      real_scores_attributes:[
                                          :_destroy,:id,:student_id,
                                          :exam_type,:score_type,:final_score,
                                          :course_a_score,:course_b_score,:course_c_score,:course_d_score,
                                          :year,:month
                                      ]


      )


    end
end
