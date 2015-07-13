class Settings < Settingslogic

  #目前还没有用到这些配置信息
  source "#{Rails.root}/config/application.yml"
  namespace Rails.env
end



class SchoolSettings < Settingslogic
  source "#{Rails.root}/config/school_config.yml"
  namespace Rails.env
end