import React from 'react';

function SearchForm(props){
    return(
        <form>
            <div className="input-group">
                <input type="text" name="searchText" value={props.searchText} onChange={props.handleChange} className="form-control" placeholder="Search User or Content"></input>
                <button className="btn btn-dark" onClick={props.handleUserSearch}>Search User</button>
                <button className="btn btn-dark" onClick={props.handleContentSearch}>Search Content</button>
            </div>
        </form>
    )
}


export default SearchForm