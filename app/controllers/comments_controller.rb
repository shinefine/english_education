class CommentsController < ApplicationController
#评语控制器
  before_action :set_training_class_and_teacher
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  def index
    @comments = @student.comments.filter_by_training_class(@training_class)
    @comments =@comments.filter_by_teacher(@teacher) if current_user.teacher? #讲师只能看到他自己写的对某学员的评语. 而其它人(员工,学员)则能看到所有讲师写的评语

  end

  def new
    @comment = @student.comments.build({comment_date: Time.now})

  end

  def edit

  end
  def update
    if @comment.update(comment_params)
      redirect_to training_class_student_comments_path(@training_class,@student), notice: '评语已保存'
    else
      render :edit
    end
  end

  def destroy
    @comment.destroy

    redirect_to training_class_student_comments_path(@training_class,@student) , notice: '评语已删除.'

  end

  def create
    @comment_new = @student.comments.build(comment_params)
    if @teacher
      @comment_new.teacher = @teacher
    else
      @comment_new.teacher =Teacher.find(params[:comment][:teacher_id])
    end

    @comment_new.training_class =@training_class

    if(@comment_new.save)
      redirect_to  training_class_student_comments_url(@training_class,@student)
    else
      render :index
    end
  end


  private
  def set_training_class_and_teacher
    @training_class = TrainingClass.find(params[:training_class_id])

    @student = Student.find(params[:student_id])

    @teacher = current_user.teacher if current_user.teacher?
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:text,:teacher_id,:comment_date)
  end

end