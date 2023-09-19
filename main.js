const pizza = {
    masa: "",
    ingredientes: []
};

pizza.masa = prompt("Hola, bienvenido a Crea tu pizza ¿Qué masa de pizza deseas? (Delgada, Tradicional o Integral)");

while (true) {
    const ingrediente = prompt("Agrega un ingrediente a tu pizza (o escribe 'listo' para terminar):");
    
    if (ingrediente.toLowerCase() === "listo") {
    break;
    }
    
    pizza.ingredientes.push(ingrediente);
}

let mensajePizza = "¡Aquí está tu pizza!\n";
mensajePizza += "Masa de pizza: " + pizza.masa + "\n";
mensajePizza += "Ingredientes:\n";
for (let i = 0; i < pizza.ingredientes.length; i++) {
    mensajePizza += "- " + pizza.ingredientes[i] + "\n";
}

alert(mensajePizza);
