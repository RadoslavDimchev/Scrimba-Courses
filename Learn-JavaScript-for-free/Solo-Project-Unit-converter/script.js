/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

convertBtn.addEventListener('click', function () {
  const value = inputEl.value;

  if (value) {
    const meters = (value / 3.281).toFixed(3);
    const feets = (value * 3.281).toFixed(3);
    const liters = (value / 0.264).toFixed(3);
    const gallons = (value * 0.264).toFixed(3);
    const kilograms = (value / 2.204).toFixed(3);
    const pounds = (value * 2.204).toFixed(3);

    lengthEl.textContent = `${value} meters = ${feets} feet | ${value} feet = ${meters} meters`;
    volumeEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
    massEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilograms} kilos`;
  }
});