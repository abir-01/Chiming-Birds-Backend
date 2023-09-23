const Birds = require("../models/BirdModel");

const getallbirds = (async (req, res) => {
    const birds = await Birds.find();

    if (birds) {
        res.status(200).json({ "birds": birds });
    } else {
        res.status(400).json({ message: 'No data to display!' });
    }
})


const addbird = (async (req, res) => {
    const { scientific_name, color, height, weight, domain, kingdom, phylum, class1, order, family, genus, species,img_link } = req.body;

    const newBird = new Birds();

    // const newBird = await Birds.create({
    newBird.scientific_name = scientific_name,
        newBird.color = color,
        newBird.height = height,
        newBird.weight = weight,
        newBird.domain = domain,
        newBird.kingdom = kingdom,
        newBird.phylum = phylum,
        newBird.class1 = class1,
        newBird.order = order,
        newBird.family = family,
        newBird.genus = genus,
        newBird.species = species,
        newBird.img_link = img_link
    // })

    // let error = '';
    try {
        await Birds.validate();
    } catch (err) {
        // console.log(err.message.split(':')[2]);
        console.log(err);
        // error = err;
    }

    console.log(scientific_name)

    const bird = await Birds.findOne({ scientific_name });
    if (bird) {
        res.status(400);
        throw new Error('This bird already exists!');
    }

    const newbird1 = await Birds.create({
        scientific_name,
        color,
        height,
        weight,
        domain,
        kingdom,
        phylum,
        class1,
        order,
        family,
        genus,
        species,
        img_link
    })



    if (newbird1) {
        res.status(201).json({
            scientific_name: newbird1.scientific_name,
            color: newbird1.color,
            height: newbird1.height,
            weight: newbird1.weight,
            domain: newbird1.domain,
            kingdom: newbird1.kingdom,
            phylum: newbird1.phylum,
            class1: newbird1.class1,
            order: newbird1.order,
            family: newbird1.family,
            genus: newbird1.genus,
            species: newbird1.species,
            img_link: newbird1.img_link
        });
    } else {
        res.status(400);
        throw new Error('Bird data is not valid');
    }

    // if (newBird) {
    //     res.status(200).json(newBird);
    // } else {
    //     res.status(400).json({ message: 'No data to display!' });
    // }
})

const getbird = (async (req, res) => {
    // console.log(req.params.id)  
    const id = req.params.id;
    const birdrequired = await Birds.find({_id:id})

    if (birdrequired) {
        res.status(200).json({"bird":birdrequired})
    }
    else {
        res.status(400);
        throw new Error("No bird with the given _id exists");
    }
})


module.exports = { getallbirds, addbird,getbird };
