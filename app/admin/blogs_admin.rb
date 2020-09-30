Trestle.resource(:blogs) do
  menu do
    item :blogs, icon: "fa fa-newspaper"
  end

  active_storage_fields do
    %i[cover_image]
  end

  collection do
    model
  end

  search do |query|
    query ? collection.search_by_full_text(query) : collection
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :title
    column :status
    column :content do |blog|
      truncate(strip_tags(blog.content.to_s), length: 50)
    end
    column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |blog|
    tab :vi do
      row do
        col { text_field :title }
      end
      rich_text_area :content
    end

    tab :en do
      row do
        col { text_field :title_en }
      end
      
      rich_text_area :content_en
    end

    tab :info do
      # rich_text_area :content_en
      row do
        col { active_storage_field :cover_image }
      end

      row do
        col { select :status, Blog.status.values }
        col { select :blog_type_id, BlogType.all }
      end
    end
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:blog).permit(:name, ...)
  # end
end
