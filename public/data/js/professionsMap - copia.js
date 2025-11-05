export const PROFESSIONS_MAP = {
  "Priest of Light": { 
    name: "Priest of Light",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    // O.C.C. Skills (sin W.P./H2H)
    occ_skills: [
      { "Dance": "20" },    
      { "Literacy": "20" },
      { "Mathematics: Basic": "20" },
      { "Lore: Demons & Monsters": "15" },
      { "Lore: Religion": "20" },
      { "Land Navigation": "10" },
      { "Wilderness Survival": "10" }
    ],

    // O.C.C. Related Skills (sin W.P./H2H)
    related_skills: [
      { "Communications": "5" },
      { "Domestic": "10" },
      { "Espionage": "0" },
      { "Horsemanship General": "0" },
      { "Medical": "15" },
      { "Military": "5" },
      { "Physical": "0" },
      { "Rogue": "0" },
      { "Science": "5" },
      { "Scholar/Technical": "15" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "7",

    starting_equipment: "Clerical vestments, travel clothes, bedroll, backpack, waterskin, writing kit (ink, quills, parchment).",
    armor_restriction: "Soft leather or chain at GM's discretion; holy symbols.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "50",
    notes: "Travelling/Temple Priest template; turning/holy powers per deity; see Priests section."
  },

  "Priest of Darkness": { 
    name: "Priest of Darkness",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    occ_skills: [
      { "Language": "98" },
      
      
      { "Literacy": "20" },
      { "Mathematics: Basic": "20" },
      { "Lore: Demons & Monsters": "15" },
      { "Lore: Religion": "20" },
      { "Land Navigation": "10" },
      { "Streetwise": "10" },
      { "Wilderness Survival": "10" }
    ],

    related_skills: [
      { "Communications": "0" },
      { "Domestic": "5" },
      { "Espionage": "0" },
      { "Horsemanship General": "0" },
      { "Medical": "10" },
      { "Military": "5" },
      { "Physical": "0" },
      { "Rogue": "5" },
      { "Science": "5" },
      { "Scholar/Technical": "10" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "8",

    starting_equipment: "Dark vestments, travel gear, waterskin, writing kit; ritual accoutrements.",
    armor_restriction: "As allowed by sect; often leather/chain.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "Tithes/loot; GM mediated.",
    notes: "See Priests of Darkness O.C.C. entry."
  },

  "Warrior Monk": { 
    name: "Warrior Monk",
    hand2hand: "Martial Arts",
    attribute_requirements: {"PP": "11", "PE": "11"},

    occ_skills: [
      { "Language": "98" },
      
      
      { "Literacy": "15" },
      { "Mathematics: Basic": "20" },
      { "Climb/Scale Walls": "10" },
      { "Lore: Demons & Monsters": "15" },
      { "Lore: Religion": "20" },
      { "Land Navigation": "15" },
      { "Play Musical Instrument (choice 1)": "20" },
      { "Swim": "10" },
      { "Wilderness Survival": "15" }
    ],

    related_skills: [
      { "Communications": "5" },
      { "Domestic": "15" },
      { "Espionage": "0" },
      { "Horsemanship": "0" },
      { "Medical": "5" },
      { "Military": "0" },
      { "Physical (any; except Acrobatics, Wrestling)": "0" },
      { "Rogue": "0" },
      { "Science": "0" },
      { "Scholar/Technical": "10" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "6",

    starting_equipment: "Robes, travel gear, quarterstaff.",
    armor_restriction: "Light (robes/soft leather).",
    starting_armor_options: ["leather", "none"],
    starting_weapons: ["dagger", "quarterstaff", "short_sword"],
    money: "Sparse.",
    notes: "See Warrior Monk section for full skill list."
  },

  "Druid": { 
    name: "Druid",
    hand2hand: "Basic",
    attribute_requirements: {"IQ": "9", "PE": "12"},

    occ_skills: [
      { "Animal Husbandry": "20" },
      { "Anthropology": "15" },
      { "Astronomy & Navigation": "15" },
      { "Botany": "20" },
      { "History": "20" },
      { "Land Navigation": "15" },
      { "Lore: Faerie Folk": "20" },
      { "Lore (choice 1)": "10" },
      { "Mathematics: Basic": "20" },
      { "Wilderness Survival": "20" }
    ],

    related_skills: [
      { "Communications": "0" },
      { "Domestic": "10" },
      { "Espionage": "0" },
      { "Horsemanship General": "0" },
      { "Medical": "15" },
      { "Military": "10" },
      { "Physical": "0" },
      { "Rogue": "10" },
      { "Science": "15" },
      { "Scholar/Technical": "10" },
      { "Wilderness": "10" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "6",

    starting_equipment: "Travel gear, herbal kit.",
    armor_restriction: "Light/medium as allowed.",
    starting_armor_options: ["leather", "studded_leather"],
    starting_weapons: ["dagger", "quarterstaff"],
    money: "Modest.",
    notes: "Además de 6 Related en nivel 1, añade 1 Related adicional en niveles 3, 6, 9 y 12."
  },

  "Mercenary Fighter": { 
    name: "Mercenary Fighter",
    hand2hand: "Expert",
    attribute_requirements: {"PS": "10", "PE": "10"},

    occ_skills: [
      { "Climb/Scale Walls": "10" },
      { "Athletics (General)": "0" },
      { "Wilderness Survival": "10" }
    ],

    related_skills: [
      { "Communications": "5" },
      { "Espionage": "5" },
      { "Horsemanship General": "5" },
      { "Medical": "0" },
      { "Military": "5" },
      { "Physical": "5" },
      { "Wilderness": "5" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "10",

    starting_equipment: "Travel gear; see merc equipment packages.",
    armor_restriction: "Varies by employer; leather/chain/plate.",
    starting_armor_options: ["studded_leather", "chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "broadsword"],
    money: "Wages; hazard pay; equipment discounts vary.",
    notes: "Armor options & penalties apply."
  },

  "Soldier": { 
    name: "Soldier",
    hand2hand: "Basic",
    attribute_requirements: {"PS": "10", "PP": "10"},

    occ_skills: [
      { "Climb/Scale Walls": "5" },
      { "Forced March": "0" },
      { "Body Building & Weight Lifting": "0" },
      { "Language": "98" },
      { "Language (choice 1)": "10" },
      { "Military Etiquette": "20" }
    ],

    related_skills: [
      { "Communications (Sign Language only)": "5" },
      { "Domestic": "0" },
      { "Espionage": "5" },
      { "Horsemanship General": "5" },
      { "Medical": "5" },
      { "Military": "10" },
      { "Physical": "0" },
      { "Rogue": "0" },
      { "Science (Mathematics only)": "0" },
      { "Scholar/Technical": "5" },
      { "Wilderness Survival": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "9",

    starting_equipment: "Uniform, civilian clothing, boots, gloves, bedroll, backpack, two small sacks, water skin, two weeks' rations, tinder box.",
    armor_restriction: "Starts with chain mail (AR 14 SDC 44) or studded leather (AR 13 SDC 38).",
    starting_armor_options: ["studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "Small shield", "two weapons of choice (basic S.D.C.)."],
    money: "Starts with 180 gold; plus salary/hazard pay.",
    notes: "Official equipment & money list."
  },

  "Long Bowman": { 
    name: "Long Bowman",
    hand2hand: "Basic",
    attribute_requirements: {"PS": "10", "PP": "12"},

    occ_skills: [
      { "Athletics (General)": "0" },
      { "Language": "98" },
      { "Language (choice 1)": "10" },
      { "Language (choice 2)": "10" },
      { "Sniper": "0" },
      { "Wilderness Survival": "10" }
    ],

    related_skills: [
      { "Communications (Sign Language only)": "0" },
      { "Domestic": "5" },
      { "Espionage (Escape Artist only)": "5" },
      { "Horsemanship General": "5" },
      { "Medical": "0" },
      { "Military (any; except Camouflage, Falconry, Interrogation)": "5" },
      { "Physical (any; except Acrobatics, Gymnastics, Wrestling)": "0" },
      { "Rogue (any; except Locate Secret Compartments, Ventriloquism)": "0" },
      { "Science (Mathematics only)": "0" },
      { "Scholar/Technical (Language/Literacy/Lore)": "10" },
      { "Scholar/Technical (others)": "0" },
      { "Wilderness": "5" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "8",

    starting_equipment: "Travel gear; bowmaking items (GM).",
    armor_restriction: "Prefers studded/chain/plate&leather/plate&chain; penalties in heavy armor.",
    starting_armor_options: ["studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "longbow"],
    money: "Mercenary pay; premium rates at higher levels.",
    notes: "Armor penalties reduce rate of fire and strike bonus."
  },

  "Knight": { 
    name: "Knight",
    hand2hand: "Expert",
    attribute_requirements: {"PS": "12"},

    occ_skills: [
      { "Dance": "15" },
      { "Heraldry": "20" },
      { "Horsemanship: Knight": "0" },
      { "Land Navigation": "10" },
      { "Language": "98" },
      { "Language (choice 1)": "15" },
      { "Language (choice 2)": "15" },
      { "Literacy": "20" },
      { "Military Etiquette": "15" },
      { "Mathematics: Basic": "15" }
    ],

    // “Communication (pick 2) + 6 de cualquier categoría” → líneas separadas
    related_skills: [
      { "Communications": "0" },
      { "Scholar/Technical": "0" },
      { "Military": "0" },
      { "Medical (First Aid / Paramedic)": "0" },
      { "Wilderness": "0" },
      { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "8",

    starting_equipment: "Warhorse & tack (GM), noble gear.",
    armor_restriction: "Plate & Chain typically.",
    starting_armor_options: ["chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "lance", "sword", "mace", "shield"],
    money: "Stipend/land.",
    notes: "Armor movement/skill penalties summarized; see Knights & Paladins."
  },

  "Paladin": { 
    name: "Paladin",
    hand2hand: "Martial Arts",
    attribute_requirements: {"PS": "12", "PE": "12"},

    occ_skills: [
      { "Dance": "10" },
      { "Heraldry": "20" },
      { "Horsemanship: Paladin": "0" },
      { "Land Navigation": "10" },
      { "Language": "98" },
      { "Language (choice 1)": "10" },
      { "Literacy": "10" },
      { "Lore: Religion": "0" },
      { "Military Etiquette": "0" },
      { "Mathematics: Basic": "0" }
    ],

    related_skills: [
      { "Communications": "0" },
      { "Scholar/Technical": "0" },
      { "Military": "0" },
      { "Medical (First Aid / Paramedic)": "0" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "6",

    starting_equipment: "Holy symbols, noble gear.",
    armor_restriction: "As Knight (heavy).",
    starting_armor_options: ["chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "lance", "sword", "mace", "shield"],
    money: "Stipends/donations.",
    notes: "See class for divine powers; armor penalties apply."
  },

  "Ranger": { 
    name: "Ranger",
    hand2hand: "Basic",
    attribute_requirements: {"PE": "13"},

    occ_skills: [
      { "Animal Husbandry": "10" },
      { "Land Navigation": "20" },
      { "Language": "98" },
      { "Language (choice 1)": "15" },
      { "Language (choice 2)": "15" },
      { "Identify Plants & Fruits": "15" },
      { "Skin & Prepare Animal Hides": "15" },
      { "Track & Trap Animals": "20" },
      { "Track Humanoids": "15" },
      { "Wilderness Survival": "20" }
    ],

    related_skills: [
      { "Communications (Sign Language only)": "0" },
      { "Domestic": "10" },
      { "Espionage": "10" },
      { "Horsemanship (General or Exotic)": "5" },
      { "Medical (any; except Surgeon)": "0" },
      { "Military": "0" },
      { "Physical (any; except Acrobatics, Gymnastics)": "0" },
      { "Rogue (Card Shark)": "6" },
      { "Rogue (Use/Recognize Poison)": "6" },
      { "Science": "5" },
      { "Scholar/Technical": "10" },
      { "Wilderness": "10" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "8",

    starting_equipment: "Two sets of clothing, boots, bedroll, backpack, two small sacks, waterskin, 50 ft rope, lantern",
    armor_restriction: "Light/medium; penalties in heavy armor.",
    starting_armor_options: ["leather", "studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "bow", "spear"],
    money: "Modest plus bounties.",
    notes: "Classic wilderness toolkit and tracking focus."
  }
};

























// PROFESSIONS_MAP mapeadas con las skills de referencia SKILLS
export const PROFESSIONS_MAPPED = {

  "Priest of Light": { 
    name: "Priest of Light",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    // O.C.C. Skills (sin W.P./H2H)
    occ_skills: [
      { "dancing": "20" },    // Dance -> dancing ✓
      { "literacy": "20" },   // Literacy -> literacy ✓
      { "mathematics": "20" }, // Mathematics: Basic -> mathematics ✓
      { "lore_demons_monsters": "15" }, // Lore: Demons & Monsters -> lore_demons_monsters ✓
      { "lore_religion": "20" }, // Lore: Religion -> lore_religion ✓
      { "land_navigation": "10" }, // Land Navigation -> land_navigation ✓
      { "wilderness_survival": "10" } // Wilderness Survival -> wilderness_survival ✓
    ],

    // O.C.C. Related Skills (sin W.P./H2H)
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "5" }, // Communications -> categoría completa
      { "DOMESTIC_CATEGORY": "10" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "0" }, // Espionage -> categoría completa
      { "horsemanship_general": "0" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "15" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "5" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical -> categoría completa
      { "ROGUE_CATEGORY": "0" }, // Rogue -> categoría completa
      { "SCIENCE_CATEGORY": "5" }, // Science -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "15" }, // Scholar/Technical -> categoría completa
      { "WILDERNESS_CATEGORY": "0" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "7",

    starting_equipment: "Clerical vestments, travel clothes, bedroll, backpack, waterskin, writing kit (ink, quills, parchment).",
    armor_restriction: "Soft leather or chain at GM's discretion; holy symbols.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "50",
    notes: "Travelling/Temple Priest template; turning/holy powers per deity; see Priests section."
  },

  "Priest of Darkness": { 
    name: "Priest of Darkness",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    occ_skills: [
      { "language_native": "98" }, // Language -> language_native ✓
      { "literacy": "20" }, // Literacy -> literacy ✓
      { "mathematics": "20" }, // Mathematics: Basic -> mathematics ✓
      { "lore_demons_monsters": "15" }, // Lore: Demons & Monsters -> lore_demons_monsters ✓
      { "lore_religion": "20" }, // Lore: Religion -> lore_religion ✓
      { "land_navigation": "10" }, // Land Navigation -> land_navigation ✓
      { "streetwise": "10" }, // Streetwise -> streetwise ✓
      { "wilderness_survival": "10" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "0" }, // Communications -> categoría completa
      { "DOMESTIC_CATEGORY": "5" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "0" }, // Espionage -> categoría completa
      { "horsemanship_general": "0" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "10" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "5" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical -> categoría completa
      { "ROGUE_CATEGORY": "5" }, // Rogue -> categoría completa
      { "SCIENCE_CATEGORY": "5" }, // Science -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical -> categoría completa
      { "WILDERNESS_CATEGORY": "0" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "8",

    starting_equipment: "Dark vestments, travel gear, waterskin, writing kit; ritual accoutrements.",
    armor_restriction: "As allowed by sect; often leather/chain.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "Tithes/loot; GM mediated.",
    notes: "See Priests of Darkness O.C.C. entry."
  },

  "Warrior Monk": { 
    name: "Warrior Monk",
    hand2hand: "Martial Arts",
    attribute_requirements: {"PP": "11", "PE": "11"},

    occ_skills: [
      { "language_native": "98" }, // Language -> language_native ✓
      { "literacy": "15" }, // Literacy -> literacy ✓
      { "mathematics": "20" }, // Mathematics: Basic -> mathematics ✓
      { "climbing": "10" }, // Climb/Scale Walls -> climbing ✓
      { "lore_demons_monsters": "15" }, // Lore: Demons & Monsters -> lore_demons_monsters ✓
      { "lore_religion": "20" }, // Lore: Religion -> lore_religion ✓
      { "land_navigation": "15" }, // Land Navigation -> land_navigation ✓
      { "Play Musical Instrument (choice 1)": "20" }, // NO ENCONTRADA en skills de referencia
      { "swimming": "10" }, // Swim -> swimming ✓
      { "wilderness_survival": "15" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "5" }, // Communications -> categoría completa
      { "DOMESTIC_CATEGORY": "15" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "0" }, // Espionage -> categoría completa
      { "HORSEMANSHIP_CATEGORY": "0" }, // Horsemanship -> categoría completa
      { "MEDICAL_CATEGORY": "5" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "0" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any; except Acrobatics, Wrestling) -> categoría completa
      { "ROGUE_CATEGORY": "0" }, // Rogue -> categoría completa
      { "SCIENCE_CATEGORY": "0" }, // Science -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical -> categoría completa
      { "WILDERNESS_CATEGORY": "0" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "6",

    starting_equipment: "Robes, travel gear, quarterstaff.",
    armor_restriction: "Light (robes/soft leather).",
    starting_armor_options: ["leather", "none"],
    starting_weapons: ["dagger", "quarterstaff", "short_sword"],
    money: "Sparse.",
    notes: "See Warrior Monk section for full skill list."
  },

  "Druid": { 
    name: "Druid",
    hand2hand: "Basic",
    attribute_requirements: {"IQ": "9", "PE": "12"},

    occ_skills: [
      { "animal_husbandry": "20" }, // Animal Husbandry -> animal_husbandry ✓
      { "Anthropology": "15" }, // NO ENCONTRADA en skills de referencia
      { "astronomy": "15" }, // Astronomy & Navigation -> astronomy ✓ (parcial)
      { "Botany": "20" }, // NO ENCONTRADA en skills de referencia
      { "history": "20" }, // History -> history ✓
      { "land_navigation": "15" }, // Land Navigation -> land_navigation ✓
      { "lore_faeries_creatures": "20" }, // Lore: Faerie Folk -> lore_faeries_creatures ✓
      { "Lore (choice 1)": "10" }, // Lore genérico - NO ESPECÍFICA
      { "mathematics": "20" }, // Mathematics: Basic -> mathematics ✓
      { "wilderness_survival": "20" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "0" }, // Communications -> categoría completa
      { "DOMESTIC_CATEGORY": "10" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "0" }, // Espionage -> categoría completa
      { "horsemanship_general": "0" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "15" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "10" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical -> categoría completa
      { "ROGUE_CATEGORY": "10" }, // Rogue -> categoría completa
      { "SCIENCE_CATEGORY": "15" }, // Science -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical -> categoría completa
      { "WILDERNESS_CATEGORY": "10" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "6",

    starting_equipment: "Travel gear, herbal kit.",
    armor_restriction: "Light/medium as allowed.",
    starting_armor_options: ["leather", "studded_leather"],
    starting_weapons: ["dagger", "quarterstaff"],
    money: "Modest.",
    notes: "Además de 6 Related en nivel 1, añade 1 Related adicional en niveles 3, 6, 9 y 12."
  },

  "Mercenary Fighter": { 
    name: "Mercenary Fighter",
    hand2hand: "Expert",
    attribute_requirements: {"PS": "10", "PE": "10"},

    occ_skills: [
      { "climbing": "10" }, // Climb/Scale Walls -> climbing ✓
      { "athletics": "0" }, // Athletics (General) -> athletics ✓
      { "wilderness_survival": "10" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "5" }, // Communications -> categoría completa
      { "ESPIONAGE_CATEGORY": "5" }, // Espionage -> categoría completa
      { "horsemanship_general": "5" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "0" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "5" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "5" }, // Physical -> categoría completa
      { "WILDERNESS_CATEGORY": "5" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "10",

    starting_equipment: "Travel gear; see merc equipment packages.",
    armor_restriction: "Varies by employer; leather/chain/plate.",
    starting_armor_options: ["studded_leather", "chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "broadsword"],
    money: "Wages; hazard pay; equipment discounts vary.",
    notes: "Armor options & penalties apply."
  },

  "Soldier": { 
    name: "Soldier",
    hand2hand: "Basic",
    attribute_requirements: {"PS": "10", "PP": "10"},

    occ_skills: [
      { "climbing": "5" }, // Climb/Scale Walls -> climbing ✓
      { "Forced March": "0" }, // NO ENCONTRADA en skills de referencia
      { "body_building": "0" }, // Body Building & Weight Lifting -> body_building ✓
      { "language_native": "98" }, // Language -> language_native ✓
      { "language_other": "10" }, // Language (choice 1) -> language_other ✓
      { "Military Etiquette": "20" } // NO ENCONTRADA en skills de referencia
    ],

    related_skills: [
      { "sign_language": "5" }, // Communications (Sign Language only) -> sign_language ✓
      { "DOMESTIC_CATEGORY": "0" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "5" }, // Espionage -> categoría completa
      { "horsemanship_general": "5" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "5" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "10" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical -> categoría completa
      { "ROGUE_CATEGORY": "0" }, // Rogue -> categoría completa
      { "mathematics": "0" }, // Science (Mathematics only) -> mathematics ✓
      { "SCHOLAR_TECHNICAL_CATEGORY": "5" }, // Scholar/Technical -> categoría completa
      { "wilderness_survival": "0" }, // Wilderness Survival -> wilderness_survival ✓
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "9",

    starting_equipment: "Uniform, civilian clothing, boots, gloves, bedroll, backpack, two small sacks, water skin, two weeks' rations, tinder box.",
    armor_restriction: "Starts with chain mail (AR 14 SDC 44) or studded leather (AR 13 SDC 38).",
    starting_armor_options: ["studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "Small shield", "two weapons of choice (basic S.D.C.)."],
    money: "Starts with 180 gold; plus salary/hazard pay.",
    notes: "Official equipment & money list."
  },

  "Long Bowman": { 
    name: "Long Bowman",
    hand2hand: "Basic",
    attribute_requirements: {"PS": "10", "PP": "12"},

    occ_skills: [
      { "athletics": "0" }, // Athletics (General) -> athletics ✓
      { "language_native": "98" }, // Language -> language_native ✓
      { "language_other": "10" }, // Language (choice 1) -> language_other ✓
      { "language_other": "10" }, // Language (choice 2) -> language_other ✓
      { "Sniper": "0" }, // NO ENCONTRADA en skills de referencia
      { "wilderness_survival": "10" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "sign_language": "0" }, // Communications (Sign Language only) -> sign_language ✓
      { "DOMESTIC_CATEGORY": "5" }, // Domestic -> categoría completa
      { "escape_artist": "5" }, // Espionage (Escape Artist only) -> escape_artist ✓
      { "horsemanship_general": "5" }, // Horsemanship General -> horsemanship_general ✓
      { "MEDICAL_CATEGORY": "0" }, // Medical -> categoría completa
      { "MILITARY_CATEGORY": "5" }, // Military (any; except Camouflage, Falconry, Interrogation) -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any; except Acrobatics, Gymnastics, Wrestling) -> categoría completa
      { "ROGUE_CATEGORY": "0" }, // Rogue (any; except Locate Secret Compartments, Ventriloquism) -> categoría completa
      { "mathematics": "0" }, // Science (Mathematics only) -> mathematics ✓
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical (Language/Literacy/Lore) -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "0" }, // Scholar/Technical (others) -> categoría completa
      { "WILDERNESS_CATEGORY": "5" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "8",

    starting_equipment: "Travel gear; bowmaking items (GM).",
    armor_restriction: "Prefers studded/chain/plate&leather/plate&chain; penalties in heavy armor.",
    starting_armor_options: ["studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "longbow"],
    money: "Mercenary pay; premium rates at higher levels.",
    notes: "Armor penalties reduce rate of fire and strike bonus."
  },

  "Knight": { 
    name: "Knight",
    hand2hand: "Expert",
    attribute_requirements: {"PS": "12"},

    occ_skills: [
      { "dancing": "15" }, // Dance -> dancing ✓
      { "Heraldry": "20" }, // NO ENCONTRADA en skills de referencia
      { "Horsemanship: Knight": "0" }, // NO ENCONTRADA en skills de referencia (variante específica)
      { "land_navigation": "10" }, // Land Navigation -> land_navigation ✓
      { "language_native": "98" }, // Language -> language_native ✓
      { "language_other": "15" }, // Language (choice 1) -> language_other ✓
      { "language_other": "15" }, // Language (choice 2) -> language_other ✓
      { "literacy": "20" }, // Literacy -> literacy ✓
      { "Military Etiquette": "15" }, // NO ENCONTRADA en skills de referencia
      { "mathematics": "15" } // Mathematics: Basic -> mathematics ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "0" }, // Communications -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "0" }, // Scholar/Technical -> categoría completa
      { "MILITARY_CATEGORY": "0" }, // Military -> categoría completa
      { "first_aid": "0" }, // Medical (First Aid / Paramedic) -> first_aid ✓
      { "WILDERNESS_CATEGORY": "0" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "8",

    starting_equipment: "Warhorse & tack (GM), noble gear.",
    armor_restriction: "Plate & Chain typically.",
    starting_armor_options: ["chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "lance", "sword", "mace", "shield"],
    money: "Stipend/land.",
    notes: "Armor movement/skill penalties summarized; see Knights & Paladins."
  },

  "Paladin": { 
    name: "Paladin",
    hand2hand: "Martial Arts",
    attribute_requirements: {"PS": "12", "PE": "12"},

    occ_skills: [
      { "dancing": "10" }, // Dance -> dancing ✓
      { "Heraldry": "20" }, // NO ENCONTRADA en skills de referencia
      { "Horsemanship: Paladin": "0" }, // NO ENCONTRADA en skills de referencia (variante específica)
      { "land_navigation": "10" }, // Land Navigation -> land_navigation ✓
      { "language_native": "98" }, // Language -> language_native ✓
      { "language_other": "10" }, // Language (choice 1) -> language_other ✓
      { "literacy": "10" }, // Literacy -> literacy ✓
      { "lore_religion": "0" }, // Lore: Religion -> lore_religion ✓
      { "Military Etiquette": "0" }, // NO ENCONTRADA en skills de referencia
      { "mathematics": "0" } // Mathematics: Basic -> mathematics ✓
    ],

    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "0" }, // Communications -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "0" }, // Scholar/Technical -> categoría completa
      { "MILITARY_CATEGORY": "0" }, // Military -> categoría completa
      { "first_aid": "0" }, // Medical (First Aid / Paramedic) -> first_aid ✓
      { "WILDERNESS_CATEGORY": "0" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "6",

    starting_equipment: "Holy symbols, noble gear.",
    armor_restriction: "As Knight (heavy).",
    starting_armor_options: ["chain_mail", "plate_armor"],
    starting_weapons: ["dagger", "lance", "sword", "mace", "shield"],
    money: "Stipends/donations.",
    notes: "See class for divine powers; armor penalties apply."
  },

  "Ranger": { 
    name: "Ranger",
    hand2hand: "Basic",
    attribute_requirements: {"PE": "13"},

    occ_skills: [
      { "animal_husbandry": "10" }, // Animal Husbandry -> animal_husbandry ✓
      { "land_navigation": "20" }, // Land Navigation -> land_navigation ✓
      { "language_native": "98" }, // Language -> language_native ✓
      { "language_other": "15" }, // Language (choice 1) -> language_other ✓
      { "language_other": "15" }, // Language (choice 2) -> language_other ✓
      { "identify_plants_fruits": "15" }, // Identify Plants & Fruits -> identify_plants_fruits ✓
      { "skin_prepare_hides": "15" }, // Skin & Prepare Animal Hides -> skin_prepare_hides ✓
      { "track_animals": "20" }, // Track & Trap Animals -> track_animals ✓
      { "track_humanoids": "15" }, // Track Humanoids -> track_humanoids ✓
      { "wilderness_survival": "20" } // Wilderness Survival -> wilderness_survival ✓
    ],

    related_skills: [
      { "sign_language": "0" }, // Communications (Sign Language only) -> sign_language ✓
      { "DOMESTIC_CATEGORY": "10" }, // Domestic -> categoría completa
      { "ESPIONAGE_CATEGORY": "10" }, // Espionage -> categoría completa
      { "horsemanship_general": "5" }, // Horsemanship (General or Exotic) -> horsemanship_general ✓
      { "horsemanship_exotic": "5" }, // Horsemanship (General or Exotic) -> horsemanship_exotic ✓
      { "MEDICAL_CATEGORY": "0" }, // Medical (any; except Surgeon) -> categoría completa
      { "MILITARY_CATEGORY": "0" }, // Military -> categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any; except Acrobatics, Gymnastics) -> categoría completa
      { "card_shark": "6" }, // Rogue (Card Shark) -> card_shark ✓
      { "use_recognize_poison": "6" }, // Rogue (Use/Recognize Poison) -> use_recognize_poison ✓
      { "SCIENCE_CATEGORY": "5" }, // Science -> categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical -> categoría completa
      { "WILDERNESS_CATEGORY": "10" }, // Wilderness -> categoría completa
      { "language_other": "20" }, // Language: Human -> language_other ✓
      { "language_other": "20" }, // Language: Elven -> language_other ✓
      { "language_other": "20" }, // Language: Dwarven -> language_other ✓
      { "language_other": "20" }, // Language: Orcish -> language_other ✓
      { "language_other": "20" }, // Language: Giant -> language_other ✓
      { "language_other": "20" } // Language: Draconic -> language_other ✓
    ],
    number_related_skills: "8",

    starting_equipment: "Two sets of clothing, boots, bedroll, backpack, two small sacks, waterskin, 50 ft rope, lantern",
    armor_restriction: "Light/medium; penalties in heavy armor.",
    starting_armor_options: ["leather", "studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "bow", "spear"],
    money: "Modest plus bounties.",
    notes: "Classic wilderness toolkit and tracking focus."
  }
};





























// O.C.C. (Occupational Character Classes) del Palladium Fantasy RPG
// Skills mapeadas con las skills de referencia SKILLS
export const OCC_CLASSES_MAPPED = {
  "Ranger": {
    name: "Ranger",
    hand2hand: "Basic",
    attribute_requirements: {"PE": "13"},
    occ_skills: [
      { "animal_husbandry": "10" },
      { "land_navigation": "20" },
      { "language_native": "98" },
      { "language_other": "15" }, // Language (choice 1)
      { "language_other": "15" }, // Language (choice 2)
      { "identify_plants_fruits": "15" },
      { "skin_prepare_hides": "15" },
      { "track_animals": "20" },
      { "track_humanoids": "15" },
      { "wilderness_survival": "20" }
    ],
    related_skills: [
      { "sign_language": "0" }, // Communications (Sign Language only)
      { "DOMESTIC_CATEGORY": "10" }, // Domestic - categoría completa
      { "ESPIONAGE_CATEGORY": "10" }, // Espionage - categoría completa
      { "horsemanship_general": "5" }, // Horsemanship (General or Exotic)
      { "horsemanship_exotic": "5" },
      { "MEDICAL_CATEGORY": "0" }, // Medical (any; except Surgeon)
      { "MILITARY_CATEGORY": "0" }, // Military - categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any; except Acrobatics, Gymnastics)
      { "card_shark": "6" }, // Rogue (Card Shark)
      { "use_recognize_poison": "6" }, // Rogue (Use/Recognize Poison)
      { "SCIENCE_CATEGORY": "5" }, // Science - categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical - categoría completa
      { "WILDERNESS_CATEGORY": "10" }, // Wilderness - categoría completa
      { "language_other": "20" }, // Language: Human
      { "language_other": "20" }, // Language: Elven
      { "language_other": "20" }, // Language: Dwarven
      { "language_other": "20" }, // Language: Orcish
      { "language_other": "20" }, // Language: Giant
      { "language_other": "20" } // Language: Draconic
    ],
    number_related_skills: "8",
    starting_equipment: "Two sets of clothing, boots, bedroll, backpack, two small sacks, waterskin, 50 ft rope, lantern",
    armor_restriction: "Light/medium; penalties in heavy armor.",
    starting_armor_options: ["leather", "studded_leather", "chain_mail"],
    starting_weapons: ["dagger", "bow", "spear"],
    money: "Modest plus bounties.",
    notes: "Classic wilderness toolkit and tracking focus."
  },

  "Knight": {
    name: "Knight",
    hand2hand: "Expert",
    attribute_requirements: {"IQ": "12", "PP": "12", "PS": "12", "PE": "12"},
    occ_skills: [
      { "language_native": "98" },
      { "language_other": "15" }, // Language (choice 1)
      { "literacy": "15" },
      { "horsemanship_general": "20" },
      { "land_navigation": "15" },
      { "recognize_weapon_quality": "15" },
      { "Heraldry": "15" }, // NO ENCONTRADA en skills de referencia
      { "Etiquette": "15" } // NO ENCONTRADA en skills de referencia
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "10" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "10" }, // Domestic - categoría completa
      { "detect_ambush": "5" }, // Espionage (Detect Ambush, Intelligence only)
      { "intelligence": "5" },
      { "horsemanship_exotic": "5" }, // Horsemanship (Exotic only)
      { "first_aid": "5" }, // Medical (First Aid, Holistic Medicine only)
      { "holistic_medicine": "5" },
      { "MILITARY_CATEGORY": "10" }, // Military - categoría completa
      { "PHYSICAL_CATEGORY": "5" }, // Physical - categoría completa
      { "card_shark": "0" }, // Rogue (Card Shark only)
      { "SCHOLAR_TECHNICAL_CATEGORY": "10" }, // Scholar/Technical - categoría completa
      { "Hunting": "5" }, // Wilderness (Hunting only) - NO ENCONTRADA
      { "language_other": "20" }, // Language: Human
      { "language_other": "20" }, // Language: Elven
      { "language_other": "20" } // Language: Dwarven
    ],
    number_related_skills: "12",
    starting_equipment: "Noble clothing, dress uniform, boots, cloak, backpack, waterskin, 100 ft rope",
    armor_restriction: "Any armor",
    starting_armor_options: ["chain_mail", "scale_mail", "plate_mail"],
    starting_weapons: ["sword", "lance", "shield", "dagger"],
    money: "Wealthy",
    notes: "Noble warrior with code of honor and chivalry."
  },

  "Paladin": {
    name: "Paladin",
    hand2hand: "Expert",
    attribute_requirements: {"IQ": "12", "PS": "12", "PP": "12", "PE": "12", "PB": "15", "MA": "16"},
    occ_skills: [
      { "language_native": "98" },
      { "language_other": "15" }, // Language (choice 1)
      { "literacy": "15" },
      { "horsemanship_general": "20" },
      { "land_navigation": "15" },
      { "recognize_weapon_quality": "15" },
      { "lore_religion": "20" },
      { "first_aid": "15" }
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "10" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "10" }, // Domestic - categoría completa
      { "detect_ambush": "5" }, // Espionage (Detect Ambush, Intelligence only)
      { "intelligence": "5" },
      { "horsemanship_exotic": "5" }, // Horsemanship (Exotic only)
      { "MEDICAL_CATEGORY": "10" }, // Medical - categoría completa
      { "MILITARY_CATEGORY": "10" }, // Military - categoría completa
      { "PHYSICAL_CATEGORY": "5" }, // Physical - categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "15" }, // Scholar/Technical - categoría completa
      { "Hunting": "5" }, // Wilderness (Hunting only) - NO ENCONTRADA
      { "language_other": "20" }, // Language: Human
      { "language_other": "20" }, // Language: Elven
      { "language_other": "20" } // Language: Dwarven
    ],
    number_related_skills: "10",
    starting_equipment: "Holy symbol, religious texts, noble clothing, boots, cloak, backpack, waterskin",
    armor_restriction: "Any armor",
    starting_armor_options: ["chain_mail", "scale_mail", "plate_mail"],
    starting_weapons: ["sword", "mace", "shield", "dagger"],
    money: "Comfortable",
    notes: "Holy warrior with divine powers and strict moral code."
  },

  "Wizard": {
    name: "Wizard",
    hand2hand: "Basic",
    attribute_requirements: {"IQ": "15", "ME": "12"},
    occ_skills: [
      { "language_native": "98" },
      { "language_other": "15" }, // Language: Elven
      { "language_other": "15" }, // Language: Draconic
      { "literacy": "20" },
      { "mathematics": "15" },
      { "lore_demons_monsters": "15" },
      { "lore_faeries_creatures": "15" },
      { "research": "20" }
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "15" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "10" }, // Domestic - categoría completa
      { "intelligence": "10" }, // Espionage (Intelligence only)
      { "holistic_medicine": "10" }, // Medical (Holistic Medicine, Brewing only)
      { "brewing": "10" },
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any except Boxing, Wrestling)
      { "use_recognize_poison": "10" }, // Rogue (Use/Recognize Poison only)
      { "SCIENCE_CATEGORY": "15" }, // Science - categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "15" }, // Scholar/Technical - categoría completa
      { "language_other": "20" }, // Language: Human
      { "language_other": "15" }, // Language: Goblin
      { "language_other": "15" } // Language: Giant
    ],
    number_related_skills: "12",
    starting_equipment: "Spell components, robes, staff, spell books, writing materials, backpack",
    armor_restriction: "Light armor only; heavy armor interferes with spellcasting",
    starting_armor_options: ["robes", "leather"],
    starting_weapons: ["staff", "dagger", "dart"],
    money: "Poor to modest",
    notes: "Master of arcane magic with extensive spell knowledge."
  },

  "Thief": {
    name: "Thief",
    hand2hand: "Basic",
    attribute_requirements: {"PP": "12", "PE": "12"},
    occ_skills: [
      { "language_native": "98" },
      { "prowl": "20" },
      { "pick_locks": "20" },
      { "pick_pockets": "20" },
      { "palming": "15" },
      { "detect_concealment": "15" },
      { "streetwise": "15" },
      { "climbing": "15" }
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "10" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "5" }, // Domestic - categoría completa
      { "ESPIONAGE_CATEGORY": "15" }, // Espionage - categoría completa
      { "PHYSICAL_CATEGORY": "10" }, // Physical - categoría completa
      { "ROGUE_CATEGORY": "15" }, // Rogue - categoría completa
      { "land_navigation": "5" }, // Scholar/Technical (Land Navigation only)
      { "track_humanoids": "5" }, // Wilderness (Track Humanoids only)
      { "language_other": "15" }, // Language: Human
      { "language_other": "10" }, // Language: Goblin
      { "language_other": "10" } // Language: Orcish
    ],
    number_related_skills: "8",
    starting_equipment: "Dark clothing, thieves' tools, rope, grappling hook, small sack, waterskin",
    armor_restriction: "Light armor only",
    starting_armor_options: ["leather", "studded_leather"],
    starting_weapons: ["dagger", "short_sword", "sling"],
    money: "Poor",
    notes: "Master of stealth and larceny."
  },

  "Assassin": {
    name: "Assassin",
    hand2hand: "Martial Arts",
    attribute_requirements: {"IQ": "12", "PP": "15", "PE": "12"},
    occ_skills: [
      { "language_native": "98" },
      { "prowl": "25" },
      { "detect_ambush": "20" },
      { "detect_concealment": "20" },
      { "disguise": "20" },
      { "escape_artist": "15" },
      { "use_recognize_poison": "20" },
      { "climbing": "20" }
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "10" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "5" }, // Domestic - categoría completa
      { "ESPIONAGE_CATEGORY": "20" }, // Espionage - categoría completa
      { "PHYSICAL_CATEGORY": "15" }, // Physical - categoría completa
      { "ROGUE_CATEGORY": "15" }, // Rogue - categoría completa
      { "intelligence": "10" }, // Scholar/Technical (Intelligence, Land Navigation only)
      { "land_navigation": "10" },
      { "track_humanoids": "10" }, // Wilderness (Track Humanoids only)
      { "language_other": "15" }, // Language: Human
      { "language_other": "10" }, // Language: Goblin
      { "language_other": "10" } // Language: Orcish
    ],
    number_related_skills: "6",
    starting_equipment: "Dark clothing, various poisons, disguise kit, climbing gear, rope",
    armor_restriction: "Light armor only",
    starting_armor_options: ["leather", "studded_leather"],
    starting_weapons: ["dagger", "throwing_knife", "garrote", "short_sword"],
    money: "Modest",
    notes: "Professional killer specializing in stealth and poison."
  },

  "Mercenary": {
    name: "Mercenary",
    hand2hand: "Expert",
    attribute_requirements: {"PS": "12", "PP": "12", "PE": "12"},
    occ_skills: [
      { "language_native": "98" },
      { "language_other": "15" }, // Language (choice 1)
      { "recognize_weapon_quality": "20" },
      { "camouflage": "15" },
      { "land_navigation": "15" },
      { "first_aid": "15" },
      { "gambling": "15" },
      { "streetwise": "10" }
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "5" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "5" }, // Domestic - categoría completa
      { "ESPIONAGE_CATEGORY": "10" }, // Espionage - categoría completa
      { "HORSEMANSHIP_CATEGORY": "10" }, // Horsemanship - categoría completa
      { "MEDICAL_CATEGORY": "5" }, // Medical - categoría completa
      { "MILITARY_CATEGORY": "15" }, // Military - categoría completa
      { "PHYSICAL_CATEGORY": "10" }, // Physical - categoría completa
      { "ROGUE_CATEGORY": "10" }, // Rogue - categoría completa
      { "SCHOLAR_TECHNICAL_CATEGORY": "5" }, // Scholar/Technical - categoría completa
      { "WILDERNESS_CATEGORY": "5" }, // Wilderness - categoría completa
      { "language_other": "15" }, // Language: Human
      { "language_other": "10" } // Language: Orcish
    ],
    number_related_skills: "10",
    starting_equipment: "Military clothing, armor maintenance kit, bedroll, backpack, rope, waterskin",
    armor_restriction: "Any armor",
    starting_armor_options: ["chain_mail", "scale_mail", "studded_leather"],
    starting_weapons: ["sword", "crossbow", "dagger", "shield"],
    money: "Modest",
    notes: "Professional soldier for hire."
  },

  "Priest": {
    name: "Priest",
    hand2hand: "Basic",
    attribute_requirements: {"IQ": "12", "ME": "12", "MA": "14"},
    occ_skills: [
      { "language_native": "98" },
      { "language_other": "15" }, // Language (choice 1)
      { "literacy": "20" },
      { "lore_religion": "25" },
      { "first_aid": "20" },
      { "holistic_medicine": "15" },
      { "research": "15" },
      { "Public Speaking": "15" } // NO ENCONTRADA en skills de referencia
    ],
    related_skills: [
      { "COMMUNICATIONS_CATEGORY": "15" }, // Communications - categoría completa
      { "DOMESTIC_CATEGORY": "15" }, // Domestic - categoría completa
      { "MEDICAL_CATEGORY": "20" }, // Medical - categoría completa
      { "PHYSICAL_CATEGORY": "0" }, // Physical (any except Boxing, Wrestling)
      { "SCHOLAR_TECHNICAL_CATEGORY": "20" }, // Scholar/Technical - categoría completa
      { "language_other": "20" }, // Language: Human
      { "language_other": "15" }, // Language: Elven
      { "language_other": "15" } // Language: Dwarven
    ],
    number_related_skills: "8",
    starting_equipment: "Holy symbol, religious texts, ceremonial robes, healing supplies, backpack",
    armor_restriction: "Light armor only",
    starting_armor_options: ["robes", "leather"],
    starting_weapons: ["mace", "staff", "dagger"],
    money: "Poor to modest",
    notes: "Divine servant with healing powers and religious knowledge."
  }

  "Priest of Light": { 
    name: "Priest of Light",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    // O.C.C. Skills (sin W.P./H2H)
    occ_skills: [
      { "Dance": "20" },    
      { "Literacy": "20" },
      { "Mathematics: Basic": "20" },
      { "Lore: Demons & Monsters": "15" },
      { "Lore: Religion": "20" },
      { "Land Navigation": "10" },
      { "Wilderness Survival": "10" }
    ],

    // O.C.C. Related Skills (sin W.P./H2H)
    related_skills: [
      { "Communications": "5" },
      { "Domestic": "10" },
      { "Espionage": "0" },
      { "Horsemanship General": "0" },
      { "Medical": "15" },
      { "Military": "5" },
      { "Physical": "0" },
      { "Rogue": "0" },
      { "Science": "5" },
      { "Scholar/Technical": "15" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "7",

    starting_equipment: "Clerical vestments, travel clothes, bedroll, backpack, waterskin, writing kit (ink, quills, parchment).",
    armor_restriction: "Soft leather or chain at GM's discretion; holy symbols.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "50",
    notes: "Travelling/Temple Priest template; turning/holy powers per deity; see Priests section."
  },

  "Priest of Darkness": { 
    name: "Priest of Darkness",
    hand2hand: "Basic",
    attribute_requirements: {"ME": "10"},

    occ_skills: [
      { "Language": "98" },
      
      
      { "Literacy": "20" },
      { "Mathematics: Basic": "20" },
      { "Lore: Demons & Monsters": "15" },
      { "Lore: Religion": "20" },
      { "Land Navigation": "10" },
      { "Streetwise": "10" },
      { "Wilderness Survival": "10" }
    ],

    related_skills: [
      { "Communications": "0" },
      { "Domestic": "5" },
      { "Espionage": "0" },
      { "Horsemanship General": "0" },
      { "Medical": "10" },
      { "Military": "5" },
      { "Physical": "0" },
      { "Rogue": "5" },
      { "Science": "5" },
      { "Scholar/Technical": "10" },
      { "Wilderness": "0" },
            { "Language: Human": "20" },
      { "Language: Elven": "20" },
      { "Language: Dwarven": "20" },
      { "Language: Orcish": "20" },
      { "Language: Giant": "20" },
      { "Language: Draconic": "20" }
    ],
    number_related_skills: "8",

    starting_equipment: "Dark vestments, travel gear, waterskin, writing kit; ritual accoutrements.",
    armor_restriction: "As allowed by sect; often leather/chain.",
    starting_armor_options: ["leather", "chain_mail"],
    starting_weapons: ["dagger", "quarterstaff", "mace"],
    money: "Tithes/loot; GM mediated.",
    notes: "See Priests of Darkness O.C.C. entry."
  },





};

// SKILLS NO ENCONTRADAS EN LA REFERENCIA:
// - "Heraldry" (Knight)
// - "Etiquette" (Knight)  
// - "Hunting" (Knight, Paladin)
// - "Public Speaking" (Priest)

// NOTAS SOBRE EL MAPEO:
// - Todas las referencias a "Language: [específico]" se mapearon a "language_other"
// - Las categorías completas se marcaron como "CATEGORY_NAME" para indicar acceso a toda la categoría
// - Los bonos de las skills mapeadas mantienen los valores originales
// - Las skills no encontradas se mantuvieron con su nombre original para revisión