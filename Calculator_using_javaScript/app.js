let buttons = document.querySelectorAll(".buttons");

const display = document.querySelector(".show");

const clear = document.querySelector("#clear");


clear.addEventListener("click",() =>{
    display.innerText = "";
});



buttons.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("Boutton clickes !!!");
        const x = btn.innerText;
        
        if(x === "="){
            calculation(display.innerText);
        }
        else{
            display.innerText += x;
        }
    });
});




const calculation = (text) => {
    try {
        // Evaluate the expression
        const result = eval(text);
        display.innerText = result; // Display the result

        setTimeout(()=>{
            display.innerText="";
        },3000);
    } catch (error) {
        // If there's an error (e.g., invalid expression), display "Error"
        display.innerText = "Syntax Error";
    }

};