---
id: text-font
title: Texte et polices
sidebar_label: Texte et polices
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre détaille les techniques permettant de gérer la mise en forme du texte et la typographie.

## Police de caractère

### Police websafe
Par défaut, seul un nombre limité de polices est disponible sur le web. Il s'agit des polices appelées "Websafe". Leur disponibilité peut varier d'un système à un autre, c'est pourquoi elles sont toujours regroupées par famille afin d'assurer aux visiteurs une vision similaire du site même s'il ne dispose pas de la police en question.

#### Police avec sérifs
- Georgia, serif
- "Palatino Linotype", "Book Antiqua", Palatino, serif
- "Times New Roman", Times, serif

#### Polices sans sérifs
- Arial, Helvetica, sans-serif 	
- "Arial Black", Gadget, sans-serif 	
- "Comic Sans MS", cursive, sans-serif 	
- Impact, Charcoal, sans-serif 	
- "Lucida Sans Unicode", "Lucida Grande", sans-serif 	
- Tahoma, Geneva, sans-serif 	
- "Trebuchet MS", Helvetica, sans-serif 	
- Verdana, Geneva, sans-serif

#### Polices monospace
- "Courier New", Courier, monospace 	
- "Lucida Console", Monaco, monospace

### Autres polices

Il est possible d'utiliser d'autres polices sur le web. Cependant, vous ne pouvez pas simplement les appeler par leurs noms. Vous devez ajouter les fichiers de police dans les ressources de votre site afin que les visiteurs puissent les voir.

La majeure partie des fonderies proposent des licences pour le web. Il existe aussi des convertisseurs en ligne, mais leur usage sur une typographie payant est illégal. Vous pouvez aussi utiliser des services tels que <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.

:::caution
Si vous écrivez directement le nom de la police dans votre CSS et qu'elle est installée sur votre ordinateur, cela fonctionnera sur votre machine, mais pas chez les autres visiteurs! Vous devez impérativement inclure la police dans le site et utiliser des formats de police web (p.ex. woff).
:::

L'exemple ci-dessous montre comment intégrer la police *Roboto* depuis Google Fonts. Le code HTML est à insérer dans la balise ```head``` de chacune de vos pages web.

<Tabs
  defaultValue="html"
  values={[
    { label: 'HTML', value: 'html', },
    { label: 'CSS', value: 'css', },
  ]
}>
<TabItem value="html">

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

</TabItem>
<TabItem value="css">

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

</TabItem>
</Tabs>

L'exemple ci-dessous (CSS uniquement) montre comment inclure une police web dans votre CSS (p.ex police achetée auprès d'une fonderie).

```css
@font-face {
  font-family: 'Ma Police';
  src: url('mapolice.woff2') format('woff2');
}
```

### Style

Les paramètres de style vous permettent de modifier l'apparence de la police.

- **font-family**: détermine le nom de la police utilisée;
- **font-weight**: définit la graisse de la police;
- **font-style**: définit la font en *italique* ou en *oblique*;
- **font-variant**: permet d'utiliser les petites majuscules;
- **font-size**: définit la taille de la police.

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
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
}

.font-light {
  font-weight: 100;
}

.font-bold {
  font-weight: 900;
}

.font-italic {
  font-style: italic;
}

.small-caps {
  font-variant: small-caps;
}

.font-size-large {
  font-size: 24px;
}

.font-size-larger {
  font-size: 48px;
}
```

</TabItem>
<TabItem value="html">

```html
<!-- à insérer dans la balise <head> -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100;1,400;1,900&display=swap" rel="stylesheet">

<!-- contenu de la balise <body> -->
<h1 class="font-size-larger font-bold">Ceci est un titre</h1>
<p>Un paragraphe de texte normal. Tel que définit dans la règle "body { }".</p>
<p class="font-size-large">Grande taille de texte</p>
<p>
  Les styles configurés permettent d'écrire en
  <span class="font-light">light</span>,
  <span class="font-bold">gras</span>,
  <span class="font-italic">light</span> ou en
  <span class="small-caps">petites majuscules</span>.
</p>
<p class="font-size-large font-light font-italic small-caps">Ces styles peuvent être utilisés conjointement.</p>
<p class="font-size-large font-bold">Ces styles peuvent être utilisés conjointement.</p>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="360px" url="index.html" src="/examples/css/text-font1.html"></BrowserWindow>

## Gestion du texte

### Couleur

Pour gérer la couleur de votre texte, veuillez vous référer [chapitre précédent](colors)

### Alignement

L'alignement du texte se gère grâce à la propriété ```text-align```. Elle peut prendre les valeurs suivantes:
- left;
- right;
- center;
– justifs.

