class CreateEvents < ActiveRecord::Migration
  def self.up
     create_table :events do |t|
      t.string :name
      t.string :location
      t.date :date
      t.timestamps
    end
  end

  def self.down
  end
end
