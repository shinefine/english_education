class Examination < ActiveRecord::Base
  #模拟考试
  belongs_to :training_class  #属于某个培训班
  belongs_to :test_paper  #属于（对应）某个试卷

  has_many :scores #一次模拟考有多个考试成绩，（每个成绩对应不同学员）

  validates :test_paper_id,presence: true
  validates :name,presence: true



end
