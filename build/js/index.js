"use strict";

{
  var applicationForm = document.forms.application;

  var formValidate = function formValidate(evt) {
    var name = applicationForm.elements.name,
        email = applicationForm.elements.email,
        tel = applicationForm.elements.tel,
        textarea = applicationForm.elements.textarea,
        namePattern = /[а-яё]{2,}\s+[а-яё]{2,}/i,
        emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        telPattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        textareaPattern = /[а-яё\d]+(\s+[а-яё\d]+)?/;

    if (!name.value.match(namePattern)) {
      evt.preventDefault();
      var error = document.createElement("div");
      error.textContent = 'Укажите, пожалуйста, фамилию и имя';
      error.className = "text-error";
      name.parentNode.appendChild(error);
      toggleNameError();
    }

    if (!email.value.toLowerCase().match(emailPattern)) {
      evt.preventDefault();

      var _error = document.createElement("div");

      _error.textContent = 'Укажите, пожалуйста, email';
      _error.className = "text-error";
      email.parentNode.appendChild(_error);
    }

    if (!tel.value.match(telPattern)) {
      evt.preventDefault();

      var _error2 = document.createElement("div");

      _error2.textContent = 'Укажите, пожалуйста, номер телефона';
      _error2.className = "text-error";
      tel.parentNode.appendChild(_error2);
    }

    if (!textarea.value.match(textareaPattern)) {
      evt.preventDefault();

      var _error3 = document.createElement("div");

      _error3.textContent = 'Пожалуйста, напишите о себе';
      _error3.className = "text-error";
      textarea.parentNode.appendChild(_error3);
    }
  }; // const showError = (label, textError) => {
  //   label.classList.add('error');
  //   const inputError = document.createElement("div");
  //   inputError.classList.add('textError');
  //   inputError.textContent = textError;
  // }
  // const hideError = (label) => {
  //   label.classList.remove('error');
  //   if (label.lastElementChild.classList.contains('error-message')) {
  //     label.lastChild.remove();
  //   };
  // }
  // const formValidate = (evt) => {
  //   const name = applicationForm.elements.name,
  //         email = applicationForm.elements.email,
  //         tel = applicationForm.elements.tel,
  //         textarea = applicationForm.elements.textarea,
  //         namePattern = /[а-яё]{2,}\s+[а-яё]{2,}/i,
  //         emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  //         telPattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  //         textareaPattern = /[а-яё\d]+(\s+[а-яё\d]+)?/;
  //   hideError(name.parentNode);
  //   if (!name.value.match(namePattern)) {
  //     showError(name.parentNode, 'Укажите, пожалуйста, фамилию и имя');
  //     evt.preventDefault();
  //   }
  //   hideError(email.parentNode);
  //   if (!email.value.toLowerCase().match(emailPattern)) {
  //     showError(email.parentNode, 'Укажите, пожалуйста, email');
  //     evt.preventDefault();
  //   }
  //   hideError(tel.parentNode);
  //   if (!tel.value.match(telPattern)) {
  //     showError(tel.parentNode, 'Укажите, пожалуйста, номер телефона');
  //     evt.preventDefault();
  //   }
  //   hideError(textarea.parentNode);
  //   if (!textarea.value.match(textareaPattern)) {
  //     showError(textarea.parentNode, 'Пожалуйста, напишите о себе');
  //     evt.preventDefault();
  //   }
  // }


  applicationForm.addEventListener("submit", formValidate);
}