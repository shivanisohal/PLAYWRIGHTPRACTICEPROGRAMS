// Question 5 — Login Lockout After Failed Attempts

// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter value: "));

if(num===1)
{
    console.log("Login successfull");
}
else if(num===2){
    console.log("1 attempt left before lockout");
}

else{
    console.log("🔒 Account Locked — Contact support")
}