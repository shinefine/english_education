FactoryGirl.define do
  factory :user do
    name "Jone"
    phone_number "13500099933"
    #sequence(:email) {|n| "emailaddr#{n}@example.com"}
  end

end