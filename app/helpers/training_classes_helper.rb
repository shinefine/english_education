module TrainingClassesHelper

  def helper_get_student_comments(student)
    comments = student.comments.filter_by_training_class(@training_class)
    comments =comments.filter_by_teacher(current_user.teacher) if current_user.teacher? #讲师只能看到他自己写的对某学员的评语. 而其它人(员工,学员)则能看到所有讲师写的评语

    return comments
  end


  def helper__summary_text_attendance_for_student_in_training_class(student,training_class)
    #生成 某个学员 所在 某个培训班 的 所有出勤情况 的摘要文本


    morning_grp=training_class.student_attendance(student).select{|stu_atten| not stu_atten.status_morning.blank?}.group_by{|stu_atten| stu_atten.status_morning}
    afternoon_grp=training_class.student_attendance(student).select{|stu_atten| not stu_atten.status_afternoon.blank?}.group_by{|stu_atten| stu_atten.status_afternoon}
    evening_grp=training_class.student_attendance(student).select{|stu_atten| not stu_atten.status_evening.blank?}.group_by{|stu_atten| stu_atten.status_evening}

    grp_result=Hash.new(0)

    ['出勤','迟到','早退','未出勤'].each{|key|
      grp_result[key] = (morning_grp[key].try(:length) || 0) +
                (afternoon_grp[key].try(:length) || 0 ) +
                (evening_grp[key].try(:length) || 0)
          }

    col= grp_result.map{|key,value|
      "#{key} #{grp_result[key]}次 "
    }
    return col.join(',')
  end

end
