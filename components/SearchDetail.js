import React from 'react';

const SearchDetail = ({search}) => {

    if(!search){
        return <p>Select an Article</p>
    }

    return(

        <>
        <div className="search-detail">

             <div>
                <h2>{search.webTitle}</h2>
                <p>{search.webPublicationDate}</p>
                <p><a href={search.webUrl}>{search.webUrl}</a></p>
             </div>

        </div>   

        </>  

    )
}

export default SearchDetail;