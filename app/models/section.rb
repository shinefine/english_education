class Section < ActiveRecord::Base
  belongs_to :test_paper,:counter_cache => true
  has_many :questions
  accepts_nested_attributes_for :questions  ,:reject_if => lambda { |a| a[:index_number].blank? },
                                allow_destroy: true



end
