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
