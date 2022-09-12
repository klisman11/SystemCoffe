const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB, {

        })
    } catch (error) {
        console.log(error);
        throw new Error('Error de conección, verificar estado con server ')
    }
}

module.exports = {
    dbConection
}