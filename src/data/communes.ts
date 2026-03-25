export interface Commune {
  slug: string;
  nom: string;
  description: string;
  descriptionService: string;
  quartiers: string[];
  typesLogements: string;
  clientele: string;
  anecdote: string;
  communesVoisines: string[];
}

export const communes: Commune[] = [
  {
    slug: "bruxelles",
    nom: "Bruxelles",
    description: "Capitale de la Belgique et cœur de l'Europe, Bruxelles regroupe une grande diversité de logements : appartements du centre historique, maisons de maître du quartier européen, lofts du canal et immeubles modernes.",
    descriptionService: "Nous intervenons dans tout Bruxelles-Ville, du Pentagone aux quartiers résidentiels du nord et du sud. Particuliers, colocations, bureaux et commerces.",
    quartiers: ["Pentagone", "Quartier européen", "Laeken", "Neder-Over-Heembeek", "Haren"],
    typesLogements: "Appartements, maisons de maître, lofts, immeubles de bureaux",
    clientele: "Particuliers, expatriés, institutions européennes, commerces du centre",
    anecdote: "Bruxelles concentre la plus forte densité de sièges d'institutions européennes au monde — une clientèle internationale qui exige des standards de propreté élevés.",
    communesVoisines: ["anderlecht", "ixelles", "schaerbeek", "molenbeek", "laeken"],
  },
  {
    slug: "anderlecht",
    nom: "Anderlecht",
    description: "Commune populaire et familiale à l'ouest de Bruxelles, Anderlecht est connue pour ses maisons ouvrières, ses quartiers en pleine rénovation et sa mixité sociale. Le quartier de Cureghem et le centre historique attirent de plus en plus de jeunes ménages.",
    descriptionService: "AYL Cleaning intervient à Anderlecht pour les particuliers, les familles et les petits commerces. Nous connaissons bien les typologies de logements de la commune.",
    quartiers: ["Cureghem", "Neerpede", "Wielemans", "Centre", "Scheut"],
    typesLogements: "Maisons ouvrières, maisons de rangée, appartements, petits commerces",
    clientele: "Familles, jeunes ménages, artisans, petits commerces",
    anecdote: "Anderlecht est la commune bruxelloise qui connaît l'un des taux de rénovation de logements les plus élevés — idéal pour un nettoyage après travaux ou une remise en état.",
    communesVoisines: ["bruxelles", "molenbeek", "forest", "saint-gilles"],
  },
  {
    slug: "ixelles",
    nom: "Ixelles",
    description: "Commune branchée et cosmopolite, Ixelles est l'une des plus prisées de Bruxelles. Entre l'avenue Louise, le quartier du Châtelain, Flagey et les étangs d'Ixelles, elle concentre une population aisée, de nombreux expatriés et une vie culturelle intense.",
    descriptionService: "Ixelles abrite de nombreux appartements haussmanniens, maisons Art Nouveau et duplex modernes. Nos clients y sont souvent des professionnels exigeants ou des expatriés.",
    quartiers: ["Châtelain", "Flagey", "Avenue Louise", "Matongé", "Étangs d'Ixelles"],
    typesLogements: "Appartements haussmanniens, maisons Art Nouveau, duplex, studios étudiants",
    clientele: "Professionnels, expatriés, étudiants, propriétaires bailleurs",
    anecdote: "Ixelles abrite plus de 30 maisons classées Art Nouveau — des bâtiments dont les grandes baies vitrées et ornements nécessitent un entretien régulier et soigné.",
    communesVoisines: ["bruxelles", "uccle", "saint-gilles", "etterbeek", "forest"],
  },
  {
    slug: "uccle",
    nom: "Uccle",
    description: "Commune résidentielle et verdoyante au sud de Bruxelles, Uccle est réputée pour ses villas, ses maisons quatre façades et ses quartiers calmes et arborés. Une clientèle familiale et aisée y apprécie la qualité des services à domicile.",
    descriptionService: "À Uccle, nous intervenons principalement pour des maisons familiales avec grands salons, nombreuses fenêtres et canapés premium. Discrétion et qualité sont nos priorités.",
    quartiers: ["Dieweg", "Calevoet", "Stalle", "Prince d'Orange", "Observatoire"],
    typesLogements: "Villas, maisons quatre façades, maisons de maître, appartements résidentiels",
    clientele: "Familles aisées, professions libérales, retraités, propriétaires de villas",
    anecdote: "Uccle est la commune avec le plus grand nombre de mètres carrés de jardin par habitant à Bruxelles — les grandes maisons avec vérandas y sont très fréquentes.",
    communesVoisines: ["ixelles", "forest", "saint-gilles", "bruxelles"],
  },
  {
    slug: "etterbeek",
    nom: "Etterbeek",
    description: "Commune centrale et bien desservie, Etterbeek est appréciée pour sa proximité avec le quartier européen et ses nombreux parcs. Elle mélange appartements étudiants, logements de fonctionnaires européens et maisons familiales.",
    descriptionService: "Etterbeek est une commune dense avec beaucoup d'appartements en copropriété. Nous y intervenons souvent pour des remises en état locatives et des nettoyages réguliers.",
    quartiers: ["Squares", "Montgomery", "Merode", "Cinquantenaire", "Saint-Pierre"],
    typesLogements: "Appartements en copropriété, maisons de rangée, studios, résidences étudiantes",
    clientele: "Fonctionnaires européens, étudiants, jeunes professionnels, propriétaires bailleurs",
    anecdote: "Etterbeek jouxte le Parc du Cinquantenaire et le quartier européen — une concentration d'expatriés qui recherchent des services de nettoyage fiables et réguliers.",
    communesVoisines: ["bruxelles", "ixelles", "schaerbeek", "saint-gilles"],
  },
  {
    slug: "forest",
    nom: "Forest",
    description: "Commune dynamique et en pleine gentrification au sud-ouest de Bruxelles, Forest attire de plus en plus de jeunes familles et créatifs grâce à ses maisons accessibles et son ambiance de village. Le quartier Altitude 100 et les abords du Parc de Forest sont très prisés.",
    descriptionService: "À Forest, nous intervenons dans des maisons de rangée rénovées, des appartements et des ateliers d'artistes. Une commune en transformation où la demande de nettoyage après travaux est forte.",
    quartiers: ["Altitude 100", "Saint-Denis", "Parc de Forest", "Wiels", "Centre"],
    typesLogements: "Maisons de rangée, appartements, ateliers reconvertis, logements rénovés",
    clientele: "Jeunes familles, créatifs, artistes, propriétaires en rénovation",
    anecdote: "Forest connaît l'une des plus fortes hausses de rénovations immobilières de Bruxelles — ce qui génère une demande importante pour le nettoyage après travaux et la remise en état.",
    communesVoisines: ["anderlecht", "ixelles", "uccle", "saint-gilles"],
  },
  {
    slug: "schaerbeek",
    nom: "Schaerbeek",
    description: "Grande commune du nord-est de Bruxelles, Schaerbeek est connue pour son architecture éclectique, ses maisons de maître fin XIXe et sa population très diverse. Le quartier Josaphat et la place Colignon attirent de plus en plus de familles et de professionnels.",
    descriptionService: "Schaerbeek compte de nombreuses grandes maisons divisées en appartements et des familles nombreuses. Nous y intervenons pour des nettoyages complets, canapés et vitres inclus.",
    quartiers: ["Josaphat", "Colignon", "Helmet", "Linthout", "Terdelt"],
    typesLogements: "Maisons de maître divisées, appartements, maisons familiales, commerces de rue",
    clientele: "Familles, propriétaires bailleurs, commerces, associations",
    anecdote: "Schaerbeek possède l'un des plus beaux patrimoines architecturaux éclectiques de Bruxelles avec des centaines de façades classées — des bâtiments avec de grandes fenêtres historiques à entretenir.",
    communesVoisines: ["bruxelles", "etterbeek", "saint-gilles", "laeken"],
  },
  {
    slug: "molenbeek",
    nom: "Molenbeek",
    description: "Commune populaire en pleine transformation le long du canal, Molenbeek attire de nouveaux habitants grâce à ses loyers accessibles et ses projets de rénovation urbaine. Le quartier maritime et les abords du canal connaissent un essor important.",
    descriptionService: "Molenbeek est une commune en mutation avec beaucoup de logements en rénovation. Nous y intervenons pour des remises en état, nettoyages de canapés et lavage de vitres pour particuliers et petits commerces.",
    quartiers: ["Maritime", "Canal", "Karreveld", "Centre", "Ossegem"],
    typesLogements: "Appartements populaires, maisons en rénovation, lofts du canal, logements sociaux",
    clientele: "Familles, nouveaux arrivants, propriétaires en rénovation, commerces de proximité",
    anecdote: "Le site Tour & Taxis à Molenbeek est l'un des plus grands projets de reconversion urbaine de Bruxelles avec des centaines de nouveaux logements — une clientèle de nouveaux propriétaires en demande de services.",
    communesVoisines: ["bruxelles", "anderlecht", "laeken", "schaerbeek"],
  },
  {
    slug: "saint-gilles",
    nom: "Saint-Gilles",
    description: "Petite commune dense et cosmopolite au sud de Bruxelles, Saint-Gilles est réputée pour son architecture Art Nouveau, sa vie de quartier intense et sa population jeune et mixte. La rue Haute, le parvis de Saint-Gilles et l'avenue Brugmann sont ses artères emblématiques.",
    descriptionService: "Saint-Gilles est dense en appartements et maisons mitoyennes. Nos clients y sont souvent des jeunes professionnels, des colocataires et des propriétaires qui remettent leur bien en location.",
    quartiers: ["Parvis", "Barrière", "Brugmann", "Rue Haute", "Fontainas"],
    typesLogements: "Appartements Art Nouveau, maisons mitoyennes, colocations, studios",
    clientele: "Jeunes professionnels, colocataires, propriétaires bailleurs, artistes",
    anecdote: "Saint-Gilles abrite l'Hôtel Hannon et de nombreuses façades Art Nouveau classées — un patrimoine avec de grandes verrières et vitraux qui nécessitent un entretien spécialisé.",
    communesVoisines: ["bruxelles", "anderlecht", "ixelles", "forest", "etterbeek"],
  },
  {
    slug: "laeken",
    nom: "Laeken",
    description: "Quartier royal au nord de Bruxelles, Laeken est connu pour ses serres royales, l'Atomium et son parc. Il mélange des zones résidentielles calmes, des logements populaires et des abords du canal en pleine rénovation.",
    descriptionService: "Laeken couvre une large zone avec des profils très variés : maisons familiales calmes, appartements proches de l'Atomium et logements en rénovation le long du canal.",
    quartiers: ["Atomium", "Serres Royales", "Tour & Taxis", "Canal", "Stuyvenberg"],
    typesLogements: "Maisons familiales, appartements résidentiels, logements en rénovation, lofts Tour & Taxis",
    clientele: "Familles, retraités, nouveaux habitants du quartier Tour & Taxis, propriétaires",
    anecdote: "Le site Tour & Taxis à Laeken est l'un des plus grands projets de reconversion urbaine de Bruxelles avec des centaines de nouveaux logements — une clientèle de nouveaux propriétaires en demande de services.",
    communesVoisines: ["bruxelles", "molenbeek", "schaerbeek"],
  },
];

export const communeSlugs = communes.map(c => c.slug);