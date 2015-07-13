// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require chosen-jquery
//= require d3.v3
//= require nv.d3.min
//= require stream_layers
//= require articles
//= require wice_grid
//= require image_preview_before_upload
//-----ssssddd----require semantic-ui



$(function(){

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $('.message .close')
        .on('click', function() {
            $(this).closest('.message').transition('scale out');
        })
    ; //使得 消息提示条 具备 关闭 功能

    $('.ui.dropdown').dropdown();
    $('.popup_stu_score').popup();
    $('.popup_tip_button').popup();
    $('.ui.accordion')
        .accordion()
    ;
    get_score = function(course_name) {
        field_name='';
        switch (course_name) {
            case 'sat_cr_word_right':
                field_name='#score_stat_01';
                break;
            case 'sat_cr_word_wrong':
                field_name='#score_stat_02';
                break;
            case 'sat_cr_word_empty':
                field_name='#score_stat_03';
                break;
            case 'sat_cr_read_right':
                field_name='#score_stat_04';
                break;
            case 'sat_cr_read_wrong':
                field_name='#score_stat_05';
                break;
            case 'sat_cr_read_empty':
                field_name='#score_stat_06';
                break;
            case 'sat_math_right':
                field_name='#score_stat_08';
                break;
            case 'sat_math_wrong':
                field_name='#score_stat_09';
                break;
            case 'sat_math_empty':
                field_name='#score_stat_10';
                break;
            case 'sat_writting_right':
                field_name='#score_stat_12';
                break;
            case 'sat_writting_wrong':
                field_name='#score_stat_13';
                break;
            case 'sat_writting_empty':
                field_name='#score_stat_14';
                break;

        }

       var result = parseInt($(field_name).val());
        if (!result) {
            return 0;
        }
        return result;


    }


    calculate_raw_score = function(){
        //计算SAT的所有科目的raw score
        //计算cr raw score
        raw_score=Math.round(get_score('sat_cr_word_right')+get_score('sat_cr_read_right') - (get_score('sat_cr_word_wrong')+get_score('sat_cr_read_wrong'))*0.25) ;
        if (raw_score < 0)
        {
            raw_score =0;
        }
        $('#score_stat_07').val(raw_score);

        //计算math raw score
        raw_score=Math.round(get_score('sat_math_right') - get_score('sat_math_wrong')*0.25) ;
        if (raw_score < 0)
        {
            raw_score =0;
        }
        $('#score_stat_11').val(raw_score);

        //计算 writting raw score
        raw_score=Math.round(get_score('sat_writting_right')- get_score('sat_writting_wrong')*0.25) ;
        if (raw_score < 0)
        {
            raw_score =0;
        }
        $('#score_stat_15').val(raw_score);

    }
    //计算SAT考试成绩的各个科目总分
    $('.input.sat.course.score').on('input',function(){
        $('#score_final_score').val(
                parseInt($('#score_course_a_score').val())
                +parseInt($('#score_course_b_score').val())
                +parseInt($('#score_course_c_score').val())
        );

    })
    //计算toefl考试成绩的各个科目总分
    $('.input.toefl.course.score').on('input',function(){

        $('#score_final_score').val(
                parseInt($('#score_course_a_score').val())
                +parseInt($('#score_course_b_score').val())
                +parseInt($('#score_course_c_score').val())
                +parseInt($('#score_course_d_score').val())
        );

    })

    //输入SAT 某科目的错误和空题数量时,自动计算正确数量和raw score
    $('.input.sat.score').on('input',function(){
        switch (this.id)
        {
            case 'score_stat_02':
            case 'score_stat_03':
                $('#score_stat_01').val(19 - get_score('sat_cr_word_wrong')- get_score('sat_cr_word_empty'));
                calculate_raw_score();
                break;
            case 'score_stat_05':
            case 'score_stat_06':
                $('#score_stat_04').val(48 - get_score('sat_cr_read_wrong')- get_score('sat_cr_read_empty'));
                calculate_raw_score();
                break;
            case 'score_stat_09':
            case 'score_stat_10':
                $('#score_stat_08').val(54 - get_score('sat_math_wrong')- get_score('sat_math_empty'));
                calculate_raw_score();
                break;
            case 'score_stat_13':
            case 'score_stat_14':
                $('#score_stat_12').val(49 - get_score('sat_writting_wrong')- get_score('sat_writting_empty'));
                calculate_raw_score();
                break;

            case 'score_stat_01':
            case 'score_stat_04':
                //计算CR的raw score
                calculate_raw_score();

                break;
        }
    })

    $('div#login_button').on('click', function(event){
        alert("ajax submit");
//        $.ajax({
//            url: $(this).prop('action'),
//            dataType: 'json'
//        }).done(function(data) {
//            /* 本地逻辑 */
//        });

    })

    $(".login_form_link").on('click',function(){

            alert('click');
            $('.test.modal').modal('show');

        }
    );
    var func_add_nestForm_field =function(event) {

        var time = new Date().getTime();
        var regexp = new RegExp($(this).data('id'), 'g');
        $(this).before($(this).data('fields').replace(regexp, time));
        event.preventDefault();
    };
    var func_remove_nestForm_field =function(event) {
        //把_destroy设置为1，并且隐藏fieldset

        $(this).prev('input[type=hidden]').val('1');
        $(this).closest('fieldset').hide();
        event.preventDefault();
    };
     //处理点击此类型链接的事件,把data-fields的信息，插入form中


    $('form .add_nest_form_field_link')
        .on('click', func_add_nestForm_field);

    $('form')
        .on('click','.remove_nest_form_field_link',  func_remove_nestForm_field);





    var func_mouse_enter= function() {
        $(this)
            .stop()
            .animate({
                width: '155px'
            }, 300, function() {
                $(this).find('.text').show();
            })
        ;
    };
    var func_mouse_leave= function(event) {
        $(this).find('.text').hide();
        $(this)
            .stop()
            .animate({
                width: '70px'
            }, 300)
        ;
    };
    $('.attached.launch.button')
        .on('mouseenter', func_mouse_enter)
        .on('mouseleave', func_mouse_leave);

    $('#menu').sidebar('attach events', '.launch.button, .launch.item');

//    $('.left.sidebar').first().sidebar('attach events', '.toggle.button');
//    $('.toggle.button').removeClass('disabled');

});


