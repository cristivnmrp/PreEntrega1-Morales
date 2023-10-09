const pizza = {
    masa: "",
    ingredientes: []
};

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

pizza.masa = prompt("Hola, bienvenido a Crea tu pizza ¿Qué masa de pizza deseas? (Delgada, Tradicional o Integral)");

let total = 0;

while (true) {
    const ingrediente = prompt("Agrega uno o más ingredientes a tu pizza (o escribe 'listo' para terminar), los ingredientes y sus valores son los siguientes:  pepperoni  $2.5,     champiñones  $1.5,   jamón  $2.0,   pimientos  $1.0,   cebolla  $1.0,   aceitunas  $1.5   choclo  $1.0,  tomate  $1.0,  carne  $2.0,  pollo  $2.0,    y   extraqueso  $2.0")
    
    if (ingrediente.toLowerCase() === "listo") {
        break;
    }
    
    if (preciosIngredientes.hasOwnProperty(ingrediente.toLowerCase())) {
        const cantidad = parseInt(prompt(`¿Cuánta cantidad de ${ingrediente} deseas agregar?`));
        if (isNaN(cantidad)) {
            alert("Por favor, ingresa una cantidad válida.");
            continue;
        }
        
        const precioIngrediente = preciosIngredientes[ingrediente.toLowerCase()];
        const costoIngrediente = precioIngrediente * cantidad;
        
        pizza.ingredientes.push({ ingrediente, cantidad, costoIngrediente });
        total += costoIngrediente;
    } else {
        alert("El ingrediente ingresado no está en la lista de opciones.");
    }
}

let mensajePizza = "¡Aquí está tu pizza!\n";
mensajePizza += "Masa de pizza: " + pizza.masa + "\n";
mensajePizza += "Ingredientes:\n";
for (let i = 0; i < pizza.ingredientes.length; i++) {
    mensajePizza += `- ${pizza.ingredientes[i].cantidad} ${pizza.ingredientes[i].ingrediente} - $${pizza.ingredientes[i].costoIngrediente.toFixed(2)}\n`;
}
mensajePizza += `El valor de tu pizza es: $${total.toFixed(2)}`;

alert(mensajePizza);

