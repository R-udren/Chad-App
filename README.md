# Chad App

Chad as described [Here](https://en.wikipedia.org/wiki/Chad_(slang)).

## Project Setup

### Clone repo
```sh
git clone https://github.com/R-udren/Chad-App.git
cd Chad-App
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Usage with Docker

### Build Docker Image

```sh
docker build . -t chad-app
```

### Run on port 8080

```sh
docker run -d -p 8080:80 chad-app
```
<details>
  <summary>Raw Tasks</summary>

#### Task 1

Izveidot pamata HTML tīmekļa vietnes struktūru ar galveno sadaļu, galveni, kājeni, navigācijas izvēlni un dažiem
vienkāršiem elementiem.

* Galvene (`<header>`):
    * Pievieno galveni ar vietnes nosaukumu un navigācijas izvēlni, kas sastāv no saitēm uz **“Home”**, **“About”**, un
      **“Contact”** sadaļām.
* Galvenā sadaļa (`<main>`):
    * Izveido galveno sadaļu ar vienu vai diviem virsrakstiem (`<h1>`, `<h2>`), īsu tekstu (`<p>`), un vienu
      attēlu (`<img>`).
* Sānu josla (`<aside>`):
    * Pievieno sānu joslu ar īsu tekstu vai papildu informāciju, piemēram, saistītu rakstu sarakstu.
* Kājene (`<footer>`):
    * Izveido kājeni ar pamatinformāciju, piemēram, autortiesību paziņojumu, un sociālo tīklu saites.
* Piešķir stilu ar CSS (pēc izvēles):
    * Vari pievienot pamata CSS, lai stilizētu galveni, navigācijas joslu, galveno saturu, sānu joslu un kājeni. To var
      izdarīt vai nu pašā HTML failā, izmantojot `<style>`, vai izveidojot atsevišķu CSS failu.

#### Task 2

Uzdevums: Izveidot vienkāršu portfolio mājaslapu, izmantojot tikai HTML un CSS. Lapā jāiekļauj sadaļas par sevi,
prasmēm, projektu saraksts un kontaktinformācija.

* Izmanto HTML5 semantiskos elementus (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, utt.).

* Sadaļas:
    * Galvene (**Header**) ar tavu vārdu un navigācijas izvēlni.
    * Par mani (**About Me**) sadaļa, kurā ir īss apraksts par tevi, iespējams, ar tavu fotoattēlu.
    * Prasmes (**Skills**) sadaļa, kurā ir saraksts ar tavām prasmēm (izmanto CSS, lai prasmes attēlotu grafiski,
      piemēram,
      progress bar vai zvaigznes).
    * Projekti (**Projects**) sadaļa, kurā ir saraksts ar taviem projektiem. Katram projektam jābūt atsevišķam blokam ar
      nosaukumu, īsu aprakstu un saiti uz projektu.
    * Kontakti (**Contact**) sadaļa ar saziņas formu vai sociālo tīklu saitēm.
* Atbilstoša responsivitāte, lai lapa izskatītos labi gan uz lieliem, gan uz maziem ekrāniem (izmanto CSS media
  queries).
* Dizains:
    * Izmanto **Google Fonts**, lai pievienotu pielāgotus fontus.
    * Veido vienotu krāsu shēmu (vismaz divas galvenās krāsas).
    * Izmanto CSS pārveides un pārejas (`transform`, `transition`), lai pievienotu interaktīvus efektus (piemēram,
      mainās
      krāsa, kad kursors uzbrauc uz elementa).
    * Nodrošini, ka attēli un fonti ir pielāgoti dažādu ierīču izmēriem.

#### Task 3

Uzdevums: Karte (Card) ar hover efektiem

Izveido stilizētu kartiņu (card) izkārtojumu, kas mainās, kad lietotājs uz tās uzbrauc ar peli (hover efekti). Uzdevums
ir paredzēts, lai praktizētu CSS izkārtojumus, hover efektus, pārejas (transitions) un animācijas.

* Izvietojums:
    * Izveido lapu ar vismaz trim kartītēm, kas izvietotas rindā.
    * Izmanto **Flexbox** vai **CSS Grid**, lai sakārtotu kartītes horizontāli un nodrošinātu responsivitāti.
* Stilizēšana:
    * Katrā kartītē ir jābūt:
    * Attēlam (piemēram, produktu bilde vai cita vizuāla informācija).
    * Virsrakstam (piemēram, produkta nosaukums).
    * Aprakstam (īss teksts).
    * Poga (kas izskatās interaktīva).
* Hover efekts:
    * Kad lietotājs uzbrauc ar peli uz kartītes, tai ir jāveic vizuālas izmaiņas (piemēram, jāpaceļas no fona, jāmaina
      ēna vai jāveido krāsu pāreja).
    * Poga kartītes apakšā maina krāsu vai izmēru, kad lietotājs to hoverē.
* CSS pārejas un animācijas:
    * Pievieno CSS pārejas (`transition`) kartītei, lai hover efekti būtu gludi.
    * Pielieto keyframes animācijas, lai kartīte “paceltos” vai izveidotu kādu citu vizuālu efektu.

#### Task 4

* Navigācijas izvēlne:
    * Pievieno vienkāršu izvēlni lapas augšpusē.
    * Izmanto CSS izkārtojumu (piemēram, Flexbox vai inline-block), lai izveidotu horizontālu navigācijas joslu.
    * Hover efekts navigācijas elementiem (pārbraucot ar peli, mainās fona krāsa vai fonta krāsa).
* Kartiņas ar hover efektiem:
    * Kartiņas (Card) saglabā ar iepriekš norādītajiem hover efektiem, kuras maina izskatu, kad lietotājs uz tām uzbrauc
      ar peli.
* Responsivitāte:
    * Nodrošini, ka gan navigācijas izvēlne, gan kartītes ir responsīvas un labi izskatās dažādos ekrānos, piemēram,
      izmantojot media queries.
    * Navigācijas hover efekti:
    * Var pievienot krāsu pārejas vai animācijas navigācijas izvēlnes hover efektiem.

* Papildu uzdevumi:
    * Izvērsta stilizācija: Eksperimentē ar dažādām krāsu shēmām, piemēram, izmanto gradientus navigācijas fonam vai
      kartītēm.
    * Ikonas izvēlnē: Pievieno ikonu (piemēram, izmantojot **FontAwesome**) blakus katram izvēlnes elementam.
    * Dark mode: Pievieno CSS **Dark mode** versiju, kur mainās izvēlnes un kartīšu krāsas.

#### Task 5

* Pievieno Dropdown izvēlni:
    * Papildini esošo navigācijas izvēlni ar dropdown funkcionalitāti. Kad lietotājs pārbrauc ar peli pār izvēlnes
      elementu **“Services”**, jāparādās papildu apakšizvēlnei ar vairākām iespējām.
* Pievieno modālo logu (Modal):
    * Pievieno iespēju, ka, klikšķinot uz kartītes pogas (**“Learn More”**), atveras modālais logs, kurā ir detalizētāka
      informācija par kartiņas saturu.
* Pievieno animāciju hover efektam:
    * Pielieto CSS Keyframe animācijas, lai kartīšu hover efekti būtu vēl interesantāki. Piemēram, kartītes attēlam
      vajadzētu lēnām palielināties (_zoom-in_) vai mainīt izskatu.
* Pievieno gradientus un pārejas:
    * Pievieno CSS gradientus kartītēm vai pogām, kas vizuāli uzlabo dizainu. Izmanto gradientu pārejas uz pogām hover
      efektos, lai mainītu pogas krāsu.
* Izveido responsīvu hamburgera izvēlni:
    * Izveido hamburgera izvēlni, kas parādās mobilajās ierīcēs, aizstājot navigācijas joslu. Kad lietotājs klikšķina uz
      hamburgera ikonas, parādās izvelkamā izvēlne.
</details>
