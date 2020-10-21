const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

//route functions
module.exports = {

    //method index receiving function 
    index(req, res) {
        // const city = req.query.city
        const city = 'Osasco'
        return res.render('index', { city })
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return res.render('orphanages', { orphanages })
        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}
