class Article < ActiveRecord::Base

  has_many :students
  #acts_as_taggable_on :tags

end
