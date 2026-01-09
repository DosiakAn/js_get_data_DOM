'use strict';

const allPopulation = document.querySelectorAll('span.population');

const populationArr = Array.from(allPopulation);

const populationMap = populationArr.map((el) =>
  el.textContent.trim().replaceAll(/\D/g, ''));

const numbers = [];

for (const p of populationMap) {
  if (!Number.isNaN(p)) {
    numbers.push(parseInt(p));
  }
}

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

let total = numbers.reduce((acc, curValue) => acc + curValue, 0);

let average = Math.round(total / numbers.length);

total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

average = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulation.textContent = total;

averagePopulation.textContent = average;
