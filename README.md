# Prestashop exercice

## Mise en place :

## Install with Yarn

yarn global add @quasar/cli

## or install with NPM

npm install -g @quasar/cli

## Exercice :

# N'hésitez pas à refondre et changer tout ce qui vous semble mauvais !!!

1. Créer un magasin, module, Vuex avec le namespace "tasks" pour les plats
   dans src/store/ et y ajouter le tableau des dishes.

2. Créer un getter pour récupérer les dishes
   et afficher ces derniers sur la page Exercice.vue à l'aide du getter

3. Ajouter la possibilité de supprimer un élément (clic sur bouton supprimer)
   en utilisant des actions et des mutations.
   Afficher une dialog de confirmation avant de supprimer.

4. Ajouter une validation au formulaire src/components/FormDishes.vue - nom: obligatoire avec un maximum de 20 caractères. - description: maximum de 135 caractères. - La validation doit être déclenchée lorsque l'on clique sur Sauvegarder

5. Ajouter la possibilité d'ajouter un élément
   indice: utiliser l'attribut "action" pour différencier l'ajout de la modification

6. Ajouter la possibilité de modifier un élément

7. Si aucune description n'est fournie pour un dishes,
   afficher le texte "Aucune description fournie" en italique

8. Si aucune image n'est fournie, utiliser l'image statics/image-placeholder.png

9. Lié le store au localStorage (add, update, delete)

10. Optionnal : Ajouter une fonctionnalité “Pull to refresh” (simuler l'ajout et la mise à jour de repas avec un pull to refresh)

11. Optionnal : Refondre en composition-api


https://i.imgur.com/nkij0zO.jpeg