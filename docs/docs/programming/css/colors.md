---
id: colors
title: Couleurs de fond et de texte
sidebar_label: Couleurs
---

import BrowserWindow from '@site/src/components/BrowserWindow';

## Couleur de fond

Le paramètre ```background-color``` vous permet de définir la couleur de fond d'un élément.

Par exemple:

```css
a {
 background-color: red;
}
```

<BrowserWindow minHeight="150px" url="index.html">
  <a href="#" style={{backgroundColor: 'red'}}>Lien</a>
</BrowserWindow>

```css
body {
 background-color: gray;
}
```

<BrowserWindow minHeight="150px" url="index.html" backgroundColor="gray">
  <p>Ceci est un paragraphe de texte.</p>
</BrowserWindow>

## Couleur de texte

Le paramètre ```color``` vous permet de définir la couleur du textr d'un élément.

```css
.color-red {
  background-color: red;
}

a {
  color: cyan;
}
```

<BrowserWindow minHeight="150px" url="index.html">
  <menu style={{color: 'red'}}>
    <p>Ceci est un menu avec des liens</p>
    <a href="#" style={{color: 'cyan'}}>Lien 1</a> <a href="#" style={{color: 'cyan'}}>Lien 2</a>
  </menu>
</BrowserWindow>


## Notation des couleurs

Il existe trois façon de noter les couleurs en CSS.

### Nom de couleur

Vous pouvez appeler une couleur par son nom anglais. Il existe 140 couleurs prédéfinies sur le web. Dans la mesure où vous choisissez des teintes particulière dans votre design, utiliser les noms de couleurs n'a que peu d'intérêt.

<a href="https://www.w3schools.com/cssref/css_colors.asp" target="_blank">Liste des noms de couleurs</a>

### Code hexadécimal

Chaque couleur peut être représentée par sa valeur *Rouge Vert Bleu* écrit sous la forme d'une code héxadécimal (en base 16).

- cette notation commence toujours par le caractère #;
- les valeur *Rouge Vert Bleu* sont ensuite chacune définie par un code compris entre ```00``` et ```ff```.

Par exemple:

```css
color: #ffffff; /* Blanc */
color: #000000; /* Noir */
color: #ff9900; /* Orange */
color: #00ff00; /* Vert pur */
```

La majeure partie des logiciels de CAO vous permette de copier la référence hexadécimale d'une couleur depuis la palette de sélection.

### Fonction rgb()

La fonction rgb() vous permet d'écrire une couleur en inscrivant la valeur de chaque teinte via un chiffre allant de 0 à 255. Cela correspond aux valeur des sélecteurs de couleurs de vos logiciels de CAO.

Par exemple
```css
color: rgb(255, 255, 255); /* Blanc */
color: rgb(0, 0, 0); /* Noir */
color: rgb(255, 153, 0); /* Orange */
color: rgb(0, 255, 0); /* Vert pur */
color: rgba(0, 0, 0, .5) /* Noir avec opacité de 50% */
```
