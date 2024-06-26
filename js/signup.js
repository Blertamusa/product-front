
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = './product.html';
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    };
   
  
    fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.href = '../product.html';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });