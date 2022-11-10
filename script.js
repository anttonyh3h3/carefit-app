// Awal catur's workspace, menghitung BMI
const data = {
  nama: "adit",
  berat: 20,
  tinggi: 175,
  usia: 21,
  sex: "Male",
  olahraga: "tidak olahraga",
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
  // console.log(bmi);
  let classed = "";
  let descClass = ``;
  if (bmi >= 40) {
    classed = classification[5];
    // descClass = desc[5];
  } else if (bmi >= 35) {
    classed = classification[4];
    // descClass = desc[4];
  } else if (bmi >= 30) {
    classed = classification[3];
    // descClass = desc[3];
  } else if (bmi >= 25) {
    classed = classification[2];
    // descClass = desc[2];
  } else if (bmi >= 18.5) {
    classed = classification[1];
    // descClass = desc[1];
  } else {
    classed = classification[0];
    // descClass = desc[0];
  }
  console.log(descClass);
  return classed;
}
// Akhir catur's workspace

// console.log(classificationBMI(data, classification, desc));
// Awal nando's workspace, menghitung asupan kalori perhari
function calculateBMR(data) {
  let BMR = 0;
  if (data.sex === "Male") {
    let temp = 88.4 + 13.4 * data.berat + 4.8 * data.tinggi - 5.68 * data.usia;
    BMR = temp;
  } else {
    let temp = 447.6 + 9.25 * data.berat + 3.1 * data.tinggi - 4.33 * data.usia;
    BMR = temp;
  }

  return BMR;
}

function calculateCaloriesNeededPerDay(data) {
  let bmi = calculateBMI(data);
  let status = classificationBMI(data, classification);
  let result = { bmi: bmi, kondisi: status };
  let ExcerciseLevel = {
    "tidak olahraga": 1.2,
    "3 kali seminggu": 1.375,
    "4 kali seminggu": 1.55,
    "5 kali seminggu": 1.75,
    daily: 1.9,
  };

  let bmr = calculateBMR(data);
  let temp = bmr * ExcerciseLevel[data.olahraga];
  result.maintain = temp.toFixed();

  if (
    status === "Over Weight" ||
    status === "Obesity (Class I)" ||
    status === "Obesity (Class II)" ||
    status === "Extreme Obesity"
  ) {
    result["fat loss"] = result.maintain - 380;
  } else if (status === "Under Weight") {
    result["gain weight"] = Number(result.maintain) + 380;
  }

  return result;
}
console.log(calculateCaloriesNeededPerDay(data));
// Akhir nando's workspace
