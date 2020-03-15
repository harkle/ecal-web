---
id: formating
title: Mise en forme du code
sidebar_label: Mise en forme du code
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';

Porter une attention particulière à la mise en page de votre code permet de le garder clair et compréhensible. Les bonnes pratiques évoquées ci-dessous simplifieront le travail sur votre site.

## Espaces et sauts de ligne

Les navigateurs web ne prennent en compte ni les espaces multiples ni les retours à la ligne faits au moyen de la touche <kbd>↵</kbd>.
- Les espacements se gèrent en CSS au moyen des marges intérieurs et extérieurs;
- Les sauts de lignes se font par l'usage de paragraphes ou de la balise ```<br>```.

```html
<p>Le     espaces    supplémentaires     sont     ignorés</p>
<p>Les sauts de ligne avec le touche
enter ne sont pas pris en compte.<br>
En revanche, la balise <br>
permet de marquer des sauts de ligne.</p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Le     espaces    supplémentaires     sont     ignorés</p>
  <p>Les sauts de ligne avec la touche
  Enter ne sont pas pris en compte.<br/>
  En revanche, la balise &lt;br&gt;
  permet de marquer des sauts de ligne.</p>
</BrowserWindow>

## Indentation

L'indentation, à savoir l'ajout d'une tabulation en début de ligne, permet de marquer des retraits dans votre code. Par convention:
- Sauf pour les éléments affichés en ligne (```span```, ```em```, ```strong```, etc.), **on n'écrit jamais deux éléments HTML sur la même ligne**;
- Chaque fois que l'on insère un élément HTML dans un autre, **l'enfant se décale vers la droite** d'un cran;
- Afin de limiter les indentations inutiles, il est courant d'écrire les balises ```<html>```, ```<head>``` et ```<body>``` au même niveau.

:::tip
L'exemple ci-dessous est correctement indenté
```html
<html>
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
</head>
<body>
  <header>
    <menu>
      <a href="index.html">Mon site</a>
      <a href="projets.html">Projets</a>
    </menu>
  </header>
  <section>
    <h1>Bienvenu sur mon site</h1>
    <p>Ceci est un <strong>paragraphe</strong>.</p>
  </section>
  <footer>
    <p>© ECAL 2020</p>
  </footer>
</body>
</html>
```
:::

:::warning
L'exemple ci-dessous comporte des fautes d'indentation et compte une erreur de fermeture de balise (laquelle?).
```html
<html>
<head>   <meta charset="utf-8">  <title>Titre de la page
</title></head>
<body>
<header>
      <menu>
    <a href="index.html">Mon site</a><a href="projets.html">Projets</a>
</menu></header>
  <section>
    <h1>Bienvenu sur mon site</h1>
    <p>Ceci est un <strong>paragraphe</strong>.
</p>
<footer><p>© ECAL 2020</p></footer></body></html>
```
:::

Les deux exemples ci-dessus s'afficheront de façon identique dans votre navigateur web. Les deux codes HTML sont valides, mais le second est moins lisible donc plus difficile à modifier et à corriger.

## Donner de l'espace

Puisque les navigateurs web ne prennent pas en compte les retours à la ligne lors de l'affichage de votre page, profitez-en pour espacer votre code! Un code plus aéré est plus simple à lire.

```html
<html>

<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
</head>

<body>

  <header>
    <menu>
      <a href="index.html">Mon site</a>
      <a href="projets.html">Projets</a>
    </menu>
  </header>

  <section>
    <h1>Bienvenu sur mon site</h1>
    <p>Ceci est un <strong>paragraphe</strong>.</p>
  </section>

  <footer>
    <p>© ECAL 2020</p>
  </footer>

</body>
</html>
```

# Commentaires

L'élément html ```<!-- -->``` vous permet d'écrire un commentaire qui ne sera pas affiché dans le navigateur web. Utilisez les commentaires pour noter des repères et clarifier votre code.

```html
<html>

<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
</head>

<body>

  <!-- En tête-->
  <header>
    <!-- Menu principal-->
    <menu>
      <a href="index.html">Mon site</a>
      <a href="projets.html">Projets</a>
    </menu>
  </header>

  <!-- Contenu de la page -->
  <section>
    <h1>Bienvenue sur mon site</h1>
    <p>Ceci est un <strong>paragraphe</strong>.</p>
  </section>

  <!-- Pied de page -->
  <footer>
    <p>© ECAL 2020</p>
  </footer>

</body>
</html>
```
