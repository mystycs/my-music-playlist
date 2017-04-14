class RenameColumPlaylistInTablePlaylists < ActiveRecord::Migration[5.0]
  def change
    rename_column :playlists, :playlist, :title
  end
end
