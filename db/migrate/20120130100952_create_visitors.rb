class CreateVisitors < ActiveRecord::Migration
  def self.up
     create_table :visitors do |t|
      t.string :name
      t.string :email
      t.timestamps
    end
  end

  def self.down
  end
end
