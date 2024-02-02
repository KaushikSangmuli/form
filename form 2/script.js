function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
  
    // Store the information in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
  
    // Optionally, you can provide feedback to the user
    alert('Information stored in local storage.');
  
    // You can also redirect the user to another page or perform other actions as needed
  }
  