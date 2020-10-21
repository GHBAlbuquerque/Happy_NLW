const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')


//insert table data
Database.then(async function(db) {
    
    //insert table data
    await saveOrphanage(db, {
        lat: "-23.5539705",
        lng: "-46.8244877",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "(11)987658973",
        images: [
            "https://source.unsplash.com/random?id=20",
            "https://source.unsplash.com/random?id=1",
            "https://source.unsplash.com/random?id=2",
            "https://source.unsplash.com/random?id=2",
            "https://source.unsplash.com/random?id=5",
            "https://source.unsplash.com/random?id=6",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até as 8h",
        open_on_weekends: "0"
    })

    //query all table data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // query only one orphanage by id
    const orphanage = await db.all(' SELECT * FROM orphanages WHERE id="2" ')
    console.log(orphanage)
});

//erase table data

// Database.then(async function(db) {
//     console.log(await db.run('DELETE FROM orphanages WHERE id="8"'))

//     // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
//     // console.log(selectedOrphanages)
// });