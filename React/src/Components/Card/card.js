import React from 'react';
import './card.css'
var Card = function(props){

    const header = props.header;
    const description = props.description;

    return (
        <div className = "card-wrapper">
            <div className='card-start'>
                <div className='card-start-header'>
                    <div className='card-start-header-caption'>
                        <div className='card-caption'>
                            {header}
                        </div>
                    </div>
                    <div className='card-context'>
                        {description}

                    </div>
                    <div className="card-footer">
                        <div className= "card-profile-icon-containers">
                            <div className="card-profile-icon">IS</div>
                            <div className="card-profile-icon">VU</div>
                            <div className="card-profile-icon">MM</div>
                            <div className="card-profile-icon">RS</div>

                        </div>  
                        <i className="fa card-arrow fa-arrow-right" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
        </div>
     );
}

export {Card}

