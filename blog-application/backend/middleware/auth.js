import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if(!authHeader){
        return res.status(401).json({error: 'No token provided'});
    }
}