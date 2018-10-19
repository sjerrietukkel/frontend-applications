# Front-end applications - Risico-indicatie

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

Documentatie van Project Tech (CMD 2018)

Klasgenoten (May, Mitch, Dennis, Tim)

## Process

Gedurende het project kwamen er gastsprekers langs omte vertellen over frameworks en het werk dat huklpverleners doen. De eerste gastsprekers gingen het hebben over de drie populairste frameworks van het moment: React, Angular & Vue. Ze benoemden de voor- en nadelen en hadden het over de use cases en instapniveaus. Na deze presentaties heb ik voor Vue gekozen, dit framework had de minst hoge instapdrempel van de drie en beschikt over een erg uitgebreide duidelijke documentatie. Dit sprak me als beginneling erg aan.

Ook waren er sprekers van de jeugdzorg die uitlegde wat hun werk inhield, problemen waar ze tegenaan liepen en hoe een app als de Risico Indicatie hen daarbij kon helpen. Aan de hand hiervan heb ik het bovenstaande concept uitgewerkt. Het werd tijd om het te gaan realiseren in code.

Hier ben ik begonnen met het kijken van heel veel tutorials, beginnend met kleine dingen om de syntax onder de knie te krijgen. Ik liep hier tegen veel problemen aan, en pas toen ik samen met klasgenoten hieraan ging werken kreeg ik begrip van wat de code deed en waarom het dat deed.

## Reflection

Ik begon dit vak met 0 kennis over libraries, nodejs, CLI en git. Ook wist ik vrijwel niks over JS (m.u.v. de héle basis dingen). Dit maakte het een bijzonder lastig vak voor me. Ik liep tegen veel dingen aan die ik niet zelf (of met turorials) wist op te lossen. Pas toen ik samen met klasgenoten aan deze problemen ging zitten begin het te dagen, maar ik heb nog niet het idee dat ik het helemaal onder de knie heb. Ik kan bijvoorbeeld nog niet zelfstandig een functie schrijven, content uit een json file extracten of met localstorage werken.

Het was echter wel een zeer interessant vak, omdat ik meer begrip heb van het web en hoe je het best een project aanpakt. Ik heb wel het idee dat ik op dit moment veel heb geleerd over js, Vue en node.js.
