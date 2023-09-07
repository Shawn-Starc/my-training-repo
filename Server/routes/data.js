var express = require('express');
var router = express.Router();


var _cardData = [
    {
        id: 'card-1',
        header: 'Testing Card',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        id: 'card-2',
        header: 'Ishaan Singh',
        description:"Ishaan Singh is a Good Boy"
    },
    {
        id: 'card-3',
        header: 'Vishal Upadhyay',
        description:"Vishal Upadhyay is in Jammu"
    }
]

/* GET home page. */
router.get('/home-card-data', function(req, res, next) {
    res.status(200).send(_cardData)

});

module.exports = router;
