const { Schema, model, Types: { ObjectId } } = require('mongoose');




const userSchema = new Schema({
    email: { type: String, require: true },
    hashedPassword: { type: String, require: true },
    gender: { type: String, required: true },
    trips: { type: [ObjectId], ref: 'Trip', default: [] }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;