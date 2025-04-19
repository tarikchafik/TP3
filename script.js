// 1. Création de la div
const nouvelleDiv = document.createElement("div");

// 2. Création du paragraphe à l’intérieur de la div
const paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe";

// 3. Ajout du paragraphe à la div
nouvelleDiv.appendChild(paragraphe);

// 4. Ajout de la div dans le conteneur de la page
document.getElementById("container").appendChild(nouvelleDiv);

// 5. Modification du texte du paragraphe
paragraphe.textContent = "Le texte a été modifié";

// 6. Modification du style CSS du paragraphe
paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";
paragraphe.style.padding = "10px";

// 7. Ajout d’un événement click à la div
nouvelleDiv.addEventListener("click", () => {
  paragraphe.textContent = "Un clic a été détecté";
});
