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
                            content = '<iframe src='
                            content += 'https://embed.spotify.com/?uri=' + JSON.stringify(artists.uri).replace(/(^"|"$)/g, '') + ' width="250" height="300" frameborder="0" allowtransparency="true"></iframe>'
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
