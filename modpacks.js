/* ============ TUS MODPACKS ============
   Copia un bloque { ... } para añadir otro. Los campos que no sepas, déjalos en null o [].
   result: "ok" = Completado · "dead" = Muerto · "quit" = Abandonado · "pending" = Sin completar
   difficulty y rating: de 1 a 10 (o null)
   sort: fecha de inicio AAAA-MM-DD, solo sirve para ordenar
   logo: archivo dentro de la carpeta img/
   note: texto pequeño opcional bajo la opinión                                      */
const MODPACKS = [
  {
    name: "Beyond Depth",
    sort: "2025-07-04",
    dates: "4 jul 2025 – 12 sep 2025",
    logo: "img/beyond-depth.png",
    difficulty: 9, rating: 9,
    result: "ok", resultText: "Completado al 100%",
    opinion: "Honestamente, un sólido 9/10. Me encantaron sus mecánicas y su progresión.",
    note: null,
    videos: [
      { label: "Parte 1", url: "https://www.youtube.com/watch?v=pUkr2DlZwUY" },
      { label: "Parte 2", url: "https://www.youtube.com/watch?v=1rMYWOd1hD0" },
      { label: "Parte 3 (final)", url: "https://www.youtube.com/watch?v=TKFZK-wWne4" }
    ],
    page: "https://www.curseforge.com/minecraft/modpacks/beyond-depth"
  },
  {
    name: "All the Mods 10",
    sort: "2026-01-10",
    dates: "ene 2026 (aprox.)",
    logo: "img/atm10.png",
    difficulty: null, rating: null,
    result: "ok", resultText: "Completado",
    opinion: null, note: null,
    videos: [{ label: "200 días", url: "https://www.youtube.com/watch?v=RcWCqtOJX7s" }],
    page: null
  },
  {
    name: "Abyssal Ascent",
    sort: "2026-04-10",
    dates: "abr 2026",
    logo: "img/abyssal-ascent.png",
    difficulty: null, rating: 9,
    result: "ok", resultText: "Completado",
    opinion: "Un 9/10, o incluso 9,5: la experiencia ha sido muy buena y muy disfrutable. No llega al 10 por un fallo con un pico en una dimensión que no deja avanzar entre capas.",
    note: null,
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=WUwBKVzKiOU" }],
    page: "https://www.curseforge.com/minecraft/modpacks/abyssal-ascent"
  },
  {
    name: "RLCraft",
    sort: "2026-05-28",
    dates: "28 may 2026",
    logo: "img/rlcraft.png",
    difficulty: null, rating: 9,
    result: "pending", resultText: "Sin completar",
    opinion: "Un 9/10. La experiencia ha sido un infierno, pero le cojo cariño a este tipo de modpacks: muy chulo el sistema de estadísticas y muy buen rendimiento. Lo único que no me gustó fue el mapeado.",
    note: null,
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=CwlnV7KNLvE" }],
    page: null
  },
  {
    name: "Beyond Ascension",
    sort: "2026-07-11",
    dates: "jul 2026 (aprox.)",
    logo: "img/beyond-ascension.png",
    difficulty: null, rating: null,
    result: "ok", resultText: "Completado",
    opinion: null, note: null,
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=BtuwaJM1cwk" }],
    page: null
  },
  {
    name: "Better Minecraft",
    sort: "2026-08-10",
    dates: "ago 2026 (aprox.)",
    logo: "img/better-minecraft.png",
    difficulty: null, rating: null,
    result: "ok", resultText: "Completado",
    opinion: null, note: null,
    collab: { name: "@mariepeachx06", url: "https://www.youtube.com/@mariepeachx06" },
    videos: [{ label: "Vídeo", url: "https://www.youtube.com/watch?v=2mAhexDp-iw" }],
    page: null
  },
  {
    name: "Ascendra",
    sort: "2026-09-04",
    dates: "sep 2026 (aprox.)",
    logo: "img/ascendra.png",
    difficulty: null, rating: null,
    result: "pending", resultText: "Sin completar",
    opinion: null, note: null,
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=iWigwTeSRUo" }],
    page: null
  },
  {
    name: "Prominence II: Hasturian Era",
    sort: "2026-10-18",
    dates: "oct 2026 (aprox.)",
    logo: "img/prominence-2.png",
    difficulty: null, rating: null,
    result: "ok", resultText: "Completado",
    opinion: null,
    note: "La parte final se sube este viernes.",
    videos: [{ label: "100 días", url: "https://www.youtube.com/watch?v=FI7gCf7hwio" }],
    page: null
  },
  {
    name: "Cursed Walking",
    sort: "2026-11-01",
    dates: "nov 2026 (aprox.)",
    logo: "img/cursed-walking.png",
    difficulty: null, rating: null,
    result: "pending", resultText: "Sin completar",
    opinion: null, note: null,
    videos: [{ label: "Vídeo", url: "https://www.youtube.com/watch?v=uHUmpfGMlsU" }],
    page: null
  }
];

/* ============ RETOS (no son modpacks) ============
   id = lo que va después de youtu.be/ en el enlace del vídeo                           */
const CHALLENGES = [
  { title: "Sobreviví 100 días en Hytale sin morir", id: "H_KTo8LZGcc" },
  { title: "Me pasé Minecraft empezando en el End", id: "jH0UMlW_ndU" },
  { title: "Sobreviví al SIFT en Minecraft y primeras impresiones", id: "Y-fpESGb6n0" }
];
