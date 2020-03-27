---
id: units
title: Unités
sidebar_label: Unités
---

Il existe plusieurs système d'unité utilisées pour définir la taille de vos éléments (largeur, marges, taille de police). L'indication d'une taille se compose toujours:

- d'un chiffre;
- suivi de l'abréviation de l'unité.

Par exemple:

- ```10px``` définit une dimension de 10 pixels;
- ```50%``` définit une taille de 50 pourcents;

Les valeurs négatives sont précédée d'un ```-``` qui se colle au chiffre.

Voici quelques exemples:

```css
body {
  font-size: 16px;
}

header {
  height: 50px;
}

#logo {
  top: -25px;
}

.image-gallery {
  width: 50%;
  min-height: 50vh;
}


```

## Valeur absolues

Les valeurs absolues servent à définir une taille fixe pour élément, indépendement de son parent. Cela permet par exemple de donner une largeur fixe à une image ou de paramétrer la taille de vos polices.

| Unité | Description    | Remarque                         |
| ----- |:-------------- |:-------------------------------- |
| px    | pixels         |                                  |
| cm    | centimètres    | **Ne jamais utiliser cet unité** |
| mm    | millimètres    | **Ne jamais utiliser cet unité** |
| in    | inches         | **Ne jamais utiliser cet unité** |
| pt    | points         | **Ne jamais utiliser cet unité** |
| pc    | picas          | **Ne jamais utiliser cet unité** |

Seul les pixels sont une unité valables. Les autres viennent du domaine de l'imprimé et ne sont utilisée que si vous créez des feuilles de style pour l'impression.

## Valeurs relatives

| Unité | Description                                   |                      
| ----- |:--------------------------------------------- |
| %     | Relatif à l'élément parent                    |
| vw    | Relatif à la largeur de la fenêtre            |
| vh    | Relatif à la hauteur de la fenêtre            |
| em    | Relatif à la taille de la police de l'élément |
| rem   | Relatif à la taille de la police de base      |
