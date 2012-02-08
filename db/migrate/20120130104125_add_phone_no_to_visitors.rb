class AddPhoneNoToVisitors < ActiveRecord::Migration
  def self.up
    add_column :visitors ,:phone,:string
    add_column :visitors ,:college,:string
    add_column :visitors ,:comment,:text
  end

  def self.down
  end
end
