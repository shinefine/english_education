class RealScore < ActiveRecord::Base
  belongs_to :student

  include BaseScore
  default_scope {order('year','month')}

  scope :entry_and_target_and_month_target, ->{where(score_type:['月份目标成绩','入口成绩','最终期望成绩'])}
  scope :entry_and_target, ->{where(score_type:['入口成绩','最终期望成绩'])}
  scope :entry, ->{where(score_type:'入口成绩')}
  scope :target, ->{where(score_type:'最终期望成绩')}
  scope :month_target, ->{where(score_type:'月份目标成绩')}
  scope :true_real, ->{where(score_type:'真实考试成绩')}
  scope :sat,->{where(exam_type: 'SAT')}
  scope :toefl,->{where(exam_type: 'TOEFL')}




end


