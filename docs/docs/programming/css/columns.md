---
id: columns
title: Colonnes
sidebar_label: Colonnes
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mettre en place un système de colonne permet d'agencer des contenus côte à côte, comme sur votre maquette. La première partie de cette rubrique vous expliquera comment mettre en place des colonnes au moyen d'élément flexible. La seconde partie présente brièvement le système de colonnes du framework Bootstrap.

## Colonnes flexibles

Les systèmes de colonnes reposent toujours sur le principe *conteneur – colonnes*. C'est-à-dire un élément HTML parent (le conteneur) qui englobe un ou plusieurs éléments enfant (les colonnes).

### Structure HTML
Voici un exemple de structure HTML pour trois colonnes:

```html
<div>
  <div>Colonne 1</div>
  <div>Colonne 2</div>
  <div>Colonne 3</div>
</div>
```

Aucune règle CSS ne définit d'affichage en colonne, en conséquence les éléments se placent les uns sous les autres.

<BrowserWindow minHeight="150px" url="index.html">
  <div>
    <div>Colonne 1</div>
    <div>Colonne 2</div>
    <div>Colonne 3</div>
  </div>
</BrowserWindow>

### Règles CSS

Pour que les éléments div qui représente nos colonnes s'affichent correctement, nous allons créer une class ```.row``` que l'on appliquera à l'élément parent.

<Tabs defaultValue="html" values={[{ label: 'HTML', value: 'html'}, { label: 'CSS', value: 'css'}]}>
<TabItem value="html">

```html
<div class="row">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
  <div>Colonne 3</div>
</div>
```
</TabItem>
<TabItem value="css">

```css
.row {
  display: flex;
}
```
</TabItem>
</Tabs>

Les colonnes sont bien placées côte à côte.

<BrowserWindow minHeight="0px" url="index.html" src="/examples/css/columns-1.html"></BrowserWindow>

L'étape suivante consiste à créer les classes qui définiront la taille des colonnes:

<Tabs defaultValue="html" values={[{ label: 'HTML', value: 'html'}, { label: 'CSS', value: 'css'}]}>
<TabItem value="html">

```html
<div class="row">
  <div class="column">Colonne 1</div>
  <div class="column">Colonne 2</div>
  <div class="column">Colonne 3</div>
</div>

<div class="row">
  <div class="column">Colonne 1</div>
  <div class="column">Colonne 2</div>
  <div class="column">Colonne 3</div>
  <div class="column">Colonne 4</div>
  <div class="column">Colonne 5</div>
  <div class="column">Colonne 6</div>
  <div class="column">Colonne 7</div>
  <div class="column">Colonne 8</div>
  <div class="column">Colonne 9</div>
</div>
```
</TabItem>
<TabItem value="css">

```css
.row {
  display: flex;
}

.column {
  flex-grow: 1;
}
```
</TabItem>
</Tabs>

Les colonnes s'étirent automatiquement pour remplir tout l'espace.

<BrowserWindow minHeight="0px" url="index.html" src="/examples/css/columns-2.html"></BrowserWindow>

### Tailles des colonnes

Pour gérer la taille des colonnes, il faut créer des classes supplémentaires qui définissent la taille des colonnes. Une bonne pratique consiste à créer une classe par taille de colonne. C'est-à-dire que dans un système à douze colonnes, j'aurai douze classes qui définissent une largeur allant de 1/12 à 12/12.

<Tabs defaultValue="html" values={[{ label: 'HTML', value: 'html'}, { label: 'CSS', value: 'css'}]}>
<TabItem value="html">

```html
<div class="row">
  <div class="column-12">100%</div>
</div>

<div class="row">
  <div class="column-6">50%</div>
  <div class="column-6">50%</div>
</div>

<div class="row">
  <div class="column-4">33.3%</div>
  <div class="column-4">33.3%</div>
  <div class="column-4">33.3%</div>
</div>

<div class="row">
  <div class="column-3">25%</div>
  <div class="column-3">25%</div>
  <div class="column-3">25%</div>
  <div class="column-3">25%</div>
</div>

<div class="row">
  <div class="column-2">16.66%</div>
  <div class="column-2">16.66%</div>
  <div class="column-2">16.66%</div>
  <div class="column-2">16.66%</div>
  <div class="column-2">16.66%</div>
  <div class="column-2">16.66%</div>
</div>

<div class="row">
  <div class="column-1">8.33%</div>
  <div class="column-2">16.66%</div>
  <div class="column-3">25%</div>
  <div class="column-4">33.33%</div>
  <div class="column-2">16.66%</div>
</div>
```
</TabItem>
<TabItem value="css">

```css
.row {
  display: flex;
}

.column {
  flex-grow: 1;
}

.column-1 {
  flex: 0 0 8.33%;
}

.column-2 {
  flex: 0 0 16.66%;
}

.column-3 {
  flex: 0 0 25%;
}

.column-4 {
  flex: 0 0 33.33%;
}

.column-5 {
  flex: 0 0 41.66%;
}

.column-6 {
  flex: 0 0 50%;
}

.column-7 {
  flex: 0 0 58.33%;
}

.column-8 {
  flex: 0 0 66.66%;
}

.column-9 {
  flex: 0 0 75%;
}

.column-10 {
  flex: 0 0 83.33%;
}

.column-11 {
  flex: 0 0 91.66%;
}

.column-12 {
  flex: 0 0 100%;
}
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="275px" url="index.html" src="/examples/css/columns-3.html"></BrowserWindow>

## Bootstrap

Boostrap est un framework CSS open source qui permet, entre autres, de gérer un système de colonnes responive. Sa prise en main nécessite un peu de temps, mais il offre ensuite un système très complet qui englobe de nombreux pas de figure.
https://getbootstrap.com/docs/4.4/layout/grid/

En plus du système de rangées et de colonnes que nous avons vu ci-dessous, Bootstrap utilise un conteneur (fixe ou fluide) qui permet de gérer la largeur de base d'un contenu sur la page. En outre, les rangées sont conçues pour être imbriquées les unes dans les autres.


:::caution
Attention, pour utiliser Boostrap sur votre site, vous devez inclure un certain nombre de fichiers CSS et Javascript. Veuillez suivre ce tutoriel pour bien commencer avec Bootstrap: https://getbootstrap.com/docs/4.4/getting-started/introduction/
:::

Voici un exemple de colonnes avec Boostrap.

```html
<p>Conteneur avec largeur maximale.</p>
<div class="container">
  <div class="row">
    <div class="col-md-6">1</div>
    <div class="col-md-6">2</div>
  </div>
</div>

<p class="mt-5">Conteneur fluide occupant 100% de la largeur de la page.</p>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">1</div>
    <div class="col-md-6">2</div>
  </div>
</div>
```

Essayez de réduire la fenêtre de votre navigateur pour voir le comportement des colonnes sur des formats plus étroits.

<BrowserWindow minHeight="275px" url="index.html" src="/examples/css/bootstrap.html"></BrowserWindow>
