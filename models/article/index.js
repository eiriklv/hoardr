exports = module.exports = function (collection, mongoose, validators) {
    var schema = mongoose.Schema({
        url: {
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
        isPublic: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true
        },
        archived: {
            type: Boolean,
            default: false,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    });

    return mongoose.model(collection, schema);
};
