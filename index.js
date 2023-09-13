/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convertBtn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", convertUnits() )

/* Event listener */
inputEl.addEventListener('change', convertUnits);

function convertUnits() {
        let inputValue = Number(inputEl.value)
     lengthEl.textContent = `
        ${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | 
        ${inputValue} feet = ${(inputValue * 1/meterToFeet).toFixed(3)} meters
    `
    volumeEl.textContent = `
        ${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons | 
        ${inputValue} gallons = ${(inputValue * 1/literToGallon).toFixed(3)} liters
    `
    massEl.textContent = `
        ${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(3)} pounds | 
        ${inputValue} pounds = ${(inputValue * 1/kiloToPound).toFixed(3)} kilos
    `
}