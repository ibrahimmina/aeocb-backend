const Country = require('../models/countries.model');

// Create and Save a new Note
exports.create = (req, res) => {

    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Country content can not be empty"
        });
    }

    // Create a Note
    const country = new Country({
        code: req.body.code, 
        name: req.body.name,
        status: req.body.status
    });
    
  

    // Save Note in the database
    country.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

  

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

    Country.find()
    .then(countries => {
        res.send(countries);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

    Country.findById(req.params.countryId)
    .then(country => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });            
        }
        res.send(country);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.countryId
        });
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Country.findByIdAndUpdate(req.params. countryId, {
        code: req.body.code, 
        name: req.body.name,
        status: req.body.status
    }, {new: true})
    .then(country => {
        if(! country) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.countryId
        });
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

    Country.findByIdAndRemove(req.params.countryId)
    .then(country => {
        if(! country) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.countryId
        });
    });

};




