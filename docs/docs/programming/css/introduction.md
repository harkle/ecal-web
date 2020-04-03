---
id: introduction
title: Introduction aux CSS
sidebar_label: Introduction
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Les feuilles de style (Cascading Style Sheets en anglais) servent à définir l'apparence des éléments qui composent votre site. Elles permettent de gérer les couleurs, les marges, le positionnement, la taille, la police, etc.

## Où écrire le CSS ?

Pour ajouter une feuille de style à votre site, il suffit de créer un fichier ```style.css``` à la racine du dossier contenant votre site. C'est dans ce document que vous viendrez écrire les différentes règles de style.

Pour appliquer votre feuille de style à une page web, vous devez lier la page en question à votre feuille de style. Pour ce faire, il faut ajouter la ligne ci-dessous à l'intérieur de la balise ```<head>```.

```html
<link href="style.css" rel="stylesheet">
```

Votre balise ```head``` ressemblera donc à ceci:

```html
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link href="style.css" rel="stylesheet">
</head>
```

:::important
**Ne créez jamais un fichier CSS par page HTML!** L'intérêt des feuilles de style est d'avoir un seul fichier qui regroupe tous les paramètres de style du site et d'éviter un maximum les répétitions.
:::

## Syntaxe

Une règle CSS est toujours composée des éléments suivants:

<br/>

<img alt="" src={useBaseUrl('img/programming/css/css-rule.svg')} class="w-75" />

<br/>

- Le sélecteur définit l'élément sur lequel agit la règle;
– Les accolades délimitent la règle qui s'appliquera à ce sélecteur
- Chaque déclaration modifie un paramètre en particulier. Une règle CSS peut contenir plusieurs déclarations. Elles sont séparées par un ```;``` et un retour à la ligne;
- Chaque règle est composée d'une paire *clé valeur* séparé par un ```:```.

Dans l'exemple ci-dessus, nous avons une règle qui modifie **tous** les paragraphes du site pour qu'ils s'affichent avec un texte rouge en Arial.

## Sélecteurs

Les sélecteurs permettent de définir sur quels éléments votre règle agira. Il existe trois principaux sélecteurs.

### Élément

Vous pouvez utiliser n'importe quelle balise HTML comme sélecteur. Votre règle s'appliquera alors à **toutes** les occurrences de cette balise dans votre site (donc sur toutes les pages.).

Le code ci-dessous modifie la couleur des liens dans toutes les pages du site.

```css
a {
  color: red;
}
```

<BrowserWindow minHeight="50px" url="index.html" src="/examples/css/selector-element-1.html"></BrowserWindow>
<BrowserWindow minHeight="50px" url="projets.html" src="/examples/css/selector-element-2.html"></BrowserWindow>

### Class

Les classes permettent de définir des règles CSS que vous pouvez appliquer librement à autant d'éléments HTML que vous le souhaitez.

- Le sélecteur qui décrit une classe commence toujours par un ```.```.
- Inscrivez ensuite un nom composé uniquement de lettres, de chiffres (pas de chiffres directement après le point) ainsi que des caractères ```-``` et ```_```.
- Dans vos pages HTML, chaque élément qui subit la classe doit comporter un attribut *class* avec le nom de votre classe dans sa valeur.
- Un élément HTML peut subir plusieurs classes. On écrit alors **un seul** attribut *class** et on met les noms des différentes classes dans sa valeur en les séparant par un espace.

:::important
Donnez des noms logiques à vos classes! Optez pour des termes qui décrivent leurs fonctions (p.ex color-red pour une classe qui sert à passer la couleur du texte en rouge). Évitez les noms génériques ou abstraits.
:::

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
.color-red {
  color: red;
}

.font-arial {
  font-family: Arial;
}
```

</TabItem>
<TabItem value="html">

```html
<p>Ceci est un paragraphe normal</p>

<p class="color-red">Ceci est un paragraphe rouge</p>

<p class="font-arial">Ceci est un paragraphe en Arial</p>

<p class="color-red font-arial">Ceci est un paragraphe rouge en Arial</p>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="50px" url="index.html" src="/examples/css/selector-class.html"></BrowserWindow>

### Identifiant

L'identifiant fonctionne sur le même principe que la classe. Il a la particularité d'être unique au sein d'une même page.

