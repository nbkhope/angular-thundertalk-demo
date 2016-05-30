class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content
      t.integer :upvotes

      t.timestamps null: false
    end
  end
end
