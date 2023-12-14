const ul = document.querySelector(".sidemenu");
console.log(ul);

const xmark = document.querySelector(".fa-times");
console.log(xmark);
const bars = document.querySelector(".fa-bars");
console.log(bars);

bars.addEventListener("click", () => {
  ul.classList.toggle("show");
});

xmark.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// ! submit form to google
const form = document.querySelector(".submitInQueries");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formValues = new FormData(form);
  const data = {
    message: formValues.get("message"),
    email: formValues.get("email"),
  };
  console.log(data);

  fetch("https://google", {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body:data,
  }
  ).then(res=>{
    res.json()

  }).then(data=>{
    console.log(data)
  }).catch(error=>{
    
    console.log(error);
  })
});
