module ScoresHelper



  def can_view_subject(subject_name,training_class,user)
    #判断某个用户是否有权限看到某科目的(成绩,作业等)信息
    return true unless user.teacher?

    return user.teacher.subjects.where(training_class_id: training_class.id).any? do |subject|
       subject.name ==subject_name
    end
  end

  def wrap_scores_for_nvd3_chart(scores_2d_arr,training_class,current_user)
    return_arr=[]
    cr_scores = []
    math_scores = []
    writing_scores=[]
    listen_scores = []
    talk_scores = []
    read_scores = []

    exam_type =training_class.exam_type

    scores_2d_arr.each do |arr_element|
        key_str=arr_element[0]
        value_score= arr_element[1]
        if exam_type =='SAT'
            cr_scores      << {x:key_str,y:value_score.course_a_score}
            math_scores    << {x:key_str,y:value_score.course_b_score}
            writing_scores << {x:key_str,y:value_score.course_c_score}
        elsif exam_type == 'TOEFL'
           listen_scores   << {x:key_str,y:value_score.course_a_score}
           talk_scores     << {x:key_str,y:value_score.course_b_score}
           read_scores     << {x:key_str,y:value_score.course_c_score}
           writing_scores  << {x:key_str,y:value_score.course_d_score}
        end
      end

    if exam_type =='SAT'
      return_arr << {key:'CR',values:cr_scores}  if can_view_subject('CR',training_class,current_user)
      return_arr << {key:'Math',values:math_scores}  if can_view_subject('Marh',training_class,current_user)
      return_arr << {key:'Writing',values:writing_scores}  if can_view_subject('Grammar',training_class,current_user)


    elsif exam_type == 'TOEFL'
      return_arr << {key:'Listening',values:listen_scores}  if can_view_subject('Listening',training_class,current_user)

      return_arr << {key:'Speaking',values:talk_scores}  if can_view_subject('Speaking',training_class,current_user)

      return_arr << {key:'Reading',values:read_scores}  if can_view_subject('Reading',training_class,current_user)

      return_arr << {key:'Writing',values:writing_scores}  if can_view_subject('Writing',training_class,current_user)

    end

    return return_arr

  end

  def all_student_simulate_scores_in_one_examation(exam_type,scores)
    return_2D_arr =[]
    #插入模考成绩
    scores.each do |score|
      total_score = score.total_score(exam_type)
      return_2D_arr<<  ["#{score.student.name}(#{total_score})",score]
    end

    return return_2D_arr

  end
  def student_simulate_scores_in_a_training_class(student,training_class,exam_type)
    return_2D_arr =[]
    #学员所属培训班的模考成绩
    scores= student.scores.joins(:examination).where(examinations:{training_class_id:training_class})

    if exam_type =='SAT'
      real_score_entry = student.real_scores.sat.entry.first
      real_score_target = student.real_scores.sat.target.first
    elsif exam_type=='TOEFL'
      real_score_entry = student.real_scores.toefl.entry.first
      real_score_target = student.real_scores.toefl.target.first
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


    #插入模考成绩

    scores.each_with_index do |score,i |


      total_score = score.total_score(exam_type)
      return_2D_arr<<  ["模考#{i + 1 }(#{total_score})",score]
    end



    #数量不够,补足一些空数据(为了报表的好看性)
    num = 15-(return_2D_arr.count)
    simulate_scores_count= scores.count

    if num>0
      num.times{|i|
        temp_score=Score.new({course_a_score:0,course_b_score:0,course_c_score:0,course_d_score:0})
        return_2D_arr<<  ["模考#{simulate_scores_count + 1 + i }",temp_score]
      }
    end
    return return_2D_arr

  end




  def scores_objects_for_nvd3_chart(student,z_training_class)
    objs =[]

    scores= student.scores.joins(:examination).where(examinations:{training_class_id:z_training_class})
    scores_count =scores.count

    if z_training_class.exam_type =='SAT'
      cr_scores = []
      math_scores = []
      grammar_scores = []
      #插入入口成绩
      real_score = student.real_scores.sat.entry.first
      unless real_score.nil?
        total_score = real_score.course_a_score + real_score.course_b_score+ real_score.course_c_score
        cr_scores<<{x:"入口成绩(#{total_score})",y:real_score.course_a_score}
        math_scores<<{x:"入口成绩(#{total_score})",y:real_score.course_b_score}
        grammar_scores<<{x:"入口成绩(#{total_score})",y:real_score.course_c_score}

      end

      real_score = student.real_scores.sat.target.first
      unless real_score.nil?

        total_score = real_score.course_a_score + real_score.course_b_score+ real_score.course_c_score


        cr_scores<<{x:"最终期望成绩(#{total_score})",y:real_score.course_a_score}
        math_scores<<{x:"最终期望成绩(#{total_score})",y:real_score.course_b_score}
        grammar_scores<<{x:"最终期望成绩(#{total_score})",y:real_score.course_c_score}

      end


      fix_num = cr_scores.count #fix_num值为入口成绩和目标成绩的数量

      #插入模考成绩
      scores.each_with_index do |score,i |
        total_score = score.course_a_score + score.course_b_score+ score.course_c_score


        cr_scores<<  {x:"模考#{i + 1 }(#{total_score})",y: score.course_a_score}
        math_scores<<  {x:"模考#{i + 1}(#{total_score})",y: score.course_b_score}
        grammar_scores<<  {x:"模考#{i + 1}(#{total_score})",y: score.course_c_score}
      end



      #插入更多未考的模考成绩
      num = 15-(scores_count+fix_num)
      if num>0
        num.times{|i|
        cr_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
        math_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
        grammar_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
        }
      end

      objs=[{key:'阅读',values:cr_scores},{key:'数学',values:math_scores},{key:'语法',values:grammar_scores}]



    elsif z_training_class.exam_type =='TOEFL'

      listen_scores = []
      talk_scores = []
      read_scores = []
      writing_scores=[]

      real_score = student.real_scores.toefl.entry.first
      unless real_score.nil?
        listen_scores<<{x:'入口成绩',y:real_score.course_a_score}
        talk_scores<<{x:'入口成绩',y:real_score.course_b_score}
        read_scores<<{x:'入口成绩',y:real_score.course_c_score}
        writing_scores<<{x:'入口成绩',y:real_score.course_d_score}
      end
      #插入入口成绩
      real_score = student.real_scores.toefl.target.first
      unless real_score.nil?
        listen_scores<<{x:'最终期望成绩',y:real_score.course_a_score}
        talk_scores<<{x:'最终期望成绩',y:real_score.course_b_score}
        read_scores<<{x:'最终期望成绩',y:real_score.course_c_score}
        writing_scores<<{x:'最终期望成绩',y:real_score.course_d_score}

      end

      #插入目标成绩 理想目标和某月目标的值
      #...
      #...

      fix_num = listen_scores.count #fix_num值为入口成绩和目标成绩的数量

      #插入模考成绩
      scores.each_with_index do |score,i |
        listen_scores<<  {x:"模考#{i + 1 }",y: score.course_a_score}
        talk_scores<<  {x:"模考#{i + 1}",y: score.course_b_score}

        read_scores<<  {x:"模考#{i + 1}",y: score.course_c_score}
        writing_scores<<  {x:"模考#{i + 1}",y: score.course_d_score}
      end


      num = 15-(scores_count+fix_num)
      if num>0
        num.times{|i|
          listen_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
          talk_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
          read_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
          writing_scores<<{x:"模考#{scores_count + 1 + i }",y:0}
        }
      end

      objs=[{key:'听力',values:listen_scores},{key:'口语',values:talk_scores},{key:'阅读',values:read_scores},{key:'写作',values:writing_scores}]
    end
    return objs
  end

end
