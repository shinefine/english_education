class ScoreDetail < ActiveRecord::Base
  belongs_to :score
  belongs_to :question

  def question_index_number
    self.question.index_number
  end
end