- Le sélecteur qui décrit une classe commence toujours par un ```#```.
- Inscrivez ensuite un nom composé uniquement de lettres, de chiffres (pas de chiffres directement après le point) ainsi que des caractères ```-``` et ```_```.
- Dans vos pages HTML, chaque élément qui subit l'identifiant doit comporter un attribut *id* avec le nom de votre identifiant dans sa valeur.
- Un élément HTML ne peut subir qu'un seul identifiant.
– Votre identifiant ne doit être utilisé qu'une seule fois par page web.

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
#site-title {
  font-size: 48px;
  font-family: Arial;
}
```

</TabItem>
<TabItem value="html">

```html
<h1 id="site-title">Mon site</h1>


<h1>Ceci est un titre de niveau 1 normal</h1>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="50px" url="index.html" src="/examples/css/selector-id.html"></BrowserWindow>

<br/>

:::important
**Classe ou identifiant?**
Privilégiez l'usage des classes! Les identifiants sont surtout utiles pour modifier des composants uniques ou travailler avec du JavaScript.
:::

## Sélecteurs multiples

Vous avez la possibilité de combiner plusieurs sélecteurs afin de cibler des éléments précis. Pour ce faire, il suffit d'écrire les différents éléments de votre sélecteur en les séparant par un espace.

La lecture se faite de gauche à droite, de parent à enfant.

Dans l'exemple ci-dessous, on modifie uniquement les liens qui sont à l'intérieur de la balise ```menu```.

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
menu a {
  color: red;
}
```

</TabItem>
<TabItem value="html">

```html
<menu class="color-red">
  <a href="page-1.html">Page 1</a>
  <a href="page-2.html">Page 2</a>
</menu>
<a href="page-3.html">Lien en dehors du menu</a>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="50px" url="index.html" src="/examples/css/selector-multiples.html"></BrowserWindow>

## Sélecteurs avancés

Il existe de nombreux sélecteurs CSS qui vous permettent de structurer votre règle de façon précise. Ces sélecteurs sont décrits sur le site <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">w3schools.com</a>.

## Héritage

Certains styles (couleurs, police, etc.) vont s'appliquer à l'élément ciblé par votre règle, ainsi qu'à ses enfants.

Par exemple si vous souhaitez modifier la police de votre site, pas besoin d'écrire un règle pour chaque balise. Il suffit de définir une règle pour la balise ```<body>``` et tout le texte de votre site prendra automatiquement cette règle.

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
body {
  font-family: Arial;
}

.color-red {
  color: red;
}
```

</TabItem>
<TabItem value="html">

```html
<body>
  <header class="color-red">
    <h1>Mon site</h1>
    <p>Slogan du site</p>  
  </header>
  <p>Ceci est un paragraphe de texte</p>
</body>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="50px" url="index.html" src="/examples/css/selector-cascading.html"></BrowserWindow>

## Exercice

Pour faire cet exercice, vous pouvez repartir sur la base de [l'exercice précédent](../html/exercice.md).


#### Étape 1 — Créer et lier une feuille CSS

1. Dans votre fichier ```index.html```, renommez le titre ```h1``` en "Exercice 5"
2. Créez un fichier ```style.css``` à la racine de votre site.
3. Liez le fichier css avec les trois pages HTML présentes dans le dossier.

#### Étape 2 – Changer la police du site

1. Dans votre feuille de style, créer une règle qui modifie la police de tout le site. Définissez l'Arial comme font par défaut.
2. Dans la règle que vous venez de créer, modifiez la taille de la police avec la clé ```font-size``` et la valeur 16px;

#### Étape 3 – Modifiez la couleur des liens du site

1. Dans votre veuille de style, créez une nouvelle règle qui modifie la couleur par défaut des liens en magenta.
2. Définissez une couleur (cyan) pour les liens lorsqu'ils sont survolés par la souris (la solution ne se trouve pas directement dans cette page ;-)

#### Étape 4 – Créez une classe

1. Dans votre feuille de style, créer une règle utilisant une classe dont le but est de modifier la couleur du texte en rouge.
2. Appliquez cette règle au paragraphe de texte qui se trouve dans la page ```index.html```

Vous devriez obtenir le résultat suivant:

<BrowserWindow minHeight="500px" url="index.html" src="examples/css/exercice-index.html"></BrowserWindow>
<BrowserWindow minHeight="500px" url="a-propos.html" src="examples/css/exercice-a-propos.html"></BrowserWindow>
<br/>

:::note
<a href={useBaseUrl('exercises/programming/css.zip')}>Télécharger le résultat de l’exercice</a>
:::
