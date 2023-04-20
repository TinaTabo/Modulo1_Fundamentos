// Aplicacion que propone recetas en funcion del ingrediente principal.
let ingredientePrincipal = "calamar";

switch (ingredientePrincipal) {
    case "merluza":
        console.log("Merluza en salsa verde");
        break;
    case "ternera":
        console.log("Ternera guisada");
        break;
    case "pasta":
        console.log("Pasta carbonara");
        break;
    case "patata":
        console.log("Tortilla de patatas");
        break;
    case "calamar":
        console.log("Calamares en su tinta");
        break;
    case "solomillo":
        console.log("Solomillo al Pedro Jimenez");
        break;
    case "manzana":
        console.log("Tarta de manzana");
        break;
    case "harina":
        console.log("Magdalenas");
        break;
    case "huevo":
        console.log("Tortilla francesa");
        break;
    case "fresa":
        console.log("Batido de fresa");
        break;
    default:
        console.log("Imposible proponer receta");
        break;
}