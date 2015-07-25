require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TeacherStudent5
  class Application < Rails::Application
    config.generators do |g|
      g.assets false  #是否生成 xxx.css xxx.js 文件
      g.helper false  #是否生成 xxx_helper.rb文件
      #g.test_framework false  #是否使用默认测试框架
      g.test_framework :rspec,
                       fixtures: true,
                       view_specs: false,
                       helper_specs: false,
                       routing_specs: false,
                       controller_specs: true,
                       request_specs: false
      g.fixture_replacement :factory_girl, dir: "spec/factories"
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
     config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '*.{rb,yml}').to_s]
     config.i18n.default_locale = 'zh-CN'

    #config.assets.debug = false

    #如果暂时需要输出 asset log 信息,设置下面的代码
    #config.quiet_assets = false
    #如果需要屏蔽 其它路径的输出信息,这样指定:
    #config.quiet_assets_paths << '/silent/'
  end



end


