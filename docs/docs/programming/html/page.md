---
id: page
title: Page de base
sidebar_label: Page de base
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pour fonctionner correctement, une page HTML requiert une structure de base particulière. Les éléments HTML ne peuvent pas être "lancés" au hasard dans votre fichier.

## Structure de base

Voici la structure de base de **toute page HTML**. Il s'agit du minimum vital qui permet l'affichage correct de votre page. Vous n'avez pas besoin de réécrire ceci chaque fois. Gardez un fichier HTML avec cette structure dans votre site et dupliquez-le chaque fois que vous souhaitez créer une nouvelle page.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
</head>
<body>

</body>
</html>
```

Voici le détail des éléments présents dans la page.

- ```<!DOCTYPE html>``` précise au navigateur la norme HTML à utiliser pour interpréter votre document. Ici, on indique au navigateur que la page utilise la 5<sup>e</sup> version de la norme HTML;
- L'élément HTML ```<html></html>``` Délimite l'ensemble de la page web. Il est obligatoire;
- L'élément ```<head></head>``` sert de conteneur aux éléments qui **ne s'affichent pas** de façon visible dans la page (encodage, titre, feuilles de styles, scripts, données de référencement, etc.);
- ```<meta charset="utf-8">``` indique le jeu d'encodage utilisé pour l'affichage des caractères spéciaux. Il permet aux accents de s'afficher correctement:
- ```<title></title>``` définit le titre de la page qui est affichée dans la fenêtre de votre navigateur et sur les moteurs de recherche. On y indique généralement le titre du site **et** le titre de la page, par exemple sous la forme *Mon site - ma page*;
- ```<body></body>``` délimite le contenu de votre page. C'est à l'intérieur du ```body ```que vous allez écrire votre code.

## Mise en forme du code

À partir du moment où vous travaillez dans une base HTML avec la structure de base et que vous commencez à taper du vrai code, la structure de votre fichier va se complexifier et s'allonger. Il est recommandé de vous documenter sur la [mise en forme du code](../miscellaneous/formating) afin de garder un travail propre et clair.


## Exercice

Pour faire cet exercice, vous pouvez repartir sur la base de [l'exercice précédent](introduction#exercice).

1. Créez une page HTML nommée ```page-de-base.html```;
2. Copiez-collez la [structure de base](#structure-de-base) dans cette page HTML.

Cette page vous servira de base pour créer les pages de votre site. Vous ne devez jamais la modifier.

3. Ouvrez le fichier ```index.html```;
4. Modifiez le contenu du titre ```h1``` en *Exercice 3*
5. Enveloppez le contenu actuel dans la structure de base. Prenez-garde à mettre les éléments existants dans le bon élément HTML de la structure de base.

:::important
**Ne retapez pas le code qui excite déjà!**<br/>Utilisez les fonctions *copier*, *couper* et *coller* de votre éditeur de texte pour vous simplifiez le travail.
:::

:::note
<a href={useBaseUrl('exercises/programming/page.zip')}>Télécharger le résultat de l’exercice</a>
:::
