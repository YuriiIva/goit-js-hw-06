let counterValue =0;

const numRef = document.querySelector('#value');
const buttonRefs = document.querySelectorAll('button');

[...buttonRefs].forEach(item => {
    item.addEventListener('click',addValue);
    function addValue(e) {
        if(e.target.dataset.action === "decrement") {
            counterValue -= 1;
            numRef.textContent = counterValue;
            console.log(e.target.dataset.action);
        };
        if(e.target.dataset.action === "increment") {
            counterValue += 1;
            numRef.textContent = counterValue;
            console.log(e.target.dataset.action);
        }
    }

})


