---
id: positioning
title: Positionnement
sidebar_label: Positionnement
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Par défaut, les éléments constituant votre page sont affichés les uns sous les autres selon l'ordre dans lequel ils sont écrits dans votre code HTML. On appelle cela la position *statique*. Vous avez la possibilité de modifier la manière dont ils sont placés grâce à la propriété ```position```.

Cette propriété s'utilise toujours conjointement avec les propriétés ```top```, ```right```, ```bottom``` ou ```left``` afin de définir le placement de l'élément concerné. Vous pouvez utiliser des valeurs en pixel ou en pour cent.

Par exemple;

```css
.position-center {
  position: abolute;
  top: 50%;
  left: 50%;
}
```

## Relatif

Le positionnement relatif permet de décaler un élément par rapport à sa position de base. Le déplacement n'influence pas les autres éléments. Cette méthode est utile pour corriger de petites erreurs d'alignement dues, par exemple, au moteur de rendu des polices de votre navigateur web.

```css
.bloc {
  width: 100px;
  height: 100px;
  border: 1px solid red;  
}

.position-relative {
  position: relative;
  top: 50px;
  left: 50px;
}
```

<BrowserWindow minHeight="350px" url="index.html" src="/examples/css/position-relative.html"></BrowserWindow>

## Absolu

Le positionnement absolu permet de décaler un élément par rapport à son parent positionné le plus proche. Le bloc est sorti du flux d'élément et n’influence pas les éléments suivants. Cette méthode est utile pour placer un élément à un point précis de la page.

Dans l'exemple ci-dessous, le bloc n° 2 est placé à 50 pixels du haut et de la gauche de la page.

```css
.bloc {
  width: 100px;
  height: 100px;
  border: 1px solid red;  
}

.position-absolute {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

<BrowserWindow minHeight="250px" url="index.html" src="/examples/css/position-absolute-1.html"></BrowserWindow>

Il est possible de placer un élément par rapport à son bloc parent. Pour ce faire, il faut que le parent lui-même soit positionné, c'est-à-dire qu'il aie la propriété ```position``` en ```relative``` ou en ```absolute```. Si vous ne souhaitez pas modifier le placement de l'élément parent, il faut utiliser ```position: relative``` (sans ```top```, ```left```, etc.).

<Tabs defaultValue="css" values={[{ label: 'CSS', value: 'css'}, { label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.bloc {
  width: 100px;
  height: 100px;
  border: 1px solid red;  
}

.position-absolute {
  position: absolute;
  top: 50px;
  left: 50px;
  border-color: magenta;
}
```
</TabItem>
<TabItem value="html">

```html
<div class="bloc">static</div>
<div class="bloc position-relative">
  static
  <div class="bloc position-absolute">absolute</div>
</div>

<div class="bloc">static</div>
<div class="bloc position-relative">
  relative
  <div class="bloc position-absolute">absolute</div>
</div>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="400px" url="index.html" src="/examples/css/position-absolute-2.html"></BrowserWindow>

## Fixe

Le positionnement fixe se comporte de façon similaire au positionnement absolu, sauf que l'élément concerné sera toujours placé par rapport à la page et qu'il restera fixe quand l'utilisateur fait défiler la page. Cette technique est utilisée pour créer, par exemple, une barre de navigation qui reste toujours en haut de l'écran.

<Tabs defaultValue="css" values={[{ label: 'CSS', value: 'css'}, { label: 'HTML', value: 'html'}]}>
<TabItem value="css">

```css
.bloc {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}

.position-fixed {
  position: fixed;
  top: 50px;
  left: 50px;
  width: 100%;
  height: 100px;
}

.position-absolute {
  position: absolute;
  top: 50px;
  left: 50px;
  border-color: magenta;
}
```
</TabItem>
<TabItem value="html">

```html
<div class="bloc">static</div>
<div class="bloc">absolute</div>
<div class="bloc">fixed</div>
```
</TabItem>
</Tabs>

Faites défiler verticalement la page ci-dessous.

<BrowserWindow minHeight="200px" url="index.html" src="/examples/css/position-fixed.html"></BrowserWindow>
