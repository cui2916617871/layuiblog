module.exports = function (app) {
    app.get('/', function (req, res) {
      res.redirect('/home')
    })
    app.use('/home', require('./home'))
    app.use('/about', require('./about'))
    app.use('/article', require('./article'))
    app.use('/resource', require('./resource'))
    app.use('/timeline', require('./timeline'))
    app.use('/details', require('./details'))
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
        res.status(404).render('404')
        }
    })
}
