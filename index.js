// console.log("Chai aur code");
require('dotenv').config()
const express = require('express')
//import express from "express"

const app = express()
const port = 4000

const githubData = {
  "login": "rajveersingh6749",
  "id": 121347374,
  "node_id": "U_kgDOBzudLg",
  "avatar_url": "https://avatars.githubusercontent.com/u/121347374?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rajveersingh6749",
  "html_url": "https://github.com/rajveersingh6749",
  "followers_url": "https://api.github.com/users/rajveersingh6749/followers",
  "following_url": "https://api.github.com/users/rajveersingh6749/following{/other_user}",
  "gists_url": "https://api.github.com/users/rajveersingh6749/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rajveersingh6749/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rajveersingh6749/subscriptions",
  "organizations_url": "https://api.github.com/users/rajveersingh6749/orgs",
  "repos_url": "https://api.github.com/users/rajveersingh6749/repos",
  "events_url": "https://api.github.com/users/rajveersingh6749/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rajveersingh6749/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rajveer Singh",
  "company": null,
  "blog": "",
  "location": "Bijnor, Uttar Pradesh",
  "email": null,
  "hireable": null,
  "bio": "I am a 5th-year student in integrated MSc mathematics at Sardar Vallabhbhai National Institute of Technology, Surat.",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-12-24T13:54:31Z",
  "updated_at": "2025-01-05T05:05:38Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})