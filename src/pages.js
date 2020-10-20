const orphanages = require('./database/fakedata.js')

//route functions
module.exports = {


    //method index receiving function 
    index(req,res) {
        // const city = req.query.city
        const city = 'Osasco'
        return res.render('index', { city })
    },

    orphanage(req,res) {
        return res.render('orphanage')
    },

    orphanages(req,res) {
        return res.render('orphanages', [ orphanages ])
    },

    createOrphanage(req,res) {
        return res.render('create-orphanage')
    }

}
