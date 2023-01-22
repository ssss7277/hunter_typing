class ChangeRankingsToScores < ActiveRecord::Migration[7.0]
  def change
    rename_table :rankings, :scores
  end
end
