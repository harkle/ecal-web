---
id: structure
title: Structure de la page
sidebar_label: Structure
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserWindow from '@site/src/components/BrowserWindow';

Programmer une page web ne se résume pas à placer des contenus textes et image à la suite. Il faut les regrouper au sein d'éléments HTML afin de définir leur rôle et la structure de la page. Pour cela, il faut:
- utiliser les éléments HTML adéquats;
- imbriquer les éléments de bas niveau dans des éléments *conteneurs* afin de les grouper.

Le but est de mettre en place une structure, basée sur la maquette graphique, qui permette ensuite de définir le style d’élément de manière simple.

## Exemple de structure

En considérant le croquis ci-dessous, voici la manière dont les contenus peuvent être structurés.

<br/>

<img alt="" src={useBaseUrl('img/programming/html/structure.png')} class="w-75" />

<br/>

1. **Page web**: il s'agit de l'élément ```<body>```;
2. **En-tête**: la balise ```<header>``` est utilisée pour regrouper les éléments figurants dans l'en-tête;
3. **Contenu du site**: le contenu principal de la page peut être inséré dans une balise ```<section>```, ```<div id="content">``` ou placé directement à la suite de l'en-tête, sans balise enveloppante;
4. **Pied de page**: la balise ```<footer>``` est utilisée pour regrouper les éléments figurants dans le pied de page;
5. **Menu**: la balise ```<menu>``` permet de délimiter les éléments d'un menu;
6. **Articles**: la page regroupe plusieurs rubriques. La balise ```<article>``` permet de les définir.


Voici le code de cette page web et le résultat visible dans un navigateur.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Titre du site</title>
</head>
<body>
  <header>
    <h1>Titre du Site</h1>
    <menu>
      <a href="index.html">Accueil</a>
      <a href="news.html">News</a>
      <a href="contact.html">Contact</a>
    </menu>
  </header>
  <section>
    <article>
      <h2>Bienvenue!</h2>
      <p>Ceci est un site d'exemple</p>
    </article>
    <article>
      <h2>À propos</h2>
      <p>Text explicatif</p>
      <img src="images/placeholder-image.gif">
    </article>
  </section>
  <footer>
    <p>© ECAL 2020</p>
  </footer>
</body>
</html>
```

<BrowserWindow minHeight="250px" url="index.html">
  <header>
    <h1>Titre du Site</h1>
    <menu>
      <a href="index.html">Accueil</a>&nbsp;
      <a href="news.html">News</a>&nbsp;
      <a href="contact.html">Contact</a>&nbsp;
    </menu>
  </header>
  <section>
    <article>
      <h2>Bienvenue!</h2>
      <p>Ceci est un site d'exemple</p>
    </article>
    <article>
      <h2>À propos</h2>
      <p>Text explicatif</p>
      <img alt="" src={useBaseUrl('img/placeholder-image.gif')} />
    </article>
  </section>
  <footer>
    <p>© ECAL 2020</p>
  </footer>
</BrowserWindow>

<br/>

Vous remarquerez que:
- le menu a un retrait sur la gauche. Il s'agit du style par défaut de la balise ```<menu>```;
- le pied de page est collé au contenu, contrairement à la maquette.

Ces éléments pourront être corrigés ultérieurement en utilisant des règles CSS.

## Balises HTML5 ou ```<div>```

Avant l'arrivée de la norme HTML5, seul la balise ```<div>``` permettant de délimiter des éléments. Aujourd'hui, il existe un grand nombre de balises qui permette de mieux caractériser le contenu. Utiliser des ```<div>``` conjointement avec des identifiants n'est pas faux, mais c'est une pratique qui devrait être évitée si une existe pour le contenu que vous cherchez à qualifier.

Ainsi, plutôt que d'écrire

```html
<div id="header">
  <div id="mainMenu"></div>
</div>
<div id="content">
  <div class="article"></div>
  <div class="article"></div>
</div>
<div id="footer">
</div>
```

on préférera écrire comme suite. Le résultat est plus simple et respecte la notion de <a href="https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique" target="_blank">HTML sémantique</a>.

```html
<header>
  <menu></menu>
</header>
<section>
  <article></article>
  <article></article>
</section>
<footer>
</footer>
```
