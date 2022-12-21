import { useState } from 'react'
import { GiftGrid, AddCategorie } from './components'

export const GiftExpertApp = () => {
    const [ categories, setCategories ] = useState([  'batman'])
    const onAddCategory = (newCategory) => {
        // categories.push(newCategory)
        // setCategories(cat => [...cat, 'flash'])
        if( categories.includes(newCategory)) return
        setCategories([ newCategory, ...categories])
    }
    return (
        <>
            <AddCategorie 
                onNewCategory = {event => onAddCategory(event)}
            />
            {
                categories.map(categorie => (
                    <GiftGrid key = {categorie} category = {categorie}/>
                ))
            }
        </>
    )
}
