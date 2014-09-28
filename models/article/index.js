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
        description: {
            type: String
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
            default: Date.now,
            required: true
        },
        processed: {
            type: Boolean,
            default: false,
            required: true
        }
    });

    return mongoose.model(collection, schema);
};
