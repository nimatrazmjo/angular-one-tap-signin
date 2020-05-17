

const {OAuth2Client} = require('google-auth-library');
require('dotenv').config()
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
module.exports.OneTapLogin = async (req, res, next) => {
    console.log(req.body);
    
    try {
        const ticket = await client.verifyIdToken({
            idToken: req.body.credential,
            audience: process.env.GOOGLE_CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        if (!payload) {
            return res.status(500).json({message:"Ops, something gone"})
        }
        console.log(payload,"payload");
        
        const {email, email_verified, given_name:firstName, family_name:lastName } = payload;

        /**
         * 
         * implement your logic
         * 
         */ 
        
        let data = {
            accessToken: "Hashed access token",
            refreshToken: "Hashed refresh Token"
        };
        res.status(200).json(data);
            
    } catch (error) {
        console.log("Error", error)
    }
}