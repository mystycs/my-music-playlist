class AddPlaylistIdToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :playlist_id, :integer
  end
end
