const jwt = require('jsonwebtoken');

const genAuthToken = (user) =>{
    const secretkey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(
        {
            _id:user._id,
            name:user.fname,
            email:user.email,
            Usertype:"Writer",
        },
        secretkey
    );
    return token;
};

module.exports = genAuthToken;