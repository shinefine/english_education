source 'https://rubygems.org'
#source 'https://ruby.taobao.org'

#---------------------系统功能---------------------

#图片上传功能,若需要缩放图片,则需依赖mini_magick gem
gem 'carrierwave','0.10.0'

#进行图片缩放功能,需要linux系统安装了 imagemagic 库,
# 使用 apt-get install imagemagick 来安装
# 用convert -version 查看是否成功安装imagemagic
gem 'mini_magick' ,'3.3'

#文字对应拼音(汉字排序用)
gem 'ruby-pinyin'

# 本地化支持
gem 'rails-i18n'
#系统全站搜索
#gem "elasticsearch", :git => "git://github.com/elasticsearch/elasticsearch-ruby.git"
#gem "elasticsearch-model", :git => "git://github.com/elasticsearch/elasticsearch-rails.git"
#gem "elasticsearch-rails", :git => "git://github.com/elasticsearch/elasticsearch-rails.git"
gem 'elasticsearch', '1.0.12'
gem 'elasticsearch-model','0.1.7'
gem 'elasticsearch-rails','0.1.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.4'


#-------------------数据库---------------------------
# Use sqlite3 as the database for Active Record
gem 'sqlite3'

gem 'mysql2', '~> 0.3.16'


#-------------------model层功能增强-------------------
#tag 添加标签的功能
#gem 'acts-as-taggable-on'


#-------------------View层 界面功能-----------------------
#css框架
#gem 'semantic-ui-sass','1.12.3.0'
#semantic-ui 11.4.0 报错找不到 icon.woff2文件，是因为确实没有这个字体文件， 手动改写源码文件
#（./versions/2.1.2/lib/ruby/gems/2.1.0/gems/semantic-ui-sass-1.11.4.0/app/assets/stylesheets/semantic-ui/elements/_icon.scss）:

#find . -name "*.scss" |xargs grep "woff2"

#另外 还需要修改文件(去除里面对googlefont 的引用,不然网站非常慢)
# find . -name "*.scss" |xargs grep "googleapis"

# .rbenv/versions/2.1.2/lib/ruby/gems/2.1.0/bundler/gems/semantic-ui-sass-0c4dbb3b8657/app/assets/stylesheets/semantic-ui/globals/_site.scss



#表单创建
gem 'simple_form'

#分页
gem 'kaminari','~> 0.16.1'

# 表格功能增强  bundle install 之后需要 rails g wice_grid:install ，项目内需要引用js文件 //= require wice_grid  （需要jquery支持）
gem 'wice_grid', '3.4.7'

#jquery
gem 'jquery-ui-rails','5.0.0'

#wice grid 的选择日期功能使用jquery-ui 提供的日期控件 ,效果比较好
gem 'jquery-ui-themes','0.0.11'

# Use jquery as the JavaScript library
gem 'jquery-rails'


gem 'sass', '3.2.19'  # 使用3.2.0 版会报 "wrong number argments 3 for 2" 错误
# Use SCSS for stylesheets
gem 'sass-rails', '4.0.3'
#gem 'sprockets', '2.11.0'
gem 'sprockets-rails', '2.1.3'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

#html 的select 控件功能增强
gem 'chosen-rails'

#----------------------测试 相关-------------------------
group :development,:test do
  gem 'rspec-rails'  #bundle install 后 需执行 rails g rspec:install 生成配置文件
  gem 'factory_girl_rails','3.3.0'
end

#-----------------------调试---------------------------
group :development do

  # For debugger
  #gem "pry-rails"

  #gem "pry-debugger"

  # Quiet assets 用于屏蔽 rails assets log 信息,比如:
  # Started GET "/assets/jquery.js?body=1" for 127.0.0.1 at 2012-11-20 17:05:52 +0800
  gem 'quiet_assets'

  # Better error page for Rails and other Rack apps
  # https://github.com/charliesome/better_errors
  #gem 'better_errors', git: 'https://github.com/charliesome/better_errors.git'
  gem 'better_errors','2.1.1'

  # Retrieve the binding of a method's caller. Can also retrieve bindings even further up the stack.
  # better_errors use this to display local variables on error pages
  gem 'binding_of_caller','0.7.2'
end




# See https://github.com/sstephenson/execjs#readme for more supported runtimes
#系统安装了node.js 或其它 js框架后,就不需要这个gem了,这个gem 据说比较耗费内存,不推荐在生产模式下使用
# gem 'therubyracer',  platforms: :ruby


# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
#gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',   '1.2.0'  ,   group: :development

#支持在项目中添加自定义配置信息  link: https://github.com/settingslogic/settingslogic
gem 'settingslogic', '2.0.9'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
