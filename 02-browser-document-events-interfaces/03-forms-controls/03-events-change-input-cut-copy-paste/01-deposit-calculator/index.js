'use strict';

const form = document.forms.calculator;
const money = form.money;
const months = form.months;
const interest = form.interest;

const diagramHeightElement = document.getElementById('height-after');
const diagramMoneyBefore = document.getElementById('money-before');
const diagramMoneyAfter = document.getElementById('money-after');

function calculate() {
  const initialDeposit = parseInt(money.value);
  const betMultiplier = interest.value / 100;
  const years = months.value / 12;
  const result = Math.round(initialDeposit * (1 + betMultiplier) ** years);
  const diagramHeightAfter = `${(result / initialDeposit) * 100}px`;

  if (!initialDeposit) return;
  if (!betMultiplier) return;
  if (!years) return;

  diagramHeightElement.style.height = diagramHeightAfter;
  diagramMoneyBefore.innerHTML = initialDeposit;
  diagramMoneyAfter.innerHTML = result;
}

money.oninput = calculate;
months.onchange = calculate;
interest.oninput = calculate;

calculate();
