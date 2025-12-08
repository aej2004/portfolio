function checkPass() {
    const correct = "berry2026";
    const input = document.getElementById("passInput").value;
  
    if(input === correct){
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        document.getElementById("passError").style.display = "block";
    }
  }