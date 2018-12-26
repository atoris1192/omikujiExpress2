
document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const btn = document.querySelector('#btn')

  btn.addEventListener('click', () => {
    // const items = [ '大吉', '中吉', '末吉', '凶']
    // const random = Math.floor(Math.random()*items.length)
    // btn.textContent = items[random]

    const url = 'http://localhost:3000/api/random'
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(result => {
        btn.textContent = result.item
        console.log(result.item)
      })
      .catch(err => {
        console.error(err)
      })
  })
})