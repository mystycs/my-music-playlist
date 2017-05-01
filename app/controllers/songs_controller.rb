class SongsController < ApplicationController

  def new
    @song = Song.new
  end

  def create
    @song = Song.new
    @song.uri = params[:uri]
    @song.playlist_id = params[:playlist_id]
    @song.save
    

  end

  private

  def comment_params
    params.require(:song).permit(:playlist_id, :uri)
  end

end
