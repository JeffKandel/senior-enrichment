'use strict'
const campusRouter = require('express').Router()
const db = require('../../db')
const Campus = db.model('campus');


//pick up at :albumId and process beforehand
campusRouter.param('campusId', function (req, res, next, id) {
  Campus.findById(id)
  .then(function (campus) {
    if (!campus) {
      const err = Error('campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => {
      if (!campuses) {
        const err = Error('campuses not found');
        err.status = 404;
        throw err
      }
      res.json(campuses);
    })
    .catch(next);
})

campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => {
      if (!campus) {
        const err = Error('campus not created');
        err.status = 400;
        throw err
      }
      res.status(204).json(campus);
    })
    .catch(next);
})

campusRouter.get('/:campusId', (req, res, next) => {
  res.json(req.campus);
})

campusRouter.put('/:campusId', (req, res, next) => {
  req.campus.update(req.body)
    .then((campus) => {
      if (!campus) {
        const err = Error('campus not updated');
        err.status = 400;
        throw err
      }
      res.status(204).json(campus);
    })
    .catch(next);
})

campusRouter.delete('/:campusId', (req, res, next) => {
  req.campus.destroy()
    .then((destroyedBool) => {
      if (!destroyedBool) {
        const err = Error('campus not destroyed');
        err.status = 400;
        throw err
      }
      res.status(204).json(destroyedBool);
    })
    .catch(next);
})

module.exports = campusRouter
