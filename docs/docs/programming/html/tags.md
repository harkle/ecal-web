---
id: tags
title: Balises
sidebar_label: Balises
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';

Cette page détaille quelques balises HTML de base qui vous permettront d'organiser votre contenu.

## Hiérarchies
Ces éléments vous permettant d'organiser votre texte et de définir des niveaux hiérarchiques.

### Paragraphe
La balise ```<p>``` permet de définir un paragraphe de texte. Chaque paragraphe de texte de votre site devrait être enveloppé dans élément HTML écrit avec cette balise.

Les paragraphes apparaissent par défaut en *Times Regular* et son suivi d'une marge supérieure et inférieure équivalente à l'interligne du texte.

:::important
Vous pouvez aussi dupliquer la page ```index.html``` afin d'avoir déjà la bonne structure et modifier uniquement le titre et le paragraphe de texte.
:::

```html
<p>Ceci est un paragraphe</p>
<p>Ceci est un autre paragraphe</p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un paragraphe</p>
  <p>Ceci est un autre paragraphe</p>
</BrowserWindow>

### Titres
Les balises ```h1```, ```h2```, ```h3```, ```h4```, ```h5``` vous permettent de définir le niveau hiérarchique d'un élément de titre. ```h1``` est par exemple utilisé pour indiquer le titre de la page (sujet de la page) ou d'une rubrique de premier niveau, ```h2``` indiquera une sous-rubrique, etc.

Les titres apparaissent en gras dans une taille plus grande que le texte courant qui dépend du niveau hiérarchique.

```html
<h1>Titre de ma page (h1)</h1>

<h2>Chapitre 1 (h2)</h2>
<h3>Sous chapitre (h3)</h3>
<h4>Rubrique (h4)</h4>
<h5>Sous rubrique (h5)</h5>
<p>Texte courant</p>

<h2>Chapitre 2 (h2)</h2>

<h2>Chapitre 3 (h2)</h2>
```

<BrowserWindow minHeight="250px" url="index.html">
  <h1>Titre de ma page (h1)</h1>
  <h2>Chapitre 1 (h2)</h2>
  <h3>Sous chapitre (h3)</h3>
  <h4>Rubrique (h4)</h4>
  <h5>Sous rubrique (h5)</h5>
  <p>Texte courant</p>
  <h2>Chapitre 2 (h2)</h2>
  <h2>Chapitre 3 (h2)</h2>
</BrowserWindow>

### Listes

Les balises ```<ul>``` (unordered list) et ```<ol>``` (ordered list) permettent d’afficher des listes à puce et des listes numérotées. Elles doivent être utilisées conjointement avec la balise ```<li>``` (list element) qui délimite chaque élément de la liste.

Les listes apparaissent avec des marges supérieures et inférieures, un retrait à gauche et des puces ou des chiffres insérés automatiquement avant chaque élément.

```html
<p>Liste à puce</p>

<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>

<p>Liste numérotée</p>

<ol>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ol>
```

<BrowserWindow minHeight="250px" url="index.html">
  <p>Liste à puce</p>

  <ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
    <li>Élément 3</li>
  </ul>

  <p>Liste numérotée</p>

  <ol>
    <li>Élément 1</li>
    <li>Élément 2</li>
    <li>Élément 3</li>
  </ol>
</BrowserWindow>

<br/>

:::caution
Attention, contrairement à l'usage en place avant la norme HTML 5, on n'utilise pas les listes pour créer des menus! Les menus se font au moyen de la balise ```<menu>``` et de liens ```<a>```
:::

## Texte

Les textes de votre site peuvent être mis en forme grâce aux balises suivantes. Attention, les modifications de style plus complexes (couleur, police, etc.) s'effectuent toujours grâce aux fichiers CSS et jamais au moyen de balises et d'attributs.

### Élément important — gras

Les balises ```<strong>``` ou ```<b>``` permettent de faire resortir un élément de votre texte en gras. D'un point de vue sémantique, il est préférable d'utiliser ```<strong>``` plutôt que ```<b>```.

```html
<p>Ceci est un <strong>paragraphe</strong></p>
<p>Ceci est un <b>autre paragraphe</b></p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un <strong>paragraphe</strong></p>
  <p>Ceci est un <b>autre paragraphe</b></p>
</BrowserWindow>

### Emphase — italique

Les balises ```<em>``` ou ```<i>``` permettent de mettre un élément en emphase, soit de le faire ressortir en italique. D'un point de vue sémantique, il est préférable d'utiliser ```<em>``` plutôt que ```<i>```.

