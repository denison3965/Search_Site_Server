const jwt = require('jsonwebtoken')

exports.post = (req, res, next ) => {
    const token = req.headers.access_token
    console.log("token")
    
    if(!token){
        return res.send(401).send({error: 'No token provided'})

    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({error: 'Token invalid'})
        }
        req.id_emploee = decoded.id

        //  res.send(200).send('you are authorized')
         return  next();
    })


}