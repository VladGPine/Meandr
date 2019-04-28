"use strict";

{
  var applicationForm = document.forms.application; 

  var createError = function createError(text) {
    var error = document.createElement("div");
    error.className = "text-error";
    error.textContent = text;
    return error;
  }; 


  var clearErrors = function clearErrors() {
    var errors = applicationForm.querySelectorAll('.text-error');
    errors.forEach(function (error) {
      error.remove();
    });
  }; 


  var checkInputs = function checkInputs(input, pattern, text) {
    if (!input.value.match(pattern)) {
      var error = createError(text);
      input.parentNode.appendChild(error);
      input.value = ''; 
    }
  };

  var formValidate = function formValidate(evt) {
    var name = applicationForm.elements.name,
        email = applicationForm.elements.email,
        tel = applicationForm.elements.tel,
        textarea = applicationForm.elements.textarea,
        inputs = applicationForm.querySelectorAll('.feedback-form__input'),
        namePattern = /^[a-zа-яё]+\s[a-zа-яё]+$/i,
        emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        telPattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        textareaPattern = /^[а-яё\d\s\S]+$/gim;

    if (!name.value.match(namePattern) || !email.value.toLowerCase().match(emailPattern) || !tel.value.match(telPattern) || !textarea.value.match(textareaPattern)) {
      evt.preventDefault();
      clearErrors();
      checkInputs(name, namePattern, 'Укажите, пожалуйста, фамилию и имя');
      checkInputs(email, emailPattern, 'Укажите, пожалуйста, email');
      checkInputs(tel, telPattern, 'Укажите, пожалуйста, номер телефона');
      checkInputs(textarea, textareaPattern, 'Пожалуйста, напишите о себе');
    }
  };

  applicationForm.addEventListener("submit", formValidate);
}