const tottalliRef = document.querySelectorAll('.item');
console.log('Number of categories:', tottalliRef.length);
[...tottalliRef].forEach(element => {
    console.log('Category:', element.querySelector("h2").textContent);
    console.log('Elements:', element.querySelectorAll("li").length);
})