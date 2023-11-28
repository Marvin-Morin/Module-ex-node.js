// Importation des modules nécessaires
import express from 'express';  // Importe le module Express pour la création d'applications web
import bodyParser from 'body-parser';  // Importe le module body-parser pour traiter les données du corps de la requête HTTP
import path from 'path';  // Importe le module path pour travailler avec les chemins de fichiers et de répertoires

// Initialisation de l'application Express
const app = express();  // Initialise une application Express
const PORT = 3000;  // Définit le port sur lequel le serveur écoutera

// Obtenez le chemin du répertoire actuel à partir de import.meta.url
const __filename = new URL(import.meta.url).pathname;  // Obtient le chemin du fichier en cours d'exécution
const __dirname = path.dirname(__filename);  // Obtient le répertoire du fichier en cours d'exécution

app.set('view engine', 'ejs');  // Définit EJS comme moteur de vue
app.set('views', path.join(__dirname, 'views'));  // Définit le répertoire des vues en utilisant le chemin du répertoire actuel
app.set('views', 'C:/Users/TREMPLIN/Desktop/BACK/LANGUAGES/Node.js/module_test/views');  // Remplace le répertoire des vues par un chemin absolu spécifique

app.use(express.static('public'));  // Indique à Express d'utiliser le répertoire 'public' pour les fichiers statiques
app.use(bodyParser.urlencoded({ extended: true }));  // Active le middleware body-parser pour traiter les données de formulaire dans les requêtes POST

// Route pour la page d'accueil
app.get('/', (req, res) => {
    // Définir la variable recipe (assurez-vous de la définir correctement)
    const recipe = { /* définir votre objet recipe ici */ };
    res.render('index', { recipe });  // Rend la vue 'index' avec l'objet recipe comme données
});

// Importation des fonctions depuis le fichier functions.js
import { calcul, soustraire } from './functions/calcul.mjs';  // Importe deux fonctions depuis un fichier module
import { direBonjour } from './functions/bonjour.mjs';  // Importe deux fonctions depuis un fichier module

// Nouvelle route pour afficher les résultats des fonctions
app.get('/resultats', (req, res) => {
    // Appel des fonctions pour obtenir des résultats
    const somme = calcul(5, 5);
    const soustraction = soustraire(5, 9);
    const bonjour = direBonjour('Marvin');

    // Rend la vue 'index' avec les résultats comme données
    res.render('index', { somme, soustraction, bonjour });
});

// Lancement du serveur sur le port spécifié
app.listen(PORT, () => {
    console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
});
