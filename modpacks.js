/* ============ TUS MODPACKS ============
   Copia un bloque { ... } para añadir otro. Los campos que no sepas, déjalos en null o [].
   result: "ok" = Completado · "dead" = Muerto · "quit" = Abandonado · "pending" = Por completar
   difficulty y rating: de 1 a 10 (o null)
   sort: fecha de inicio AAAA-MM-DD, solo sirve para ordenar
   logo: archivo dentro de la carpeta img/                                        */
const MODPACKS = [
  {
    name: "Beyond Depth",
    sort: "2025-07-04",
    dates: "4 jul 2025 – 12 sep 2025",
    logo: "img/beyond-depth.png",
    difficulty: 9,
    rating: 9,
    result: "ok",
    resultText: "Completado al 100%",
    opinion: "Honestamente, un sólido 9/10. Me encantaron sus mecánicas y su progresión.",
    videos: [
      { label: "Parte 1", url: "https://www.youtube.com/watch?v=pUkr2DlZwUY" },
      { label: "Parte 2", url: "https://www.youtube.com/watch?v=1rMYWOd1hD0" },
      { label: "Parte 3 (final)", url: "https://www.youtube.com/watch?v=TKFZK-wWne4" }
    ],
    page: "https://www.curseforge.com/minecraft/modpacks/beyond-depth"
  },
  {
    name: "RLCraft",
    sort: "2026-05-29",
    dates: "2026 (fecha aprox.)",
    logo: "img/rlcraft.png",
    difficulty: null,
    rating: null,
    result: "pending",
    resultText: "Por completar",
    opinion: null,
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=CwlnV7KNLvE" }],
    page: null
  },
  {
    name: "All the Mods 10",
    sort: "2025-11-01",
    dates: "2025 (fecha aprox.)",
    logo: "img/atm10.png",
    difficulty: null,
    rating: null,
    result: "pending",
    resultText: "Por completar",
    opinion: null,
    videos: [],
    page: null
  }
];
