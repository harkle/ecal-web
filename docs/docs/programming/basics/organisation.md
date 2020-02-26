---
id: organisation
title: Organisation d’un site
sidebar_label: Organisation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Ce chapitre explique les différents éléments qui composent un projet web sur le plan technique. Il présente en outre la manière dont vous devez gérer les documents sur votre ordinateur.

## Définition

Quelques notions clés pour clarifier quelques termes liés aux sites web.

### Site web

Un site web, est un ensemble de pages et de ressources liées et accessibles par un nom de domaine. Il traite généralement d’une thématique unique.

Il existe une large variété de sites: site d’information · site vitrine · blog · forum · e-commerce · page personnelle · wiki · réseau social · moteur de recherche · site d’actualités · application web · etc.

<img alt="" src={useBaseUrl('img/programming/introduction/website.png')} />

*Différentes pages du site https://ecal.ch*

### Page web

Une page web est un document au format HTML qui peut être affiché dans un navigateur. Le visiteur peut la consulter en utilisant le défilement horizontal ou vertical. Chaque page est accessible par une adresse web (URL) unique.

<img alt="" src={useBaseUrl('img/programming/introduction/webpage.png')} />

*La page de présentation de l’école sur le site https://ecal.ch*

### Serveur web

Ensemble matériel et logiciel qui stocke un site web et le rend accessible publiquement via Internet. On y publie généralement les fichiers au moyen d’un [client FTP](tools#client-ftp).

<img alt="" src={useBaseUrl('img/programming/introduction/server.svg')} class="w-75" />

### Site local

Un site web hébergé sur un ordinateur personnel qui par conséquent n’est pas accessible publiquement. Créer un tel site ne requiert pas de serveur web.

## Gérer les fichiers

### Emplacement du site

Tous les fichiers utilisés par votre site doivent être placés dans un même dossier. Vous êtes ensuite libre de les organiser comme bon vous semble à l’intérieur de celui-ci.

Sur votre bureau, créer un dossier appelé ```mon-site```. C’est dans celui-ci que vous travaillez.

Si vous utilisez un serveur web local, les fichiers doivent être placés à la racine web de celui-ci ou dans un sous-dossier de la racine web.

### Casse et espacement

Les dossiers et les fichiers qui composent votre site web ne doivent comporter que des lettres minuscules, des chiffres, des tirets et des points. Aucun autre caractère n’est admis.

- Contrairement à votre ordinateur, les serveurs web sensibles à la casse. Ainsi un document nommé ```MonImage.jpg``` ne désigne pas le même fichier que ```monimage.jpg```. Le risque de pointer vers un fichier non existant est donc plus élevé si vous utilisez des majuscules.
- Les espaces, accents et caractères spéciaux ne sont pas traités de la même manière par les différents navigateurs et serveur web, cette différence d’interprétation entraînée des erreurs et par conséquent des adresses web invalides.

Voici quelques exemples de noms valides:

```bash
index.html
liste-des-projets.html
projet-1.html
photo_2020.02.25.jpg
dossier_images
```

### Structure des fichiers

Si vous êtes libre d’organiser les fichiers comme bon vous semble dans le dossier du site, il y a néanmoins quelques bonnes pratiques à respecter. Il est déconseillé de placer tous vos documents à la racine sans distinction. Créer une hiérarchie de dossier qui vous permettra de retrouver facilement vos fichiers.

:::caution
La page d’accueil de votre site web doit impérativement être nommée **index.html**.
:::

Voici un exemple de structure de site:

```bash
mon-site # dossier racine de votre site
├── a-propos.html
├── index.html # page d’accueil
├── projets
│   ├── index.html # galerie des projets.
│   ├── projet-1.html
│   └── projet-1.html
├── images
│   └── ...
├── scripts
│   └── scripts.js
├── styles
│   └── desktop.css
│   └── mobile.css
└── video
    └── ...
```

Dans l’exemple ci-dessus, la galerie des projets est accessible via l’URL ```/projets/```.
