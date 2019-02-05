const form = document.getElementById('form');
const slider = document.getElementById('curly');
const curlyDisplay = document.getElementById('curly-display');

slider.addEventListener('change', function(event) {
    event.preventDefault();
    curlyDisplay.textContent = slider.value;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.elements.name.value;
    const streetAddress = form.elements.street.value;
    const city = form.elements.city.value;
    const state = form.elements.state.value;
    const key = form.elements.key.value;
    
    const pizza = form.elements.toppings;
    const pizzaPreference = [];
    for(let i = 0; i < pizza.length; i++) {
        const pizzaSelection = pizza[i];
        if(pizzaSelection.checked){
            pizzaPreference[i] = pizzaSelection.value;
        } 
    }

    const application = {
        name: name,
        address: [streetAddress, city, state],
        key: key,
        pizza: pizzaPreference,
        curliness: slider.value
    };
    console.log(application);
});
