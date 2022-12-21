import { useState } from "react"
export const AddCategorie = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        if(inputValue === undefined || inputValue.trim().length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    return (    
        <form onSubmit={onSubmit} >
            <h1>GiftExpertApp</h1>
            <div className="inputBox">
                <input 
                    type="text" 
                    placeholder="Buscar gifts"
                    value = {inputValue}
                    onChange = {onInputChange}
                    />
            </div>
        </form>
    )   
}   
