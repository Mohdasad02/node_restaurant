const express = require('express');
const router = express.Router();
const Person = require('./../models/Person.js');

//read
router.get('/', async (req,res) => {

  try {
     const data = await Person.find();
     console.log("Person data fetched successfully");
     res.status(200).json(data);
  }
   
  catch(err) {
   console.log("There is an error in fetching data");
   res.status(500).json({error : 'Internal server error'});
 }
 
 });  

 //create
 router.post('/', async (req,res) => {     

  try{
    const data = req.body;//body pareser store data in req.body
    const newPerson = new Person(data);//data will be filled in Person format using mongoose model
    const response = await newPerson.save();//save the newPerson data in mongoose model and wait till it has been done
    console.log("Person data saved");
    res.status(200).json(response);
  }

  catch(err) {
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
  }
  
});

//read
router.get('/:workType', async (req,res) => {
  try {
    const workType = req.params.workType;//workType will be extracted from url route workType
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType});
      console.log("Fetched successfully");
      res.status(200).json(response);
    }
    else {
      res.status(404).json({error : 'Invalid work type'});
    }
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error : 'Internal server error'}); 
  }
})

//update
router.put('/:id', async (req,res) => {

  try {
    const personId = req.params.id;
    const updatedPersonId = req.body;

    const response  = await Person.findByIdAndUpdate(personId,updatedPersonId, {
      new : true, //save the new updated data
      runValidators : true //also run the validators means required true or uniq 
    }) 
    if(!response) {
      return res.status(404).json({error : "Page not found"});
    }
    console.log("Data updated");
    res.status(200).json(response);
  }

  catch(err) {
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
  }

})

//delete
router.delete('/:id', async (req,res) => {

  try {
    const personId = req.params.id;
    const updatedPersonId = req.body;

    const response  = await Person.findByIdAndDelete(personId,updatedPersonId, {
      new : true, //save the new updated data
      runValidators : true //also run the validators means required true or uniq 
    }) 
    if(!response) {
      return res.status(404).json({error : "Page not found"});
    }
    console.log("Data updated");
    res.status(200).json(response);
  }

  catch(err) {
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
  }

})


module.exports = router; 