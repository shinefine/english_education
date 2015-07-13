class ExaminationsController < ApplicationController
  #模拟考试信息 控制器
  before_action :setObj_examination, only: [:show, :edit, :update, :destroy]

  before_action :findObj_training_class

  # GET /examinations
  # GET /examinations.json
  def index
    @examinations = @training_class.examinations  #Examination.all
  end

  # GET /examinations/1
  # GET /examinations/1.json
  def show
  end

  # GET /examinations/new
  def new
    @examination = Examination.new
    @examination.name=Time.now.strftime("%y年%m月%d日 第#{@training_class.examinations.count + 1}次模考")
    @examination.test_date = Time.now

    set_suggest_test_papers

  end

  # GET /examinations/1/edit
  def edit
    set_suggest_test_papers

  end

  # POST /examinations
  # POST /examinations.json
  def create
    @training_class.examinations.create(examination_params)
    # redirect_to training_class_examinations_path(@training_class)

    @examination = Examination.new(examination_params)
    if @training_class.save

      redirect_to training_class_examinations_path(@training_class), notice: "培训班#{@training_class.name}已创建"

    else
      @examination.valid? #调用此方法生成@examination.errors信息
      render :new
    end

  end

  # PATCH/PUT /examinations/1
  # PATCH/PUT /examinations/1.json
  def update

      if @examination.update(examination_params)
        redirect_to training_class_examinations_path(@training_class) ,notice: '模考信息已保存'


      else
        render :edit

      end

  end

  # DELETE /examinations/1
  # DELETE /examinations/1.json
  def destroy
    @examination.destroy

      redirect_to examinations_url, notice: 'Simulate test was successfully destroyed.'


  end

  private

    def set_suggest_test_papers
      used_testpapers = @training_class.examinations.map{|ex| ex.test_paper}
      @suggest_test_papers =  TestPaper.where(exam_type: @training_class.exam_type) - used_testpapers

      @testpaper_used_status=Hash.new(0)
      @training_class.students.each {|stu|
        stu.test_papers.each { |tp|
          @testpaper_used_status[tp.id]= @testpaper_used_status[tp.id]+1
        }

      }
    end
    # Use callbacks to share common setup or constraints between actions.
    def setObj_examination
      @examination = Examination.find(params[:id])
    end

    def findObj_training_class
      @training_class = TrainingClass.find(params[:training_class_id])

    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def examination_params
      params.require(:examination).permit(:training_class_id, :test_paper_id, :test_date,:name)
    end
end
