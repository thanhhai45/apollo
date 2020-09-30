class HomeController < ApplicationController
  include Pagy::Backend
  def index
  end

  def service
  end

  def proceduce
  end

  def contact
  end

  def recruit
    @recruits = Recruit.all 
  end

  def about
  end

  def blogs
    filter = {}
    if params[:type].present?
      filter = { type: params[:type].to_i }
    end
    @pagy, @blogs = pagy(Blog.filtered_by_blog_type(filter).publish, items: 2)
  end

  def blog_detail
    @blog = Blog.friendly.find(params[:id])
    filter = {
      type: @blog.blog_type_id
    }
    @blog_relative = Blog.filtered_by_blog_type(filter).where.not(id: @blog.id).limit(3);
  end
end
