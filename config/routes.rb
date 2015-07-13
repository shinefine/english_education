Rails.application.routes.draw do

  root 'home_page#index'
  get 'home_page/course_list' =>'home_page#course_list',as:'courseList'
  get 'home_page/lecturer_profile' => 'home_page#lecturer_profile', as:'lecturer_profile'
  get '/login' =>'home_page#login', as: 'login'
  resources :articles do
    get 'tags/:tag', to: 'articles#index', as: :tag ,on: :collection
  end

  get 'home_page/search'
  get 'home_page/upload'
  get 'home_page/training_class_schedule'
  get 'home_page/delete_schedule'
  post 'home_page/upload'

  get 'home_page/index'
  get 'home_page/reports'
  get 'home_page/big_data_report_scores'
  post 'home_page/big_data_report_scores'

  resources :subjects

  resources :text_books

  concern :freezingable do
    patch :unfreezing, on: :member
    patch :freezing, on: :member
  end

  resources :employees , concerns: [:freezingable]


  resources :users do
    get :set_password , on: :member
  end

  resources :questions


  resources :students , concerns: [:freezingable] do
    get :search_with_trainingclass,on: :collection # 带培训班id 的学员查询,会从查询结果中过滤掉培训班中已有的学员( 培训班 Set_Students 页面专用)
    get :search , on: :collection

    resources :real_scores do
      get :index_with_all_examinations ,on: :collection #列出某个学员的 所有真实考试成绩 (统计报表)(真实考试成绩与模考不同,不与培训班挂钩)
    end
    #二留一
    get :set_real_scores ,on: :member
    get :set_entry_and_target_scores ,on: :member

    get :set_finished_test_papers ,on: :member


    resources :examinations  do #学员包含多个模拟考试
      resources :scores ,only: [:new,:create,:edit,:update]

    end

  end

  resources :examinations  do #培训班包含多个模拟考试
    resources :scores,only: :index  #列出某次特定模考 的所有学员考试成绩

    # resources :scores  do
    #   get :index_for_all_students , on: :collection
    #
    # end
  end



  # 无用 get 'students/:id/simulate_score_list'=>'students#simulate_score_list',as: 'student_simulate_score_list'

  post 'session/create'

  get 'session/destroy' ,as:'log_out'

  resources :test_papers do    #考试套题包含套题的section
    resources :sections
  end

  resources :comments,only:[:destroy]



  resources :training_classes do

    get :add_student ,on: :collection #给培训班添加一个学员,(ajax调用)
    get :remove_student ,on: :collection #给培训班添加一个学员,(ajax调用)
    get :set_students, on: :member #给培训班设置学员 页面
    resources :attendances #考勤


    resources :dictations #听写
    resources :examinations #模拟考
    resources :homeworks #作业

    resources :students do #培训班包含多个学员

      resources :scores ,only: :index #列出某个培训班下 某个学员的 所有模考成绩 (呈现为d3统计报表)


      resources :comments   #讲师/班主任可以给学员创建评语
    end



  end
  resources :teachers , concerns: [:freezingable] do

  end



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

end