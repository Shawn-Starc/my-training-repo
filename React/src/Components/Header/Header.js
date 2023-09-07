import React from 'react';
import './header.css';
import {SearchBar} from '../SearchBar/SearchBar';

var PageHeader = function(props){
    
    const {logo, iconsSet, searchbar, title, profileIcon} = props;

    return (<div className="page-header">
                {logo}
                <div className="separator"></div>
                {title}
                <div className="separator"></div>
                <SearchBar> </SearchBar>
                {/*SearchBar*/}
                <div className="header-spacer"></div>
                {iconsSet}
                {searchbar}
                {/*

                    [
                        {
                            iconName: 'moon-o',
                            onClick: function(e){
                                // Go to Change Theme
                            }
                        },{
                            iconName: 'bell-o',
                            onClick: function(e){
                                // Go to NotificationPage
                            }
                        },
                    ]


                */}
                <i className="fa fa-moon-o" aria-hidden="true"></i>
                <div className="profile-pic-icon">
                    {profileIcon}
                </div>
            </div>)
    

}

export {PageHeader}
