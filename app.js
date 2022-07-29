// gets GIF from Giphy
async function getGIF(q){
    // api_key, search keyword, and limit search amount
    const params = {
        api_key : "p08yc2UyyZ59GAlkRKmGrzrSaXg0VGa1",
        q,
        limit : 1
    }

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", { params })
    // returns url if giphy response has some image
    return response.data.data.length != 0 ? response.data.data[0].images.downsized.url : undefined
}

$('#form').on('submit', async function(event){
    event.preventDefault()
    const url = await getGIF($('input[type=text]').val())
    if (url !== undefined){
        // appends new image to images div with src=url and m-2 class from bootstrap
        $("#images").append($("<img>").attr("src", url).addClass("m-2"))
        $('input[type=text]').val("")
    }
})

// empties the images
$('button[type=button]').on('click', function(event){
    event.preventDefault()
    $("#images").empty()
})