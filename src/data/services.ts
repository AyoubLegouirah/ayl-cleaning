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
      { label: "Canapé 2 places", price: "À partir de 60€", desc: "Tissu ou microfibre, détachage et désinfection inclus" },
      { label: "Canapé 3 places", price: "À partir de 80€", desc: "Tissu, velours ou similicuir, traitement anti-acariens inclus" },
      { label: "Canapé d'angle", price: "À partir de 120€", desc: "Grand format, méridienne incluse, séchage rapide garanti" },
    ],
  },
];