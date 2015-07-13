# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
33.times {|i|
  TestPaper.create ([{name:"TPO_#{i + 1}",exam_type:'TOEFL' }])
}
35.times {|i|
  TestPaper.create ([{name:"SAT_2013年_试卷#{i + 1}",exam_type:'SAT' }])
}


5.times {|i|
  TextBook.create ([{name:"SAT教材#{i + 1}",exam_type:'SAT' }])
}
5.times {|i|
  TextBook.create ([{name:"TOEFL教材#{i + 1}",exam_type:'TOEFL' }])
}

User.create([
                { name:'Admin', role_name: '管理员',phone_number:'13880246012',password:'skyfly',employee:Employee.new({admin: true})},
                { name:'张倩', role_name: '管理员',phone_number:'18008013880',password:'',employee:Employee.new({admin: true})},

                { name:'李燕', role_name: '员工',phone_number:'15828698143',password:'',employee:Employee.new},
                { name:'房颖伶', role_name: '员工',phone_number:'13540270755',password:'',employee:Employee.new},
                { name:'彭媛媛', role_name: '员工',phone_number:'18683798783',password:'',employee:Employee.new},
                { name:'李洁', role_name: '员工',phone_number:'13880957989',password:'',employee:Employee.new},

                # { name:'Tom scotte', role_name: '讲师',email:'c8888',phone_number:'1388888888',password:'',teacher: Teacher.new},
                # { name:'Jastin will', role_name: '讲师',email:'c9999',phone_number:'1388999999',password:'',teacher: Teacher.new},
                # { name:'Alex', role_name: '讲师',email:'c7777',phone_number:'1388777777',password:'',teacher: Teacher.new},
                #
                # { name:'张小白', role_name: '学员',email:'stu001',phone_number:'0001',password:'',student: Student.new({entry_score_sat: 500 , target_score_sat: 651}) },
                # { name:'余静', role_name: '学员',email:'stu002',phone_number:'0002',password:'',student: Student.new({entry_score_sat: 500 , target_score_sat: 651}) },
                # { name:'张天', role_name: '学员',email:'stu003',phone_number:'0003',password:'',student: Student.new({entry_score_sat: 520 , target_score_sat: 671}) },
                # { name:'李煜', role_name: '学员',email:'stu004',phone_number:'0004',password:'',student: Student.new({entry_score_sat: 530 , target_score_sat: 681}) },
                # { name:'齐明', role_name: '学员',email:'stu005',phone_number:'0005',password:'',student: Student.new({entry_score_sat: 540 , target_score_sat: 691}) },
                # { name:'周浩', role_name: '学员',email:'stu006',phone_number:'0006',password:'',student: Student.new({entry_score_sat: 550 , target_score_sat: 601}) }

            ])

#TrainingClass.create ([{name:'SAT培训班',exam_type:'SAT' }])




# examination 类型已取消，使用内部硬编码代替
# ExaminationType.create([{name:'SAT'},{name:'SAT_test'},{name:'托福'},
#                         {name:'托福_test'}])
#
# exam_type = ExaminationType.find_by(name:"SAT_test")
# exam_type.test_papers.create([{name:'SAT_test_paper_001'},{name:'SAT_test_paper_002'},{name:'SAT_test_paper_003'},])
