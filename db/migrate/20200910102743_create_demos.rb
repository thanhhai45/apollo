class CreateDemos < ActiveRecord::Migration[6.0]
  def change
    create_table :demos do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
