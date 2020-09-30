class Recruit < ApplicationRecord
  include PgSearch::Model
  include ExtActiveRecord
  extend Enumerize
  extend FriendlyId

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

  default_scope { order("publish_at DESC") }
  scope :publish, -> { where(status: 2) }
  scope :filtered_by_status, -> (params) { where(status: params[:status]) if params[:status].present? }
  pg_search_scope :search_by_full_text,
                  against: [:title],
                  using: { tsearch: { prefix: true } }

end
