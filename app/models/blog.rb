class Blog < ApplicationRecord
  include Rails.application.routes.url_helpers
  include PgSearch::Model
  include ExtActiveRecord
  extend Enumerize
  extend FriendlyId
  
  belongs_to :blog_type
  has_one_attached :cover_image
  has_rich_text :content
  has_rich_text :content_en

  STATUSES_OPTIONS = {
    unpublish: 1,
    publish: 2
  }.freeze
  enumerize :status, in: STATUSES_OPTIONS, default: :publish, predicates: true, scope: true
  
  friendly_id :title_en, use: :slugged

  validates :title, presence: true
  validates :content, presence: true
  
  default_scope { order("created_at DESC") }
  scope :publish, -> { where(status: 2) }
  scope :filtered_by_status, -> (params) { where(status: params[:status]) if params[:status].present? }
  scope :filtered_by_blog_type, -> (params) { where(blog_type_id: params[:type].to_i) if params[:type].present? }

  pg_search_scope :search_by_full_text,
                  against: [:title],
                  using: { tsearch: { prefix: true } }
  def cover_image_url
    return unless cover_image.attached?
    rails_blob_path(cover_image, disposition: "attachment", only_path: true)
  end
end
