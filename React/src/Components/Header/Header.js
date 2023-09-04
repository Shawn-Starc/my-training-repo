import React from 'react';
import './header.css';

var PageHeader = function(props){
    
    const {logo, iconsSet, title, profileIcon} = props;

    return (<div className="page-header">
                {logo}
                <div className="separator"></div>
                {title}
                <div className="separator"></div>
                {/*SearchBar*/}
                <div className="header-spacer"></div>
                {/*Icon Bar*/}
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
