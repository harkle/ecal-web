---
id: images
title: Préparation des images
sidebar_label: Images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Formats de fichiers

Les navigateurs web prennent en charge un nombre limité de formats de fichier quand il s'agit d'afficher des images. Voici les principaux formats et leur usage.

### JPEG
Le *JPEG* est un format destructif qui permet de réduire fortement la taille d'un fichier. Plus le taux de compression est élevé, plus le poids du fichier est petit, mais plus d'images présenteront des artefacts.

**Le format JPEG est idéal pour l'affichage de photographies.**

<img alt="" src={useBaseUrl('img/programming/miscellaneous/image-jpg.jpg')} class="w-100" />

*À gauche, l'image originale qui pèse 22Mo. À droite, la version compressée ne pèse que 275Ko, soit environ cent fois moins.*

### PNG

Le *PNG* est un format non destructif qui compresse les images de façon moins efficace que le JPG, mais garde leur qualité. Il permet en outre d'utiliser un canal de transparence de 8 bits.

**Le format PNG est idéal pour l'affichage d'images monochromes, d'illustrations non vectorielles ou si l'on a besoin de transparence.**

<img alt="" src={useBaseUrl('img/programming/miscellaneous/image-png.png')} class="w-100" />

*Les fichiers PNG supportent la transparence progressive.*

### GIF

Le *GIF* est un ancien format utilisé pour animer des images. Il est à éviter, car:
- la palette de couleur est limitée à 256 nuances;
- il n'est pas compressé et peut vite devenir très lourd.

<img alt="" src={useBaseUrl('img/placeholder-image.gif')} />

*Dans l'animation ci-dessus, on remarque très bien la palette de couleur limitée, notamment dans les arrière-plans*

Pour créer des animations, il faut privilégier les animations CSS, le ```<canvas>```, le format APNG (animated PNG) ou des fichiers vidéo.

### SVG

Le *SVG* est un format vectoriel. Contrairement aux formats décrits précédemment, il ne travaille pas à base de pixels me de points et de tracés. Une image *SVG* peut être réduite ou agrandie sans perte de qualité et sans effet d'escalier.

<img alt="" src={useBaseUrl('img/programming/miscellaneous/image-svg.png')} class="w-100" />

*La ligne du haut montre l'agrandissement d'une image au format PNG. Un effet d'escalier se forme sur le pourtour du cercle. La ligne du bas montre le même cercle au format SVG.*

**Le format SVG est idéal pour toute image vectorielle type logo, icône, etc.**

## À quelle taille créer vos images

Seule la taille de pixel est importante. Les DPI et la largeur en centimètre ou toute autre unité n'ont **aucune importance**. Une image mesurant 100 pixels de large sera affichée à 100 pixels de large dans votre navigateur (peu importe que vous le mettiez à 72, 144 ou 288 DPI.).

Définir la taille d'une image est une tâche complexe qui dépend de nombreux paramètres. Votre maquette graphique doit vous servir de guide.

:::important
Cet article **n'aborde pas** la notion d'image Retina.
:::

### Images à taille fixe

Si votre image est affichée à une taille fixe dans votre maquette, il vous suffit de regarder les valeurs de largeur et de hauteur en pixel dans votre maquette graphique et préparez votre fichier conséquence.

### Images fluides

Si la taille de votre image est variable en fonction de son conteneur, il faut estimer la largeur maximale de celle-ci.

<img alt="" src={useBaseUrl('img/programming/miscellaneous/image-size.svg')} class="w-75" />

1. **Fenêtre du navigateur**: taille définie par l'utilisateur. On considère en général que 2560 pixels est la largeur maximale d'un écran;
2. **Largeur du site**: 100% de la fenêtre, limitée à 1400 pixels de large (responsive design);
3. **Colonne de contenu**: dans ce design, la colonne mesure 50% de largeur du site.

En conséquence, il faudra préparer l'image à ```700px``` de largeur (1400 / 2). Si la largeur du site n'avait pas été bloquée à 1400 pixels, elle aurait occupé toute la largeur de la fenêtre, soit un maximum de 2560 pixels. On aura alors préparé l'image à ```1280px``` de large.


:::important
Si votre image apprêt plusieurs fois sur votre site à des tailles différentes. Par exemple dans le cas d'une vignette qui permet d'afficher une image en plein écran, **il faudra préparer deux fichiers différents!**. L'un à la taille de la vignette et l'autre de l'image en grand.

Ainsi, pour une photo appelée chaton.jpg, vous aurez par exemple dans votre dossier image
```bash
├── images
│   ├── chaton-large.jpg
│   └── chaton-small.jpg
```
:::

### Le poids idéal

Le poids de votre image est variable en fonction du format de fichier utilisé, de la taille de l'image et de sa complexité. Le tableau ci-dessous vous donne quelques repères quant à la taille moyenne de fichier.

|      | Vignette (~300px) | Image moyenne (~1000px) | Image large (&gt;2000px) |
| ---- |:----------------- |:----------------------- |:------------------------ |
| JPEG | 10-20Ko           | 100-200Ko               | 400-600Ko                |
| PNG  | 90Ko              | 500                     | 2Mo                      |
| GIF  | 30Ko              | 300Ko                   | 1Mo                      |
| SVG  | < 10Ko            | < 10Ko                  | < 10Ko                   |

### Exportation depuis Adobe Photoshop

Adobe Photoshop propose un outil d'exportation qui permet d'optimiser facilement la taille de vos images et de comparer la compression selon les formats. Vous pouvez y accéder en utilisant *Fichier* → *Export* → *Enregistrer pour le web (hérité)* ou via le raccourci clavier <kbd>⌥</kbd> + <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>S</kbd> ou <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>⇧</kbd> + <kbd>S</kbd>.

<img alt="" src={useBaseUrl('img/programming/miscellaneous/ps-export.png')} class="w-100" />

1. Image originale;
2. Image optimisée;
3. Réglage de la taille. Idéal pour vérifier les artefacts;
4. Choix du format de fichier;
5. Réglage de la qualité d'image;
6. Poids du fichier optimisé.
