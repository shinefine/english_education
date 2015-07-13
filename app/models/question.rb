class Question < ActiveRecord::Base
  belongs_to :section,:counter_cache => true

end
