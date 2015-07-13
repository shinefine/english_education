class SessionController < ApplicationController
  #用户登录登出 控制器
  def create
    #用户登陆
    login_user = User.authenticate(params[:user_name], params[:password])
    login_result ={}
    #render plain: login_user
    if login_user
      session[:user_id] = login_user.id

      flash[:notice]    = {:main_msg=>"欢迎您,#{login_user.name}",:detail_msg => "#{login_user.role_name1} : #{login_user.name }已登录 (若想退出系统,请点击顶端信息栏右边的红色[登出]按钮)"}

      flash[:need_set_password] ='您还没有设置登陆密码,建议您现在就去设置密码,请点击顶端信息栏上右边的绿色[设置密码]按钮' if params[:password].blank?

      login_result['login']  ='success'
      login_result['message']='成功登录,请稍候...'
      login_result['jump_url']=training_classes_path
    else

      login_result['login']  ='false'
      login_result['message']='无效的账户或密码'
      flash[:notice]=login_result['message']
    end


    respond_to do |format|
                  format.html { if login_result['login'] == 'success'
                                  redirect_to(training_classes_path)
                                else
                                  redirect_to login_path
                                end
                              }
                  format.json{render json: login_result}

    end

  end

  #ajax 登录调用
  def login


  end

  def destroy
  #  用户登出
    session[:user_id]=nil

    redirect_to root_path
  end
end
