import './SearchBar.css';
import React from 'react';
import classNames from 'classnames';

const SearchBar = function(props){

    const [isFocused, setIsFocused] = React.useState(false);
    
    const handleFocused = function(){
        setIsFocused(true);
    }
    const handleBlur = function(){
        setIsFocused(false);
    }

    var wrapperClassNames = classNames('search-bar',{
        'search-bar-focused': isFocused,
    });

    return (<div className={wrapperClassNames}>
                <input onFocus={handleFocused} onBlur={handleBlur} className="search-bar-input" type="text"/>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>)

}

export{SearchBar}
