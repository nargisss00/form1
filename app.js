const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input, textarea,select");

  const inputValues = [];
  inputs.forEach((input) => {
    inputValues.push({
      name: input.name,
      value: input.value,
    });
  });
  console.log(inputValues);
});

h2=document.querySelector
