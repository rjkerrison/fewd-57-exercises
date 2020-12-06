// Search bar function, no idea how efficient it is, but it works

const searchButton = document.querySelector(".search-btn");
if (searchButton) {
  searchButton.addEventListener("click", function () {
    search();
  });
}

function search() {
  const gameArray = [
    {
      href: "ps4.html",
      name: ["Doom", "loop", "Horizon"],
    },
    {
      href: "xbox.html",
      name: ["Days Gone", "Days"],
    },
  ];

  const searchBar = document.querySelector(".search-bar").value.toLowerCase();
  for (i = 0; i < gameArray.length; i++) {
    let nameValue = Object.values(gameArray[i].name);
    nameValue.filter((element) => {
      element = element.toLowerCase();
      if (searchBar == element) {
        location.href = gameArray[i].href;
      } else {
        console.log(element);
      }
    });
  }
}

// Main page slider function
const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");
if (leftBtn) {
  leftBtn.addEventListener("click", function () {
    document.getElementById("slide").scrollLeft -= 180;
  });
}
if (rightBtn) {
  rightBtn.addEventListener("click", function () {
    document.getElementById("slide").scrollLeft += 180;
  });
}

// Form Validation

const formBtn = document.getElementById("formBtn");
if (formBtn) {
  formBtn.addEventListener("click", function (e) {
    e.preventDefault();
    formValidation();
  });
}
function formValidation() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const phoneno = document.getElementById("phoneNum").value;
  const message = document.querySelector(".message").value;
  const error = document.getElementById("error-message");
  const letters = /^[A-Za-z]+$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNum = /^\d{10}$/;
  let text;
  if (!fName.match(letters)) {
    text = "Please input alphabet characters only";
    error.innerHTML = text;
    return false;
  } else if (!lName.match(letters)) {
    text = "Please input alphabet characters only";
    error.innerHTML = text;
    return false;
  } else if (!email.match(mailformat)) {
    text = "Invalid email address";
    error.innerHTML = text;
    return false;
  } else if (!phoneno.match(phoneNum)) {
    text = "Invalid phone number";
    error.innerHTML = text;
    return false;
  } else if (message.length <= 40) {
    text = "Message has to be more than 40 characters long";
    error.innerHTML = text;
    return false;
  } else {
    alert("success");
    return true;
  }
}

// Cookies
const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key} = ${value}`;
  },
};
const storageType = cookieStorage;
const consentPropertyName = "consent";

const showPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("accept");

  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.remove("active");
  };
  acceptBtn.addEventListener("click", acceptFn);
  if (showPopup()) {
    consentPopup.classList.add("active");
  }
};

// basket Function
const addTobasket = document.querySelectorAll(".add-to-basket");

const products = [
  {
    name: "Doom Eternal",
    tag: "xbox_doom",
    price: 15.99,
    inBasket: 0,
  },
  {
    name: "Cyberpunk 2077",
    tag: "cyberpunk-xbox",
    price: 49.99,
    inBasket: 0,
  },
  {
    name: "Final Fantasy VII",
    tag: "final-xbox",
    price: 29.97,
    inBasket: 0,
  },
];
// eventListener for all "submit" buttons
for (let i = 0; i < addTobasket.length; i++) {
  addTobasket[i].addEventListener("click", () => {
    basketNumbers(products[i]);
    totalCost(products[i]);
  });
}

// We get the value of items that we have added in the localStorage and display it in our .basket span
function onLoadbasketNumbers() {
  let productNumbers = localStorage.getItem("basketNumbers");

  if (productNumbers) {
    document.querySelector(".basket span").textContent = productNumbers;
  }
}

// Everytime we press a "submit" button we get the value(how many times we've pressed it),
//  save it in localStorage and we set it in the .basket span as well, also on page reset we save the value because we use localStorage
// but we don't save the value for the .basket span
function basketNumbers(product) {
  let productNumbers = localStorage.getItem("basketNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("basketNumbers", productNumbers + 1);
    document.querySelector(".basket span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("basketNumbers", 1);
    document.querySelector(".basket span").textContent = 1;
  }
  setItems(product);
}
// setItems in localStorage
function setItems(product) {
  let basketItems = localStorage.getItem("productsInBasket");
  basketItems = JSON.parse(basketItems);

  if (basketItems != null) {
    if (basketItems[product.name] == undefined) {
      basketItems = {
        ...basketItems,
        [product.name]: product,
      };
    }
    basketItems[product.name].inBasket += 1;
  } else {
    product.inBasket = 1;
    basketItems = {
      [product.name]: product,
    };
  }
  console.log("My basket items are", basketItems);
  localStorage.setItem("productsInBasket", JSON.stringify(basketItems));
}
function totalCost(product) {
  let basketCost = localStorage.getItem("totalCost");

  if (basketCost != null) {
    basketCost = parseFloat(basketCost);
    localStorage.setItem(
      "totalCost",
      basketCost + product.inBasket * product.price
    );
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displaybasket() {
  let basketItems = localStorage.getItem("productsInBasket");
  basketItems = JSON.parse(basketItems);
  let productContainer = document.querySelector(".products");
  let basketCost = localStorage.getItem("totalCost");
  if (basketItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(basketItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
      <img src="./images/${item.tag}.jpg">
      <span>${item.name}</span>
   </div>
   <div class="price">£${item.price}</div>
   <div class="quantity">
 <span>${item.inBasket}</span>
 </div>

      <div class="totalPrice"> £${item.inBasket * item.price} </div>

     `;
    });
    productContainer.innerHTML += `<div class="basketTotalContainer">
    <h4 class="basketTotalTitle" > Basket Total</h4>
    <h4 class="basketTotal">£${basketCost}</h4>
    </div>`;
  }
}
onLoadbasketNumbers();
displaybasket();
