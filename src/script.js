(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //About page
  $(".about-text").on("click", function () {
    $("body").addClass("about-on");
  });
  $(".about-close").on("click", function () {
    $("body").removeClass("about-on");
  });

  //Contact page
  $(".contact-text").on("click", function () {
    $("body").addClass("contact-on");
  });
  $(".contact-close").on("click", function () {
    $("body").removeClass("contact-on");
  });

  //arts & nature page
  $(".artsnature").on("click", function () {
    $("body").addClass("artsnature-on");
  });
  $(".artsnature-close").on("click", function () {
    $("body").removeClass("artsnature-on");
  });

  //logic page
  $(".logic").on("click", function () {
    $("body").addClass("logic-on");
  });
  $(".logic-close").on("click", function () {
    $("body").removeClass("logic-on");
  });

  //graph theory page
  $(".graphtheory").on("click", function () {
    $("body").addClass("graphtheory-on");
  });
  $(".graphtheory-close").on("click", function () {
    $("body").removeClass("graphtheory-on");
  });
})(jQuery);

  // Simple Interest
  const simpleInterest = document.querySelector(".simple-interest");
const button = document.querySelector(".button");
//const loading = document.querySelector('.loader');
const results = document.querySelector(".results");

function calculateResults(e) {
  // ui elements
  const principal = document.querySelector("#principal");
  const rate = document.querySelector("#rate");
  const time = document.querySelector("#time");
  const monthlyPayment = document.querySelector("#payment");
  const totalInterest = document.querySelector("#interest");
  const totalAmount = document.querySelector("#total");
  // formula variables
  const p = parseFloat(principal.value);
  const r = parseFloat(rate.value);
  const t = parseFloat(time.value);

  // calculate total interest
  const interest = (p * t * r) / 100;
  // calculate monthly payment
  const payment = ((interest + p) / (t * 12)).toFixed(2);
  // calculate total amount paid
  const total = (interest + p).toFixed(2);

  if (isFinite(payment)) {
    monthlyPayment.innerHTML = Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(payment);
    totalInterest.innerHTML = Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(interest);
    totalAmount.innerHTML = Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(total);

    // hide loader
    button.classList.remove("loading");
    // show results
    results.classList.remove("hide");
  } else {
    // show error
    showError("Please check your numbers and try again.");
    // hide loader
    button.classList.remove("loading");
  }
}

function showError(error) {
  // create error
  const errorMessage = document.createElement("div");
  const calculate = document.querySelector("#calculate");

  errorMessage.className = "error";
  errorMessage.appendChild(document.createTextNode(error));
  simpleInterest.insertBefore(errorMessage, calculate);
  // clear error
  setTimeout(clearError, 2000);
}

function clearError() {
  // remove error
  document.querySelector(".error").remove();
}

button.addEventListener("click", (e) => {
  console.log("Calculating...");
  // show loader
  button.classList.add("loading");

  // set timeout
  setTimeout(calculateResults, 2000);

  // prevent page from reloading on submit
  e.preventDefault();
});
