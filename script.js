const data = {
  nama: "adit",
  berat: 120,
  tinggi: 167,
};

const classification = [
  "Under Weight",
  "normal",
  "Over Weight",
  "Obesity (Class I)",
  "Obesity (Class II)",
  "Extreme Obesity",
];
// let beratBadan = 0
// let tinggiBadan = 0

function calculateBMI(params) {
  let beratBadan = 0;
  let tinggiBadan = 0;
  let calculation = 0;

  beratBadan = data.berat;
  tinggiBadan = data.tinggi * data.tinggi;

  calculation = ((beratBadan / tinggiBadan) * 10_000).toFixed(1);

  return calculation;
}

function classificationBMI(data, classification) {
  let bmi = calculateBMI(data);
  console.log(bmi);
  let classed = "";
  if (bmi >= 40) {
    classed = classification[5];
  } else if (bmi >= 35) {
    classed = classification[4];
  } else if (bmi >= 30) {
    classed = classification[3];
  } else if (bmi >= 25) {
    classed = classification[2];
  } else if (bmi >= 18.5) {
    classed = classification[1];
  } else {
    classed = classification[0];
  }

  return classed;
}

console.log(classificationBMI(data, classification));

// console.log(calculateBMI(data));
