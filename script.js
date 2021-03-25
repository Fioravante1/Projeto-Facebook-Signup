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
const errorMessage = document.getElementById('error-message');
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
  const genderCustom = document.getElementById('gender-custom');
  if (e.target.id === 'male' || e.target.id === 'female') {
    genderCustom.style.display = 'none';
  } else {
    genderCustom.style.display = '';
  }
}

function validate() {
  gender = document.querySelector('input[name="gender"]:checked');
  if (firstname.value && lastname.value && phoneMail.value && password.value && birthdate.value && gender) {
    errorMessage.style.display = 'none';
    console.log('campos preenchidos');
    return true;
  }
}

function clearRightContent() {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  document.querySelector('.right-content').textContent = '';
}

function newContent(e) {
  e.preventDefault();
  if (validate()) {
    const content = document.createElement('p');
    content.id = 'new-content';
    content.innerHTML = 'Olá, ';
    content.innerHTML += firstname.value;
    content.innerHTML += ` ${lastname.value}<br />`;
    content.innerHTML += ` ${phoneMail.value}<br />`;
    content.innerHTML += ` ${birthdate.value}<br />`;
    // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    content.innerHTML += gender.value;
    clearRightContent();
    document.querySelector('.right-content').appendChild(content);
  } else {
    errorMessage.style.display = '';
  }
}

document.getElementById('gender-custom').style.display = 'none';
errorMessage.style.display = 'none';

// console.log(document.querySelector('input[name="gender"]:checked').value);
const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', newContent);

const rdMale = document.getElementById('male');
rdMale.addEventListener('change', toggleDisplay);

const rdFemale = document.getElementById('female');
rdFemale.addEventListener('change', toggleDisplay);

const rdOther = document.getElementById('other');
rdOther.addEventListener('change', toggleDisplay);
