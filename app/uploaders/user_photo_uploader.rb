# encoding: utf-8

class UserPhotoUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog


  process :resize_to_fit => [200, 200]

  version :normal do
    process :resize_to_fill => [128,128]
  end
  version :thumb ,:from_version => :normal  do
    process :resize_to_fill => [64,64]
  end
  #
  def default_url
    "/images/default_user_photo.png"
  end

  #若需要重建各个版本图片,先注释掉 default_url 方法,然后在控制台 使用以下命令
  #rails c
  #User.find_each{|u| u.photo.recreate_versions! if  u.photo.url }  #针对只有部分用户上出了图片(某些用户没有上传图片)的情况
  #User.find_each{|u| u.photo.recreate_versions! }  #针对所有用户都有上传图片的情况

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :resize_to_fit => [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_white_list
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
