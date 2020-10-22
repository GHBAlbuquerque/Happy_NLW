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

    async orphanage(req, res) {
        const id = req.query.id

        try {
            const db = await Database;
            const data = await db.all(`SELECT * FROM orphanages WHERE id=${id}`); //getting an array with 1 object
            
            orphanage = data[0];

            orphanage.images = orphanage.images.split(","); // turn from string to array
            orphanage.open_on_weekends = (orphanage.open_on_weekends == "1" ? true : false);

            return res.render('orphanage', { orphanage })
        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        return res.render('orphanage')
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const allOrphanages = await db.all("SELECT * FROM orphanages");
            return res.render('orphanages', { allOrphanages })
        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}
