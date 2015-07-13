class ScoresController < ApplicationController
  #模考分数 控制器
  before_action :set_simulate_test_score, only: [:show, :edit, :update, :destroy]
  before_action :find_student,except: [:index]
  before_action :find_simulate_test, except:[:index,:index_with_all_examinations]


  # GET /scores
  # GET /scores.json
  def index
    #提供了培训班id,学员id,则 index 呈现 指定培训班下的/指定学员的/所有模考成绩
    if (params[:student_id] && params[:training_class_id])
      @student =Student.find(params[:student_id])
      @training_class =TrainingClass.find(params[:training_class_id])
      @examinations =@training_class.examinations
      @scores=@student.scores

      render 'index_with_all_examinations'

    elsif (params[:examination_id]) #指定了某次模考,则index 呈现关于此次模考所有有此模考成绩(所有学员的)
      @examination =Examination.find(params[:examination_id])
      @training_class =@examination.training_class
      @training_class_students =@training_class.students
      @scores=@examination.scores
      render 'index_for_all_students'
    else #默认情况下,则呈现数据库的所有 score 记录


    end
  end


  #GET  /training_classes/:training_class_id/examinations/:examination_id/scores/index_for_all_students(.:format)
  # def index_for_all_students
  #
  #   #模考特定,列出本次模考的所有学员的成绩
  #
  #
  #   @examination =Examination.find(params[:examination_id])
  #
  #   @training_class =@examination.training_class
  #
  #   @training_class_students =@training_class.students
  #
  #   @scores=@examination.scores
  #
  #
  # end

  # def index_with_all_examinations
  #
  #   #学员特定,列出学员的所有模考成绩
  #   @student =Student.find(params[:student_id])
  #
  #   @training_class =TrainingClass.find(params[:training_class_id])
  #   @examinations =@training_class.examinations
  #   @scores=@student.scores
  #
  #
  # end


  # GET /scores/1
  # GET /scores/1.json
  def show
  end

  # GET /scores/new
  def new
    @score = Score.new
    if @training_class.exam_type=='SAT'
      @score.course_a_score=0 #CR总分
      @score.stat_01 =19 # CR 词汇 : 正确数量
      @score.stat_02 =0 # CR 词汇 : 错误数量
      @score.stat_03 =0 # CR 词汇 : 空题数量
      @score.stat_04 =48 # CR 阅读 : 正确数量
      @score.stat_05 =0 # CR 阅读 : 错误数量
      @score.stat_06 =0 # CR 阅读 : 空题数量
      @score.stat_07 =67 # CR raw score

      @score.course_b_score=0 #数学得分
      @score.stat_08 =54 # 数学: 正确数量
      @score.stat_09 =0 # 数学 : 错误数量
      @score.stat_10 =0 # 数学 : 空题数量
      @score.stat_11 =54 # 数学 raw score

      @score.course_c_score=0 #写作得分
      @score.stat_12 =49 # 写作 : 正确数量
      @score.stat_13 =0 # 写作 : 错误数量
      @score.stat_14 =0 # 写作 : 空题数量
      @score.stat_15 =49 # 写作 raw score
      @score.stat_16 =0 # 写作 作文得分

      @score.final_score =0
    elsif @training_class.exam_type=='TOEFL'
      @score.course_a_score=0 #听总分
      @score.course_b_score=0 #说总分
      @score.course_c_score=0 #读总分
      @score.course_d_score=0 #写总分
    end
    @score.examination =@examination
    @score.student =@student
    @test_paper.sections.each do |section|
       section.questions.each do |question|
         @score.score_details.build({question: question})
       end
    end

  end

  # GET /scores/1/edit
  def edit
  end

  # POST /scores
  # POST /scores.json
  def create


    @score = Score.new(simulate_test_score_params)

    if @score.save

      redirect_to examination_scores_path(@examination),
                notice: '模考成绩已保存'

    end

  end

  # PATCH/PUT /scores/1
  # PATCH/PUT /scores/1.json
  def update
    respond_to do |format|
      if @score.update(simulate_test_score_params)


        format.html { redirect_to examination_scores_path(@examination),notice: '学员成绩己记录.'  }
        format.json { render :show, status: :ok, location: @score }
      else
        format.html { render :edit }
        format.json { render json: @score.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scores/1
  # DELETE /scores/1.json
  def destroy
    @score.destroy
    respond_to do |format|
      format.html { redirect_to examination_scores_url, notice: 'Simulate test score was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private


    def find_simulate_test
      @examination= Examination.find(params[:examination_id])
      @training_class =@examination.training_class
      @test_paper =@examination.test_paper

    end
    def find_student
      @student =Student.find(params[:student_id])
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_simulate_test_score
      @score = Score.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def simulate_test_score_params
      params.require(:score).permit(:examination_id, :student_id,:final_score,

                                    :cr_score,:math_score, :writing_score, :essay_writing_score,

                                    :course_a_score,:course_b_score,:course_c_score,:course_d_score,

                                    :stat_01,:stat_02,:stat_03,:stat_04,:stat_05,:stat_06,:stat_07,:stat_08,:stat_09,
                                    :stat_10,:stat_11,:stat_12,:stat_13,:stat_14,:stat_15,:stat_16,
                                    :hard_level1,:hard_level2,:hard_level3,:hard_level4,:hard_level5,

                                    score_details_attributes: [:id,:answer_result,:score_number,:section_question_id])
    end
end
