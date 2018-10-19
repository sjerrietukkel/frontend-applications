# Front-end applications Risico-indicatie

## Index

1. How to install
2. Dependencies
3. Concept and Design Choices
4. Improvements
5. Process
6. Reflection
7. Resources

## How to install

Download or clone this repository
npm install

## Dependencies

- @babel/polyfill: ^7.0.0-rc.1,
- vee-validate": ^2.1.0-beta.9,
- vue: ^2.5.17,
- vue-router: ^3.0.1,
- vuetify: ^1.2.0

#### Dev Dependencies

- @babel/core: ^7.1.2,
- @babel/preset-env: ^7.1.0,
- @vue/cli-plugin-babel: ^3.0.5,
- @vue/cli-plugin-eslint: ^3.0.5,
- @vue/cli-service: ^3.0.5,
- babel-loader: ^8.0.4,
- husky: ^1.1.2,
- prettier: 1.14.3,
- pretty-quick: ^1.7.0,
- vue-cli-plugin-vuetify: ^0.2.1,
- vue-template-compiler: ^2.5.17,
- webpack: ^4.20.2 -->

## Concept and Design Choices

![alt text](https://github.com/sjerrietukkel/frontend-applications/blob/master/src/images/sketch_concept.png "Concept gemaakt na de sprekers van de jeugdzorg")

Na meerder presentaties van jeugdzorgwerken kwamen er de volgende punten naar boven die ik interesssant vond voor het project:

- Het tonen van welke opties zwaar wegen.
- Het tonen van de stappen die de jeugdhulp hierna kan ondernemen.
- Hulpverleners werken met gezinnen en hebben een gemiddelde van 21 kinderen.
- Hulpverleners vinden de ARIJ een sleur om in te vullen.
- Hulpverleners kunnen geen aantekeningen maken op de ARIJ.
- Hulpverleners maken korte aantekeningen van het gesprek met het kind/ouders, en verwerken deze op een later tijdstip.

In de sidebar staan de gezinnen die de hulpverlener op het moment heeft. Hier kunnen ook gezinnen aan wordne toegevoegd of worden gearchiveerd. Per kind kan de hulpverlener 'flags' geven, net als in een e-mailapplicatie. Hiermee kan worden getoond of er nog gegevens moeten worden ingevuld of niet compleet zijn.

Ik heb besloten om het geheel van de vragenlijst op te hakken in stukken, zodat deze makkelijker verwerkbaar is voor de hulpverlener. De app geeft hen de ruimte om aantekeningen per kind te maken als toevoeging op de vragenlijst. De app slaat de gegevens van de gezinnen en kinderen op in het account van de hulpverlener

## Things to improve

- Log-in
- Add collapsable menu/menu-items
- Add new families/children
- Add markings
- Refine questionaire and formula
- Add breadcrumbs

## Resources

[The Vue Tutorial for 2018 - Learn Vue 2 in 65 Minutes](https://www.youtube.com/watch?v=78tNYZUS-ps)

[Sidebar](https://lusaxweb.github.io/vuesax/components/sideBar.html#default)

[Formule](https://alligator.io/vuejs/computed-properties/)

[JSON import](https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app)

[Maximilian(Academind)](https://www.youtube.com/watch?v=4lk9-PYensI&t=446s)

## Process

## Reflection

I started this course with very little knowledge of JS, and no knowledge of git, NPM and libraries.
