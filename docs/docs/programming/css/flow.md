---
id: flow
title: Flux du contenu
sidebar_label: Flux
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le terme *flux* désigne la manière dont les éléments se suivent dans la page. Pat défaut, ils se placent à la suite les un des autres, selon l'ordre dans lequel ils sont écrits dans votre page HTML. Certains éléments, par exemple la balise ```<span>```, s'affichent côte à côte. D'autres, comme les titres et les paragraphes, s'affichent les uns sous les autres.

Le paramètre ```display``` permet de régler la manière dont les éléments s'affichent.

Le paramètre ```position``` périment de gérer le positionnement dans la page. Voir chapitre [position](position).

## Éléments en ligne, en bloc et masqués

### En ligne

Les balises suivantes s'affichent par défaut *en ligne*, c'est-à-dire qu'elles sont côte à côte, tant que la largeur de l'écran le permet.

```<span>```, ```<a>```, ```<img>```

La propriété CSS ```display: inline;``` permet de définir qu'un élément donné s'affiche en ligne.

:::caution
Les éléments *en ligne* ne supportent pas les paramètres de **marges**, de **largeur** ou de **hauteur**!
:::

### En bloc

Les balises suivantes s'affichent par défaut *en bloc*, c'est-à-dire qu'elles sont les unes sous les autres. Ces éléments supportent les paramètres de **marges**, de **largeur** ou de **hauteur**.

```<div>```, - ```<h1> - <h6>```, ```<p>```, ```<header>```, ```<footer>```, ```<menu>```, ```<section>```, ```<article>```

La propriété CSS ```display: block;``` permet de définir qu'un élément donné s'affiche en bloc.

### Bloc de ligne

La propriété CSS ```display: inline-block;``` permet de définir des blocs qui s'affichent les uns à côté des autres. Cela permet de cumuler les avantages des deux systèmes. Attention toute fois, la taille de caractère ou l'interligne ont une influence sur l'espacement des éléments.

:::important
La propriété ```display: inline-block;``` est à éviter, car elle ne permet pas de gérer les espacements avec précision.
:::

### Éléments masqués

La propriété CSS ```display: none;``` permet de masquer totalement un élément de la page web. On l'utilise par exemple pour gérer des contenus dynamiques qui s'affichent lorsque l'utilisateur clique sur un élément donné.

### Exemple

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
.d-inline {
  display: inline;
}

.d-block {
  display: block;
}
.d-inline-block {
  display: inline-block;
}

.d-none {
  display: none;
}

/*
  Les classes suivantes sont ajoutées à des fins de test
  pour monter la particularité de la règle inline-block.
  Leur usage sera abordé dans le chapitre suivant.
*/
.width-100 {
  width: 100px;
}

.border-red {
  border: 1px solid red;
}
```

</TabItem>
<TabItem value="html">

```html
<h3>Liens en ligne (par défaut)</h3>
<a>Lien 1</a>
<a>Lien 2</a>
<a>Lien 3</a>

<h3>Liens en blocs</h3>
<a class="d-block">Lien 1</a>
<a class="d-block">Lien 2</a>
<a class="d-block">Lien 3</a>

<h3>Paragraphes en blocs (par défaut)</h3>
<p>Lien 1</p>
<p>Lien 2</p>
<p>Lien 3</p>

<h3>Paragraphes en ligne</h3>
<p class="d-inline">Lien 1</p>
<p class="d-inline">Lien 2</p>
<p class="d-inline">Lien 3</p>

<h3>Liens en ligne-bloc</h3>
<a class="border-red width-100">Lien normal</a>
<a class="d-inline-block border-red width-100">Lien 2</a>
<a class="border-red width-100">Lien 3</a>

<h3>Paragraphe caché (ci-dessous)</h3>
<p class="d-none">Je suis caché!</p>
<p>Ben oui... il faut utiliser l'inspecteur d'élément pour le voir.</p>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="575px" url="index.html" src="/examples/css/flow.html"></BrowserWindow>

Vous remarquerez dans la rubrique *Liens en ligne-bloc* que le premier et le dernier lien ne prennent pas en compte la règle qui définit la largeur de l'élément. Elle est ignorée, car ils sont affichés en mode "en ligne".

## Éléments flexibles

La propriété CSS ```display: flex;``` est une nouvelle technique qui gérer éléments de manière très complète et flexible. Elle permet, entre autres, de créer facilement des systèmes d'affichage en colonne.

Pour plus d'information, veuillez consulter ce site: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a>

:::important
Les éléments flexibles sont la seule et unique solution qui doit être utilisée pour créer des colonnes sur un site. L'usage des éléments flottants ```float: left;``` est obsolète et doit être évité à tout prix!
:::
