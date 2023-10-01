use('craftShop')

// Create a new collection. 
db.createCollection('practice')

// Removes a collection from the database.
db.practice.drop()

// Inserts a single document into a collection.
db.brand.insertOne({
        "name": "Seema"
    })

// Delete/remove a single document from the collection.
db.brand.deleteOne({
    "_id":ObjectId("6519c1ed07acfc9804ccb817")
})