let investmentTop = document.querySelector('.investment-signup__top');
let investmentBottom = document.querySelector('.investment-signup__bottom');
let arrow = document.querySelector('.accordion-signup__item img');

investmentTop.addEventListener('click' , accordionInvestment);

function accordionInvestment(){
  if(document.querySelector('.investment-signup__bottom.active')){
    investmentBottom.classList.remove("active");
    arrow.classList.remove("active");
    investmentTop.classList.remove("active");
  }else{
    investmentBottom.classList.add("active");
    arrow.classList.add("active");
    investmentTop.classList.add("active");
  }
}

let allPrice = document.querySelectorAll('.investment-signup__bottom p');
let mainPrice = document.querySelector('.investment-signup__top p');
let divMainPrice = document.querySelector('.investment-signup ');

allPrice.forEach(function(element){
  element.addEventListener('click' , function (){
    mainPrice.innerHTML = element.innerHTML;
    investmentTop.classList.remove("active");
    investmentBottom.classList.remove("active");
    arrow.classList.remove("active");
  });
});
//Validation for section signup
let btnSignup = document.querySelector('.body-signup__btn');
let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
let regNameSurname = /^\p{L}{2,14}$/u;
let regzip = /^\d+/;
let nameApl = document.querySelector('.signup__name');
let surnameApl = document.querySelector('.signup__surname');
let email = document.querySelector('.signup__email');
let phone = document.querySelector('.signup__phone');
let zip = document.querySelector('.signup__zip');
let data = document.querySelector('.accordion-signup__first');
//clack on Button
btnSignup.addEventListener('click' , checkAplication);

function checkAplication(){
  //name
  checkInputs(nameApl,regNameSurname,'signup__name','green-active','red-active');
  //surname
  checkInputs(surnameApl,regNameSurname,'signup__surname','green-active','red-active');
  //email
  checkInputs(email,regEmail,'signup__email','green-active','red-active');
  //phone
  checkInputs(phone,regPhone,'signup__phone','green-active','red-active');
  //phone
  checkInputs(zip,regzip,'zip','green-active','red-active');
  //change border in selector
  if(mainPrice.textContent == "Investment Amount"){
    divMainPrice.classList.add("red-active");
  }else{
    if(document.querySelector('.investment-signup.red-active')){
      divMainPrice.classList.remove("red-active");
    }
    divMainPrice.classList.add("green-active");
  }
  //add class to zip input
  data.classList.add("green-active");
  //check all items and send email
  if(document.querySelector('.red-active')){
    return;
}else{
    nameApl.value = "";
    surnameApl.value = "";
    email.value = "";
    phone.value = "";
    zip.value = "";
    data.value = "2003-01-01";
    document.querySelector('.investment-signup__top p').textContent = "Investment Amount"
    nameApl.classList.remove("green-active");
    surnameApl.classList.remove("green-active");
    email.classList.remove("green-active");
    phone.classList.remove("green-active");
    zip.classList.remove("green-active");
    data.classList.remove("green-active");
    divMainPrice.classList.remove("green-active");
  }
}
//check ever inputs
function checkInputs(variavle,reg,str,greenField,redField){
  if(variavle.value.match(reg)){
    if(document.querySelector(`.${str}.${redField}`)){
      variavle.classList.remove(redField);
    }
    variavle.classList.add(`${greenField}`);
  }else{
    if(document.querySelector(`.${str}.${greenField}`)){
      variavle.classList.remove(`${greenField}`);
    }
    variavle.classList.add(redField);
  }
}

//Validation for section signup help
let helpName = document.querySelector('.item__name');
let helpEmail = document.querySelector('.item__email');
let helpMessage = document.querySelector('.item__message');
let helpBtn = document.querySelector('.right-help__btn');
let crossPopup = document.querySelector('.help-popup img');
let helpPopUp = document.querySelector('.help-popup');
let popUpAgree = document.querySelector('.help-popup__agree');
let popUpDisagree = document.querySelector('.help-popup__disagree');


helpBtn.addEventListener('click' , checkHelpsInputs);

function checkHelpsInputs(){
  checkInputs(helpName,regNameSurname,'item__name','help-green','help-red');
  checkInputs(helpEmail,regEmail,'item__email','help-green','help-red');
  if(helpMessage.value == ""){
    if(document.querySelector('.item__message.help-green')){
      helpMessage.classList.remove("help-green");
    }
    helpMessage.classList.add("help-red");
  }else{
    if(document.querySelector('.item__message.help-red')){
      helpMessage.classList.remove("help-red");
    }
    helpMessage.classList.add("help-green");
  }

  if(document.querySelector('.help-red')){
    return
  }else{
    helpPopUp.classList.add("active");
  }
}
crossPopup.addEventListener('click' , disagreeSend);
popUpAgree.addEventListener('click' , agreeSend);
popUpDisagree.addEventListener('click' , disagreeSend);

function agreeSend(){
  helpName.value = "";
  helpEmail.value = "";
  helpMessage.value = "";
  helpName.classList.remove("help-green");
  helpEmail.classList.remove("help-green");
  helpMessage.classList.remove("help-green");
  disagreeSend();
}
function disagreeSend(){
  helpPopUp.classList.remove("active");
}