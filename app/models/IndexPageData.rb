#定义了一些在homePage 页面使用的数据 index
#"./demo_files/bookshop-managers-360x224.jpg"
#idea-360x224.jpg
#course-investment-360x224.jpg
#course-business-360x224.jpg
#course-social-360x224.jpg
#girl-with-computer-360x224.jpg
#new-business-owner-360x224.jpg
#students-recommend-360x224
class HomePageData
  def self.all_courses
    courses_categoryCode2hash.values.map{|hash| hash.values}.flatten
  end

  def self.coursePic_imagecode2url
    {
        1=>'gear-to-success-360x224.jpg',
        2=>'idea-360x224.jpg',
        3=>'course-investment-360x224.jpg',
        4=>'students-recommend-360x224.jpg',
        5=>'idea-360x224.jpg',
    }
  end


  def self.lecturers
    #返回讲师集合
    lecturers ={
        1=>{
            id:1,
            name:'Brandon Cooper',
            img:'lecturer-brandon-150x150.jpg',
            description:'北京新东方优能中学高中英语词汇教师，洞悉近十年全国重点省市高考题及模拟题，了解学生需要，针对学生薄弱点对症下药。注重培养学生的发散性思维及英语能力的全面提高，培养学生扎实打好词汇基础，并在此基础上提升学生对英语的兴趣以及掌握一门语言的使用能力。'

        },
        2=>{
            id:2,
            name:'Jamie Smith',
            img:'lecturer-jamie-150x150.jpg',
            description:'从事多年的英语教学，具有丰富的教学经验，在实践中逐步形成　自己的风格。根据学生年龄、层次设计不同的教学方案，简洁明快，课堂教学生动活泼，充分调动学生的积极性和主动性。'
        },
        3=>{
            id:3,
            name:'Sharon Lawrence',
            img:'lecturer-sharon-150x150.jpg',
            description:'授课风格清新自然，热情洋溢，有亲和力，幽默风趣但不失严谨。对待学生认真负责。主讲词汇，善于总结记忆单词的方法，提炼考试技巧，将零散的词汇构建成体系。'
        },
        4=>{
            id:4,
            name:'Susan Whatsons',
            img:'lecturer-susan-150x150.jpg',
            description:'良好的语言天赋，深厚的语言功底，加之瑞士的游学及工作经历，使其深谙法语国家文化。爱通俗也爱典雅，爱天文地理也爱八卦奇闻。她的授课风格条理清晰，重点突出，化繁为简，生动有趣。'
        },
    }
    return lecturers
  end

  def self.courseCategory_code2name
    {
        'ALL'=> '全部课程',
        'TOEFL_IELTS_BASIC'=>'托福雅思基础课程',
        'TOEFL_IELTS_PLUS'=>'托福雅思强化冲刺课程',
        'TPO_EXERCISES'=>'TPO真题模考实战',
        'SAT'=>'SAT课程',
        'SSAT'=>'SSAT课程',
    }

  end

  def self.course_code2description
    #课程的 介绍信息
    {
        'TOEFL_IELTS_BASIC'=>'1.      基础课程也是名师团队授课，三年以上教学经验，学生口碑度100%
2.      独创全主课+辅课方式教学，学习和消化当日完成，不造成知识带帐
3.      免费提供课程辅导自习室，课后有辅课老师监督，班主任每周反馈学习情况
4.      留学培训整体规划，免费入学测试，根据孩子学习情况及时调整课程安排，让孩子达到理想成绩
5.      班主任全程跟进孩子的学习状态和状况，及时沟通疏导，让孩子在学校有积极的学习心态',

        'TOEFL_IELTS_PLUS'=>'1.      金牌名师分类教学，根据最新考试形势每周教学研讨，有4年以上教学经验或海外学习生活经历，学生口碑度100%
2.      主课+辅课教学，家长省钱省心，辅课老师课后辅导作业完成，抽背单词，每周定时汇报学生在学校的情况
3.      报名前测试，制定个性化的教学方案，课程中，根据孩子的情况，及时调整教学进度和难度，让孩子最大化吸收
4.      班主任全程跟进孩子的学习状态和状况，及时沟通疏导，让孩子在学校有积极的学习心态',

        'TPO_EXERCISES'=>'实时真题模拟演练，让孩子在考试前快速适应考试难度，新题思路，查漏补缺，把控时间
上课时间：一周（5天）',

        'SAT'=>'1.      名师教学团队每周教学研讨，5年以上教学经验，根据最新的考试方向和学生学习状况，安排教学进度和课程难度，保证教学提分
2.      主课+辅课的学习模式，避免了学生在家无人看管的状态，课后更有辅课老师免费辅导作业和抽查词汇
3.      考前真题模拟，清扫学习知识盲点，查漏补缺，把控时间，让真正考试的时候得心应手
4.      班主任老师每周跟进学生状况，及时反馈家长，让家长省钱省心
5.      免费考试代报，作文修改，一条龙服务',

        'SSAT'=>'1.      成都市一流师资，拥有3年以上教学经验，熟悉低龄教学管理和心理辅导，避免了孩子年龄小，自觉性不强的特点
2.      主课+辅课的学习模式，避免了学生在家无人看管的状态，课后更有辅课老师免费辅导作业和抽查词汇
3.      班主任老师每周跟进学生状况，及时反馈家长，让家长省钱省心，跟孩子分享心得，让孩子快乐学习
4.      报名前测试，制定个性化的教学方案，课程中，根据孩子的情况，及时调整教学进度和难度，让孩子最大化吸收'

    }
  end
  def self.courses_categoryCode2hash
    {
        'TOEFL_IELTS_BASIC'=>{
            1=>{
                id:1,
                image_code:1,
                name: '托福听力班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'8+4次课/16小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            2=>{
                id:2,
                image_code:1,
                name: '托福阅读班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+3次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            3=>{
                id:3,
                image_code:1,
                name: '托福口语班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+3次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            4=>{
                id:4,
                image_code:1,
                name: '托福写作班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+4次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            5=>{
                id:5,
                image_code:1,
                name: '雅思听力班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+3次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            6=>{
                id:6,
                image_code:1,
                name: '雅思阅读班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+3次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            7=>{
                id:7,
                image_code:1,
                name: '雅思口语班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+3次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            8=>{
                id:8,
                image_code:1,
                name: '雅思写作班',
                category_code:'TOEFL_IELTS_BASIC',
                teacherID: 1,
                time_length:'6+4次课/12小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
        },
        'TOEFL_IELTS_PLUS'=>{
            9=>{
                id:9,
                image_code:2,
                name: '托福听力班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'10+5次课/20小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            10=>{
                id:10,
                image_code:2,
                name: '托福阅读班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'8+4次课/16小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            11=>{
                id:11,
                image_code:2,
                name: '托福口语班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'7+5次课/24小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            12=>{
                id:12,
                image_code:2,
                name: '托福写作班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'7+4次课/22小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            13=>{
                id:13,
                image_code:2,
                name: '雅思听力班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'10+5次课/20小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            14=>{
                id:14,
                image_code:2,
                name: '雅思阅读班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'8+4次课/16小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            15=>{
                id:15,
                image_code:2,
                name: '雅思口语班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'7+5次课/24小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            16=>{
                id:16,
                image_code:2,
                name: '雅思写作班',
                category_code:'TOEFL_IELTS_PLUS',
                teacherID: 1,
                time_length:'7+4次课/22小时',
                difficulty:'初级',
                rank:'强化',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
        },
        'SAT'=>{
            21=>{
                id:21,
                image_code:1,name: 'SAT词汇',
                category_code:'SAT',
                teacherID: 1,
                time_length:'10次课/20小时',
                difficulty:'中级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            22=>{
                id:22,
                image_code:1,name: 'SAT阅读',
                category_code:'SAT',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            23=>{
                id:23,
                image_code:1,name: 'SAT语法',
                category_code:'SAT',
                teacherID: 1,
                time_length:'10次课/20小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            24=>{
                id:24,
                image_code:1,name: 'SAT写作',
                category_code:'SAT',
                teacherID: 1,
                time_length:'8次课/16小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            25=>{
                id:25,
                image_code:1,name: 'SAT数学',
                category_code:'SAT',
                teacherID: 1,
                time_length:'2次课/4小时',
                difficulty:'初级',
                rank:'基础',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },

        },
        'SSAT'=>{
            31=>{
                id:31,
                image_code:4,
                name: 'SSAT词汇',
                category_code:'SAT',
                teacherID: 1,
                time_length:'10次课/20小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            32=>{
                id:32,
                image_code:4,
                name: 'SSAT阅读',
                category_code:'SSAT',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'初级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            33=>{
                id:33,
                image_code:4,
                name: 'SSAT语法',
                category_code:'SSAT',
                teacherID: 1,
                time_length:'10次课/20小时',
                difficulty:'初级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            34=>{
                id:34,
                image_code:4,
                name: 'SSAT写作',
                category_code:'SSAT',
                teacherID: 1,
                time_length:'8次课/16小时',
                difficulty:'初级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            35=>{
                id:35,
                image_code:4,
                name: 'SSAT数学',
                category_code:'SSAT',
                teacherID: 1,
                time_length:'6次课/12小时',
                difficulty:'初级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },

        },

    }
  end
end