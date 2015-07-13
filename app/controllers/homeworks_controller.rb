class HomeworksController < ApplicationController
  before_action :set_training_class
  before_action :set_homework, only: [:show, :edit, :update, :destroy]


  # GET /homeworks
  # GET /homeworks.json
  def index
    @homeworks = @training_class.homeworks

  end

  # GET /homeworks/1
  # GET /homeworks/1.json
  def show
  end

  # GET /homeworks/new
  def new
    @homework = Homework.new
    @homework.subject_type =params[:subject]

    @homework.distribution_date = Time.now
    @homework.submit_date =1.days.from_now


    @training_class.students.each do |stu|
      @homework.homework_finishs.build(student: stu,status:'unsubmit')
    end


  end

  # GET /homeworks/1/edit
  def edit

  end

  # POST /homeworks
  # POST /homeworks.json
  def create

    @homework = @training_class.homeworks.build(homework_params)
    if(current_user.teacher?)
      @homework.teacher = current_user.teacher
    else #班主任创建作业时,自动设置其对应的讲师
      if(@training_class.exam_type=='SAT')
        @homework.teacher =@training_class.subject_teachers(:sat_cr).first if   @homework.subject_type =='CR'
        @homework.teacher =@training_class.subject_teachers(:sat_math).first if  @homework.subject_type =='Math'
        @homework.teacher =@training_class.subject_teachers(:sat_write).first if  @homework.subject_type =='Writing'
      elsif(@training_class.exam_type=='TOEFL')
        @homework.teacher =@training_class.subject_teachers(:toefl_listen).first if  @homework.subject_type=='Listening'
        @homework.teacher =@training_class.subject_teachers(:toefl_talk).first if  @homework.subject_type =='Speaking'
        @homework.teacher =@training_class.subject_teachers(:toefl_read).first if  @homework.subject_type =='Reading'
        @homework.teacher =@training_class.subject_teachers(:toefl_write).first if  @homework.subject_type=='Writing'
      end

    end


      if @homework.save
        redirect_to  training_class_homeworks_path(@training_class), notice: '作业已创建.'

      else
        render :new

      end

  end

  # PATCH/PUT /homeworks/1
  # PATCH/PUT /homeworks/1.json
  def update


      if @homework.update(homework_params)
        redirect_to training_class_homeworks_path(@training_class), notice: '作业信息已保存'

      else
        render :edit

      end

  end

  # DELETE /homeworks/1
  # DELETE /homeworks/1.json
  def destroy
    @homework.destroy

    redirect_to training_class_homeworks_url(@training_class), notice: '作业已删除.'


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_homework
      @homework = Homework.find(params[:id])
    end




    # Never trust parameters from the scary internet, only allow the white list through.
    def homework_params
      params.require(:homework).permit(:title, :distribution_date, :submit_date,:teacher_id, :subject_type,
                                       :training_class_id,
                                       homework_finishs_attributes:[:student_id,:status,:description,:id]
      )
    end
end
