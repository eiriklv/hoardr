exports = module.exports = function(collection, mongoose, validators) {
    var schema = mongoose.Schema({
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            required: true
        },
        isPublic: {
            type: Boolean,
            default: false
        },
        articles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article'
        }]
    });

    return mongoose.model(collection, schema);
};
