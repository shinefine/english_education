class AttendancesController < ApplicationController
  #考勤 控制器
  before_action :set_training_class
  before_action :set_attendance, only: [:show, :edit, :update, :destroy]

  # GET /attendances
  # GET /attendances.json
  def index

    @attendances = @training_class.attendances

    if(params[:student_id])
      @student= Student.find(params[:student_id])
      @stu_attendances =@training_class.student_attendance(@student)
      @week_dates = WeekDate.group_days(@stu_attendances,@training_class)

     # @student_attendances  =@attendances.student_attendances.where(student_id: @student)

      render "index_for_special_student"
    else
      render "index"
    end
  end

  # GET /attendances/1
  # GET /attendances/1.json
  def show
  end

  # GET /attendances/new
  def new
    @attendance = Attendance.new
    @attendance.attendance_date= Time.now
    @training_class.students.each do |stu|
      @attendance.student_attendances.build(student: stu)
    end
  end

  # GET /attendances/1/edit
  def edit
  end

  # POST /attendances
  # POST /attendances.json
  def create
    @attendance = Attendance.new(attendance_params)

    @attendance.training_class =@training_class

      if @attendance.save
        redirect_to training_class_attendances_path(@training_class), notice: 'Attendance was successfully created.'

      else
        render :new

      end

  end

  # PATCH/PUT /attendances/1
  # PATCH/PUT /attendances/1.json
  def update

    @attendance.attendance_date =params[:attendance_date]
      if @attendance.update(attendance_params)
        redirect_to training_class_attendances_path(@training_class), notice: 'Attendance was successfully updated.'

      else
        render :edit

      end

  end

  # DELETE /attendances/1
  # DELETE /attendances/1.json
  def destroy
    @attendance.destroy
    redirect_to training_class_attendances_path(@training_class), notice: 'Attendance was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attendance
      @attendance = Attendance.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def attendance_params
      params.require(:attendance).permit(:attendance_date, :explain,
                                         student_attendances_attributes:[:id,:student_id,:attendance_id,:description,:status_morning,:status_afternoon,:status_evening])
    end
end
