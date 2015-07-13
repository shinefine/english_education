class SectionsController < ApplicationController
  before_action :find_test_paper
  before_action :set_test_paper_section, only: [:show, :edit, :update, :destroy]


  # GET /sections
  # GET /sections.json
  def index
    @sections = @test_paper.sections # Section.all
  end

  # GET /sections/1
  # GET /sections/1.json
  def show
  end

  # GET /sections/new
  def new
    @section = Section.new
    set_section_types

  end



  # GET /sections/1/edit
  def edit
    set_section_types
  end

  # POST /sections
  # POST /sections.json
  def create
    @section = Section.new(test_paper_section_params)
    set_section_types
    respond_to do |format|
      if @section.save
        format.html { redirect_to @section, notice: '已成功创建试卷的 section' }
        format.json { render :show, status: :created, location: @section }
      else
        format.html { render :new }
        format.json { render json: @section.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sections/1
  # PATCH/PUT /sections/1.json
  def update
    set_section_types
    respond_to do |format|
      if @section.update(test_paper_section_params)
        format.html { redirect_to test_paper_sections_url(@test_paper), notice: '已成功更新试卷中特定的 section .' }
        format.json { render :show, status: :ok, location: @section }
      else
        format.html { render :edit }
        format.json { render json: @section.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sections/1
  # DELETE /sections/1.json
  def destroy
    @section.destroy
    respond_to do |format|
      format.html { redirect_to test_paper_sections_url, notice: 'Test paper section was successfully destroyed.' }
      format.json { head :no_content }
    end
  end



  private

  def set_section_types
    #根据试卷类型设置试卷中每一个section能够指派的类型
    if(@test_paper.exam_type == "SAT")
      @section_types =[["作文", '作文'] ,["语法", '语法'],["数学", '数学']]
    else
      @section_types =[["听", '听'] ,["说", '说'],["读", '读'],["写", '写']]
    end
  end


    def find_test_paper
      @test_paper = TestPaper.find(params[:test_paper_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_test_paper_section
      @section = Section.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_paper_section_params
      params.require(:section).permit(:name, :test_paper_id, :question_number, :course_type,
                                                 questions_attributes: [:_destroy,:id,:index_number,:difficulty]

      )
    end
end
