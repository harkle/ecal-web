---
id: box-model
title: Modèle de boîte
sidebar_label: Modèle de boîte
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le *modèle de boîte* désigne la manière dont le navigateur gère l'affichage des blocs de contenu (éléments affichés en ```display:block```). Il permet de définir:
- les marges extérieures (utilisées pour espacer les éléments entre eux);
- la bordure qui entour l'élément;
- les marges intérieures (utilisées pour espacer le contenu du bord du bloc);
- les dimensions du contenu.

<br/>

<img alt="" src={useBaseUrl('img/programming/css/box-model.svg')} class="w-75" />

<br/>

:::important
Les propriétés ```margin```, ```border``` et ```padding``` peuvent être définie **de manière globale** pour les quatre côtés de la boîte **ou séparément pour chaque côté** (haut, droite, bas, gauche).
:::

## Marges extérieures

Les marges extérieures permettent d'espacer des blocs entre eux. Par défaut, certains éléments HTML comme les paragraphes ou les titres ont des marges verticales prédéfinies. Vous pouvez modifier ces valeurs en créant une règle CSS adéquate.

Attention, les marges de deux éléments consécutifs, verticalement ou horizontalement, se superposent. Dans le cas d'éléments qui ont des marges prédéfinies, assurez-vous d'avoir défini les espacements de tous les éléments.

<Tabs defaultValue="css" values={[{ label: 'CSS', value: 'css'}, { label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.m-0 {
  margin: 0;
}

.m-25 {
  margin: 25px;
}

.mx-25 {
  margin-right: 25px;
  margin-left: 25px;
}

.ml-25 {
  margin-left: 25px;
}
```
</TabItem>
<TabItem value="html">

```html
<h3>Blocs</h3>
<div>Bloc 1<br>(sans marges)</div>
<div class="m-25">Bloc 2<br>(avec marges identiques)</div>
<div class="mx-25">Bloc 3<br>(avec marges horizontales)</div>
<div class="ml-25">Bloc 3<br>(avec marge à gauche)</div>

<h3>Paragraphe par défaut</h3>
<p>Paragraphes 1</p>
<p>Paragraphes 2</p>
<p>Paragraphes 3</p>

<h3>Paragraphe sans marges</h3>
<p class="m-0">Paragraphes 1</p>
<p class="m-0">Paragraphes 2</p>
<p class="m-0">Paragraphes 3</p>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="525px" url="index.html" src="/examples/css/margin.html"></BrowserWindow>

## Bordures

Le paramètre ``border``` permet de définir le style de la bordure qui entour le bloc. Il est composé de trois valeurs:
- l'épaisseur de la bordure;
- son style (solide, traitillé, pointillé);
- sa couleur.

<Tabs defaultValue="css" values={[  { label: 'CSS', value: 'css', },{ label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.b-red {
  border: 1px solid red;
}

.b-fat-red {
  border: 5px solid red;
}

.b-dot-red {
  border: 1px dotted red;
}

.bb-red {
  border-bottom: 1px solid red;
}
```
</TabItem>
<TabItem value="html">

```html
<p class="b-red">Bordure rouge</p>
<p class="b-fat-red">Bordure épaisse</p>
<p class="b-dot-red">Bordure pointillée</p>
<p class="bb-red">Bordure en bas uniquement</p>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="575px" url="index.html" src="/examples/css/border.html"></BrowserWindow>

## Marges intérieures

Les marges intérieures définissent l'espacement entre la bordure et le contenu.

<Tabs defaultValue="css" values={[{ label: 'CSS', value: 'css'}, { label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.b-red {
  border: 1px solid red;
}

.p-25 {
  margin: 25px;
}

.px-25 {
  margin-right: 25px;
  margin-left: 25px;
}

.pl-25 {
  margin-left: 25px;
}
```
</TabItem>
<TabItem value="html">

```html
<div class="b-red">Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. Watch it, Goldie. What kind of date? I don't know, what do kids do in the fifties? Look, George, I'm telling you George, if you do not ask Lorraine to that dance, I'm gonna regret it for the rest of my life. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it.</div>
<div class="p-25 b-red">Alright, take it up, go. Doc. Look me up when you get there, guess I'll be about 47. My name's Lorraine, Lorraine Baines. He's absolutely right, Marty. the last thing you need is headaches. Ah, where're my pants?</div>
<div class="px-25 b-red">C'mon, open up, let me out of here, Yo. Oh, what I meant to day was- Time machine, I haven't invented any time machine. Evening, Doctor Brown, what's with the wire? That's a big bruise you have there.</div>
<div class="pl-25 b-red">You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. We never would have fallen in love. C'mon, open up, let me out of here, Yo. Thank you. In about thirty years. I'm sure that in 1985, plutonium is available at every corner drug store, but in 1955, it's a little hard to come by. Marty, I'm sorry, but I'm afraid you're stuck here.</div>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="350px" url="index.html" src="/examples/css/padding.html"></BrowserWindow>

## Dimensions

Les dimensions du contenu du bloc peuvent être définies grâce aux attributs ```width``` et ```height```. Par défaut, la largeur d'un bloc est toujours de ```100%``` et sa hauteur automatiquement définie en fonction de son contenu.

:::important
Sauf dans le cas d'éléments dont la hauteur est précisément définie dans la maquette, on laissera généralement le paramètre ```height``` au mode automatique afin d'éviter les débordements de contenu.
:::


<Tabs defaultValue="css" values={[{ label: 'CSS', value: 'css'}, { label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.b-red {
  border: 1px solid red;
}

.w-50 {
  width: 50%;
}

.w-50px {
  width: 50px;
}

.h-50px {
  height: 50px;
}
```
</TabItem>
<TabItem value="html">

```html
<div class="b-red">Bloc par défaut</div>
<div class="w-50 b-red">Bloc à 50% de largeur</div>
<div class="w-50px b-red">Bloc à 50 pixels de largeur</div>
<div class="h-50px b-red">Bloc à 50 pixels de hauteur</div>
<div class="w-50px h-50px b-red">Bloc à 50 pixels de largeur et de hauteur</div>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="350px" url="index.html" src="/examples/css/dimensions.html"></BrowserWindow>

### box-sizing

Par défaut, les paramètres de largeur et de hauteur définissent les dimensions **du contenu** d'un bloc et non pas de son pourtour. Les marges intérieures et les bordures vont venir s'ajouter à la valeur définie. Cela peut causer des problèmes de mise en page, par exemple dans le cas d'un élément dont la largeur est définie à 100%.

Le problème est mis en évidence dans l'exemple ci-dessous:

<BrowserWindow minHeight="350px" url="index.html">
<p style={{border: '1px solid red',width: '100%', boxSizing: 'content-box'}}>box-sizing: content-box (valeur par défaut)<br/>width: 100%<br/>padding: 0;</p>
  <p style={{border: '1px solid red',width: '100%',padding:'25px', boxSizing: 'content-box'}}>box-sizing: content-box (valeur par défaut)<br/>width: 100%<br/>padding: 25px;</p>
  <p style={{border: '1px solid red',width: '100%',padding:'25px'}}>box-sizing: border-box (valeur par défaut)<br/>width: 100%<br/>padding: 25px;</p>
</BrowserWindow>

Afin de pallier à cette situation et pour simplifier la gestion de la dimension des blocs, il est recommandé de modifier le comportement par défaut de tous les blocs de votre site afin que les paramètres ```width``` et ```height``` incluent les bordures et les marges intérieures. Pour ce faire, il faut ajouter la règle suivante dans votre fichier CSS (si possible au tout début du fichier).

```css
* {
  box-sizing: border-box;
}
```
