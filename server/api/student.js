'use strict'
const studentRouter = require('express').Router()
const db = require('../../db')
const Student = db.model('student');
const Campus = db.model('campus');

//pick up at :albumId and process beforehand
studentRouter.param('studentId', function (req, res, next, id) {
  Student.findById(id)
  .then(function (student) {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err
    }
    req.student = student;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

studentRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      if (!students) {
        const err = Error('Students not found');
        err.status = 404;
        throw err
      }
      res.json(students);
    })
    .catch(next);
})

studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => {
      if (!student) {
        const err = Error('Student not created');
        err.status = 400;
        throw err
      }
      res.status(204).json(student);
    })
    .catch(next);
})

studentRouter.get('/:studentId', (req, res, next) => {
  res.json(req.student);
})

studentRouter.put('/:studentId', (req, res, next) => {
  req.student.update(req.body)
    .then((student) => {
      if (!student) {
        const err = Error('Student not updated');
        err.status = 400;
        throw err
      }
      res.status(200).json(student);
    })
    .catch(next);
})

studentRouter.delete('/:studentId', (req, res, next) => {
  req.student.destroy()
    .then((destroyedBool) => {
      if (!destroyedBool) {
        const err = Error('Student not destroyed');
        err.status = 400;
        throw err
      }
      res.status(204).json(destroyedBool);
    })
    .catch(next);
})

module.exports = studentRouter
