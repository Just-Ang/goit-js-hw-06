const formEl = document.querySelector('.login-form');
console.log(formEl);


const handleSubmit = (event)  => {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        window.alert('Всі поля повинні бути заповнені!');
      }

      const data = {
        Login: `${email.value}`,
        Password: `${password.value}`,
      }
      console.log(data);

      
      event.currentTarget.reset();

}

formEl.addEventListener("submit", handleSubmit);


