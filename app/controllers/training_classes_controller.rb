class TrainingClassesController < ApplicationController
  #培训班 控制器
  before_action :set_training_class, only: [:show, :edit, :update, :destroy,:set_teachers_students]

  # GET /training_classes
  # GET /training_classes.json
  def index


    if(current_user.student?)
      @student =current_user.student
      @training_classes=@student.training_classes


      @training_classes_grid = initialize_grid(@student.training_classes,
                                               order: 'training_classes.start_date',
                                               order_direction: 'desc',per_page: 10)

    end

    if (current_user.teacher?)
      @teacher =current_user.teacher
      @training_classes=@teacher.training_classes.distinct

      @training_classes_grid = initialize_grid(@teacher.training_classes.group("training_classes.name"),
                                               order: 'training_classes.start_date',
                                               order_direction: 'desc')
    end

    if (current_user.employee?)
      if current_user.can_set_training_class_info?  #管理员/校长
        @training_classes = TrainingClass.all

        @training_classes_grid = initialize_grid(TrainingClass.all,
                                                 order: 'training_classes.start_date',
                                                 order_direction: 'desc')
      else
        @training_classes =TrainingClass.where(master_teacher_id: current_user.employee.id )

        @training_classes_grid = initialize_grid(TrainingClass.where(master_teacher_id: current_user.employee.id ),
                                                 order: 'training_classes.start_date',
                                                 order_direction: 'desc')
      end
    end

    @training_classes =Kaminari.paginate_array(@training_classes).page(params[:page]).per(10)
  end

  # GET /training_classes/1
  # GET /training_classes/1.json
  def show

  end

  # GET /training_classes/new
  def new
    @training_class = TrainingClass.new
    @training_class.start_date = Time.now
    @training_class.end_date =1.months.from_now
    @training_class.exam_type= params[:exam_type]

    set_training_class_types
    set_subject_types
    set_user_permission_students
  end


  # GET /training_classes/1/edit
  def edit
    set_training_class_types
    set_subject_types
    set_user_permission_students

  end

  # POST /training_classes
  # POST /training_classes.json
  def create
    @training_class = TrainingClass.new(training_class_params)

    if @training_class.save
      redirect_to training_classes_url, notice: "培训班#{@training_class.name}已创建"

    else
      set_subject_types
      set_training_class_types
      set_user_permission_students
      render :new
    end
  end


  # PATCH/PUT /training_classes/1
  # PATCH/PUT /training_classes/1.json
  def update
    #render inline: params.inspect


      if @training_class.update(training_class_params)
        redirect_to training_classes_url, notice: "培训班#{@training_class.name}信息已保存"
      else
        set_subject_types
        set_training_class_types
        render :edit
      end
  end

  # DELETE /training_classes/1
  # DELETE /training_classes/1.json
  def destroy
    @training_class.destroy
    respond_to do |format|
      format.html { redirect_to training_classes_url, notice: "培训班#{@training_class.name}已删除" }
      format.json { head :no_content }
    end
  end

  def set_students
    set_training_class
  end

  def add_student

    student =Student.find(params[:student_id])
    training_class=TrainingClass.find( params[:training_class_id])

    training_class.students.append(student) unless training_class.students.include? student

    respond_to do |format|
      format.json{
        render json:{
            result: 'success',
            student_id:student.id
        }
      }
    end
  end

  def remove_student

    student =Student.find(params[:student_id])
    training_class=TrainingClass.find( params[:training_class_id])

    training_class.students.destroy(student) if training_class.students.include? student


    respond_to do |format|
      format.json{
        render json:{
            result: 'success',
            student_id:student.id
        }
      }
    end
  end

  private

  def set_training_class_types
    if( @training_class.exam_type=='SAT')
      @training_class_types =TrainingClassType.sat_types
    elsif(@training_class.exam_type=='TOEFL')
      @training_class_types =TrainingClassType.toefl_types
    end
  end

  def set_subject_types

    if(@training_class.exam_type == 'SAT')
      @subject_types =[['CR'] ,['Math'],['Grammar'],['Essay']]
    elsif (@training_class.exam_type == 'TOEFL')
      @subject_types =[['Listening'] ,['Speaking'],['Reading'],['Writing']]
    else
      @subject_types =[['错误','错误'],['exam_type_未指定','exam_type_未指定']]
    end
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_training_class
     @training_class = TrainingClass.find(params[:id])
    end



    # 参数白名单定义
    def training_class_params
      params.require(:training_class).permit(:name, :code, :start_date, :end_date,
                                             :exam_type,:training_class_type,
                                             :text_book_id,
                                             :master_teacher_id,
                                             :sat_writing_teacher_id,
                                             :sat_math_teacher_id,
                                             :sat_cr_teacher_id,
                                             :toefl_listen_teacher_id,
                                             :toefl_talk_teacher_id,
                                             :toefl_read_teacher_id,
                                             :toefl_write_teacher_id,
                                             student_ids:[],
                                             text_book_ids:[],
                                             subjects_attributes: [:_destroy,:id,:name,:teacher_id]
      )
    end
end
