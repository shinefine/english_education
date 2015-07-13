class QuestionsController < ApplicationController
  #试卷题目 控制器
  before_action :set_section_question, only: [:show, :edit, :update, :destroy]

  # GET /questions
  # GET /questions.json
  def index
    @questions = Question.all
  end


  # GET /questions/1
  # GET /questions/1.json
  def show
  end

  # GET /questions/new
  def new
    @question = Question.new
  end

  # GET /questions/1/edit
  def edit
  end

  # POST /questions
  # POST /questions.json
  def create
    @question = Question.new(section_question_params)


      if @question.save
        redirect_to @question, notice: 'Section question was successfully created.'

      else
        render :new

      end

  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update

      if @question.update(section_question_params)
        redirect_to @question, notice: 'Section question was successfully updated.'

      else
        render :edit

      end

  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  def destroy
    @question.destroy

    redirect_to section_questions_url, notice: 'Section question was successfully destroyed.'


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_section_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def section_question_params
      params.require(:question).permit(:indexNumber, :difficulty, :test_paper_section_id)
    end
end
