const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // creat a new person document using the mongodb model
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data save");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
// get data
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // extrecting person id from url parameter
    const updatedPersonData = req.body;

    
    const response = await Person.findByIdAndUpdate(personId , updatedPersonData, {
      new: true,
      runValidators: true,
    })

    if(!response) {
      return res.status(404).json({error: 'Person not found'});
    }

    console.log("data updated");
    res.status(200).json({message: 'Person  Updated  Successfully'});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // extrecting person id from url parameter

    //assuming you have a Person model 
    const response = await Person.findByIdAndRemove(personId);
    if(!response) {
      return res.status(404).json({error: 'Person not found'});
    }
    console.log("data deleted");
    res.status(200).json({message: 'Person Deleted Successfully'});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});


module.exports = router;
