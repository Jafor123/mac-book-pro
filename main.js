//Total Price get
function FinalTotal(val) {
  const finalAmount = document.getElementById("final-amount");
  finalAmount.innerHTML = val;
}
//Memory management part
function updateMemoryPrice(isDefault) {
  const memoryPrice = document.getElementById("memory-price");
  let memoryAmount = parseFloat(memoryPrice.innerHTML);
  const totalAmount = document.getElementById("total-amount");
  let totalPrice = parseFloat(totalAmount.innerHTML);
  if (memoryAmount == 0 && isDefault == false) {
    memoryPrice.innerHTML = 180;
    totalPrice += 180;
  } else if (memoryAmount == 180 && isDefault == true) {
    memoryPrice.innerHTML = 0;
    totalPrice -= 180;
  }
  totalAmount.innerHTML = totalPrice;
  FinalTotal(totalPrice);
}

// update memory Event
const defaultButton = document.getElementById("memory-default");
defaultButton.addEventListener("click", function () {
  updateMemoryPrice(true);
});

//default memory Event
const updateButton = document.getElementById("memory-update");
updateButton.addEventListener("click", function () {
  updateMemoryPrice(false);
});

// Storage Management part
function updateStrogate(firstBtn, secondBtn, thirdBtn) {
  const strogatePrice = document.getElementById("storage-price");
  let storageAmount = parseFloat(strogatePrice.innerHTML);
  const totalAmount = document.getElementById("total-amount");
  let totalPrice = parseFloat(totalAmount.innerHTML);

  if (storageAmount == 100 && firstBtn == true) {
    totalPrice -= 100;
    strogatePrice.innerHTML = 0;
  } else if (storageAmount == 180 && firstBtn == true) {
    totalPrice -= 180;
    strogatePrice.innerHTML = 0;
  } else if (storageAmount == 0 && secondBtn == true) {
    totalPrice += 100;
    strogatePrice.innerHTML = 100;
  } else if (storageAmount == 180 && secondBtn == true) {
    totalPrice -= 80;
    strogatePrice.innerHTML = 100;
  } else if (storageAmount == 0 && thirdBtn == true) {
    totalPrice += 180;
    strogatePrice.innerHTML = 180;
  } else if (storageAmount == 100 && thirdBtn == true) {
    totalPrice += 80;
    strogatePrice.innerHTML = 180;
  }

  totalAmount.innerHTML = totalPrice;
  FinalTotal(totalPrice);
}

//storage-256GB Event handler

const storage256GB = document.getElementById("storage-256GB");
storage256GB.addEventListener("click", function () {
  updateStrogate(1, 0, 0);
});

//storage-512GB Event handler
const storage512GB = document.getElementById("storage-512GB");
storage512GB.addEventListener("click", function () {
  updateStrogate(0, 1, 0);
});

//storage-1TB Event handler
const storage1TB = document.getElementById("storage-1TB");
storage1TB.addEventListener("click", function () {
  updateStrogate(0, 0, 1);
});

//Delivery management part
function updateDelivery(isDefault) {
  const deliveryPrice = document.getElementById("delivery-charge");
  let deliveryAmount = parseFloat(deliveryPrice.innerHTML);
  const totalAmount = document.getElementById("total-amount");
  let totalPrice = parseFloat(totalAmount.innerHTML);
  if (deliveryAmount == 0 && isDefault == false) {
    deliveryPrice.innerHTML = 20;
    totalPrice += 20;
  } else if (deliveryAmount == 20 && isDefault == true) {
    deliveryPrice.innerHTML = 0;
    totalPrice -= 20;
  }
  totalAmount.innerHTML = totalPrice;
  FinalTotal(totalPrice);
}

// update memory Event
const deliveryDefaultButton = document.getElementById("delivery-default");
deliveryDefaultButton.addEventListener("click", function () {
  updateDelivery(true);
});

//default memory Event
const deliveryUpdateButton = document.getElementById("delivery-update");
deliveryUpdateButton.addEventListener("click", function () {
  updateDelivery(false);
});

// Promo Code Apply

function promoCodeApply() {
  const promoField = document.getElementById("promo-field");
  let fieldValue = promoField.value;
  const finalAmount = document.getElementById("final-amount");
  let totalPrice = parseFloat(finalAmount.innerHTML);

  if (fieldValue == "stevekaku") {
    let tax = totalPrice * 0.2;
    totalPrice -= tax;
  } else {
    alert("reject");
  }
  promoField.value = "";
  FinalTotal(totalPrice);
}

// button handler
const promoButton = document.getElementById("promo-button");
promoButton.addEventListener("click", function () {
  promoCodeApply();
});
