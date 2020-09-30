class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.text :content
      t.string :tags
      t.integer :status
      t.integer :order, default: 0
      t.datetime :publish_at
      t.references :blog_type
      t.timestamps
    end
  end
end
