# Hello, voila ma To Do List

<p>Je vous présente ma version de la To do list sous un format Kanban. Les différentes colonnes de l'application représentent les différents status d'avancement possible pour les taches. Le système de drag and drop ayant déjà été vue durant ma formation, j'ai voulu innover avec un système de défilement des taches dans les colonnes.</p></br> 

<p>J'ai effectué ce travail en front avec react / redux. Je fais appel à mon serveur grace à une requête Axios dans mon middleware pour me renvoyer quelques exemples de taches et les afficher au premier rendu grâce à un useEffect. Les mapStateToProps et les mapDispatchToProps sont directement dans les components, car à mon sens pour une petite application comme celle-ci cela apporte davantage de lisibilité au code que de passer par des containers en plus des components.</p> </br>
<p>J'ai utilisé Sass et de l'écriture BEM dans mes classes pour réaliser quelques petites choses en Css.</br>
De plus l'application est responsive.</p>

<p>Pour le coté back, le serveur à été construit en Node.js en utilisant Express. Le contenu est simple et à juste pour charge de renvoyer un .json avec une liste de tâches.</p>

****

## Pour démarrer le back:
<p>
le back est sur le port localhost:3001 </br>
Après avoir cloné le repo: </br>
1 => npm i  </br>
2 => npm start </br>
</p>

## Pour démarrer le front:
<p>
le front est sur le port localhost:3000 </br>
Après avoir cloné le repo: </br>
1 => cd .\to-do-list-front\</br>
2 => npm i  </br>
3 => npm start </br>
</p>

****
## Résultats:
### Front =>
![alt text](./toDoList.png "Front Result")

### Back =>
![alt text](./toDoListBACK.png "Back Result")