module StudentsHelper
  def summary_student_joined_training_class_names_list(student)
    #生成一段文字描述,用于表示学员参加过那些培训班(显示培训班的阶段名,而非培训班级名)
    count=0

    tc_type_names=student.training_classes.map{|tc| tc.training_class_type}


    summary_toefl = TrainingClassType.toefl_types.map{|toefl_type|
      if tc_type_names.count(toefl_type) > 0
        count=count+1
        '<i class="green checkmark icon"></i><label class="ui green label">' +
            toefl_type +
            '</label>'
      else
        toefl_type
      end

    }.join("<br>")


    summary_sat = TrainingClassType.sat_types.map{|sat_type|

      if tc_type_names.count(sat_type) > 0

        count =count+1
        '<i class="green checkmark icon"></i><label class="ui green label">' + sat_type +
            '</label>'
      else

        sat_type

      end


    }.join("<br>")


    return [count, summary_toefl +"<br>"+ summary_sat]
  end
end
