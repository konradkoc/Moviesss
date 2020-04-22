import React , { useState } from 'react'
import { ButtonStyle, InputStyle , SearchBarContainer } from './SearchBar.styles'
import {connect} from 'react-redux'
import { searchFor } from '../../../../redux/searchbox/search.actions'

const SearchBar = ( {searchFor} ) => {
const [searchQuery, setSearchQuery] = useState('')

const searchForCollections = (searchQuery) => {
    //searchQUery from state, trigger action only if query != '' , clear searchbox
    if (searchQuery) {
        searchFor(searchQuery)
        setSearchQuery('')
    }  
}
    
    return (
        <SearchBarContainer>
            <InputStyle 
                type ='text'
                value = {searchQuery} 
                placeholder = "Search for a movie, TV show or a person..."
                onChange = { e => setSearchQuery(e.target.value) }
            >
            </InputStyle>

            <ButtonStyle
                onClick= { () => searchForCollections(searchQuery)}
                type = 'submit'>
                <span class="fas fa-search"> </span>           
            </ButtonStyle>
        </SearchBarContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    searchFor: (searchQuery) => dispatch(searchFor(searchQuery))
})


export default connect(null, mapDispatchToProps)(SearchBar)