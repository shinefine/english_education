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
  #教学报告
  def self.report1
    {
        '生物学术'=>

    '学生是**中学初三学生，去美国读高中，衔接生物9年级的基础课程，学生在中国学过生物，但是学生学的生物的方向和美国高中学习的方向不同，所以需要让学生在出国前学习相关的学术内容。学生在新的生物学术前，兴趣很高，学习很主动',

    '生物语言'=>
    '但对于生词而言学生生物词汇量很低，很多单词都需要大量背记用，所以我们为学生提供了生物词汇学习课后辅导，学生每天来我睿希国际学习，主课时间是2小时，接下来就是进入辅导模式，学生需要记当天老师要求背诵的单词，同时完成老师布置的作业，预习第二天需要学习的课程内容，一步一步的了解美国高中生物课程学习的情况。',



    '词汇'=>
    '学生不仅生物词汇量不够，针对托福语言考试的词汇也不够，为了学生全面提高，我们额外帮主学生规划托福单词的背诵及听写，学生8月中旬出国留学，争取在此之前打好底子。',


    '基础考核'=>
    '每天老师都会对学生的学习状态进行考核，从学生的学习态度到学习的完成情况进行考核，目前aidi的基础学习考核达到95分（100分满分），希望aidi继续保持下去。',

    }
  end

  def self.report2
    {
    '辅导词汇情况'=>
    '每天下午15:30进行词汇听写，听写分为三个阶段，1：学科类生词听写。2：托福词汇听写。3：应用造句（学以致用，减少单词遗忘率）。学生每天听写1个list，巩固1个list。正确率达到95%才算合格，否则重新听写。',

    '辅导练题情况'=>
    '根据aidi的具体情况，结合美国高中生物学习要求，对学生进行量身制定学习内容，学生逐步的熟练掌握了生物的专有词汇，美国高中生物是从生态系统开始学习的，学生需要完成课后各种作业，达到衔接课程的学习目标。',
    '学生自习情况'=>
    '我们一直认为授人与鱼不如授人以渔，先为学生安排自习计划，接下来学生根据自习计划进一步进行详细具体的自习内容安排，让学生逐步进入能自己学习的状态。学生自习情况检查：通过词测，练习题，写相关的essay等方式，学生自习情况良好，需要再帮学生高效利用时间。',
    }
  end

  def self.school_features
    {
        '独创的课程体系'=>
    '行业首创主课（技能端）与辅课（吸收端）相结合的课程体系，使学员学习效能最大化，分阶段，分科目，分学生个体情况有针对性的进行专项训练，让学生学到知识，提高能力，系统科学的达到教学目标。',

    '进阶式的学习过程'=>
    '入学前进行科学合理的入学测评考试，根据学生的具体情况匹配合适的阶段，为学生量身打造学习计划额复习巩固集合。在该学生进行阶段测试，任课老师根据学生测试情况适当调整授课重点，以便取得最佳的教学效果，和学生共同达到学习目标。如此以进阶式的学习过程，快速帮学生提升分数，将学习一站到底。',

    '完整的课下辅助体验'=>
    '针对学生具体情况，提供多达100多小时的课下辅助教学体验，通过网络联系，手机软件等方式提供线上联系，视频辅导等形式，丰富多元的辅课模块帮助学生将课堂知识巩固吸收，成功消化，最大化保证学习效果。',

    '完善的教学服务'=>
    '睿希国际打造精英品牌，专做一对一VIP高端私人订制课程，针对每个学员的独特性，我们至少配置4名优秀的教师进行量身打造，同时配备1位专业的学习规划师，专为学生规划定制学习时间，并监督学生的完成情况，1位专业的学习心里辅导老师，帮学生在学习的各个阶段攻克心理难关。通过这些全新的服务方式为每一位学员提供全方位，精细化，个性化的教学服务。',

    '优质的教材资源'=>
    '根据学生具体情况提供与学生程度匹配的教材，我们的教材分为初级，中级，高级，模拟试题及真题演练，通过分级别分科目分类型的练习，因材施教，使学生在每个阶段都能获得成功，时刻有成就感，不断激发学生的学习动力与潜能，迅速让学生进入愉快的学习模式。',

    '强大的师资队伍'=>
    '授课老师均为睿希国际优秀的教师银河业界资深名师，多为中外教育专家，海归精英。具有丰富的教学经验及备考经验，独特的教学理念及轻松的教学风格，拥有精湛娴熟的教学技巧。',

    '超乎想象的提分率'=>
    '使学生找到合适自己的学习方法，与考试技巧，快速树立信息，全面提升成绩，设定目标分数，提高考试通过率，睿希国际托福考试每月平均提分15分，雅思每月平均提分1分，主流出国留学考试提分情况，证明了睿希国际的实力与能力，希望能帮到学生达到真正达到学习目标'

    }
  end

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
        'TOEFL_IELTS_BASIC'=>'托福雅思基础课程',
        'TOEFL_IELTS_PLUS'=>'托福雅思强化冲刺课程',
        'TPO_EXERCISES'=>'TPO真题模考实战',
        'SAT'=>'SAT课程',
        'SSAT'=>'SSAT课程',
        'HIGHSCHOOL_LINK'=>'美高衔接课程',
    }

  end

  def self.course_code2descriptionB
    {
        'TOEFL_IELTS_BASIC'=>'适合英语水平薄弱、词汇量未达到3500的学员，
    雅思分数体现在3.5，托福分数40分的初阶学习者。
    课程目标以实现学员有能力进入雅思或者托福考试备考阶段。',

        'TOEFL_IELTS_PLUS'=>'适合具备听、说、读、写基础备考能力的学员，雅思达到4-5.5分、托福达到45-65分的学习者。课程目标以实现学员有能力冲刺雅思6.0以上，托福80以上的优秀分数。',

        'TPO_EXERCISES'=>'适合完成了雅思，托福，SAT考试技巧训练，有一定基础，近期内有考试计划的学员。',

        'SAT'=>'适合托福达到75分，雅思达到6.0以上的学员，课程目标以实现学生词汇量10000以上，全面掌握SAT备考要求。',

        'SSAT'=>'适合词汇量实现3500以上的学员。课程目标以实现学员词汇量6000以上，全面掌握SSAT以及接轨美国高中的语言能力。',

        'HIGHSCHOOL_LINK'=>'适合将要去英语国家留学的低龄留学生。',



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
4.      报名前测试，制定个性化的教学方案，课程中，根据孩子的情况，及时调整教学进度和难度，让孩子最大化吸收',


        'HIGHSCHOOL_LINK'=>'1.帮助小留学生在出国前缩小中美文化差距，提前适应美国高中生活。
2. 减轻学生及家长的分离焦虑，建立学生出国后学习的自信。
3. 授课老师具有海外学习经历及所授课程背景，拥有3年以上教学经验，熟悉低龄教学管理和心理辅导，避免了孩子年龄小，自觉性不强的问题。
4.主课+辅课的学习模式，避免了学生在家无人看管的状态，课后更有辅课老师免费辅导作业和抽查词汇；
5.班主任老师每周跟进学生状况，及时反馈家长，让家长省钱省心，跟孩子分享心得，让孩子快乐学习
6报名前测试，制定个性化的教学方案，课程中，根据孩子的情况，及时调整教学进度和难
',

    }
  end

  def self.school_compareInfo
    {
        '成绩反馈'=>['学生有自己一对一的班主任，班主任每周及时跟家长沟通反馈在校学习状况，心里状态，家长放心，让孩子快乐学习',
                  '大型机构没有老师跟进孩子学习，学习完了没有任何反馈就结束。'],

        '学习和作业消化'=>['睿希的辅课模式，让孩子课余外还有老师跟进作业完成，单词听写等，让孩子可以充分吸收当天的学习内容',
                 '很多机构辅课要收费，或者辅课老师英文程度低，没有办法辅导作业和听写单词等'],

        '教学研讨频率'=>['每周教学团队定期磨课和研讨，根据最新的考试趋势，不同年龄阶段的孩子的能动性和性格特色，老师的特长，研发自己特色的教学模式和考试技能',
                 '大机构基本人多流动性大，一两个月都不研讨教学，小机构大多是兼职老师，也没有时间做教学研讨']    ,

        '教师师资'=>['主创团队超过10年留学和培训行业经验，资深教学团队业内3-5年以上教龄，很多是海外工作或学习的老师',
                 '部分为国内英文专业毕业生，教龄低于3年，师资参差不齐'],

        '教学进度和课程设置'=>['我们根据孩子的模考成绩，分阶段安排教学，在上课的过程中，老师也根据孩子听课的反应和反馈及时调整教学进度和难度',
                 '流程化模板教学，在一开始就安排全程教学计划，中途严格跟着计划走，呈现模式化'],

        '费用性价比'=>['我们的课程费用比很多大型机构低，但是老师全部是3年以上优秀教师教学，此外，除了正课外，赠送学生每日辅课，学生可以在学校有充分时间学习和消化',
                 '大机构正课收费高，没有辅课，小机构有辅课，老师不能帮助学生学习'],
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
                category_code:'SSAT',
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
        'HIGHSCHOOL_LINK'=>{
            41=>{
                id:41,
                image_code:4,
                name: '地理',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            42=>{
                id:42,
                image_code:4,
                name: '化学',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            43=>{
                id:43,
                image_code:4,
                name: '科学',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            44=>{
                id:44,
                image_code:4,
                name: '物理',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            45=>{
                id:45,
                image_code:4,
                name: '历史',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            46=>{
                id:46,
                image_code:4,
                name: '文学',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            47=>{
                id:47,
                image_code:4,
                name: '美国基础政治',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            48=>{
                id:48,
                image_code:4,
                name: '社会经济学',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            49=>{
                id:49,
                image_code:4,
                name: '生物学',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            50=>{
                id:50,
                image_code:4,
                name: '几何代数',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            51=>{
                id:51,
                image_code:4,
                name: '卫生与健康',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            52=>{
                id:52,
                image_code:4,
                name: '艺术',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },
            53=>{
                id:53,
                image_code:4,
                name: '语文',
                category_code:'HIGHSCHOOL_LINK',
                teacherID: 1,
                time_length:'12次课/24小时',
                difficulty:'中级',
                rank:'中级',
                description: '课程描诉--课程描诉--课程描诉',
                startDate: '2015-8-1'
            },



        },

    }
  end
end