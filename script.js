function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
  }
  