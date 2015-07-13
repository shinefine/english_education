class TrainingClass < ActiveRecord::Base
  belongs_to :master_teacher, class_name: :Employee  #班主任
  has_and_belongs_to_many :text_books

  #学员可以属于多个培训班(同时培训班包含多个学员)
  has_and_belongs_to_many :students



  has_many :teachers ,through: :subjects

  has_many :examinations #一个班级能有多个模拟考试(按日期)
  has_many :dictations #一个班级能有多个听写测验(按日期)
  has_many :attendances #一个班级能有多个考勤情况(按日期)
  has_many :homeworks #班级的各个课程的讲师会布置作业。





  has_many :subjects
  accepts_nested_attributes_for :subjects  ,:reject_if => lambda { |a| a[:name].blank? },
                                allow_destroy: true

  validates :exam_type,presence: true
  validates :name,presence: true
  validates :end_date,presence: true
  validates :start_date,presence: true


  #default_scope {order('start_date DESC')}

  def student_attendance(student)
    #返回指定学生的所有出勤记录(针对本培训班的)
    return student.student_attendances.where(attendance_id: self.attendance_ids )
  end


  def student_dictions(student)
    #返回指定学生的所有听写成绩(针对本培训班的)
    return student.dictation_scores.where(dictation_id: self.dictation_ids )
  end




  def student_dictation_summary(student)

    return student_dictions(student).count.to_s + "次"

  end

  def summary_text_book_names_list
    return text_books.map{|tb| tb.name}.join("\n")
  end

  def subject_teachers(subject_name)
    #传入培训班科目类型名称, 参数类似于: sat_cr / :toefl_read /:sat_essay
    #返回这个科目的讲师对象(集合)

    #映射表 将科目名 和 subject表中的name 字段的值 一一对应
    map_table ={ sat_cr:'CR',
                 sat_math:'Math',
                 sat_grammar:'Grammar',
                 sat_essay:'Essay',
                 toefl_read:'Reading',
                 toefl_listen:'Listening',
                 toefl_write:'Writing',
                 toefl_talk:'Speaking'
    }

    field_value =map_table[subject_name]

    self.subjects.where(name:field_value).map{|sub| sub.teacher}


  end




end
