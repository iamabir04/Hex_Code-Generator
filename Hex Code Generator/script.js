const text= document.querySelector("span");
const button = document.getElementById("btn"); 
const copyBtn = document.getElementById("copyBtn");

button.addEventListener('click', function(){
    text.innerText = `#${Math.floor(Math.random()* 0xffffff).toString(16)}`;
    document.body.style.background = text.innerText;
    
});

copyBtn.addEventListener("click", function(){
    copy(text.textContent);
    alert("Copied to Clipboard 🚀");
});

const copy = function(text){navigator.clipboard.writeText(text);};