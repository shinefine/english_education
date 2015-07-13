class EmployeesController < ApplicationController
  #员工信息 控制器

  before_action :set_employee, only: [:show, :edit, :update, :destroy,:freezing,:unfreezing,]

  # GET /employees
  # GET /employees.json
  def index
    @employees = Employee.all
  end

  # GET /employees/1
  # GET /employees/1.json
  def show
  end

  # GET /employees/new
  def new
    @employee = Employee.new
    @employee.user =User.new
    @user = @employee.user
  end

  # GET /employees/1/edit
  def edit
  end

  # POST /employees
  # POST /employees.json
  def create
    @employee = Employee.new(employee_params)

    @employee.user.role_name='员工'
      if @employee.save
         redirect_to employees_path, notice: '员工信息已保存.'

      else
         render :new

      end

  end

  # PATCH/PUT /employees/1
  # PATCH/PUT /employees/1.json
  def update

      if @employee.update(employee_params)
        redirect_to employees_path, notice: '员工信息已保存.'

      else
        render :edit

      end

  end

  # DELETE /employees/1
  # DELETE /employees/1.json
  def destroy
    @employee.update_attribute(:delete_flag,true)
    redirect_to employees_url, notice: '员工已删除.'
  end
  def freezing
    @employee.update_attribute(:freezing_flag,true)
    redirect_to employees_url, notice: '员工已冻结'
  end

  def unfreezing
    @employee.update_attribute(:freezing_flag,false)
    redirect_to employees_url, notice: '员工已恢复'
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
      @user = @employee.user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def employee_params
      params.require(:employee).permit(:admin,user_attributes: [:name,:phone_number,:id,:email, :qq_number,
                                                                :tinypost_number, :photo,
                                                                :identify_card,])
    end


end
