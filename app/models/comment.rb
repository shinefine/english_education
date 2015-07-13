class Comment < ActiveRecord::Base
  #评语对象  (讲师给学员写评语)
  belongs_to :training_class  #属于某个培训班
  belongs_to :student
  belongs_to :teacher

  default_scope {order('comment_date DESC')}

  #以培训班作为过滤条件
  scope :filter_by_training_class ,->(training_class) {where training_class: training_class}

  #以讲师作为过滤条件
  scope :filter_by_teacher ,->(teacher) {where teacher: teacher}
end