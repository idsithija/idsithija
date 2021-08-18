const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const acToekn = req.header("acToekn");

    if (!acToekn) return res.json({ error: "User not logged i!"});

    try{
        const validToken = verify(acToekn, "acesstokenlipeid");
        
        if (validToken){
            return next();
        }
    } catch (err) {
        return res.json({ error: err });
    }
};

module.exports = { validateToken };