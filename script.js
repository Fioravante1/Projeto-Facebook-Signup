const btnLogin = document.getElementById('button-login');
const entradaEmail = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(entradaEmail.value);
});

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneMail = document.getElementById('phone-email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
let gender;
// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

// function customGender() {
//   if (!document.getElementById('gender-custom')) {
//     console.log('personalizado');
//     const gender = document.createElement('input');
//     gender.id = 'gender-custom';
//     gender.type = 'text';
//     gender.placeholder = 'Gênero (opcional)';
//     gender.name = 'gender-custom';
//     // document.querySelector('.right-content form').insertBefore(gender, document.getElementById('facebook-register'));
//     document.getElementById('facebook-register').insertAdjacentElement("beforebegin", gender);
//   }
// }

// https://stackoverflow.com/questions/8454079/toggle-displaynone-style-with-javascript
function toggleDisplay(e) {
  if (e.target.id === 'male' || e.target.id === 'female') {
    document.getElementById('gender-custom').style.display = 'none';
  } else {
    document.getElementById('gender-custom').style.display = '';
  }
}

function validate() {
  gender = document.querySelector('input[name="gender"]:checked');
  const val1 = firstname.value && lastname.value && phoneMail.value;
  const val2 = password.value && birthdate.value && gender;
  if (val1 && val2) {
    document.getElementById('error-message').style.display = 'none';
    console.log('campos preenchidos');
    return true;
  } 
  // else {
    // document.getElementById('error-message').style.display = '';
    // console.log('algum campo vazio');
    // alert('Campos inválidos');
    // return false;
  // }
}

function clearRightContent() {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  document.querySelector('.right-content').textContent = '';
}

function newContent(e) {
  e.preventDefault();
  if (validate()) {
    const newContent = document.createElement('p');
    newContent.id = 'new-content';
    newContent.innerHTML = 'Olá, ';
    newContent.innerHTML += firstname.value;
    newContent.innerHTML += ' ' + lastname.value + '<br />';
    newContent.innerHTML += ' ' + phoneMail.value + '<br />';
    newContent.innerHTML += ' ' + birthdate.value + '<br />';
    // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    newContent.innerHTML += gender.value;
    clearRightContent();
    document.querySelector('.right-content').appendChild(newContent);
  } else {
    document.getElementById('error-message').style.display = '';
  }
}

document.getElementById('gender-custom').style.display = 'none';
document.getElementById('error-message').style.display = 'none';

// console.log(document.querySelector('input[name="gender"]:checked').value);
const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', newContent);

const rdMale = document.getElementById('male');
rdMale.addEventListener('change', toggleDisplay);

const rdFemale = document.getElementById('female');
rdFemale.addEventListener('change', toggleDisplay);

const rdOther = document.getElementById('other');
rdOther.addEventListener('change', toggleDisplay);
