import React, {useState} from 'react';


const SearchesList = ({allSearches, onSelectedSearch}) => {

    const [filteredNews, setFilteredNews] = useState();

    const searchListItems = allSearches.map((search, index) => {
        return <li >
                <a href="#" onClick={() => {onSelectedSearch(search)}} key={index}>
                {search.webTitle}
                </a>            
            </li>
    })

    const allCategories = [" "].concat(Array.from(new Set(allSearches.map(newsItem => newsItem.sectionName))));

    const filterSearchData = function(selectedCategory) {
        var filteredData = allSearches.filter(newsItem => newsItem.sectionName === selectedCategory);
        return filteredData;
    };      

    const handleChange = (event) => {
        var filteredData = filterSearchData(event.target.value);
        console.log(`Category = ${event.target.value}`);
        console.log(`Articles = ${"\n"}*${filteredData.map(ar => ar.webTitle).join("\n*")}`)
        let listItem = ( 
            filteredData.map((newsItem, index) => 
            <li key={index}>
                <a href="#" onClick={() => onSelectedSearch(newsItem)}>{newsItem.webTitle}</a>
            </li>)
        );
        setFilteredNews(listItem);
        }

    return(
        <>
            <div className="search-list">
                <ul>
                    {searchListItems}
                </ul>
            </div>
            <div className="filter-news">
                <h1>Filtered News:</h1>
                <select id="catgories" onChange={e => handleChange(e)}>
                    {allCategories.map(cat => (
                        <option value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <ul>
                    {filteredNews}
                </ul>
            </div>
        </>
    )
}

export default SearchesList;