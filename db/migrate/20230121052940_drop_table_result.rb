class DropTableResult < ActiveRecord::Migration[7.0]
  def change
    drop_table :results
  end
end
