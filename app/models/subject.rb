class Subject < ActiveRecord::Base
  #课程信息  用于描述培训班的相关科目的讲师
  belongs_to :teacher
  belongs_to :training_class
end
