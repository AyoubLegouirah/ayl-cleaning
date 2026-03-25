export interface Service {
  slug: string;
  nom: string;
  description: string;
  icon: string;
  descriptionLongue: string;
  mots: string[];
  traitement: { icon: string; titre: string; desc: string }[];
  ceTreat: { icon: string; label: string }[];
  tarifs: { label: string; price: string; desc: string }[];
}

export const services: Service[] = [
  {
    slug: "nettoyage-canape",
    nom: "Nettoyage de canapés",
    description: "Canapés, fauteuils, sièges. Extraction en profondeur, séchage rapide.",
    icon: "🛋️",
    descriptionLongue: "Lavage en profondeur de vos canapés, fauteuils et sièges à domicile. Détachage des taches tenaces (vin, café, urine, sang), traitement anti-acariens, désinfection et désodorisation des textiles. Technique d'extraction à faible humidité — séchage en 2 à 4 heures. Nettoyants enzymatiques biodégradables, sans danger pour vos enfants et animaux.",
    mots: ["détachage", "désinfection", "anti-acariens", "désodorisation", "textiles", "fibres", "rembourrages", "salissures", "nettoyants enzymatiques"],
    traitement: [
      { icon: "science", titre: "Nettoyants enzymatiques", desc: "Nos détergents professionnels dissolvent les salissures organiques (urine, sang, graisses) sans abîmer les fibres textiles." },
      { icon: "water_drop", titre: "Extraction faible humidité", desc: "La machine injecte une fine brume nettoyante dans les fibres et aspire immédiatement la saleté. Séchage en 2 à 4 heures." },
      { icon: "sanitizer", titre: "Désinfection & anti-acariens", desc: "Spray désinfectant qui élimine bactéries, acariens et allergènes. Idéal pour les personnes asthmatiques." },
      { icon: "eco", titre: "Produits biodégradables", desc: "Nettoyants homologués, biodégradables et sans solvants toxiques. Sans danger pour la famille et les animaux." },
    ],
    ceTreat: [
      { icon: "chair", label: "Canapés tissu, microfibre, velours" },
      { icon: "weekend", label: "Canapés cuir et similicuir" },
      { icon: "event_seat", label: "Fauteuils, poufs et méridienne" },
      { icon: "airline_seat_recline_normal", label: "Sièges de bureau et chaises" },
      { icon: "bed", label: "Têtes de lit et matelas" },
      { icon: "local_laundry_service", label: "Taches : vin, café, urine, sang, graisses" },
    ],
    tarifs: [
      { label: "Canapé 2 places", price: "60–80€", desc: "Tissu ou microfibre, détachage et désinfection inclus" },
      { label: "Canapé 3 places", price: "80–110€", desc: "Tissu, velours ou similicuir, traitement anti-acariens inclus" },
      { label: "Canapé d'angle", price: "120–160€", desc: "Grand format, méridienne incluse, séchage rapide garanti" },
    ],
  },
  {
    slug: "nettoyage-vitres",
    nom: "Nettoyage de vitres",
    description: "Fenêtres, baies vitrées, vérandas. Résultat sans traces garanti, intérieur et extérieur.",
    icon: "🪟",
    descriptionLongue: "Lavage professionnel de vos fenêtres, baies vitrées, vérandas et châssis à domicile. Intérieur et extérieur en une seule intervention. Nettoyant vitrerie anti-calcaire, raclette de précision et traitement hydrophobe pour un résultat sans traces durable. Châssis, rebords et encadrements nettoyés dans le même passage.",
    mots: ["lavage de vitres", "nettoyant vitrerie", "anti-calcaire", "raclette", "traitement hydrophobe", "châssis", "surfaces vitrées", "encadrements", "cloisons vitrées"],
    traitement: [
      { icon: "water_drop", titre: "Nettoyant vitrerie concentré", desc: "Nos produits professionnels dissolvent le calcaire, la pollution et les traces de doigts sans laisser d'auréoles." },
      { icon: "straighten", titre: "Raclette de précision", desc: "La raclette professionnelle évacue l'eau et la saleté en un seul passage, sans laisser de traces sur les vitres." },
      { icon: "shield", titre: "Traitement hydrophobe", desc: "Après le lavage, un traitement anti-calcaire repousse l'eau et la poussière. Vos vitres restent propres 2 à 3 fois plus longtemps." },
      { icon: "eco", titre: "Produits biodégradables", desc: "Nettoyants vitrerie biodégradables et sans solvants agressifs. Méthode écologique, sans danger pour vos plantes." },
    ],
    ceTreat: [
      { icon: "window", label: "Fenêtres simples et doubles vitrages" },
      { icon: "door_sliding", label: "Baies vitrées et portes-fenêtres" },
      { icon: "deck", label: "Vérandas et jardins d'hiver" },
      { icon: "storefront", label: "Vitrines de commerces et bureaux" },
      { icon: "roofing", label: "Velux et fenêtres de toit accessibles" },
      { icon: "cleaning_services", label: "Châssis, rebords et encadrements" },
    ],
    tarifs: [
      { label: "Appartement", price: "40–70€", desc: "Jusqu'à 8 fenêtres, intérieur et extérieur, châssis inclus" },
      { label: "Maison", price: "70–120€", desc: "Jusqu'à 15 fenêtres, baies vitrées et portes-fenêtres incluses" },
      { label: "Commerce / Bureau", price: "Sur devis", desc: "Vitrines, cloisons vitrées, contrat mensuel possible" },
    ],
  },
];