var product = document.querySelectorAll(" a li")
var btn = document.querySelector("#add")
var content = document.querySelector("#content")
var price = 0

product.forEach(function(item){
    item.onclick = function(){
        price += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent +  " ";
        if(content.innerHTML !=""){
            btn.style.display = "block"
         }
    }
})
btn.onclick = function(){
    console.log(price)
}