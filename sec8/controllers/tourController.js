const fs = require('fs');
const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; // trick for converting string to number

  const tour = tours.find(el => el.id === id); // find -array method that loops through array and returns either true or false for eacch element based on paramiters set

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour // shorthand for tours : tours
  //   }
  // });
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = newTour({})
    // newTour.save()
    const newTour = await Tour.create(req.body); // result as lines above

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
