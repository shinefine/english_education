module RealScoresHelper



  def summary_scores_trend(real_scores,subject)
    #统计分数趋势
    subject_scores=[0]
    case subject
      when '总分'
        subject_scores = real_scores.map{|r|r.final_score}

      when 'Reading'
        subject_scores = real_scores.map{|r|r.course_a_score}
      when 'Math'
        subject_scores = real_scores.map{|r|r.course_b_score}
      when 'Grammar'
        subject_scores = real_scores.map{|r|r.course_c_score}
      when 'Writing'
        subject_scores = real_scores.map{|r|r.course_d_score}
    end
    subject_max_score =subject_scores.max
    subject_min_score =subject_scores.min


    trend = subject_max_score - subject_min_score

    if(trend>200)
      return '200分以上'
    end

    if(trend>150)
      return '150分~200分'
    end

    if(trend>100)
      return '100分~150分'
    end

    if(trend>50)
      return '50分~100分'
    end


    return '0分~50分'

  end

  def real_scores_objects_for_nvd3_chart(student,exam_type)
    return_2D_arr =[]

      if exam_type =='SAT'
        real_score_entry = student.real_scores.sat.entry.first
        real_score_target = student.real_scores.sat.target.first
        scores= student.real_scores.sat.true_real
      elsif exam_type=='TOEFL'
        real_score_entry = student.real_scores.toefl.entry.first
        real_score_target = student.real_scores.toefl.target.first
        scores= student.real_scores.toefl.true_real
      end

      #插入入口成绩
      unless real_score_entry.nil?
        total_score =real_score_entry.total_score(exam_type)
        return_2D_arr << ["入口成绩(#{total_score})",real_score_entry]
      end

      #插入期望成绩
      unless real_score_target.nil?
        total_score =real_score_target.total_score(exam_type)
        return_2D_arr << ["最终期望成绩(#{total_score})",real_score_target]
      end

      #插入真实考试成绩
      scores.each_with_index do |score,i |
        total_score = score.total_score(exam_type)
        return_2D_arr<<  ["#{score.year}年#{score.month}月(#{total_score})",score]
      end

      return return_2D_arr
  end


end
