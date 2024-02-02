function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
  
    // Store the information in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
  
    // Optionally, you can provide feedback to the user
    alert('Thank You for Submitting the Information');
  
    // You can also redirect the user to another page or perform other actions as needed
  }
  
  // Storing data in local storage
localStorage.setItem("username", "John");

// Retrieving data from local storage
var storedUsername = localStorage.getItem("username");
console.log("Stored Username: " + storedUsername);
