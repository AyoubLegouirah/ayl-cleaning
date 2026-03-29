export interface Ville {
  nom: string;
  slug: string;
}

export interface Zone {
  region: string;
  slug: string;
  villes: Ville[];
}

export const zones: Zone[] = [
  {
    region: "Bruxelles-Capitale",
    slug: "bruxelles-capitale",
    villes: [
      { nom: "Anderlecht", slug: "anderlecht" },
      { nom: "Auderghem", slug: "auderghem" },
      { nom: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" },
      { nom: "Bruxelles", slug: "bruxelles" },
      { nom: "Etterbeek", slug: "etterbeek" },
      { nom: "Evere", slug: "evere" },
      { nom: "Forest", slug: "forest" },
      { nom: "Ganshoren", slug: "ganshoren" },
      { nom: "Ixelles", slug: "ixelles" },
      { nom: "Jette", slug: "jette" },
      { nom: "Koekelberg", slug: "koekelberg" },
      { nom: "Molenbeek-Saint-Jean", slug: "molenbeek" },
      { nom: "Saint-Gilles", slug: "saint-gilles" },
      { nom: "Saint-Josse-ten-Noode", slug: "saint-josse" },
      { nom: "Schaerbeek", slug: "schaerbeek" },
      { nom: "Uccle", slug: "uccle" },
      { nom: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
      { nom: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
      { nom: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
    ]
  },
  {
    region: "Brabant Flamand",
    slug: "brabant-flamand",
    villes: [
      { nom: "Vilvorde", slug: "vilvorde" },
      { nom: "Zaventem", slug: "zaventem" },
      { nom: "Tervuren", slug: "tervuren" },
      { nom: "Grimbergen", slug: "grimbergen" },
      { nom: "Dilbeek", slug: "dilbeek" },
      { nom: "Asse", slug: "asse" },
      { nom: "Meise", slug: "meise" },
    ]
  },
  {
    region: "Brabant Wallon",
    slug: "brabant-wallon",
    villes: [
      { nom: "Waterloo", slug: "waterloo" },
      { nom: "La Hulpe", slug: "la-hulpe" },
      { nom: "Rixensart", slug: "rixensart" },
      { nom: "Lasne", slug: "lasne" },
      { nom: "Wavre", slug: "wavre" },
    ]
  }
];
