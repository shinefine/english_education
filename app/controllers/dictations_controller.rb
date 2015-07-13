class DictationsController < ApplicationController
  #听写成绩 控制器
  before_action :set_training_class
  before_action :set_dictation, only: [:show, :edit, :update, :destroy]

  # GET /dictations
  # GET /dictations.json
  def index
    @dictations = @training_class.dictations

    if(params[:student_id])
      @student= Student.find(params[:student_id])
      @stu_diction_scores =@training_class.student_dictions(@student)
      @week_dates = WeekDate.group_days(@stu_diction_scores,@training_class)
      # @student_attendances  =@attendances.student_attendances.where(student_id: @student)

      render "index_for_special_student"
    else
      render "index"
    end
  end

  # GET /dictations/1
  # GET /dictations/1.json
  def show
  end

  # GET /dictations/new
  def new
    @dictation = Dictation.new
    @training_class.students.each do |stu|
        @dictation.dictation_scores.build(student: stu,score:0)
    end
  end

  # GET /dictations/1/edit
  def edit
  end

  # POST /dictations
  # POST /dictations.json
  def create
    @dictation = Dictation.new(dictation_params)
    @dictation.training_class =@training_class

      if @dictation.save
        redirect_to training_class_dictations_path(@training_class) , notice: 'Dictation was successfully created.'
      else
        render :new
      end

  end

  # PATCH/PUT /dictations/1
  # PATCH/PUT /dictations/1.json
  def update

      if @dictation.update(dictation_params)
         redirect_to training_class_dictations_path(@training_class) , notice: 'Dictation was successfully updated.'

      else
        render :edit

      end

  end

  # DELETE /dictations/1
  # DELETE /dictations/1.json
  def destroy
    @dictation.destroy

    redirect_to training_class_dictations_path(@training_class) , notice: 'Dictation was successfully destroyed.'


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dictation
      @dictation = Dictation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dictation_params
      params.require(:dictation).permit(:passing_line, :execute_date,dictation_scores_attributes:[:id,:student_id,:dictation_id,:score])
    end
end
