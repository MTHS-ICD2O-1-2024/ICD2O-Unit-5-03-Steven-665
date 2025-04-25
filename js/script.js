// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html
/**
 * * This function checks if the user has selected the random number from above
*/
// eslint-disable-next-line no-unused-vars
function findMovieType() {
  // input
  const userage = parseInt(document.getElementById('age').value)
  // process
  
  if (userage >= 17) {
    document.getElementById('movie type').innerHTML =
      '<p>You can go see an R rated movie alone</p>'
  } else if (userage >= 13) {
    document.getElementById('movie type').innerHTML =
      '<p>You can go see a PG-13 rated movie alone</p>'
  } else if (userage >= 5) {
    document.getElementById('movie type').innerHTML =
      '<p>You can go see a G and PG rated movie alone</p>'
  } else {
    document.getElementById('movie type').innerHTML =
      '<p>Uh, you are too young for most things</p>'
  }
}