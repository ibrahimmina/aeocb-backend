module.exports = (app) => {
    const countries = require('../controllers/countries.controller.js');

    // Create a new Note
    app.post('/countries', countries.create);

    // Retrieve all Notes
    app.get('/countries', countries.findAll);

    // Retrieve a single Note with noteId
    app.get('/countries/: countryId', countries.findOne);

    // Update a Note with noteId
    app.put('/countries/: countryId', countries.update);

    // Delete a Note with noteId
    app.delete('/countries/:countryId', countries.delete);
}