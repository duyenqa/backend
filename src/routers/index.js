const user = require('./user')

const initRoutes = (app) => {
    app.use("/api/users", user)
    
    return app.use('/', (req, res) => {
        return res.send("Server On")
    })
}
module.exports = initRoutes;