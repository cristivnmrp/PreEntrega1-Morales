const pizza = {
    masa: "",
    ingredientes: []
};

const pizzaJSON = JSON.stringify(pizza);

const pizzaInfoElement = document.getElementById("pizzaInfo");

const pizzaObj = JSON.parse(pizzaJSON);

// Definir precios de los ingredientes
const preciosIngredientes = {
    pepperoni: 2.5,
    champiñones: 1.5,
    jamón: 2.0,
    pimientos: 1.0,
    cebolla: 1.0,
    aceitunas: 1.5,
    choclo: 1.0,
    tomate: 1.0,
    carne: 2.0,
    pollo: 2.0,
    extraqueso: 2.0,
};

const pizza1 = {
    masa: prompt("Hola, bienvenido a Crea tu pizza ¿Qué masa de pizza deseas? (Delgada, Tradicional o Integral)"),
    ingredientes: [],
};

let total = 0;

while (true) {
    const ingrediente = prompt("Agrega uno o más ingredientes a tu pizza (o escribe 'listo' para terminar), los ingredientes y sus valores son los siguientes:  pepperoni $2.5, champiñones $1.5, jamón $2.0, pimientos $1.0, cebolla $1.0, aceitunas $1.5, choclo $1.0, tomate $1.0, carne $2.0, pollo $2.0, y extraqueso $2.0");

    if (ingrediente.toLowerCase() === "listo") {
        break;
    }

    const cantidad = parseInt(prompt(`¿Cuánta cantidad de ${ingrediente} deseas agregar?`));
    const precioIngrediente = preciosIngredientes[ingrediente.toLowerCase()] || 0;
    const costoIngrediente = precioIngrediente * (isNaN(cantidad) ? 0 : cantidad);

    if (costoIngrediente > 0) {
        pizza.ingredientes.push({ ingrediente, cantidad, costoIngrediente });
        total += costoIngrediente;
    } else {
        alert("El ingrediente ingresado no está en la lista de opciones.");
    }
}

const { masa, ingredientes } = pizza;

const mensajePizza = `¡Aquí está tu pizza!\nMasa de pizza: ${masa}\nIngredientes:\n${ingredientes.map(ing => `- ${ing.cantidad} ${ing.ingrediente} - $${ing.costoIngrediente.toFixed(2)}`).join('\n')}\nEl valor de tu pizza es: $${total.toFixed(2)}`;
alert(mensajePizza);

mensajePizza += "Ingredientes:\n";
for (let i = 0; i < pizza.ingredientes.length; i++) {
    mensajePizza += `- ${pizza.ingredientes[i].cantidad} ${pizza.ingredientes[i].ingrediente} - $${pizza.ingredientes[i].costoIngrediente.toFixed(2)}\n`;
}

mensajePizza += `El valor de tu pizza es: $${total.toFixed(2)}`;

pizzaInfoElement.textContent = mensajePizza;
