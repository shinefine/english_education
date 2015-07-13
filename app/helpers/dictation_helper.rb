module DictationHelper
  def helper__summary_dictation_text(dictation)
    #返回所有学员听写情况的简要说明文字


    passline= dictation.passing_line || 0

    pass_count = 0
    not_pass_count = 0
    no_score_count = 0


    block_text = dictation.dictation_scores.map{|dict_score|
      __score= dict_score.score || -1
      stu_name_and_dict_score =dict_score.student.name + "(#{__score})"

      if __score > passline#听写不合格的学员
        not_pass_count+=1

        '<label class="ui red label">' +
            stu_name_and_dict_score +
            '</label>'
      elsif __score < 0  #没有听写成绩(未听写)的学员
        no_score_count+=1
        '<label class="ui blue label">' +
            dict_score.student.name + "(未听写)" +
            '</label>'
      else #听写合格的学员
        pass_count+=1
        '<label class="ui green label">' +
            stu_name_and_dict_score +
            '</label>'
      end


    }.join('<br><br>')




    #生成描述字符串
    return [" 及格#{pass_count}人.不及格#{not_pass_count}人.未听写#{no_score_count}人",block_text]
  end


  def helper__css_color_style_dictation_score(dictation_score)
    score = dictation_score.score || -1
    if (score >= dictation_score.dictation.passing_line)
      return 'lightred'
    elsif(score>=0)
      return 'lightgreen'
    else
      return 'lightblue'
    end
    return ''
  end
end