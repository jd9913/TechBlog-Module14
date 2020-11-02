

async function signupFormHandler(event) {
  event.preventDefault();

  const username=document.querySelector('#username-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  if (username && email && password) {
    fetch('/api/user/signup', {
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


document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);



