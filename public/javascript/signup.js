const { response } = require("express");

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }

  }

}



document.querySelector('signup-form').addEventListener('submit', signupFormHandler);



