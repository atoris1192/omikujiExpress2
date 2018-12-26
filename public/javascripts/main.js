
document.addEventListener('DOMContentLoaded', () => {
  'use strict'
  console.log('-- main.js log --')

  const btn = document.querySelector('#btn')

  btn.addEventListener('click', () => {
    console.log('-- btn click --')
  })
})