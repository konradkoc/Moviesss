import React , { useState } from 'react'
import { ButtonStyle, InputStyle , SearchBarContainer } from './SearchBar.styles'

const SearchBar = () => {
const [searchQuery, setSearchQuery] = useState('')

const fetchDataAsync = e => {
    const API_KEY= '0946d9223ef9f8efbdd8a35f5ef3bdc1'
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`)
        .then(res => res.json())
        .then(data => console.log(data))

    setSearchQuery('')
}
    
    return (
        <SearchBarContainer>
            <InputStyle 
                type ='text'
                value = {searchQuery} 
                placeholder = "Search for a movie, TV show or a person..."
                onChange = { e => setSearchQuery(e.target.value) }>
            </InputStyle>

            <ButtonStyle
                onClick = { e => fetchDataAsync(e) }
                type = 'submit'>
                <span class="fas fa-search"> </span>           
            </ButtonStyle>
        </SearchBarContainer>
    )
}

export default SearchBar