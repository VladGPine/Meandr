{
  const applicationForm = document.forms.application;

  const formValidate = evt => {
    const name = applicationForm.elements.name,
          email = applicationForm.elements.email,
          tel = applicationForm.elements.tel,
          textarea = applicationForm.elements.textarea,
          namePattern = /[а-яё]{2,}\s+[а-яё]{2,}/i,
          emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          telPattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
          textareaPattern = /[а-яё\d]+(\s+[а-яё\d]+)?/;
    
    if (!name.value.match(namePattern)) {
      evt.preventDefault();
      const error = document.createElement("div");
      error.textContent = 'Укажите, пожалуйста, фамилию и имя';
      error.className = "text-error";
      name.parentNode.appendChild(error);
      toggleNameError();
    }

    if (!email.value.toLowerCase().match(emailPattern)) {
      evt.preventDefault();
      const error = document.createElement("div");
      error.textContent = 'Укажите, пожалуйста, email';
      error.className = "text-error";
      email.parentNode.appendChild(error);
    }

    if (!tel.value.match(telPattern)) {
      evt.preventDefault();
      const error = document.createElement("div");
      error.textContent = 'Укажите, пожалуйста, номер телефона';
      error.className = "text-error";
      tel.parentNode.appendChild(error);
    }

    if (!textarea.value.match(textareaPattern)) {
      evt.preventDefault();
      const error = document.createElement("div");
      error.textContent = 'Пожалуйста, напишите о себе';
      error.className = "text-error";
      textarea.parentNode.appendChild(error);
    }

    
  }

  // const showError = (label, textError) => {
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