class Student < ActiveRecord::Base

  paginates_per 10


  has_many :real_scores
  #学员可以属于多个培训班(同时培训班包含多个学员)
  has_and_belongs_to_many :training_classes

  #学员可能登录系统,所以有一个对应的账户
  belongs_to :user

  belongs_to :creator ,class_name:Employee

  has_many :comments #学员有多条来自讲师的评语
  has_many :homework_finishs
  has_many :homeworks ,through: :homework_finishs #学员会完成讲师布置的多套作业

  has_and_belongs_to_many :test_papers  #学员做过的考题，有多套
  has_many :scores ,foreign_key: 'student_id' #各次考试成绩

  has_many :student_attendances
  has_many :dictation_scores

  #定义学员信息时的Form 能够同时定义其登录账户的信息
  accepts_nested_attributes_for :user


  accepts_nested_attributes_for :real_scores,:reject_if => lambda { |a| a[:final_score].blank? },
                                allow_destroy: true


  default_scope {where delete_flag: false}




  attr_accessor :cache_real_scores,
                :score_trend_sat_total,
                :score_trend_sat_reading,
                :score_trend_sat_math,
                :score_trend_sat_grammar,
                :score_trend_sat_writing,
                :max_real_score_sat_total,
                :max_real_score_sat_reading,
                :max_real_score_sat_math,
                :max_real_score_sat_grammar,
                :max_real_score_sat_writing

  def calculate_sat_scores_trend3(var_year)
    scores = real_scores.sat.true_real.where(year:var_year)
    scores = scores.sort_by{|r_score| r_score.year*100 +r_score.month}  #真实考试成绩按考试时间排序
    last_real_score= socres.last










  end
  def calculate_student_scores_trend(var_year,exam_type)
    #计算出学员的年度涨分情况
    #返回值(SAT情况):{score_trend_sat_total:600,score_trend_sat_reading:500, score_trend_sat_math:550,score_trend_sat_writing:560 , score_trend_sat_essay:3,
                  # max_real_score_sat_total:2400, max_real_score_sat_reading:500, max_real_score_sat_math:550,        max_real_score_sat_writing:600,    max_real_score_sat_essay:7,
                  # real_scores: scores}
    scores = real_scores.send(exam_type.downcase).true_real.where(year:var_year)

    entry_score = real_scores.send(exam_type.downcase).entry.first
    entry_score ||=RealScore.new

    subject_scores = scores.map{|r|r.final_score || 0}
    subject_max_score =subject_scores.max||0
    subject_min_score =subject_scores.min||0

    entry_total_score = entry_score.final_score || 0


    #score_trend_total = subject_max_score - subject_min_score# 涨分情况计算--实际考试的最高分减去实际考试的最低分

    score_trend_total = subject_max_score - entry_total_score# 涨分情况计算--实际考试的最高分减去入口成绩分数

    max_real_score_total = subject_max_score

    #各个科目分数情况计算

    subject_scores = scores.map{|r|r.course_a_score || 0}

    subject_max_score =subject_scores.max||0
    subject_min_score =subject_scores.min||0

    score_trend_course_a = subject_max_score - subject_min_score
    max_real_score_course_a =subject_max_score

    subject_scores = scores.map{|r|r.course_b_score || 0}

    subject_max_score =subject_scores.max||0
    subject_min_score =subject_scores.min||0

    score_trend_course_b = subject_max_score - subject_min_score
    max_real_score_course_b =subject_max_score

    subject_scores = scores.map{|r|r.course_c_score || 0}

    subject_max_score =subject_scores.max||0
    subject_min_score =subject_scores.min||0

    score_trend_course_c = subject_max_score - subject_min_score
    max_real_score_course_c =subject_max_score

    subject_scores = scores.map{|r|r.course_d_score || 0}

    subject_max_score =subject_scores.max||0
    subject_min_score =subject_scores.min||0

    score_trend_course_d = subject_max_score - subject_min_score
    max_real_score_course_d =subject_max_score

    if exam_type=='SAT'
    return {
        score_trend_sat_total:score_trend_total,
         score_trend_sat_reading:score_trend_course_a,
         score_trend_sat_math:score_trend_course_b,
         score_trend_sat_writing:score_trend_course_c,
         score_trend_sat_essay:score_trend_course_d,

         max_real_score_sat_total:max_real_score_total,
         max_real_score_sat_reading:max_real_score_course_a,
         max_real_score_sat_math:max_real_score_course_b,
         max_real_score_sat_writing:max_real_score_course_c,
         max_real_score_sat_essay:max_real_score_course_d,

         real_scores: scores,
         entry_score: entry_score
    }
    elsif exam_type=='TOEFL'
      return {
              score_trend_toefl_total:score_trend_total,
              score_trend_toefl_listening:score_trend_course_a,
              score_trend_toefl_speaking:score_trend_course_b,
              score_trend_toefl_reading:score_trend_course_c,
              score_trend_toefl_writing:score_trend_course_d,

              max_real_score_toefl_total:max_real_score_total,
              max_real_score_toefl_listening:max_real_score_course_a,
              max_real_score_toefl_speaking:max_real_score_course_b,
              max_real_score_toefl_reading:max_real_score_course_c,
              max_real_score_toefl_writing:max_real_score_course_d,

              entry_score_toefl_total:entry_total_score,
              real_scores: scores
      }
    end
    return {}
  end



  def get_subject_max_by_subject_name(subject_name,hash_score_trend_result,exam_type)
    max = 0


    if exam_type=='SAT'
      case subject_name

        when 'Total'
          max = hash_score_trend_result[:max_real_score_sat_total]
        when 'Reading'
          max = hash_score_trend_result[:max_real_score_sat_reading]
        when 'Math'
          max = hash_score_trend_result[:max_real_score_sat_math]
        when 'Essay'
          max = hash_score_trend_result[:max_real_score_sat_essay]
        when 'Writing'
          max = hash_score_trend_result[:max_real_score_sat_writing]
      end
    elsif exam_type=='TOEFL'
      case subject_name

        when 'Total'
          max = hash_score_trend_result[:max_real_score_toefl_total]
        when 'Listening'
          max = hash_score_trend_result[:max_real_score_toefl_listening]
        when 'Speaking'
          max = hash_score_trend_result[:max_real_score_toefl_speaking]
        when 'Reading'
          max = hash_score_trend_result[:max_real_score_toefl_reading]
        when 'Writing'
          max = hash_score_trend_result[:max_real_score_toefl_writing]
      end
    end

    return max
  end


  def get_trend_result_by_subject_name(subject_name,hash_score_trend_result,exam_type)
    trend =0
    if exam_type=='SAT'
      case subject_name
        when 'Total'
          trend = hash_score_trend_result[:score_trend_sat_total]
        when 'Reading'
          trend = hash_score_trend_result[:score_trend_sat_reading]
        when 'Math'
          trend = hash_score_trend_result[:score_trend_sat_math]

        when 'Writing'
          trend = hash_score_trend_result[:score_trend_sat_writing]
        when 'Essay'
          trend = hash_score_trend_result[:score_trend_sat_essay]
      end
    elsif exam_type=='TOEFL'
      case subject_name
        when 'Total'
          trend = hash_score_trend_result[:score_trend_toefl_total]
        when 'Listening'
          trend = hash_score_trend_result[:score_trend_toefl_listening]
        when 'Speaking'
          trend = hash_score_trend_result[:score_trend_toefl_speaking]

        when 'Reading'
          trend = hash_score_trend_result[:score_trend_toefl_reading]
        when 'Writing'
          trend = hash_score_trend_result[:score_trend_toefl_writing]
      end
    end

    return trend
  end








  def name
    self.user.name
  end





  def month_target_scores
    real_scores.month_target
  end

  def sat_month_target_scores
    real_scores.sat.month_target
  end

  def toefl_month_target_scores
    real_scores.toefl.month_target
  end

  def entry_and_target_scores
    real_scores.entry_and_target
  end


  def summary_dictation_text(training_class)
    return training_class.student_dictation_summary(self)
  end

  def dictation_score_pass?(score,pass_line)
    #计算某次听写成绩是否及格
    if score && pass_line
        return score < pass_line
    end
    return false
  end
end
