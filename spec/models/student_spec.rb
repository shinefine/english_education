require 'spec_helper'
#学员 Student 模型对象

describe Student do
  before { @stu=Student.new }
  subject { @stu }

  describe '学员 Student  模型对象应该有这些属性' do

    it {should respond_to(:parent_name) }#家长名字
    it {should respond_to(:parent_tel)} #家长电话
    it {should respond_to(:school)} # 学校名称
    it {should respond_to(:school_rank)} #学校等级??

    it {should respond_to(:total_toefl_times)} #toefl 实际已考次数
    it {should respond_to(:total_sat_times)} #期望sat考试时间??
    it {should respond_to(:expect_toefl_times)} #期望toefl考试时间??

    it {should respond_to(:birth_day)} #生日
    it {should respond_to(:parent2_name)} #家长2姓名
    it {should respond_to(:parent2_tel)} #家长2电话
    it {should respond_to(:delete_flag)} #删除标识
    it {should respond_to(:freezing_flag)} #冻结标识
    it {should respond_to(:creator_id)} #学员信息创建人
    it {should respond_to(:user_id)} #学员对应的user 信息()

    it {should respond_to :created_at}
    it {should respond_to :updated_at}

  end


end