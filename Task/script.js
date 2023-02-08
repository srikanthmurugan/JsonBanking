

      function signUp() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.username == username);
        
        if (!user) {
          users.push({
            username: username,
            password: password,
            balance: 0
          });
          
          localStorage.setItem("users", JSON.stringify(users));
          alert("Register successful");
          
        } else {
          alert("Username already taken");
        }
      }
      
      const form = document.getElementById("form");

      form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
  
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.username == username && u.password == password);
    
      if (user) {
        alert("Log in successful");
        window.location.replace('/functions.html');
      
      } else {
        alert("Invalid username or password");
        return ;
      
      }
  });
  
  
 
      
      function deposit() {
        let username = document.getElementById("username").value;
        let amount = parseFloat(document.getElementById("amount").value);
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.username == username);
        
        if (user) {
          user.balance += amount;
          localStorage.setItem("users", JSON.stringify(users));
          alert("Deposit successful. New balance: " + user.balance);
        } else {
          alert("Invalid username");
        }
      }
      
      function withdraw() {
        let username = document.getElementById("username").value;
        let amount = parseFloat(document.getElementById("amount").value);
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.username == username);
        
        if (user) {
          if (user.balance >= amount) {
            user.balance -= amount;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Withdrawal successful. New balance: " + user.balance);
          } else {
            alert("Insufficient funds");
          }
        } else {
          alert("Invalid username");
        }
      }
      
      function viewDetails() {
        let username = document.getElementById("username").value;
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.username == username);
        
        if (user) {
          alert("Username: " + user.username + "\nBalance: " + user.balance);
        } else {
          alert("Invalid username");
        }
    }
