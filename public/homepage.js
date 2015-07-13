$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'user_name',
          rules: [
            {
              type   : 'empty',
              prompt : '请输入账户名'
            }
          ]
        },

        password:{
            identifier:'password',
            rules:[
                {
                    type:'empty',
                    prompt:'请输入密码'
                }
            ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.login_popup')
        .popup({
            inline   : true,
            hoverable: true,
            position : 'bottom right',
            delay: {
                show: 300,
                hide: 800
            }
        });


//    $('.ui.form')
//      .form(validationRules, {
//        on: 'blur'
//      })
//    ;


        $('.shapechange').on('click',function(){
            alert('change');
            //$('.shape').shape('flip up');
        });

       var onFormSubmitted= function (response) {
            // Do something with response ...
           $('.login.error.message').text(response.message).show();

           if(response.login == 'success')
           {
               window.location= response.jump_url;
           }

        }

        //表单验证成功后调用的函数
        var ajaxSubmitForm =function(){
            var formData =   $('#login_form').serialize();

            $.ajax({ type: 'POST', url: '/session/create.json', data: formData, success: onFormSubmitted });

        };

        //设置表单验证行为
        $('.ui.form').form(validationRules, { onSuccess: ajaxSubmitForm });



    $('.masthead .information')
      .transition('scale in', 1000)
    ;

    setInterval(changeSides, 3000);

  })
;