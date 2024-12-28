const express = require('express');
const router = express.Router();
const Menu = require('./../models/MenuItem.js');

router.post('/', async (req,res) => {
  
  try {
 const data = req.body;
 const newMenu = new Menu(data);
 const response = await newMenu.save(data); 
 console.log("Menu data saved");
 res.status(200).json(response);
  }
  catch(err) {
   console.log(err);
   res.status(500).json({error : 'Internal server error'});
  }

})

router.get('/', async (req,res) => {

 try {
  const data = await Menu.find();
  console.log("Menu data fetched successfully");
  res.status(200).json(data);
 }
 catch(err) {
   console.log(err);
   res.status(500).json({error : 'Internal server error'});   
 }
 
})

router.get('/:tasteType', async (req,res) => {      
  try {
    const tasteType = req.params.tasteType;
    if(tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet') {
      const response = await Menu.find({ taste: tasteType}); 
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


module.exports = router;
