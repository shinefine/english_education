class StudentAttendance < ActiveRecord::Base
  belongs_to :student
  belongs_to :attendance

  def atten_date
    self.attendance.attendance_date
  end





end
