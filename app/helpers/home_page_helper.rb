module HomePageHelper

  def helper__html_tds_monthes_real_score(real_scores,subject_name,exam_type)
    if exam_type =='SAT'
      return '<td>'+seek_scores(real_scores,1,subject_name,exam_type).to_s+'</td>'+
            '<td>'+seek_scores(real_scores,5,subject_name,exam_type).to_s+'</td>'+
            '<td>'+seek_scores(real_scores,6,subject_name,exam_type).to_s+'</td>'+
            '<td>'+seek_scores(real_scores,10,subject_name,exam_type).to_s+'</td>'+
            '<td>'+seek_scores(real_scores,11,subject_name,exam_type).to_s+'</td>'+
            '<td>'+seek_scores(real_scores,12,subject_name,exam_type).to_s+'</td>'
    elsif exam_type=='TOEFL'
      return '<td>'+seek_scores(real_scores,1,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,2,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,3,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,4,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,5,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,6,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,7,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,8,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,9,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,10,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,11,subject_name,exam_type).to_s+'</td>'+
          '<td>'+seek_scores(real_scores,12,subject_name,exam_type).to_s+'</td>'

    end
    return ''

  end

  def seek_scores(real_scores,month,subject,exam_type)
    #从一些列real_Scores 记录(SAT)中找出指定月份的记录(只找出一条),然后返回其对应的科目分数
    v = real_scores.find{|record| record.month==month}

    return "" if v.nil?

    case subject
      when '总分'
        return v.final_score
      when 'CR'
        return v.course_a_score
      when 'Math'
        return v.course_b_score
      when 'Writing'
        if exam_type=='SAT'
          return v.course_c_score
        elsif exam_type=='TOEFL'
          return v.course_d_score
        end
        return 0
      when 'Essay'
        return v.course_d_score
      when 'Listening'
        return v.course_a_score
      when 'Speaking'
        return v.course_b_score
      when 'Reading'
        return v.course_c_score

    end
    return "--"
  end



  def helper__range_block_summary_text(range_blocks)
    #传入[0...50,50...100,100...200]  -----> 返回 ['0分~50分','50分~100分','100分~200分','200分以上']
    arr =range_blocks.map{|r|
      "#{r.begin}分~#{r.end}分"
    }
    r = range_blocks.last
    arr<<  "#{r.end}分以上"
    return arr
  end

  def helper__sort_students_by_score(stu_list,hash_stu_scores,subject_name)
    #hash_stu_scores:  { stu1=>{math:100,CR:200,essay:300},stu2=>{math:10,CR:20,essay:30}}
    datas = {}
    #datas hash 表用于存储 学生姓名(key),对应科目分数(value)-->
    stu_list.each do |stu|
      datas.store( stu.name, hash_stu_scores[stu].fetch(subject_name) )

    end

    arr = datas.sort_by{|k,v| v}.reverse

    return arr.to_h
  end


  def helper__summary_value_in_which_range(value,range_blocks)
    #描述指定值在哪个范围内
    #range_blocks = [0...50,50...100,100...150,150...200]
    #根据传入的值value,返回值所在区间的描诉
    range_blocks.each{|r|
      if r.include?(value)
        return "#{r.begin}分~#{r.end}分"
      end
    }

    if  value < 0
      r = range_blocks[0]
      return "#{r.begin}分~#{r.end}分"
    end

    r =range_blocks.last
    if value >= r.end
      return "#{r.end}分以上"
    end
  end



end
