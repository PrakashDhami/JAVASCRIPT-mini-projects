const arr = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink",
            "Cyan", "Magenta", "Brown", "Black", "White", "Gray", "Lime",
            "Indigo", "Violet", "Turquoise", "Maroon", "Olive", "Navy"];

const hexColour = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const simple = document.querySelector("#simple");
const hex = document.querySelector("#hex");
const body = document.querySelector("body");
const colour = document.querySelector("#color");

const randomNumber1 = () =>{
    return Math.floor(Math.random() * arr.length);
}
const randomNumber2 = () =>{
    return Math.floor(Math.random() * hexColour.length);
}

simple.addEventListener("click", () => {
    const x = randomNumber1();
    console.log(arr[x]);
    body.style.backgroundColor = arr[x];
    colour.textContent = arr[x];
});


const hexColourGenerator = () =>{
    let  y = "#";
    for(let i = 0 ; i < 6; i++){
        const random = randomNumber2();
        y = y + hexColour[random];
    }
    return y;
}

hex.addEventListener("click", () => {
    const hexColor = hexColourGenerator();
    body.style.backgroundColor = hexColor;
    colour.textContent = hexColor;
});