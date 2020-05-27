---
id: publish
title: Mise en ligne
sidebar_label: Mise en ligne
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Hébergement web
Pour être visible sur le web, un site doit être publié sur un serveur accessible publiquement. Vous devez aussi posséder un nom de domaine pour permettre au visiteur de consulter votre site. Il existe de nombreux service d'hébergement qui propose des solutions incluant un nom de domaine, une adresse e-mail et un espace de stockage pour votre site.

De manière générale, évitez les solutions gratuites et privilégiez des prestataires Suisse ou Européens. (héberger votre page web au États-Unis peut ralentir le chargement jusqu'à une demi seconde par page!)

Voici, par exemple, deux service Suisse que vous pouvez utiliser sans autre:

- <a href="https://infomanika.com/" target="_blank">infomaniak.com</a>
- <a href="https://kreativmedia.ch/fr/home" target="_blank">kreativmedia.ch</a>

## Publication du site

La mise en ligne du contenu se fait généralement via le système de transfert de fichier FTP. Pour des raisons de sécurité, on privilègiera aujourd'hui un accès sécurisé via SFTP.

Le logiciel <a href="https://cyberduck.io/" target="_blank">cyberduck</a> vous permet de vous connecter à un serveur web et d'y déposer vos fichiers

:::important
Avant de publiez votre site, assurez-vous que vous avez lu et respecté le chapitre [Gérer-les-fichiers](../basics/organisation#gérer-les-fichiers)
:::
### Dans le cadre du cours

Pour les évalutions, un serveur web est mis à votre disposition afin que vous puissiez publier votre projet.

#### 1 – Connexion au serveur

Ouvrez Cyberduck puis cliquez sur le bouton "Open connection" siuté en haut à gauche du programme. Dans la fenêtre qui s'ouvre, sélectionnez "FTP (File Transfer Protocol)" et entrez les informations suivantes dans les différents champs

- **Server:** adct.ftp.infomaniak.com;
- **Username:** adct_ecal;
- **Password:** le mot de passe qui vous a été communiqué par e-mail.


<img alt="" src={useBaseUrl('img/programming/miscellaneous/publish-cyberduck.png')} class="w-75" />

<br/>

Cliquez ensuite sur le bouton *Connect*. Vous devriez maintenant voir une liste de dossier et de fichier.

#### 2 – Déposer vos fichier

1. Créez ensuite un nouveau dossier (clique-droit →  New folder...);
2. Comme nom de dossier, entrez votre nom, suivit d'un tiret puis votre prénom.<br/>Par exemple ```tardy-lionel```.

:::warning
Inscrivez votre nom suivi de votre prénom en **minuscules, sans accent et sans espace**.
:::

3. Après avoir crée le dossier crée, double-cliquez dessus;
4. Glissez ensuite le **contenu** du dossier local dans lequel vous avez développé votre site.

:::important
Attention à ne pas déposer le dossier local mais bien **son contenu**!
:::

5. Vous pouvez maintenant accéder à votre site via l'adresse https://ecal.lionel.me/nom-prenom/

### Problèmes courants

#### Access forbidden!

- Vérifiez que le fichier de votre page d'accueil est bien nommée ```index.html```;
- Vérifiez que vous avez bien déposé le contenu de votre dossier sur le serveur et qu'il ne se trouve pas à l'intérieur d'un sous-dossier.

#### Mes liens ne fonctionnent pas

- Vérifiez l'attribut ```href``` de vos liens. Les noms de fichiers sont-il correctement écrits?
– Le fichier vers lequel vous pointez se trouve-t-il bien sur le serveur?

#### Mes images ne s'affichent pas

- Vérifiez l'attribut ```src``` de vos liens. Les noms de fichiers sont-il correctement écrits?
– Vos images sont-elle bien sur le serveur?
