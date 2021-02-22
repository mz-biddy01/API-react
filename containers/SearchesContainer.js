import React, {useState, useEffect} from 'react';
import SearchesList from "../components/SearchesList"
import SearchDetail from "../components/SearchDetail"
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import NavBar from "../components/NavBar"
import HomePage from "../components/HomePage"



const SearchesContainer = () => {

    const [allSearches, setAllSearches] = useState([]);
    const [selectedSearch, setSelectedSearch] = useState(0);
    const [redirect, setRedirect] = useState()

    const getSearches = () => {
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(res => res.json())
        .then(data => setAllSearches(data.response.results))
    }

    useEffect(() => {
        getSearches()
    }, [])

    const handleSelectedSearch = (search) => {
        setSelectedSearch(search)
        setRedirect(true)
    }

    const setRedirectToTrue = () => {
        setRedirect(true)
      }


    return(
        <Router>
        <>
        <div className="searches-container">
        <Route exact path="/" component={HomePage}/>
        <NavBar />
        <Route exact path="/searches" render={() => <SearchesList allSearches={allSearches} onSelectedSearch={handleSelectedSearch}/> }/>
        {redirect && <Redirect to="/single-search" />}
        <Route exact path="/single-search" render={() => <SearchDetail search={selectedSearch}/> }/>
        </div>
        </>
        </Router>
    
    )
}

export default SearchesContainer;