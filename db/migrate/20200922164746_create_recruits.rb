class CreateRecruits < ActiveRecord::Migration[6.0]
  def change
    create_table :recruits do |t|
      t.string :title, null: false
      t.string :title_en, null: false
      t.text :content
      t.text :content_en
      t.string :subject
      t.string :slug
      t.integer :status
      t.integer :order, default: 0
      t.datetime :publish_at
      t.timestamps
    end
    add_index :recruits, :slug, unique: true
  end
end
