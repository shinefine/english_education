module ArticleHelper
  def helper__build_links_for_article_tags(tag_list)
    raw tag_list.map { |t| link_to t, tag_articles_path(t) }.join(', ')
  end
end