const mongoose = require("mongoose");

const BirdSchema = new mongoose.Schema({

    scientific_name: {
        type: String
    },
    color: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    domain: {
        type: String
    },
    kingdom: {
        type: String
    },
    phylum: {
        type: String
    },
    class1: {
        type: String
    },
    order: {
        type: String
    },
    family: {
        type: String
    },
    genus: {
        type: String
    },
    species: {
        type: String
    },
    img_link: {
        type:String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Birds", BirdSchema);