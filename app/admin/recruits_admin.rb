Trestle.resource(:recruits) do
  menu do
    item :recruits, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :title
    column :status
    column :created_at, align: :center
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |rescruit|
    tab :vi do
      row do
        col { text_field :title }
      end
      
      row do
        col { rich_text_area :content }
      end
    end

    tab :en do
      row do
        col { text_field :title_en }
      end
      
      row do
        col { rich_text_area :content_en }
      end
    end

    tab :info do
      row do
        col { editor :content_en }
      end

      row do
        col { text_field :subject }
        col { select :status, Recruit.status.values }
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
  #   params.require(:recruit).permit(:name, ...)
  # end
end
