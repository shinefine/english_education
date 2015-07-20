module RealScoresHelper

  def summary_scores_trend(real_scores,subject)
    #本方法用于统计学员某个子科目的历次考试成绩综合的 分数进步趋势

    #科目名称 => 科目分数值在数据库中对应的字段名称
    h_method_names={
        '总分'=>'final_score',
        'Reading'=>'course_a_score',
        'Math'=>'course_b_score',
        'Grammar'=>'course_c_score',
        'Writing'=>'course_d_score',
    }
    #某个子科目的历次考试成绩
    subject_history_scores = real_scores.map{|r|r.send(h_method_names[subject])}
    #进步幅度
    trend =subject_history_scores.max - subject_history_scores.min
    #定义出成绩进步区间
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

    h_func_names={'SAT'=>'sat','TOEFL'=>'toefl'}
    if (h_func_names.has_key? exam_type.upcase)
      exam_obj = student.real_scores.send(h_func_names[exam_type.upcase])

      real_score_entry = exam_obj.entry.first
      real_score_target = exam_obj.target.first
      scores = exam_obj.true_real
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
