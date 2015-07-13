module BaseScore

#表字段和考试科目成绩对应关系

# -----SAT-------------
#  CR总分--> :course_a_score

#  raw score (CR)-->   :stat_07

#       CR 词汇 : 正确数量-->:stat_01 ,错误数量-->:stat_02 ,空题数量--> :stat_03
#       CR 阅读 : 正确数量-->:stat_04 ,错误数量-->:stat_05 ,空题数量--> :stat_06

#  数学得分--> :course_b_score

#  raw score(math)-->  :stat_11

#       正确数量-->:stat_08 ,错误数量--> :stat_09 ,空题数量-->:stat_10

#  写作得分--> :course_c_score

#  raw score(write)-->  :stat_15
#
#      正确数量--> :stat_12 ,错误数量--> :stat_13, 空题数量-->:stat_14

#       写作 作文子项--> :stat_16

  def sat_cr_score
    course_a_score || 0
  end

  def sat_math_score
    course_b_score || 0
  end

  def sat_writing_score
    course_c_score || 0
  end

  def sat_essay_score
    course_d_score || 0
  end

  def toefl_listening_score
    course_a_score || 0
  end
  def toefl_speaking_score
    course_b_score || 0
  end
  def toefl_reading_score
    course_c_score || 0
  end
  def toefl_writing_score
    course_d_score || 0
  end

  def total_score(exam_type)
    total_score = 0
    if exam_type =='SAT'
      total_score = sat_cr_score + sat_math_score+ sat_writing_score

    elsif exam_type == 'TOEFL'
      total_score = toefl_listening_score + toefl_speaking_score+ toefl_reading_score+ toefl_writing_score
    end
    return total_score
  end

end