'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  scopes: {
    studentIds: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('student'),
        attributes: ['id']
      }]
    })
  }
})