```html
<p>Ceci est un <em>paragraphe</em></p>
<p>Ceci est un <i>autre paragraphe</i></p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un <em>paragraphe</em></p>
  <p>Ceci est un <i>autre paragraphe</i></p>
</BrowserWindow>

### Saut de ligne

La balise autofermante ```<br>``` vous permet d'indiquer un saut de ligne. Attention cependant à ne pas l'utiliser:

- À place des paragraphes (double retour à la ligne);
- Pour créer une mise en forme en drapeau de votre texte (problème de responsive);
- Pour séparer des éléments en ligne que vous souhaitez afficher l'un sous l'autre. On utilisera pour cela des règles CSS.

```html
<p>Ceci est un paragraphe <br>avec un retour à la ligne</p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un paragraphe <br/>avec un retour à la ligne</p>
</BrowserWindow>

### Span

La balise ```span``` est un conteneur générique sans apparence particulière qui permet de signaler un élément pour lui appliquer, par exemple, une règle CSS particulière.

De base la balise ```span``` ne modifie pas l'affichage de l'élément.

```html
<p>Ceci est un <span>paragraphe</span></p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un <span>paragraphe</span></p>
</BrowserWindow>

## Liens

Le lien est un **élément primordial** qui vous permet de renvoyer le visiteur d'une page à une autre. Il utilise la balise ```<a>``` et l'attribut ```href```. Un lien peut englober un texte, une image ou plusieurs éléments HTML.

```html
<p>Ceci est un <a href="https://ecal.ch">lien vers le site de l'ECAL</a></p>
```

<BrowserWindow minHeight="150px" url="index.html">
  <p>Ceci est un <a href="https://ecal.ch">lien vers le site de l'ECAL</a></p>
</BrowserWindow>

La valeur de l'attribut ```href``` comporte soit :
- l'adresse web complète du lien (```https://...```);
- le chemin local de la page cible à partir de la racine de votre dossier de base (```index.html```, ```projets/projet-1.html```)

L'attribut ```target``` avec la valeur ```_blank``` vous permet de forcer l'ouverture de la page dans une nouvelle fenêtre (ou onglet).

```html
<a href="https://ecal.ch" target="_blank">lien vers le site de l'ECAL</a>
```

Par convention, tous les liens internes au site s'ouvrent dans la même page. Les liens externes en revanche (autres sites) s'ouvrent dans une nouvelle fenêtre.

## Images

Vous pouvez afficher des images en tant qu'élément HTML grâce à la balise ```img``` et l'attribut ```src```. Par défaut les images s'affichent à la taille originale du fichier. Il est possible de modifier cette taille en CSS mais il est conseillé de [préparer vos fichiers images à la bonne taille au préalable](../miscellaneous/images).

```html
<img src="images/placeholder-image.gif">
```

<BrowserWindow minHeight="150px" url="index.html">
  <img alt="" src={useBaseUrl('img/placeholder-image.gif')} />
</BrowserWindow>

## Tableau

La balise ```<table>``` permet, conjointement avec d'autres balises, d'afficher un tableau (série de lignes et de colonnes). Par défaut, le tableau propose une mise en forme qui met en évidence les lignes et les colonnes.

:::caution
Contrairement à la pratique en vigueur dans les années 2000, **un tableau ne doit pas être utilisé pour gérer la mise en forme globale de la page**.
:::

Voici un exemple de tableau, avec les différentes balises.

```html
<table>
  <tr>
    <td></td>
    <td>Cellule A</td>
    <td>Cellule B</td>
    <td>Cellule C</td>
  </tr>
  <tr>
    <td>Ligne 1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Ligne 1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Ligne 1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>  
</table>
```

<BrowserWindow minHeight="150px" url="index.html">
  <table>
    <tr>
      <td></td>
      <td>Cellule A</td>
      <td>Cellule B</td>
      <td>Cellule C</td>
    </tr>
    <tr>
      <td>Ligne 1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Ligne 1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Ligne 1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>  
  </table>
</BrowserWindow>


## Structure

Il existe un certain nombre de balises qui vous permettront de structurer votre page web en regroupant les éléments. Généralement ces éléments n'induisent pas de mise en forme particulière. L'usage de ces balises est détaillé dans le chapitre suivant.

- La balise ```<div>``` permet de définir un bloc de contenu, sans mise en forme particulière.
- Les balises ```<header>``` et ```<footer>``` sont utilisées pour regrouper l'en-tête (logo, menu, sélecteur de langue, etc.) et le pied de page (plan du site, contact, etc.)
- La balise ```<section>``` définit un bloc sans mise en forme particulière dont le contenu s'apparente à une section de page.
- La balise ```<article>``` permet de délimiter le corps du contenu principal de votre page (typiquement un article de journal avec un titre, un résumé, du texte et des images).
- Les balises ```<menu>``` et ```<nav>``` sont utilisée pour regrouper des éléments de navigation.
