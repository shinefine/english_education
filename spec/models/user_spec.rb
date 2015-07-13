require 'spec_helper'
#用户 User 模型对象

describe "用户 User 模型对象" do
 before { @user=User.new }
 subject { @user }

 describe '应该有这些属性' do


   it { should respond_to :created_at } #时间戳
   it { should respond_to :updated_at } #时间戳


   it { should respond_to(:name) } #名字
   it { should respond_to(:email) } # 电子邮件地址

   it { should respond_to(:phone_number) } #手机号码
   it { should respond_to(:qq_number) } #qq号码
   it { should respond_to(:tinypost_number) } #微信号码
   it { should respond_to(:identify_card) } #身份证

   it { should respond_to(:password) } #密码
   it { should respond_to(:role_name) } #角色名


 end


 it "若提供姓名和手机号,则是有效的" do
    expect(build(:user)).to be_valid
 end

 it "若没有提供姓名,则是无效的" do
   user =build(:user,name:nil)
   user.valid?
   expect(user.errors[:name].size).to eq(1)
 end

 it "若没有提供手机号,则是无效的" do
   user =build(:user,phone_number:nil)
   user.valid?
   expect(user.errors[:phone_number].size).to eq(1)


 end

end