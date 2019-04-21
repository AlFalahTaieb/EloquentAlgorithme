const express = require('express')
const fs = require("fs")
let querystring = require('querystring')
const secret = require('./secret.js')
let ejs = require('ejs')



const app = express()
const PORT = 3000

let client_id = secret.clientId
let redirect_uri = secret.redirectUri;
let client_secret = secret.clientSecret


let request = require('request')

app.set('view engine', 'ejs');

process.env.REDIRECT_URI ||
    `http://localhost:${PORT}/callback`

app.get('/login', function (req, res) {
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: 'user-read-private user-read-email playlist-modify-public app-remote-control playlist-read-private',
            redirect_uri
        }))
})
app.get('/', (req, res) => {
    res.render('page/index');
})


app.get('/callback', function (req, res) {
    let code = req.query.code || null
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(
                client_id + ':' + client_secret
            ).toString('base64'))
        },
        json: true
    }

    request.post(authOptions, function (error, response, body) {

        let token = body.access_token
        let uri = `http://localhost:${PORT}`
        console.log(token)
        fs.writeFileSync('token.txt',token, 'utf8')
        // res.redirect(uri + '?access_token=' + token)
        res.render('page/callback');
    })

})

app.get('/token', (req, res) => {

    fs.readFile('token.txt', 'utf8', function (err, data) {
        if (err) throw err;
        global_data = data;
        console.log(global_data);
        res.render('page/token');
    })


})




let port = 3000
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)