À noter qu'il n'est pas possible de gérer la manière dont le texte est justifié. Le justification se fait de toute manière à gauche.

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}
```

</TabItem>
<TabItem value="html">

```html
<p>Wrecked? But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Look me up when you get there, guess I'll be about 47. I can't play. Right.</p>

<p class="text-right">Mom, Dad. Does your mom know about tomorrow night? No no no this sucker's electrical, but I need a nuclear reaction to generate the one point twenty-one gigawatts of electricity- Evening, Doctor Brown, what's with the wire? Doc, look, all we need is a little plutonium.</p>

<p class="text-center">Yeah, well, I still don't understand what Dad was doing in the middle of the street. Ahh. I'm writing this down, this is good stuff. What's going on? Where have you been all week? Well, uh, listen, uh, I really-</p>

<p class="text-justify">George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you? Who the hell is John F. Kennedy? Quiet. whoa, this is it, this is the part coming up, Doc. Yeah, it's 8:00.</p>
```

</TabItem>
</Tabs>

<BrowserWindow minHeight="285px" url="index.html" src="/examples/css/text-font2.html"></BrowserWindow>

### Espacement

Les propriétés suivantes vous permettent de gérer l'espacement du texte:
- line-height: interligne;
- letter-spacing: interlettrage;
- text-indent: retrait de première ligne (négatif ou positif).

:::important
Pour calculer le ```letter-spacing```, il faut prendre la valeur définie dans votre logiciel et la diviser par 1000 et utiliser l'unit ```em```. Par exemple un letter spacing de 10 dans votre logiciel donnne ```letter-spacing: 0.01em;``` en CSS.
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
.line-height-large {
  line-height: 1.5em;
}

.letter-spacing-small {
  letter-spacing: -0.1em;
}

.letter-spacing-large {
  letter-spacing: 0.1em;
}

.text-indent-50 {
  text-indent: 50px;
}
```

</TabItem>
<TabItem value="html">

```html
<p>Unroll their fire. Oh, oh Marty, here's you keys. You're all waxed up, ready for tonight. Biff, stop it. Biff, you're breaking his arm. Biff, stop. The future, it's where you're going? Oh, uh, hey you, get your damn hands off her. Do you really think I oughta swear?</p>

<p class='line-height-large'>he's an idiot, comes from upbringing, parents were probably idiots too. Lorraine, if you ever have a kid like that, I'll disown you. You know Marty, you look so familiar, do I know your mother? Oh, if Paul calls me tell him I'm working at the boutique late tonight. I will. No no no, Doc, I just got here, okay, Jennifer's here, we're gonna take the new truck for a spin.</p>

<p class='letter-spacing-small'>Doc, she didn't even look at him.</p>

<p class='letter-spacing-large'>Now that's a risk you'll have to take you're life depends on it.</p>

<p class='text-indent-50'>I'm gonna ram him.</p>

```

</TabItem>
</Tabs>

<BrowserWindow minHeight="300px" url="index.html" src="/examples/css/text-font3.html"></BrowserWindow>

### Décoration

Les propriétés suivantes permettent de modifer divers paramètres du texte:

- text-decoration: créer un effet de soulignement, de surlignement ou de barré;
- text-transform: changer la case du texte.
- text-shadow: créer un effet d'ombrage.

<Tabs
  defaultValue="css"
  values={[
    { label: 'CSS', value: 'css', },
    { label: 'HTML', value: 'html', },
  ]
}>
<TabItem value="css">

```css
.text-underline {
  text-decoration: underline;
}

.text-overline {
  text-decoration: overline;
}

.text-strickthrough {
  text-decoration: line-through;
}

.text-uppercase {
  text-transform: uppercase;
}

/* text-shadow: x y blur-radius color; */
.text-shadow {
  text-shadow: 0 0 2px #ff0000;
}

```

</TabItem>
<TabItem value="html">

```html
<p class="text-underline">I've gotta go.</p>

<p class="text-overline">I'm gonna get that son-of-a-bitch.</p>

<p class="text-strickthrough">Alright, okay Jennifer. What if I send in the tape and they don't like it. I mean, what if they say I'm no good. What if they say, 'Get out of here, kid, you got no future.' I mean, I just don't think I can take that kind of rejection. Jesus, I'm beginning to sound like my old man.</p>

<p class="text-uppercase">Then how am I supposed to ever meet anybody.</p>

<p class="text-shadow">Right check, Doc.</p>
```
</TabItem>
</Tabs>

<BrowserWindow minHeight="285px" url="index.html" src="/examples/css/text-font4.html"></BrowserWindow>
