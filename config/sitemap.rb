require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = Rails.application.credentials.default_url
SitemapGenerator::Sitemap.search_engines = {
  :google=>"http://www.google.com/webmasters/tools/ping?sitemap=%s",
  :bing=>"http://www.bing.com/ping?sitemap=%s"
}
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'
SitemapGenerator::Sitemap.create do
  add '/', :changefreq => 'daily'
  add service_path, :changefreq => 'daily', :priority => 0.5
  add project_path, :changefreq => 'daily', :priority => 0.5
  add proceduce_path, :changefreq => 'daily', :priority => 0.7
  add about_us_path, :changefreq => 'daily', :priority => 0.7
  add contact_path, :changefreq => 'daily', :priority => 0.7
  Blog.find_each do |blog|
    add blogs_path(blog), :lastmod => blog.updated_at
  end
  Recruit.find_each do |recruit|
    add recruit_path(recruit), :lastmod => recruit.updated_at
  end
end