# VOID: The Hungry World

> *Everything begins with a little hole.*

Un gioco arcade 3D per browser, ispirato al concetto di Hole.io ma con identità, progressione e
gameplay originali. Controlli un buco nero che scivola sulla superficie di una città stilizzata:
inghiotti oggetti abbastanza piccoli da entrare nell'apertura, cresci, e divora cose sempre più
grandi prima che scada il tempo, fino ai grattacieli e alla Hungry Spire dell'ultimo livello.

Realizzato con **Three.js + TypeScript + Vite**. Non usa modelli, texture o file audio esterni:
tutti i modelli 3D sono procedurali, il terreno è dipinto su canvas e musica ed effetti sonori
sono sintetizzati in tempo reale con la Web Audio API.

---

## Avvio rapido

Requisiti: **Node.js 18+** (consigliato 20 o 22) e npm.

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato nel terminale (di solito <http://localhost:5173>). Il server è già
esposto sulla rete locale (`host: true`), quindi puoi provare il gioco anche da telefono o tablet
collegati alla stessa rete usando l'indirizzo "Network".

Build di produzione:

```bash
npm run build      # typecheck + bundle in dist/
npm run preview    # serve la build su http://localhost:4173
```

La cartella `dist/` è statica: si può pubblicare su qualsiasi hosting (usa percorsi relativi).

---

## Come si gioca

| Azione | Desktop | Mobile / Tablet |
| --- | --- | --- |
| Muovere il buco | `W` `A` `S` `D` oppure le frecce | Tocca e trascina in un punto qualsiasi (joystick analogico) |
| Sterzo col mouse (opzionale) | Tieni premuto il tasto sinistro: il buco va verso il cursore | — |
| Pausa | `Esc` o `P`, oppure il pulsante in alto a destra | Pulsante pausa |

- Puoi inghiottire solo oggetti **più piccoli del buco**. Quando urti qualcosa di troppo grande,
  sopra l'oggetto compare la taglia necessaria (es. `SIZE 4`).
- Ogni oggetto dà punti e riempie la **barra di crescita**; quando è piena il buco passa alla
  taglia successiva e può mangiare oggetti prima inaccessibili.
- Inghiottire oggetti in rapida successione attiva le **combo** (moltiplicatore fino a ×2) con
  messaggi come *NICE!*, *GREAT!*, *MASSIVE COMBO!*, *ABSOLUTE DEVOURER!*.
- **Oggetti speciali** luminosi su piedistallo:
  - *Time Crystal*: +6 secondi
  - *Gravity Core*: attira gli oggetti vicini per qualche secondo
  - *Golden Star*: punti doppi
  - *Void Surge*: il buco diventa temporaneamente molto più grande
- **Scie di monete** (Void Coin): raccoglile tutte per un bonus catena.
- In ogni mappa è nascosta una **Golden Duck** segreta, registrata nella Collezione.

### Obiettivi, stelle e progressione

Ogni livello ha uno o più obiettivi verificati in tempo reale (punteggio, numero di oggetti,
oggetti di una certa categoria). Allo scadere del timer:

- ★ obiettivo raggiunto
- ★★ punteggio totale ≥ soglia "buona"
- ★★★ punteggio totale ≥ soglia "eccellente"

Il punteggio totale include un **bonus velocità** proporzionale al tempo rimasto quando hai
completato gli obiettivi, quindi le stelle tengono conto sia del punteggio sia del tempo.
Completare un livello sblocca il successivo; tutti i livelli già superati restano rigiocabili.
Progressi, record, stelle, collezione e impostazioni sono salvati in `localStorage`.

### I livelli

| # | Nome | Ambientazione | Tempo | Obiettivo |
| --- | --- | --- | --- | --- |
| 1 | The First Bite | Piccolo parco (tutorial) | 45 s | 20 oggetti |
| 2 | Street Feast | Strada cittadina | 60 s | 1.500 punti |
| 3 | Park Chaos | Grande parco pubblico | 60 s | 30 oggetti + 3 di medie dimensioni |
| 4 | Traffic Eater | Incrocio con traffico e semafori | 65 s | 3.000 punti |
| 5 | Shopping Spree | Via commerciale e mercato | 70 s | 5 strutture commerciali + 4.000 punti |
| 6 | Downtown Devour | Centro città moderno | 75 s | 6.000 punti |
| 7 | Industrial Hunger | Zona industriale portuale | 80 s | 8 oggetti industriali + 8.000 punti |
| 8 | Beach Absorption | Località balneare | 80 s | 40 oggetti + 10.000 punti |
| 9 | Neon Metropolis | Città futuristica notturna | 90 s | 12.000 punti + 3 oggetti speciali |
| 10 | The Final Consumption | Capitale con piazza e grattacieli | 120 s | 20.000 punti + 1 edificio importante |

**Mondi bonus** (si sbloccano dopo aver completato il livello 10):

| # | Nome | Ambientazione | Tempo | Obiettivo |
| --- | --- | --- | --- | --- |
| 11 | Fun Fair Frenzy | Luna park al tramonto | 90 s | 15.000 punti + 3 giostre |
| 12 | Sky Harbor | Aeroporto internazionale | 100 s | 25.000 punti + 2 aerei |

Nel livello 10, inghiottire la **Hungry Spire** al centro della piazza avvia la sequenza finale
(rallentamento, onda di particelle, inquadratura orbitale) e la schermata di vittoria.

---

## Struttura del progetto

```
src/
  main.ts                 bootstrap (font locali, stili, registro dei prop)
  App.ts                  macchina a stati: menu, selezione, partita, pausa, risultati, transizioni
  engine/
    Engine.ts             renderer WebGL, post-processing (bloom, grading, vignetta), qualità, loop
    CameraRig.ts          camera inclinata con follow morbido, zoom per taglia, shake, FOV kick
    Input.ts              tastiera, sterzo col mouse, joystick virtuale multi-touch
    utils.ts              RNG deterministico, interpolazioni, emitter, formattazione
  hole/
    HoleVisual.ts         pozzo profondo (shader), fondo a vortice, bordo luminoso, onde d'urto
    Growth.ts             sistema di crescita a taglie con barra di progresso
  gameplay/
    Session.ts            una partita: movimento, collisioni, assorbimento e caduta fisica,
                          punteggio, combo, power-up, catene, obiettivi, timer, traffico, finale
    WorldObject.ts        istanza runtime di un oggetto (trasformazioni, caduta, oscillazione)
  world/
    materials.ts          materiali condivisi + iniezione shader (taglio del terreno, lente,
                          increspature, oscuramento degli oggetti che cadono)
    ModelBuilder.ts       costruttore di modelli low-poly procedurali (geometria unita, 1 draw call)
    PropLibrary.ts        cache delle geometrie, dimensione minima, massa e colore di ogni oggetto
    props/                catalogo di oltre 150 oggetti per tema (parco, strada, veicoli, negozi,
                          downtown, edifici, industria, spiaggia, neon, luna park, aeroporto, speciali)
    GroundPainter.ts      pittura del terreno su canvas (strade, strisce, piastrelle, sabbia…)
    LevelContext.ts       API di costruzione dei livelli: spawn con spaziatura minima, zone,
                          file, cluster, scie, corsie del traffico, scenografia statica unita
    levels/               definizione dei 12 livelli (10 + 2 bonus), temi cromatici e scenografie
  fx/Particles.ts         particelle in pool (spirale nel buco, esplosioni, scintille)
  audio/                  AudioManager (SFX sintetizzati) e Music (sequencer procedurale per tema)
  save/SaveManager.ts     salvataggi locali versionati
  ui/                     HUD, schermate, icone SVG, renderer delle icone 3D e miniature
  styles/main.css         identità visiva, layout responsive, animazioni
```

### Note tecniche

- **Il buco**: il terreno scarta i frammenti dentro il cerchio del buco (shader iniettato nei
  materiali standard), sotto c'è un pozzo cilindrico con gradiente e scie animate. Gli oggetti
  cadono davvero dentro l'apertura con gravità, inclinazione e rotazione, e si scuriscono man mano
  che scendono. Attorno al bordo il terreno è distorto come da una lente gravitazionale.
- **Dimensioni**: ogni oggetto ha una taglia minima calcolata dalla sua geometria (ingombro e
  altezza); la crescita a taglie impedisce che il buco diventi enorme dopo pochi bocconi.
- **Qualità grafica**: rendering fino a 2–2,5× la densità dello schermo con MSAA 4×, terreno
  diviso in una texture ad alta risoluzione per l'area di gioco e una più leggera per i dintorni,
  bordo del buco anti-aliasato, illuminazione ambientale (IBL), ombrezzatura morbida, ombre
  stabili durante lo zoom.
- **Prestazioni**: geometrie unite per prop (una draw call), scenografia unita a blocchi, pooling
  di oggetti, veicoli, particelle e numeri flottanti, animazioni e LOD solo per gli oggetti vicini,
  ombre che seguono la camera, tre preset di qualità (Bassa / Media / Alta) selezionati
  automaticamente in base al dispositivo e modificabili nelle Impostazioni.
- **Focus e risorse**: pausa automatica quando la scheda perde il focus (disattivabile), audio
  sospeso in background, gestione della perdita del contesto WebGL, rilascio delle risorse a ogni
  cambio di livello.

### Parametri URL di debug

| Parametro | Effetto |
| --- | --- |
| `?level=N` | avvia direttamente il livello N |
| `&bot` | il buco è guidato dall'autopilota (usato per bilanciare i livelli) |
| `&speed=K` | simula K passi per frame (test accelerati) |
| `&headless` | salta il rendering (solo simulazione) |

---

## Licenza degli asset

Tutti i contenuti (modelli, texture, musica, suoni) sono generati proceduralmente dal codice del
progetto. I font **Unbounded** e **Sora** sono distribuiti con licenza SIL Open Font License
tramite i pacchetti `@fontsource` e vengono inclusi localmente nella build.
