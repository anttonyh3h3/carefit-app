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

const desc = [
  `Waduh kamu under weight nih, kamu kenapa sampe kurang makan gitu ? stress ? atau galau ditinggalin doi ? jangan khawatir nya, kamu bisa mulai hidup sehat dengan makan yang cukup sama jangan kurang tidur ya. Semangat!!`,
  `Keep up the good work! basil BMI kamu normal, lanjutin perjuangan nya ya. semangat!!`,
  `Kamu kalo stress makan ya ? kamu Overweight nih, jangan kebanyakan makan ya nanti gendut. Mulai olahraga ya sama kurangin makan tengah malem nya.`,
  `Ini kamu makan sehari berapa kali sih sampe Obesity (Class I) gini, harus diet ya sama olahraga juga biar berat badan kamu turun.`,
  `Ini kamu makan sehari berapa kali sih sampe Obesity (Class II) gini, harus diet ya sama olahraga juga biar berat badan kamu turun.`,
  `Duh ini mah syulit, aku gabisa berkata kata deh. diet ya sama olahraga juga yang rutin.`,
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

function classificationBMI(data, classification, desc) {
  let bmi = calculateBMI(data);
  console.log(bmi);
  let classed = "";
  let descClass = ``;
  if (bmi >= 40) {
    classed = classification[5];
    descClass = desc[5];
  } else if (bmi >= 35) {
    classed = classification[4];
    descClass = desc[4];
  } else if (bmi >= 30) {
    classed = classification[3];
    descClass = desc[3];
  } else if (bmi >= 25) {
    classed = classification[2];
    descClass = desc[2];
  } else if (bmi >= 18.5) {
    classed = classification[1];
    descClass = desc[1];
  } else {
    classed = classification[0];
    descClass = desc[0];
  }
  console.log(descClass);
  return classed;
}

console.log(classificationBMI(data, classification, desc));

// console.log(calculateBMI(data));
