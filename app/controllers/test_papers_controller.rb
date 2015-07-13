class TestPapersController < ApplicationController
  #试卷 控制器
  before_action :set_test_paper, only: [:show, :edit, :update, :destroy]

  # GET /test_papers
  # GET /test_papers.json
  def index
    @test_papers = TestPaper.all
  end

  # GET /test_papers/1
  # GET /test_papers/1.json
  def show
  end

  # GET /test_papers/new
  def new
    @test_paper = TestPaper.new
    @test_paper.exam_type =params[:exam_type]
    set_section_types
   # 3.times{ @test_paper.sections.build}
  end

  # GET /test_papers/1/edit
  def edit
    set_section_types
  end

  # POST /test_papers
  # POST /test_papers.json
  def create
    @test_paper = TestPaper.new(test_paper_params)

    set_section_types
    respond_to do |format|
      if @test_paper.save
        format.html { redirect_to test_papers_url, notice: '试卷已成功创建.' }
        format.json { render :show, status: :created, location: @test_paper }
      else
        format.html { render :new }
        format.json { render json: @test_paper.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_papers/1
  # PATCH/PUT /test_papers/1.json
  def update

    set_section_types
    respond_to do |format|
      if @test_paper.update(test_paper_params)
        format.html { redirect_to test_papers_url, notice: '试卷信息已更新.' }
        format.json { render :show, status: :ok, location: @test_paper }
      else
        format.html { render :edit }
        format.json { render json: @test_paper.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_papers/1
  # DELETE /test_papers/1.json
  def destroy
    @test_paper.destroy
    respond_to do |format|
      format.html { redirect_to test_papers_url, notice: '试卷已删除.' }
      format.json { head :no_content }
    end
  end

  private

  #重复的函数,在section controller中也有此函数
  def set_section_types
    #定义试卷时也能够同时定义section ，所以这里要定义 section_types变量 ，根据试卷类型设置试卷中每一个section能够指派的类型
    if(@test_paper.exam_type == "SAT")
      @section_types =[["作文", '作文'] ,["语法", '语法'],["数学", '数学']]
    elsif (@test_paper.exam_type == "TOEFL")
      @section_types =[["听", '听'] ,["说", '说'],["读", '读'],["写", '写']]
    else
      @section_types =[["听", '听'] ,["说", '说'],["读", '读'],["写", '写'],["作文", '作文'] ,["语法", '语法'],["数学", '数学']]
    end
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_test_paper
      @test_paper = TestPaper.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_paper_params
      params.require(:test_paper).permit(:name,:exam_type,
                                         sections_attributes: [:_destroy,:id,:name,:question_number,:course_type]
      )
    end


end
