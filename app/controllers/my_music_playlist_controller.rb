class MyMusicPlaylistController < ApplicationController

  def index
    @playlists = Playlist.all
  end
end
