---
id: background-images
title: Image de fond
sidebar_label: Image de fond
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Outre la balise ```<img>```, vous avez la possibilité d'insérer dans le fond d'un bloc. Cette technique diminue la qualité du référencement par rapport aux images, mais offre plus de flexibilité quant à la mise en forme et au redimensionnement des images.

## Syntaxe de base

N'importe quel élément affiché en ```display: block;``` peut contenir une image de fond. Celle-ci s'affichera toujours derrière le contenu du bloc.

Voici la syntaxe de base pour afficher une image en fond. La mention ```height: 100px``` et la bordure ne sont pas nécessaires, elles figurent dans l'exemple pour mieux visualiser le résultat.

```css
.funny-background {
  height: 100px;
  border: 1px solid red;
  background-image: url('img/placeholder-image.gif');
}
```

<BrowserWindow minHeight="100px" url="index.html" src="/examples/css/background-image-1.html"></BrowserWindow>

### Répétition

Par défaut et selon sa taille de base, l'image est répétée horizontalement et verticalement pour remplir tout le bloc. Vous pouvez modifier ce comportement en utilisant la propriété ```background-repeat``` et les valeurs suivantes:
- ```repeat``` *(par défaut)*
- ```repeat-x```
- ```repeat-y```
- ```no-repeat```

Dans l'exemple ci-dessous, la répétition est annulée.

```css
.funny-background {
  height: 100px;
  border: 1px solid red;
  background-image: url('img/placeholder-image.gif');
  background-repeat: no-repeat;
}
```

<BrowserWindow minHeight="100px" url="index.html" src="/examples/css/background-image-2.html"></BrowserWindow>

### Placement

Par défaut, l'image est alignée en haut à gauche du bloc. Vous pouvez modifier ce comportement grâce à la propriété ```background-position``` et les valeurs suivantes:
- des valeurs en pixels
- des valeurs en pourcent
- les mots clés ```top```, ```bottom```, ```left```, ```right```, ```center```

Si vous précisez deux valeurs, la première indique le placement horizontal et la seconde le placement vertical.

```css
.funny-background {
  height: 100px;
  border: 1px solid red;
  background-image: url('img/placeholder-image.gif');
  background-repeat: no-repeat;
  background-position: center;
}
```

<BrowserWindow minHeight="100px" url="index.html" src="/examples/css/background-image-3.html"></BrowserWindow>

## Dimensionnement

La propriété ```background-size``` permet de modifier la taille de l'image via les valeurs suivantes:
- des valeurs en pixels
- des valeurs en pourcent
- les mots clés ```cover``` ou ```contain```

On n'utilise rarement des valeurs fixes en pixel ou en pour cent, car cela n'offre que peu de flexibilité dans le redimensionnement, surtout quand on parle de responsive design.

### Cover

Le mode ```background-size: cover;``` définis que l'image couvre toujours l'ensemble du bloc, peu importe la différence de taille.

:::caution
Le redimensionnement est géré automatiquement par le navigateur web. Si la taille du bloc est flexible, vous ne maîtrisez plus le cadrage de votre image. Il faut dont privilégier des sujets centrés avec de l'espace autour.
:::

```css
.funny-background {
  height: 100px;
  border: 1px solid red;
  background-image: url('img/placeholder-image.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover
}
```

<BrowserWindow minHeight="650px" url="index.html" src="/examples/css/background-image-4.html"></BrowserWindow>

### Contain

Le mode ```background-size: contain;``` définis que l'image est toujours affichée en entier dans le bloc, peu importe la différence de taille. Un espace vide entoure l'image, selon le format.

```css
.funny-background {
  height: 100px;
  background-image: url('img/placeholder-image.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

<BrowserWindow minHeight="650px" url="index.html" src="/examples/css/background-image-5.html"></BrowserWindow>
