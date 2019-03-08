class AddMessageToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :message, :text
  end
end
