const mongojs = require('mongojs')
const db = require('./db')

const COLLECTION = db.collection('Users')

class User {
  static findOrCreateByAuthentication(authenticationParams, userParams, callback) {
    COLLECTION.findOne({
      authentications: {
        $elemMatch: {
          id: { $eq: authenticationParams.id },
          provider: { $eq: authenticationParams.provider }
        }
      }
    }, (err, doc) => {
      if(err) { callback(err); return }
      if(doc) {
        COLLECTION.findAndModify({
          query: {
            "_id": doc._id
          },
          update: Object.assign({}, userParams, {
            authentications: [ authenticationParams ]
          })
        }, callback)
      } else {
        COLLECTION.insert(Object.assign({}, userParams, {
          authentications: [ authenticationParams ]
        }), callback)
      }
    })
  }

  static findOne(attributes, callback) {
    COLLECTION.findOne(attributes, callback)
  }

  static findByObjectId(id, callback) {
    COLLECTION.findOne({
      "_id": mongojs.ObjectId(id)
    }, callback)
  }
}

module.exports = User
