# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "~/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever

#
every 1.days, :at => '6:00 pm' do
  command "mysqldump -h127.0.0.1 -uroot -pstarter starters_edu_production | gzip > ~/db_back/backupfile.sql.gz"

end
every 1.days, :at => '8:00 pm' do
  command "cp ~/db_back/backupfile.sql.gz ~/db_back/`date +%y%m%d-%m%s.sql.gz`"
end