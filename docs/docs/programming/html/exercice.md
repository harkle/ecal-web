---
id: exercice
title: Exercice
sidebar_label: Exercice
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Étape 1 — Page d'accueil

Pour faire cet exercice, vous pouvez repartir sur la base de [l'exercice précédent](page#exercice).

1. Ouvrez le fichier ```index.html```;
2. Après l'ouverture de l'élément, ```<body>``` créez la structure de base de votre page: un en-tête, une section et un pied de page.
3. Déplacer le titre et le paragraphe déjà présent dans la page dans l'élément HTML adéquat.
4. Changez le titre en "Exercice 4".
5. Dans votre en-tête, créez un menu, avec deux liens: "Accueil" qui pointera sur le fichier ```index.html``` et "À propos" qui pointera sur le fichier ```a-propos.html```.
6. Dans le contenu de votre page, après le paragraphe de texte, insérez une image.

Vous devriez obtenir le résultat ci-dessous:

<BrowserWindow minHeight="250px" url="index.html">
  <header>
    <menu>
      <a href="index.html">Accueil</a>&nbsp;
      <a href="a-propos.html">À propos</a>
    </menu>
  </header>
  <section>
    <h1>Exercice 4</h1>
    <p>Ceci est <strong>un paragraphe</strong></p>
    <img alt="" src={useBaseUrl('img/placeholder-image.gif')} />
  </section>
</BrowserWindow>

## Étape 2 — Page à propos

1. Dupliquez votre page de référence ```page-de-base.html``` et nommez-là ```a-propos.html```.
2. Créez la structure de base de votre page: un en-tête, une section et un pied de page.
3. Copiez le menu depuis la page ```index.html``` et collez-le au bon endroit dans la page ```a-propos.html```.
4. Dans la section principale, créer un titre "À propos" et un paragraphe content "Ceci est le quatrième exercice."

:::important
Vous pouvez aussi dupliquer la page ```index.html``` afin d'avoir déjà la bonne structure et modifier uniquement le titre et le paragraphe de texte.
:::

Vous devriez obtenir le résultat ci-dessous:

<BrowserWindow minHeight="250px" url="a-propos.html">
  <header>
    <menu>
      <a href="index.html">Accueil</a>&nbsp;
      <a href="a-propos.html">À propos</a>
    </menu>
  </header>
  <section>
    <h1>À propos</h1>
    <p>Ceci est le quatrième exercice.</p>
  </section>
</BrowserWindow>

Vous remarquerez qu'en cliquant sur les liens du menu, vous pouvez passer d'une page à l'autre.

:::note
<a href={useBaseUrl('exercises/programming/html-overall.zip')}>Télécharger le résultat de l’exercice</a>
:::
