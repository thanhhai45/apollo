module ExtActiveRecord
  extend ActiveSupport::Concern

  included do
    scope :sorted, lambda { |params|
      sort_by = params[:sort_by]
      sort_dir = params[:sort_dir]
      order(sort_by.to_sym => sort_dir.to_sym) if sort_by && sort_dir
    }
  end
end