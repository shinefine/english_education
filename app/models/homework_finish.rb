class HomeworkFinish < ActiveRecord::Base
#  作业
  belongs_to :homework#作业由讲师布置，讲师只能看到他布置的作业的完成情况

  belongs_to :student #作业属于某个培训班级。


end
