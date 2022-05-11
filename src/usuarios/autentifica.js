const user = 'rayssa'
const pass = '04521'

const autentifica = (req, res, next) => {
    if ((req.header('username') === user) && (req.header('password') === pass)) {
        next();
    }else {
        return res.status(403).send()
    }
}

module.exports = autentifica;