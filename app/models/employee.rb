class Employee < ActiveRecord::Base

  has_many :training_classes,foreign_key: 'master_teacher_id'
  #员工可能登录系统,所以有一个对应的账户
  belongs_to :user


  #定义员工信息时的Form 能够同时定义其登录账户的信息
  accepts_nested_attributes_for :user

  default_scope {where delete_flag: false}

  def name
    self.user.name
  end
end
