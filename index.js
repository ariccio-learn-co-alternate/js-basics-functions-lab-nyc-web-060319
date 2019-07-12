'use strict'
// Code your solution in this file!
function distanceFromHqInBlocks (value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value)*264;
}

function distanceTravelledInFeet(blockStart, blockEnd) {
    const blockStartFeet = (blockStart * 264);
    const blockEndFeet = (blockEnd * 264);
    return Math.abs(blockEndFeet - blockStartFeet);
}

function isHighRateDistance(distance) {
    if (distance > 2000) {
        return true;
    }
    return false;
}

function calcLowRateDistance(paidDistance) {
    // const lowRateDistance = paidDistance - highRateDistance;
    // console.log("lrd " + paidDistance);
    return paidDistance;
}

function calcTotalCost(lowRateDistance) {
    // console.log("hrd: " + highRateDistance + " lrd: " + lowRateDistance);
    let cost = 0.00;
    cost += (lowRateDistance * 0.02);
    // cost += (highRateDistance * 25);
    // console.log("cost " + cost);
    return cost;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    if (distance >= 2500) {
        return 'cannot travel that far';
    }
    const paidDistance = distance - 400;
    if (isHighRateDistance(distance)) {
        return 25;
    }
    const lowRateDistance = calcLowRateDistance(paidDistance);
    const totalCost = calcTotalCost(lowRateDistance);
    return totalCost;
}