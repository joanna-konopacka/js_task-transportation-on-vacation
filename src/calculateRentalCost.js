"use strict";

function calculateRentalCost(days) {
  let totalCost = 40 * days;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
