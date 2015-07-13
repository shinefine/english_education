class Attendance < ActiveRecord::Base
  belongs_to :training_class  #属于某个培训班
  has_many :student_attendances  ,dependent: :delete_all
  accepts_nested_attributes_for :student_attendances  ,
                                allow_destroy: true


  default_scope {order('attendance_date DESC')}



end
