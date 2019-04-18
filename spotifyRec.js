const fetch = require('node-fetch')
const qs = require('qs')

const secret= require('./secret.js')
const endpoint = "https://api.spotify.com/v1/recommendations";
const params = {
    'seed_artists': '6sFIWsNpZYqfjUpaCgueju',
    'target_danceability': '0.9'
};

fetch(`${endpoint}?${qs.stringify(params)}`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${secret.clientSecret}`
    }
})
    .then(response => response.json())
    .then(({ tracks }) => {
    tracks.forEach(item => {
        console.log(`${item.name} by ${item.artists[0].name}`);
      })
}) 
