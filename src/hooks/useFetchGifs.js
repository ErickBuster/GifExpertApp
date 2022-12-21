import { useEffect, useState } from 'react'
import { getGifts } from '../apis/getGifts'

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImage = await getGifts(category)
        setImages(newImage)
        setIsLoading(false)
    }

    useEffect( () => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}
