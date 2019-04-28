{
  const applicationForm = document.forms.application;
  
  // Создаем ошибку
  const createError = text => {
    const error = document.createElement("div");
    error.className = "text-error";
    error.textContent = text;
    return error;
  }

  // Сбрасываем текст ошибки, чтобы он не дублировался
  const clearErrors = () => {
    const errors = applicationForm.querySelectorAll('.text-error');
    errors.forEach(error => {
      error.remove();
    })
  }

  // Валидируем все поля по регуляркам и для каждого поля с проваленной валидацией, очищаем его
  const checkInputs = (input, pattern, text) => {
    if (!input.value.match(pattern)) { // <--Валидируем
      const error = createError(text)
      input.parentNode.appendChild(error);
      input.value = ''; // <--Очищаем
    }
  }

  const formValidate = evt => {
    const name = applicationForm.elements.name,
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

      checkInputs(name, namePattern, 'Укажите, пожалуйста, фамилию и имя')
      checkInputs(email, emailPattern, 'Укажите, пожалуйста, email')
      checkInputs(tel, telPattern, 'Укажите, пожалуйста, номер телефона')
      checkInputs(textarea, textareaPattern, 'Пожалуйста, напишите о себе')
    }
  }
  applicationForm.addEventListener("submit", formValidate);
}
