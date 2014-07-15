exports = module.exports = function (collection, mongoose, validators) {
    var schema = mongoose.Schema({
        _id: {
            type: String,
            required: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            require: true
        },
        image: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model(collection, schema);
};