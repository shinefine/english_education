class Teacher < ActiveRecord::Base
  #讲师可以教多门科目课程从而属于多个培训班(同时培训班包含多个讲师)
  has_many :subjects
  has_many :training_classes ,through: :subjects


  has_many :homeworks  #讲师会布置多套作业，学员会完成多套作业


  #讲师可能登录系统,所以有一个对应的账户
  belongs_to :user

  #定义讲师信息时的Form 能够同时定义其登录账户的信息
  accepts_nested_attributes_for :user
  default_scope {where delete_flag: false}


  def name
    self.user.name
  end

  def is_teach_subject?(training_class,subject_name)
    #判断讲师是否讲授指定培训班的某个科目,参数 training_class 培训班对象, subject_name 符号对象 :sat_cr / :sat_math / :toefl_listen
    return training_class.subject_teachers(subject_name).any?{|teacher| teacher.id == self.id}
  end


end