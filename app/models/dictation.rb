class Dictation < ActiveRecord::Base
  belongs_to :training_class  #属于某个培训班

  has_many :dictation_scores, dependent: :delete_all
  accepts_nested_attributes_for :dictation_scores  ,
                                allow_destroy: true


  default_scope {order('execute_date DESC')}

end
