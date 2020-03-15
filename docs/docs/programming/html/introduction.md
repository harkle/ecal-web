---
id: introduction
title: Introduction au HTML
sidebar_label: Introduction
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';

Le HTML (HyperText Markup Language) est un langage de balisage permettant de représenter des pages web dans navigateur. Tous les sites que vous visitez sur Internet utilisent du HTML. Il s'agit du squelette qui compose un site web, son rôle étant de structurer les contenus en définissant la fonction de chacun.

De base, le HTML fournit une mise en forme basique, relativement similaire à celle d'un document Word. L'utilisation conjointement avec le langage CSS pour réaliser des mises en écran plus avancées.

## Balises
Un document HTML se présente sous la forme d'un fichier texte dont la syntaxe repose sur un système de balises. Une balise (tag en anglais) sert à décrire le rôle d'un contenu et indique au navigateur comment les afficher.

Toutes les balises s'écrivent selon une syntaxe stricte :

- Chevron ouvrant ```<```
- Le nom de la balise
- Chevron fermant ```>```

Voici quelques exemples de balises

```html
<html>
<article>
<img>
```

### Attributs
Les attributs permettent de préciser la nature et le fonctionnement d'une balise. On s'en sert par exemple pour définir la source d'une image, la cible d'un lieu ou donner un nom à une balise particulière.

Les attributs sont composés d'une paire *clé valeur* qui définit le rôle de l'attribut et son contenu.

Les attributs s'écrivent de la manière suivante :

- Nom de la clé
- Symbole ```=```
- Guillemet informatique ```"```
- Valeur
- Guillemet informatique ```"```

Voici quelques exemples d'attributs

```
id="button-submit"
href="https://www.google.com"
src="images/photo.jpg"
```

:::caution
Veillez à bien utiliser le *guillemet informatique* qui se présente sous cette forme ```
"```. Les guillemets typographiques ou les chevrons ```« » “”``` ne sont pas valides!
:::

Les attributs viennent s'écrire à l'intérieur d'une balise HTML.

- Entre le nom de la balise et le chevron fermant ```>```;
- Un espace doit séparer le nom de la balise et l'attribut;
- Il est possible de mettre plusieurs attributs dans une même balise. On les sépare alors par un espace. Leur ordre n'a pas d'importance.

```html
<img src="images/photo.jpg" id="cover">
```

L'exemple ci-dessus montre une balise ```img``` qui comporte l'attribut ```src``` ayant la valeur *images/photo.jpg* et l'attribut ```id``` ayant la valeur *cover*.

## Éléments HTML

En tant que *langage de balises*, le HTML utilise des balises pour définir la typologie des contenus placés dans votre page. Pour ce faire, elles vont venir entourer les contenus pour les caractériser et les faire apparaître d'une certaine façon. C'est le principe de l'**élément HTML**. Un élément HTML se compose de:

- Une balise ouvrante ```<name>```;
- Un contenu (texte, autres éléments HTML);
- Une balise fermante ```</name>```. La balise fermante correspond à la balise ouvrante. On y ajoute une barre oblique ```/``` pour indiquer qu'il s'agit d'une balise fermante.

<img alt="" src={useBaseUrl('img/programming/html/element.svg')} class="w-75" />

<br/>

:::caution
Il est primordial de **fermer** vos éléments HTML. Si vous oubliez de le faire, l'affichage de votre page risque d'être compromis.
:::

### Les balises autofermantes

Certains éléments HTML n'ont pas de contenu. C'est par exemple le cas des images et des retours à la ligne. Ces éléments-là ne nécessitent pas de balises fermantes.

```html
<img src="images/photo.jpg" id="cover">
<br>
```

## Imbrication des éléments

Les éléments HTML sont conçus pour être imbriqués les uns dans les autres. Cela permet de regrouper des éléments et définir de façon plus précise leur nature. On parle alors d'élément *parent* (la balise ```<p>``` dans l'exemple ci-dessous) et d'élément *enfant* (la balise ```<strong>``` dans l'exemple ci-dessous).

Il n'y a pas de limite quant au nombre d'éléments qui peuvent être imbriqués les uns dans les autres.

```html
<p>Ceci est un <strong>paragraphe</strong></p>
```

<br/>

:::caution
Attention à respecter l'ordre dans la fermeture des balises! La syntaxe ```<p><strong></p></strong>``` **n'est pas valide,** car les balises sont croisées.
:::

## Exercice

Pour faire cet exercice, vous pouvez repartir sur la base de [l'exercice précédent](../basics/exercice.md).

#### Étape 1 — Éléments de base

1. Ouvrez le fichier ```index.html```
2. Effacez le contenu texte du fichier.
3. Créez un **élément HTML** utilisant la balise ```h1``` dont le contenu est *Exercice 2*
4. Créez un **élément HTML** utilisant la balise ```p``` dont le contenu est *Ceci est un paragraphe*

Vous devriez obtenir le résultat suivant:

<BrowserWindow minHeight="250px" url="index.html">
  <h1>Exercice 2</h1>
  <p>Ceci est un paragraphe</p>
</BrowserWindow>

#### Étape 2 — Attributs

1. Ajoutez l'attribut ```id``` avec la valeur ```title``` sur l'élément ```h1```

À ce stade, vous ne verrez aucun changement dans votre navigateur, car l'attribut ```id``` ne modifie pas l'apparence du titre. Il sert à lui donner un identifiant unique. Cet attribut n'est pas nécessaire, il sert à donner un identifiant unique au titre et peut ensuite être utilisé via des règles CSS pour modifier l'apparence de ce titre en particulier.

#### Étape 3 — Imbrication

1. Enveloppez les mots *un paragraphe* dans une balise ```strong```

Vous devriez obtenir le résultat suivant:

<BrowserWindow minHeight="250px" url="index.html">
  <h1>Exercice 2</h1>
  <p>Ceci est <strong>un paragraphe</strong></p>
</BrowserWindow>

<br/>

:::note
<a href={useBaseUrl('exercises/programming/html.zip')}>Télécharger le résultat de l’exercice</a>
:::
