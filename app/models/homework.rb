class Homework < ActiveRecord::Base
#  作业
  belongs_to :teacher#作业由讲师布置，讲师只能看到他布置的作业的完成情况

  belongs_to :training_class #作业属于某个培训班级。


  has_many :homework_finishs, dependent: :delete_all
  has_many :students,through: :homework_finishs

  accepts_nested_attributes_for :homework_finishs


end
