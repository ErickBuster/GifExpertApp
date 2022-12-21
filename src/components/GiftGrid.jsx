import { GiftCard } from './GiftCard'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GiftGrid = ({category}) => {
    const {images, isLoading } = useFetchGifs( category )
    return (
        <> 
            <div className="CardCategory">
                { isLoading && (<h2>Cargando...</h2>) }
                <h2>{category}</h2>
                <div className="CardsContent">
                    {
                        images.map( (image) => (
                            <GiftCard 
                                key = {image.id} 
                                {...image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
