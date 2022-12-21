const apiKey = 'zWNEGEsa7QS4l2lIJdFUtp0PyLF6Tvf7'
export const getGifts = async(category) => {
    // Fetch API
    const urlGift = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const response = await fetch(urlGift)
    const { data } =  await response.json()
    const gifts = data.map(img  => (
        {
            id: img.id, 
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifts
}