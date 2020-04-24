import React, { useState, useEffect } from "react";
import axios from "axios";
import KEY from "../apis/youtube";
import './Style.css';

const Header = (props) => {

    const [query, setQuery] = useState('');
    const searchEndpoint = 'https://www.googleapis.com/youtube/v3/search';
    const maxResults = 10;

    useEffect(() => {
        if (query !== '') {
            axios.get(searchEndpoint, {
                params: {
                    key: KEY,
                    part: 'snippet',
                    maxResults,
                    q: query,
                }
            })
            .then((response) => {
                props.setVideoList(response.data.items);
            })
        }else{
            props.setVideoList(null);
        }
    }, [query]);

    const handleSearch = (searchValue) => {
        setQuery(searchValue);
    }

    return (
        <header>
            <h1>Youtube</h1>
            <input id="searchValue" type="text" placeholder="Search video..." />
            <button onClick={() => handleSearch(document.getElementById("searchValue").value)}>
                Search
            </button>
        </header>
    );
}

export default Header;