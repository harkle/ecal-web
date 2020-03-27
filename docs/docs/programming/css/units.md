---
id: units
title: Unités
sidebar_label: Unités
---

Il existe plusieurs systèmes d'unités utilisés pour définir la taille de vos éléments (largeur, marges, taille de police). L'indication d'une taille se compose toujours:

- d'un chiffre;
- suivi de l'abréviation de l'unité.

Par exemple:

- ```10px``` définit une dimension de 10 pixels;
- ```50%``` définissent une taille de 50 pour cent;

Les valeurs négatives sont précédées d'un ```-``` qui se colle au chiffre.

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

## Valeur absolue

Les valeurs absolues servent à définir une taille fixe pour élément, indépendamment de son parent. Cela permet par exemple de donner une largeur fixe à une image ou de paramétrer la taille de vos polices.

| Unité | Description    | Remarque                         |
| ----- |:-------------- |:-------------------------------- |
| px    | pixels         |                                  |
| cm    | centimètres    | **Ne jamais utiliser cette unité** |
| mm    | millimètres    | **Ne jamais utiliser cette unité** |
| in    | inches         | **Ne jamais utiliser cette unité** |
| pt    | points         | **Ne jamais utiliser cette unité** |
| pc    | picas          | **Ne jamais utiliser cette unité** |

Seuls les pixels sont une unité valable. Les autres viennent du domaine de l'imprimé et ne sont utilisées que si vous créez des feuilles de style pour l'impression.

## Valeurs relatives

| Unité | Description                                   |                      
| ----- |:--------------------------------------------- |
| %     | Relatif à l'élément parent                    |
| vw    | Relatif à la largeur de la fenêtre            |
| vh    | Relatif à la hauteur de la fenêtre            |
| em    | Relatif à la taille de la police de l'élément |
| rem   | Relatif à la taille de la police de base      |
