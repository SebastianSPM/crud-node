const querystring = require('querystring')

const index = (req, res) => {
    const query = querystring.stringify(req.query)
    
    fetch('https://fakestoreapi.com/products?' + query)
        .then(response => response.json())
        .then(products => res.json(products))
}

const show = (req, res) => {
    const identificador = req.params.id
    
    fetch('https://fakestoreapi.com/products/' + identificador)
        .then(response => response.json())
        .then(product => res.json(product))
}

module.exports = {
    index,
    show,
}