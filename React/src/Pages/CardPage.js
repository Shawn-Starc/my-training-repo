import React from 'react';
import { Card } from '../Components/Card/card';
import axios from 'axios'



const CardPage = function(props){

    const [cardData, setCardData] = React.useState([]);

    console.log('Data is :',cardData);

    React.useEffect(function(){
        axios.get('/data/home-card-data').then(function(res){
            setCardData(res.data)
        }).catch(function(){
            
        })
    },[]);


    const cardJSX = cardData.map(function(_cardItem, idx){
        return (<Card
                    key={_cardItem.id}
                    header={_cardItem.header}
                    description={_cardItem.description}
                ></Card>)
    });

    return (<div className='app-full-container app-over-auto app-pad-10x'>
                <div className="app-h-sm app-pad-3x-b">My Tasks</div>
                <div className="app-over-auto app-pad-3x-b">
                    <div className='app-flex-row app-gap-5x'>
                        {cardJSX}
                    </div>
                </div>
                
            </div>)

}

export {CardPage}

