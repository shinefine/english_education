json.array!(@articles) do |article|
  json.extract! article, :id, :Title, :Content
  json.url article_url(article, format: :json)
end
