module HomeHelper

  def change_url(params)
    text = ''
    if params[:action] == 'about'
      text = 'about-us'
    elsif params[:action] == 'blog_detail'
      if params[:id].present?
        text = "blog/#{params[:id]}"
      else
        text = 'blogs'
      end
    else
      text = params[:action]
    end
    text
  end
end
