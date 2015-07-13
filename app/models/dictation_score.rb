class DictationScore < ActiveRecord::Base
  belongs_to :student
  belongs_to :dictation

  def execute_date
    self.dictation.execute_date
  end



  def description

    return '(未听写)' if score.nil? || score<0
    return score
  end
end
