const calories = document.querySelector(".bmr_calculator .result .calorie");
const calculateBtn = document.querySelector(
  ".bmr_calculator .result .calculate"
);
const age = document.querySelector(".bmr_calculator form #age");
const height = document.querySelector(".bmr_calculator form #height");
const weight = document.querySelector(".bmr_calculator form #weight");
const error_mssg = document.querySelector(
  ".bmr_calculator .result .error_mssg"
);

// BMR=10*weight + 6.25*height-5*age+5 (for males)
// BMR=10*weight+6.25*height-5*age-161 (for Females)

const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

calculateBtn.addEventListener("click", () => {
  const hasInvalidInput =
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid");

  if (hasInvalidInput) {
    error_mssg.classList.add("active");
    return;
  }
  let genderValue = document.querySelector(
    ".bmr_calculator form input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);
  calories.innerHTML = BMR.toLocaleString("en-US");
});

//Input validation
age.addEventListener("input", (e) => {
  let ageValue = e.target.value;
  if (!ageValue || isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});
height.addEventListener("input", (e) => {
  let heightValue = e.target.value;
  if (!heightValue || isNaN(heightValue) || heightValue <= 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;
  if (!weightValue || isNaN(weightValue) || weightValue <= 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});
