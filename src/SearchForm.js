import React, { useState } from "react";

const SearchForm = ({ search, searchValueCached }) => {
    const [searchValue, setSearchValue] = useState(searchValueCached || "");

    const onInputChanges = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        search(searchValue);
        //setSearchValue("");
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input value={searchValue} onChange={onInputChanges} type="text" />
            {/* <input onClick={handleSubmit} type="submit" value="Search" /> */}
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
