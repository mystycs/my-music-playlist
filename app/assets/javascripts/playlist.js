var documentready = function() {

    $(function() {
        $("#searchSong").keyup(function() {
            var song = $("#searchSong").val()

            var spotifyQueryURL = "https://api.spotify.com/v1/search"

            spotifyQueryURL = spotifyQueryURL + '?q=' + song + '&type=track&market=US'

            $.ajax({
                url: spotifyQueryURL,
                type: 'GET',
                success: function(response) {
                    $('#showSongs').empty()
                    $.each(response, function(i, items) {
                        $.each(items.items, function(j, artists) {
                            var uri = JSON.stringify(artists.uri).replace(/(^"|"$)/g, '')
                            //alert(uri.substr(14))
                            content = '<iframe src='
                            content += 'https://embed.spotify.com/?uri=' + uri + ' width="250" height="300" frameborder="0" allowtransparency="true"></iframe>'
                            content += '<button onclick="addToPlaylist(\'' + uri.substr(14) + '\')">Add to Playlist</button>'
                            $('#showSongs').append(content)
                        })
                    })
                },
                error: function() {
                    $("#printAlert").empty()
                    showError = '<div class="alert alert-danger">Cant Search</div>'
                    $(showError).appendTo("#printAlert")
                }
            })
        })
    })

}
$(document).on('turbolinks:load', documentready)

function addToPlaylist(uri) {
    // alert(document.location.href.charAt( document.location.href.length - 1 ))

    $.ajax({
      type: "post",
      url: "/songs",
      data: '&playlist_id=' + document.location.href.charAt( document.location.href.length - 1 ) + '&uri=' + uri,
      success: function() {
        $("#printAlert").empty();
        showSuccess = '<div class="alert alert-success">Song successfully saved.</div>';
        $(showSuccess).appendTo("#printAlert");
      },
      error: function() {
        $("#printAlert").empty();
        showError = '<div class="alert alert-danger">Song could not be saved.</div>';
        $(showError).appendTo("#printAlert");
      }
    })

}
