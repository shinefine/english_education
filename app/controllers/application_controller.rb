require 'settings'

class ApplicationController < ActionController::Base
  before_action :set_school_name
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def set_training_class
    #由于很多controller都有设置培训班的需求,所以这里定义公共方法
    @training_class =  TrainingClass.find(params[:training_class_id])
  end


  def set_user_permission_students
    #根据登录用户的身份权限,筛选其能够操作的学员列表 (StudentController /training_class Controller 的index 会使用次方法)

    #--见需求:不同员工所能操作和看见的学员信息有限制

    if current_user.admin?
      students = Student.all
    elsif current_user.employee?

      students = Student.where(creator: current_user.employee)
      students_2= current_user.employee.training_classes.inject([]){|result,element| result | element.students }
      students = students || students_2
    else
      students=[]
    end
    @students =students
  end

  def set_school_name
    @school_name = SchoolSettings.school_name
  end

end
