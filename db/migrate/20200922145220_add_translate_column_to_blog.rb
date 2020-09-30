class AddTranslateColumnToBlog < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :title_en, :string
    add_column :blogs, :content_en, :text
  end
end
