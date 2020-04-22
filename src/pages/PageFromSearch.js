import React from 'react'
import {connect} from 'react-redux'


const PageFromSearch = ({ searchedCollections }) => (
    
    searchedCollections ? 
    <div>
        {      
            searchedCollections.results.map(result => (
                <div key = {result.id} >
                    <h1>{result.title}</h1>
                    <img src = {`https://image.tmdb.org/t/p/w500/${result.poster_path}`} /> 
                </div>                         
            ))
        }
    </div>

    : <div>
        <h1>Havent searched yet</h1>
    </div>
)

const mapStateToProps = state => ({
    searchedCollections: state.search.searchResults
})


export default connect(mapStateToProps)(PageFromSearch)