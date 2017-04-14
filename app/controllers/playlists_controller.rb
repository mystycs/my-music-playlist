class PlaylistsController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create, :index]

  def new
    @playlist = Playlist.new
  end

  def index
    @playlists = Playlist.all
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      flash[:notice] = 'Playlist successfully saved'
      redirect_to playlists_path
    else
      flash[:alert] = 'Playlist could not be created'
      render 'new'
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
