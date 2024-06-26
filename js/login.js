document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = './pages/product.html';
}); 

let userLoggedIn = false;

function isLoggedIn() {
  return userLoggedIn;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("productPage").addEventListener("click", function(event) {
    if (!isLoggedIn()) {
      alert("To view products, please log in with a valid account.");
      event.preventDefault(); 
    }
  });
});
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    username: formData.get('username'),
    password: formData.get('password')
  }; 

  fetch('http://localhost:8080/users', {
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


