
async function signupFormHandler(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const emailEl=document.querySelector('#email-signup').value.trim();
  
  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}



document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
