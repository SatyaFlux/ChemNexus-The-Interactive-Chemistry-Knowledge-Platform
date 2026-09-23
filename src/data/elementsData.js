// src/data/elementsData.js
// ChemNexus Comprehensive 118-Element Dataset
// Verified scientific properties, electronic configurations, occurrence, extraction, applications, and reactions.

export const elementsData = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "atomicMass": 1.008,
    "category": "reactive-nonmetal",
    "group": 1,
    "period": 1,
    "block": "s",
    "state": "Gas",
    "electronConfiguration": "1s¹",
    "electronsPerShell": [
      1
    ],
    "electronegativity": 2.2,
    "meltingPoint": 14.01,
    "boilingPoint": 20.28,
    "density": 0.08988,
    "atomicRadius": 53,
    "ionizationEnergy": 1312,
    "electronAffinity": 72.8,
    "oxidationStates": [
      -1,
      1
    ],
    "discoveredBy": "Henry Cavendish",
    "yearDiscovered": 1766,
    "summary": "Hydrogen is the lightest, most abundant chemical element in the universe, constituting roughly 75% of all baryonic mass.",
    "occurrence": "Abundant in water, organic matter, stellar atmospheres, and interstellar gas clouds.",
    "extraction": "Primarily obtained via steam methane reforming, water electrolysis, and coal gasification.",
    "applications": [
      "Ammonia synthesis (Haber process)",
      "Clean fuel cells and rocketry",
      "Petroleum hydrocracking",
      "Hydrogenation of fats and oils"
    ],
    "importantCompounds": [
      {
        "formula": "H2O",
        "name": "Water",
        "use": "Universal solvent and essential for life"
      },
      {
        "formula": "NH3",
        "name": "Ammonia",
        "use": "Fertilizers and nitrogenous chemicals"
      },
      {
        "formula": "HCl",
        "name": "Hydrochloric Acid",
        "use": "Industrial pickling and chemical synthesis"
      },
      {
        "formula": "H2O2",
        "name": "Hydrogen Peroxide",
        "use": "Bleaching agent and disinfectant"
      }
    ],
    "reactions": [
      {
        "equation": "2H2 + O2 -> 2H2O",
        "type": "Combustion / Synthesis",
        "description": "Explosive exothermic reaction releasing energy and water."
      },
      {
        "equation": "N2 + 3H2 -> 2NH3",
        "type": "Haber Process (Synthesis)",
        "description": "Catalytic industrial conversion of nitrogen and hydrogen into ammonia."
      },
      {
        "equation": "Zn + 2HCl -> ZnCl2 + H2",
        "type": "Single Displacement",
        "description": "Standard laboratory preparation of hydrogen gas from metals."
      }
    ],
    "safety": "Extremely flammable gas. Forms explosive mixtures with air at concentrations between 4% and 75%."
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "atomicMass": 4.0026,
    "category": "noble-gas",
    "group": 18,
    "period": 1,
    "block": "s",
    "state": "Gas",
    "electronConfiguration": "1s²",
    "electronsPerShell": [
      2
    ],
    "electronegativity": null,
    "meltingPoint": 0.95,
    "boilingPoint": 4.22,
    "density": 0.1786,
    "atomicRadius": 31,
    "ionizationEnergy": 2372.3,
    "electronAffinity": -48,
    "oxidationStates": [
      0
    ],
    "discoveredBy": "Pierre Janssen & Norman Lockyer",
    "yearDiscovered": 1868,
    "summary": "Helium is a colorless, odorless, non-toxic, inert noble gas with the lowest boiling and melting points among all elements.",
    "occurrence": "Second most abundant in the cosmos; trapped beneath Earth crust in natural gas deposits via alpha decay of uranium/thorium.",
    "extraction": "Extracted through fractional cryogenic distillation of natural gas reservoirs containing up to 7% helium.",
    "applications": [
      "Cryogenic cooling for MRI scanners and NMR spectrometers",
      "Protective shielding gas for arc welding",
      "Lifting gas for airships and scientific weather balloons",
      "Deep-sea diving gas mixtures (Heliox)"
    ],
    "importantCompounds": [
      {
        "formula": "HeH+",
        "name": "Hydrohelium ion",
        "use": "Astrophysical cosmological ion; believed to be the first molecule in the universe"
      }
    ],
    "reactions": [
      {
        "equation": "He + energy -> He* (metastable)",
        "type": "Excitation",
        "description": "Extremely inert; chemically inert under standard laboratory conditions."
      }
    ],
    "safety": "Asphyxiant in enclosed spaces by displacement of breathable oxygen. Cryogenic liquid causes instant severe frostbite."
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "atomicMass": 6.94,
    "category": "alkali-metal",
    "group": 1,
    "period": 2,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[He] 2s¹",
    "electronsPerShell": [
      2,
      1
    ],
    "electronegativity": 0.98,
    "meltingPoint": 453.69,
    "boilingPoint": 1603,
    "density": 0.534,
    "atomicRadius": 167,
    "ionizationEnergy": 520.2,
    "electronAffinity": 59.6,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Johan August Arfwedson",
    "yearDiscovered": 1817,
    "summary": "Lithium is the least dense solid element, a soft silvery-white alkali metal with remarkable electrochemical potential.",
    "occurrence": "Found in granitic pegmatites (spodumene) and continental salt brine lakes (salars).",
    "extraction": "Evaporative concentration from salt brines followed by soda ash precipitation, or acid roasting of spodumene ore.",
    "applications": [
      "Rechargeable lithium-ion batteries for EVs and electronics",
      "Mood-stabilizing psychiatric medicine",
      "High-temperature lubricating greases",
      "Lightweight aluminum-lithium aerospace alloys"
    ],
    "importantCompounds": [
      {
        "formula": "Li2CO3",
        "name": "Lithium Carbonate",
        "use": "Precursor for cathode materials and psychiatric medication"
      },
      {
        "formula": "LiOH",
        "name": "Lithium Hydroxide",
        "use": "CO2 scrubbing in spacecraft and submarine air purification"
      },
      {
        "formula": "LiCoO2",
        "name": "Lithium Cobalt Oxide",
        "use": "Common cathode material for portable electronics"
      }
    ],
    "reactions": [
      {
        "equation": "2Li + 2H2O -> 2LiOH + H2",
        "type": "Redox / Displacement",
        "description": "Vigorous reaction with water forming basic lithium hydroxide and hydrogen gas."
      },
      {
        "equation": "4Li + O2 -> 2Li2O",
        "type": "Combustion / Synthesis",
        "description": "Forms lithium oxide with a brilliant crimson-red flame."
      }
    ],
    "safety": "Reacts corrosively with moisture on skin. Water-reactive; store under mineral oil or dry argon."
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "atomicMass": 9.0122,
    "category": "alkaline-earth",
    "group": 2,
    "period": 2,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[He] 2s²",
    "electronsPerShell": [
      2,
      2
    ],
    "electronegativity": 1.57,
    "meltingPoint": 1560,
    "boilingPoint": 2742,
    "density": 1.85,
    "atomicRadius": 112,
    "ionizationEnergy": 899.5,
    "electronAffinity": -50,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Louis-Nicolas Vauquelin",
    "yearDiscovered": 1798,
    "summary": "Beryllium is a relatively rare, steel-gray, lightweight metal known for high stiffness, high thermal conductivity, and X-ray transparency.",
    "occurrence": "Naturally occurs in beryl mineral deposits, emeralds, and bertrandite.",
    "extraction": "Extraction via sintering with sodium fluorosilicate followed by magnesium reduction of beryllium fluoride.",
    "applications": [
      "Aerospace mirrors (James Webb Space Telescope)",
      "Beryllium-copper non-sparking safety tools",
      "X-ray tube transmission windows",
      "Neutron reflectors in nuclear reactors"
    ],
    "importantCompounds": [
      {
        "formula": "BeO",
        "name": "Beryllium Oxide",
        "use": "Thermal conductor with exceptional electrical insulation properties"
      },
      {
        "formula": "BeCl2",
        "name": "Beryllium Chloride",
        "use": "Polymerization catalyst in organic synthesis"
      }
    ],
    "reactions": [
      {
        "equation": "2Be + O2 -> 2BeO",
        "type": "Synthesis",
        "description": "Forms a protective passivating oxide film at elevated temperatures."
      },
      {
        "equation": "Be + 2HCl -> BeCl2 + H2",
        "type": "Single Displacement",
        "description": "Reacts with mineral acids releasing hydrogen gas."
      }
    ],
    "safety": "Highly toxic and classified as a Group 1 carcinogen. Inhalation of dust causes chronic berylliosis."
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "atomicMass": 10.81,
    "category": "metalloid",
    "group": 13,
    "period": 2,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[He] 2s² 2p¹",
    "electronsPerShell": [
      2,
      3
    ],
    "electronegativity": 2.04,
    "meltingPoint": 2349,
    "boilingPoint": 4200,
    "density": 2.08,
    "atomicRadius": 87,
    "ionizationEnergy": 800.6,
    "electronAffinity": 26.7,
    "oxidationStates": [
      1,
      2,
      3
    ],
    "discoveredBy": "Joseph Louis Gay-Lussac & Louis Jacques Thénard",
    "yearDiscovered": 1808,
    "summary": "Boron is a versatile metalloid that bridges metals and nonmetals, forming complex electron-deficient cluster molecules and boranes.",
    "occurrence": "Precipitated in evaporite beds as borax, kernite, colemanite, and ulexite.",
    "extraction": "Processed from mined borate ores using sulfuric acid to yield boric acid, reduced with magnesium or zinc.",
    "applications": [
      "Borosilicate thermal shock-resistant glassware (Pyrex)",
      "Fiberglass insulation",
      "Semiconductor p-type dopant",
      "Control rods in nuclear reactors"
    ],
    "importantCompounds": [
      {
        "formula": "H3BO3",
        "name": "Boric Acid",
        "use": "Antiseptic, insecticide, and nuclear flux moderator"
      },
      {
        "formula": "Na2B4O7*10H2O",
        "name": "Borax",
        "use": "Detergent booster, metallurgical flux, and ceramic glaze"
      },
      {
        "formula": "BN",
        "name": "Boron Nitride",
        "use": "High-temperature solid lubricant and ultra-hard abrasive"
      }
    ],
    "reactions": [
      {
        "equation": "4B + 3O2 -> 2B2O3",
        "type": "Combustion",
        "description": "Burns at high temperature with a distinct green flame to form diboron trioxide."
      },
      {
        "equation": "2B + 3Cl2 -> 2BCl3",
        "type": "Halogenation",
        "description": "Reacts with chlorine gas producing liquid boron trichloride."
      }
    ],
    "safety": "Elemental boron is generally non-toxic, but high doses of borates can impair reproductive health."
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "atomicMass": 12.011,
    "category": "reactive-nonmetal",
    "group": 14,
    "period": 2,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[He] 2s² 2p²",
    "electronsPerShell": [
      2,
      4
    ],
    "electronegativity": 2.55,
    "meltingPoint": 3823,
    "boilingPoint": 4098,
    "density": 2.267,
    "atomicRadius": 67,
    "ionizationEnergy": 1086.5,
    "electronAffinity": 121.9,
    "oxidationStates": [
      -4,
      -3,
      -2,
      -1,
      0,
      1,
      2,
      3,
      4
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Carbon is the chemical basis of all known biological life due to its unparalleled ability to form stable catenated covalent chains and rings.",
    "occurrence": "Ubiquitous in fossil fuels, limestone, atmospheric CO2, and organic biomolecules.",
    "extraction": "Mined as coal and graphite; high-pressure high-temperature synthesis for industrial diamonds; thermal cracking for carbon black.",
    "applications": [
      "Steel manufacturing (coke)",
      "Carbon fiber composite materials",
      "Pharmaceutical and petrochemical base",
      "Lithium battery anode graphite"
    ],
    "importantCompounds": [
      {
        "formula": "CO2",
        "name": "Carbon Dioxide",
        "use": "Plant photosynthesis, refrigerant, carbonation"
      },
      {
        "formula": "CH4",
        "name": "Methane",
        "use": "Natural gas heating fuel and chemical feedstock"
      },
      {
        "formula": "C6H12O6",
        "name": "Glucose",
        "use": "Primary cellular energy currency in living organisms"
      }
    ],
    "reactions": [
      {
        "equation": "C + O2 -> CO2",
        "type": "Combustion",
        "description": "Fundamental exothermic combustion reaction driving global energy."
      },
      {
        "equation": "C + H2O -> CO + H2",
        "type": "Water-Gas Shift Precursor",
        "description": "High-temperature reaction producing synthesis gas (syngas)."
      }
    ],
    "safety": "Elemental carbon is largely inert and non-toxic. Incomplete combustion product carbon monoxide (CO) is a deadly asphyxiant."
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "atomicMass": 14.007,
    "category": "reactive-nonmetal",
    "group": 15,
    "period": 2,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[He] 2s² 2p³",
    "electronsPerShell": [
      2,
      5
    ],
    "electronegativity": 3.04,
    "meltingPoint": 63.15,
    "boilingPoint": 77.36,
    "density": 1.2506,
    "atomicRadius": 56,
    "ionizationEnergy": 1402.3,
    "electronAffinity": -6.8,
    "oxidationStates": [
      -3,
      -2,
      -1,
      1,
      2,
      3,
      4,
      5
    ],
    "discoveredBy": "Daniel Rutherford",
    "yearDiscovered": 1772,
    "summary": "Nitrogen is a diatomic gas making up 78% of Earth atmosphere, bonded by an exceptionally strong covalent triple bond (N≡N).",
    "occurrence": "Atmospheric air (78.08% by volume), nitrate mineral deposits (caliche), proteins, and nucleic acids.",
    "extraction": "Fractional cryogenic distillation of liquified atmospheric air.",
    "applications": [
      "Agricultural synthetic fertilizers",
      "Inert purging atmosphere in food packing and electronics",
      "Cryogenic freezing with liquid nitrogen",
      "Explosives and pharmaceutical intermediates"
    ],
    "importantCompounds": [
      {
        "formula": "NH3",
        "name": "Ammonia",
        "use": "Synthetic nitrogen fertilizer precursor"
      },
      {
        "formula": "HNO3",
        "name": "Nitric Acid",
        "use": "Fertilizers, explosives, and metal etching"
      },
      {
        "formula": "N2O",
        "name": "Nitrous Oxide",
        "use": "Dental anesthetic (laughing gas) and rocket oxidizer"
      }
    ],
    "reactions": [
      {
        "equation": "N2 + 3H2 -> 2NH3",
        "type": "Haber-Bosch Synthesis",
        "description": "High pressure (150-250 atm) and catalyst (Fe) reaction essential to world food supply."
      },
      {
        "equation": "N2 + O2 -> 2NO",
        "type": "Thermal Fixation",
        "description": "Endothermic reaction occurring during lightning strikes and combustion engines."
      }
    ],
    "safety": "Liquid nitrogen causes rapid cryogenic frostbite. Asphyxiation hazard in confined unventilated spaces."
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "atomicMass": 15.999,
    "category": "reactive-nonmetal",
    "group": 16,
    "period": 2,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[He] 2s² 2p⁴",
    "electronsPerShell": [
      2,
      6
    ],
    "electronegativity": 3.44,
    "meltingPoint": 54.36,
    "boilingPoint": 90.2,
    "density": 1.429,
    "atomicRadius": 48,
    "ionizationEnergy": 1313.9,
    "electronAffinity": 141,
    "oxidationStates": [
      -2,
      -1,
      1,
      2
    ],
    "discoveredBy": "Carl Wilhelm Scheele & Joseph Priestley",
    "yearDiscovered": 1774,
    "summary": "Oxygen is a highly reactive electronegative nonmetal that supports aerobic cellular respiration and acts as the universal oxidizing agent.",
    "occurrence": "Most abundant element in Earth crust (~46% by mass) and constitutes 20.95% of atmospheric volume.",
    "extraction": "Fractional distillation of liquified air or electrolysis of acidified water.",
    "applications": [
      "Steelmaking and basic oxygen furnaces",
      "Medical oxygen therapy in hospitals",
      "Rocket propellant liquid oxidizer (LOX)",
      "Wastewater aerobic treatment and ozone sterilization"
    ],
    "importantCompounds": [
      {
        "formula": "H2O",
        "name": "Water",
        "use": "Universal solvent and primary constituent of Earth hydrosphere"
      },
      {
        "formula": "O3",
        "name": "Ozone",
        "use": "Stratospheric UV shield and powerful water purifying disinfectant"
      },
      {
        "formula": "SiO2",
        "name": "Silicon Dioxide",
        "use": "Main component of sand, quartz, and electronic glass"
      }
    ],
    "reactions": [
      {
        "equation": "CH4 + 2O2 -> CO2 + 2H2O",
        "type": "Complete Combustion",
        "description": "Exothermic oxidation of hydrocarbons yielding heat energy."
      },
      {
        "equation": "4Fe + 3O2 -> 2Fe2O3",
        "type": "Oxidation / Corrosion",
        "description": "Spontaneous atmospheric oxidation of iron in the presence of moisture."
      }
    ],
    "safety": "Strong oxidizer that dramatically accelerates combustion of flammable materials. High-pressure oxygen poses fire risks."
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "atomicMass": 18.998,
    "category": "reactive-nonmetal",
    "group": 17,
    "period": 2,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[He] 2s² 2p⁵",
    "electronsPerShell": [
      2,
      7
    ],
    "electronegativity": 3.98,
    "meltingPoint": 53.53,
    "boilingPoint": 85.03,
    "density": 1.696,
    "atomicRadius": 42,
    "ionizationEnergy": 1681,
    "electronAffinity": 328,
    "oxidationStates": [
      -1
    ],
    "discoveredBy": "Henri Moissan",
    "yearDiscovered": 1886,
    "summary": "Fluorine is the most electronegative and chemically reactive of all elements, attacking glass, metals, and water aggressively.",
    "occurrence": "Abundant in minerals such as fluorite (CaF2), fluorapatite, and cryolite.",
    "extraction": "Electrolysis of anhydrous hydrogen fluoride dissolved in molten potassium bifluoride (KF*2HF).",
    "applications": [
      "Uranium hexafluoride enrichment for nuclear energy",
      "Fluoropolymer synthesis (PTFE / Teflon)",
      "Dental cavity prevention additives (fluoride toothpaste)",
      "Fluorinated pharmaceuticals to enhance metabolic stability"
    ],
    "importantCompounds": [
      {
        "formula": "HF",
        "name": "Hydrofluoric Acid",
        "use": "Etching semiconductor silicon and glass fabrication"
      },
      {
        "formula": "UF6",
        "name": "Uranium Hexafluoride",
        "use": "Gaseous isotope separation in nuclear centrifuges"
      },
      {
        "formula": "NaF",
        "name": "Sodium Fluoride",
        "use": "Dental prophylaxis and water fluoridation"
      }
    ],
    "reactions": [
      {
        "equation": "2F2 + 2H2O -> 4HF + O2",
        "type": "Redox Displacement",
        "description": "Fluorine oxidizes water violently, liberating oxygen and toxic HF."
      },
      {
        "equation": "H2 + F2 -> 2HF",
        "type": "Synthesis",
        "description": "Reacts explosively even in the dark at cryogenic temperatures."
      }
    ],
    "safety": "Extremely toxic and corrosive gas. Hydrofluoric acid (HF) penetrates tissue and binds calcium, causing cardiac arrest."
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "atomicMass": 20.18,
    "category": "noble-gas",
    "group": 18,
    "period": 2,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[He] 2s² 2p⁶",
    "electronsPerShell": [
      2,
      8
    ],
    "electronegativity": null,
    "meltingPoint": 24.56,
    "boilingPoint": 27.07,
    "density": 0.9002,
    "atomicRadius": 38,
    "ionizationEnergy": 2080.7,
    "electronAffinity": -116,
    "oxidationStates": [
      0
    ],
    "discoveredBy": "William Ramsay & Morris Travers",
    "yearDiscovered": 1898,
    "summary": "Neon is a colorless, odorless noble gas that glows with a brilliant reddish-orange discharge in high-voltage electrical fields.",
    "occurrence": "Trace atmospheric constituent (~18.18 ppm); abundant cosmically in stellar atmospheres.",
    "extraction": "Obtained as a non-condensable byproduct from the cryogenic distillation of liquid air.",
    "applications": [
      "Luminous advertising neon signage",
      "Helium-neon gas lasers (HeNe lasers) for surveying and barcodes",
      "Cryogenic refrigeration in specialized sensor cooling",
      "High-voltage indicator lights and surge arrestors"
    ],
    "importantCompounds": [
      {
        "formula": "Ne",
        "name": "Elemental Neon",
        "use": "Does not form stable neutral chemical compounds under standard conditions"
      }
    ],
    "reactions": [
      {
        "equation": "Ne + e- (high voltage) -> Ne* + e- -> Ne + photon (632.8 nm)",
        "type": "Luminescence",
        "description": "Electrical discharge excites valence electrons, emitting characteristic orange-red photons."
      }
    ],
    "safety": "Non-toxic, chemically inert gas. Can cause asphyxiation if it displaces breathable oxygen."
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "atomicMass": 22.99,
    "category": "alkali-metal",
    "group": 1,
    "period": 3,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s¹",
    "electronsPerShell": [
      2,
      8,
      1
    ],
    "electronegativity": 0.93,
    "meltingPoint": 370.87,
    "boilingPoint": 1156,
    "density": 0.968,
    "atomicRadius": 190,
    "ionizationEnergy": 495.8,
    "electronAffinity": 52.8,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Humphry Davy",
    "yearDiscovered": 1807,
    "summary": "Soft silvery reactive alkali metal essential as an extracellular electrolyte.",
    "occurrence": "Halite rock salt deposits and oceans.",
    "extraction": "Downs cell electrolysis of molten NaCl.",
    "applications": [
      "Food seasoning and preservation (NaCl)",
      "Fast neutron reactor liquid cooling",
      "Street vapor lamps"
    ],
    "importantCompounds": [
      {
        "f": "NaCl",
        "n": "Sodium Chloride",
        "u": "Universal table salt"
      },
      {
        "f": "NaOH",
        "n": "Sodium Hydroxide",
        "u": "Caustic soda"
      }
    ],
    "reactions": [
      {
        "eq": "2Na + 2H2O -> 2NaOH + H2",
        "t": "Displacement",
        "d": "Vigorous exothermic reaction."
      }
    ],
    "safety": "Water-reactive; causes severe alkali chemical burns."
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "atomicMass": 24.305,
    "category": "alkaline-earth",
    "group": 2,
    "period": 3,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s²",
    "electronsPerShell": [
      2,
      8,
      2
    ],
    "electronegativity": 1.31,
    "meltingPoint": 923,
    "boilingPoint": 1363,
    "density": 1.738,
    "atomicRadius": 145,
    "ionizationEnergy": 737.7,
    "electronAffinity": -40,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Joseph Black",
    "yearDiscovered": 1755,
    "summary": "Lightweight alkaline-earth metal essential in chlorophyll photosynthesis.",
    "occurrence": "Dolomite, magnesite, and seawater.",
    "extraction": "Electrolysis of molten MgCl2 or Pidgeon process.",
    "applications": [
      "Aerospace and automotive lightweight alloys",
      "Grignard organic reagents",
      "Emergency flares"
    ],
    "importantCompounds": [
      {
        "f": "MgO",
        "n": "Magnesium Oxide",
        "u": "Refractory furnace lining"
      },
      {
        "f": "MgSO4",
        "n": "Epsom Salt",
        "u": "Therapeutic mineral"
      }
    ],
    "reactions": [
      {
        "eq": "2Mg + O2 -> 2MgO",
        "t": "Combustion",
        "d": "Blinding bright white flame."
      }
    ],
    "safety": "Magnesium ribbon/powder burns with intense light and heat."
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "atomicMass": 26.982,
    "category": "post-transition-metal",
    "group": 13,
    "period": 3,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s² 3p¹",
    "electronsPerShell": [
      2,
      8,
      3
    ],
    "electronegativity": 1.61,
    "meltingPoint": 933.47,
    "boilingPoint": 2743,
    "density": 2.7,
    "atomicRadius": 118,
    "ionizationEnergy": 577.5,
    "electronAffinity": 42.5,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Hans Christian Ørsted",
    "yearDiscovered": 1825,
    "summary": "Most abundant metal in Earth crust, lightweight with a passivating oxide barrier.",
    "occurrence": "Bauxite ore.",
    "extraction": "Bayer process followed by Hall-Héroult molten electrolysis.",
    "applications": [
      "Aircraft fuselage, car frames, and trains",
      "Beverage cans and foil wrap",
      "Overhead electric transmission cables"
    ],
    "importantCompounds": [
      {
        "f": "Al2O3",
        "n": "Alumina",
        "u": "Abrasives and synthetic rubies"
      },
      {
        "f": "AlCl3",
        "n": "Aluminium Chloride",
        "u": "Friedel-Crafts catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2Al + Fe2O3 -> Al2O3 + 2Fe",
        "t": "Thermite Reaction",
        "d": "Molten iron railroad welding."
      }
    ],
    "safety": "Finely divided aluminium powder presents dust explosion hazard."
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "atomicMass": 28.085,
    "category": "metalloid",
    "group": 14,
    "period": 3,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s² 3p²",
    "electronsPerShell": [
      2,
      8,
      4
    ],
    "electronegativity": 1.9,
    "meltingPoint": 1687,
    "boilingPoint": 3538,
    "density": 2.329,
    "atomicRadius": 111,
    "ionizationEnergy": 786.5,
    "electronAffinity": 134.1,
    "oxidationStates": [
      -4,
      2,
      4
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "yearDiscovered": 1824,
    "summary": "Semiconductor metalloid forming the foundation of modern computers and solar panels.",
    "occurrence": "Silica quartz sand and silicates.",
    "extraction": "Carbothermic reduction of quartz followed by Siemens process.",
    "applications": [
      "Computer microprocessors and memory chips",
      "Photovoltaic solar panels",
      "Silicone sealants and polymers"
    ],
    "importantCompounds": [
      {
        "f": "SiO2",
        "n": "Silica",
        "u": "Window glass and concrete"
      },
      {
        "f": "SiC",
        "n": "Carborundum",
        "u": "Abrasive and high-voltage power chips"
      }
    ],
    "reactions": [
      {
        "eq": "SiO2 + 2C -> Si + 2CO",
        "t": "Carbothermic Reduction",
        "d": "Arc furnace smelting of quartz."
      }
    ],
    "safety": "Inhaled silica dust causes chronic irreversible pulmonary silicosis."
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "atomicMass": 30.974,
    "category": "reactive-nonmetal",
    "group": 15,
    "period": 3,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s² 3p³",
    "electronsPerShell": [
      2,
      8,
      5
    ],
    "electronegativity": 2.19,
    "meltingPoint": 317.3,
    "boilingPoint": 553.65,
    "density": 1.823,
    "atomicRadius": 98,
    "ionizationEnergy": 1011.8,
    "electronAffinity": 72,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "discoveredBy": "Hennig Brand",
    "yearDiscovered": 1669,
    "summary": "Multivalent nonmetal forming the phosphate backbone of DNA, RNA, and ATP energy.",
    "occurrence": "Sedimentary phosphorite rock.",
    "extraction": "Thermal arc furnace reduction with coke and silica.",
    "applications": [
      "Agricultural synthetic fertilizers",
      "Safety match striker friction strips",
      "Flame retardant additives"
    ],
    "importantCompounds": [
      {
        "f": "H3PO4",
        "n": "Phosphoric Acid",
        "u": "Beverage acidulant and rust remover"
      },
      {
        "f": "P4O10",
        "n": "Phosphorus Pentoxide",
        "u": "Powerful dehydrating agent"
      }
    ],
    "reactions": [
      {
        "eq": "P4 + 5O2 -> P4O10",
        "t": "Combustion",
        "d": "White phosphorus burns spontaneously in air."
      }
    ],
    "safety": "White phosphorus is pyrophoric and inflicts deep severe chemical burns."
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "atomicMass": 32.06,
    "category": "reactive-nonmetal",
    "group": 16,
    "period": 3,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ne] 3s² 3p⁴",
    "electronsPerShell": [
      2,
      8,
      6
    ],
    "electronegativity": 2.58,
    "meltingPoint": 388.36,
    "boilingPoint": 717.8,
    "density": 2.07,
    "atomicRadius": 88,
    "ionizationEnergy": 999.6,
    "electronAffinity": 200.4,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Vibrant yellow nonmetal forming S8 rings, historically known as brimstone.",
    "occurrence": "Volcanic deposits and sour natural gas.",
    "extraction": "Claus catalytic process from hydrogen sulfide.",
    "applications": [
      "Sulfuric acid manufacturing (world #1 chemical)",
      "Rubber tire vulcanization",
      "Fungicides and agricultural soil conditioners"
    ],
    "importantCompounds": [
      {
        "f": "H2SO4",
        "n": "Sulfuric Acid",
        "u": "Industrial chemical processing"
      },
      {
        "f": "SO2",
        "n": "Sulfur Dioxide",
        "u": "Wine preservative and bleaching"
      }
    ],
    "reactions": [
      {
        "eq": "S + O2 -> SO2",
        "t": "Combustion",
        "d": "Burns with a blue flame."
      }
    ],
    "safety": "Non-toxic element; byproduct SO2 gas is choking and toxic."
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "atomicMass": 35.45,
    "category": "reactive-nonmetal",
    "group": 17,
    "period": 3,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[Ne] 3s² 3p⁵",
    "electronsPerShell": [
      2,
      8,
      7
    ],
    "electronegativity": 3.16,
    "meltingPoint": 171.6,
    "boilingPoint": 239.11,
    "density": 3.2,
    "atomicRadius": 79,
    "ionizationEnergy": 1251.2,
    "electronAffinity": 349,
    "oxidationStates": [
      -1,
      1,
      3,
      5,
      7
    ],
    "discoveredBy": "Carl Wilhelm Scheele",
    "yearDiscovered": 1774,
    "summary": "Pungent greenish-yellow halogen gas essential for water disinfection and PVC.",
    "occurrence": "Oceanic chloride salts and halite.",
    "extraction": "Chlor-alkali electrolysis of aqueous NaCl brine.",
    "applications": [
      "Drinking water purification and swimming pool chlorination",
      "PVC construction plastic piping",
      "Pharmaceutical chemical synthesis"
    ],
    "importantCompounds": [
      {
        "f": "NaCl",
        "n": "Sodium Chloride",
        "u": "Salt"
      },
      {
        "f": "NaClO",
        "n": "Sodium Hypochlorite",
        "u": "Disinfectant bleach"
      }
    ],
    "reactions": [
      {
        "eq": "Cl2 + H2O -> HCl + HClO",
        "t": "Disproportionation",
        "d": "Forms sterilizing hypochlorous acid."
      }
    ],
    "safety": "Toxic corrosive choking gas; causes pulmonary damage upon inhalation."
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "atomicMass": 39.95,
    "category": "noble-gas",
    "group": 18,
    "period": 3,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[Ne] 3s² 3p⁶",
    "electronsPerShell": [
      2,
      8,
      8
    ],
    "electronegativity": null,
    "meltingPoint": 83.81,
    "boilingPoint": 87.3,
    "density": 1.784,
    "atomicRadius": 71,
    "ionizationEnergy": 1520.6,
    "electronAffinity": -96,
    "oxidationStates": [
      0
    ],
    "discoveredBy": "Lord Rayleigh & William Ramsay",
    "yearDiscovered": 1894,
    "summary": "Inert atmospheric noble gas (0.93%) used as a non-reactive protective shielding envelope.",
    "occurrence": "Earth atmosphere.",
    "extraction": "Fractional distillation of liquid air.",
    "applications": [
      "Inert shielding gas for TIG and MIG welding",
      "Filling incandescent light bulbs and double glazing",
      "Silicon crystal fabrication atmosphere"
    ],
    "importantCompounds": [
      {
        "f": "HArF",
        "n": "Argon Fluorohydride",
        "u": "Low-temperature theoretical compound"
      }
    ],
    "reactions": [
      {
        "eq": "Ar + heat -> Ar (inert)",
        "t": "Thermal Stability",
        "d": "Chemically inert."
      }
    ],
    "safety": "Non-toxic; risk of asphyxiation in enclosed unventilated areas."
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "atomicMass": 39.098,
    "category": "alkali-metal",
    "group": 1,
    "period": 4,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Ar] 4s¹",
    "electronsPerShell": [
      2,
      8,
      8,
      1
    ],
    "electronegativity": 0.82,
    "meltingPoint": 336.53,
    "boilingPoint": 1032,
    "density": 0.862,
    "atomicRadius": 220,
    "ionizationEnergy": 418.8,
    "electronAffinity": 48.4,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Humphry Davy",
    "yearDiscovered": 1807,
    "summary": "Soft silvery alkali metal acting as the major intracellular cation in human neurons.",
    "occurrence": "Sylvite (KCl) and potash deposits.",
    "extraction": "Sodium vapor reduction of molten KCl at 850°C.",
    "applications": [
      "Agricultural potash fertilizers",
      "Specialty liquid soap manufacturing",
      "Gorilla Glass chemical strengthening"
    ],
    "importantCompounds": [
      {
        "f": "KCl",
        "n": "Potassium Chloride",
        "u": "Potash fertilizer"
      },
      {
        "f": "KNO3",
        "n": "Saltpeter",
        "u": "Pyrotechnics and tree stump remover"
      }
    ],
    "reactions": [
      {
        "eq": "2K + 2H2O -> 2KOH + H2",
        "t": "Explosive Displacement",
        "d": "Lilac flame explosion upon water contact."
      }
    ],
    "safety": "Violently water-reactive; causes severe skin burns."
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "atomicMass": 40.078,
    "category": "alkaline-earth",
    "group": 2,
    "period": 4,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Ar] 4s²",
    "electronsPerShell": [
      2,
      8,
      8,
      2
    ],
    "electronegativity": 1,
    "meltingPoint": 1115,
    "boilingPoint": 1757,
    "density": 1.55,
    "atomicRadius": 180,
    "ionizationEnergy": 589.8,
    "electronAffinity": 2.37,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Humphry Davy",
    "yearDiscovered": 1808,
    "summary": "Abundant alkaline-earth metal essential for bones, teeth, and building cements.",
    "occurrence": "Limestone, chalk, marble, and gypsum.",
    "extraction": "Aluminothermic reduction of lime or electrolysis of molten CaCl2.",
    "applications": [
      "Portland cement and concrete construction",
      "Metallurgical reducing agent for rare metals",
      "Dietary calcium bone health supplements"
    ],
    "importantCompounds": [
      {
        "f": "CaCO3",
        "n": "Calcium Carbonate",
        "u": "Limestone rock and antacid"
      },
      {
        "f": "CaO",
        "n": "Quicklime",
        "u": "Steel flux and mortar"
      }
    ],
    "reactions": [
      {
        "eq": "CaCO3 -> CaO + CO2",
        "t": "Calcination",
        "d": "Thermal decomposition of limestone."
      }
    ],
    "safety": "Reacts with water to generate caustic lime and heat."
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "atomicMass": 44.956,
    "category": "transition-metal",
    "group": 3,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹ 4s²",
    "electronsPerShell": [
      2,
      8,
      9,
      2
    ],
    "electronegativity": 1.36,
    "meltingPoint": 1814,
    "boilingPoint": 3109,
    "density": 2.985,
    "atomicRadius": 144,
    "ionizationEnergy": 633.1,
    "electronAffinity": 18,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Lars Fredrik Nilson",
    "yearDiscovered": 1879,
    "summary": "Lightweight transition metal strengthening aluminium aerospace alloys.",
    "occurrence": "Thortveitite and bauxite residue.",
    "extraction": "Solvent extraction from uranium/bauxite processing.",
    "applications": [
      "Aluminium-scandium aircraft airframes",
      "High-intensity metal halide stadium lamps",
      "Solid oxide fuel cells"
    ],
    "importantCompounds": [
      {
        "f": "Sc2O3",
        "n": "Scandia",
        "u": "Laser crystal dopant"
      }
    ],
    "reactions": [
      {
        "eq": "4Sc + 3O2 -> 2Sc2O3",
        "t": "Oxidation",
        "d": "Forms scandia oxide."
      }
    ],
    "safety": "Low toxicity metal; handle powder with dust precautions."
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "atomicMass": 47.867,
    "category": "transition-metal",
    "group": 4,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d² 4s²",
    "electronsPerShell": [
      2,
      8,
      10,
      2
    ],
    "electronegativity": 1.54,
    "meltingPoint": 1941,
    "boilingPoint": 3560,
    "density": 4.506,
    "atomicRadius": 132,
    "ionizationEnergy": 658.8,
    "electronAffinity": 7.6,
    "oxidationStates": [
      2,
      3,
      4
    ],
    "discoveredBy": "William Gregor",
    "yearDiscovered": 1791,
    "summary": "Highest strength-to-weight ratio metal, biocompatible and intensely corrosion-resistant.",
    "occurrence": "Ilmenite and rutile sand.",
    "extraction": "Kroll process: TiCl4 reduction with magnesium.",
    "applications": [
      "Jet aircraft engines and supersonic airframes",
      "Biocompatible orthopedic bone implants",
      "White pigment (TiO2) in paints"
    ],
    "importantCompounds": [
      {
        "f": "TiO2",
        "n": "Titanium Dioxide",
        "u": "Premier opaque white pigment"
      },
      {
        "f": "TiCl4",
        "n": "Titanium Tetrachloride",
        "u": "Ziegler-Natta catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "TiCl4 + 2Mg -> Ti + 2MgCl2",
        "t": "Kroll Reduction",
        "d": "Produces titanium metal sponge."
      }
    ],
    "safety": "Biocompatible; fine titanium powder is pyrophoric."
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "atomicMass": 50.942,
    "category": "transition-metal",
    "group": 5,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d³ 4s²",
    "electronsPerShell": [
      2,
      8,
      11,
      2
    ],
    "electronegativity": 1.63,
    "meltingPoint": 2183,
    "boilingPoint": 3680,
    "density": 6.11,
    "atomicRadius": 122,
    "ionizationEnergy": 650.9,
    "electronAffinity": 50.6,
    "oxidationStates": [
      2,
      3,
      4,
      5
    ],
    "discoveredBy": "Andrés Manuel del Río",
    "yearDiscovered": 1801,
    "summary": "Hard ductile transition metal famous for four vibrant oxidation state colors.",
    "occurrence": "Titanomagnetite iron ores and petroleum soot.",
    "extraction": "Roasting titanomagnetite slag with sodium carbonate.",
    "applications": [
      "High-strength structural tool steel",
      "Vanadium redox flow batteries (VRFB)",
      "Sulfuric acid catalyst (V2O5)"
    ],
    "importantCompounds": [
      {
        "f": "V2O5",
        "n": "Vanadium Pentoxide",
        "u": "Contact process catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2SO2 + O2 --(V2O5)--> 2SO3",
        "t": "Catalytic Oxidation",
        "d": "Oxidation of sulfur dioxide."
      }
    ],
    "safety": "Vanadium oxide dust is toxic and irritating to lungs."
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "atomicMass": 51.996,
    "category": "transition-metal",
    "group": 6,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d⁵ 4s¹",
    "electronsPerShell": [
      2,
      8,
      13,
      1
    ],
    "electronegativity": 1.66,
    "meltingPoint": 2180,
    "boilingPoint": 2944,
    "density": 7.19,
    "atomicRadius": 118,
    "ionizationEnergy": 652.9,
    "electronAffinity": 64.3,
    "oxidationStates": [
      2,
      3,
      6
    ],
    "discoveredBy": "Louis-Nicolas Vauquelin",
    "yearDiscovered": 1797,
    "summary": "Steel-gray hard metal imparting rust-proof passivation to stainless steel.",
    "occurrence": "Chromite ore (FeCr2O4).",
    "extraction": "Smelting chromite with carbon yields ferrochrome.",
    "applications": [
      "Stainless steel formulation (min 10.5% Cr)",
      "Decorative chrome electroplating",
      "Leather tanning salts"
    ],
    "importantCompounds": [
      {
        "f": "Cr2O3",
        "n": "Chromium(III) Oxide",
        "u": "Green ceramic pigment"
      },
      {
        "f": "K2Cr2O7",
        "n": "Potassium Dichromate",
        "u": "Oxidizing agent"
      }
    ],
    "reactions": [
      {
        "eq": "4Cr + 3O2 -> 2Cr2O3",
        "t": "Passivation",
        "d": "Tenacious rust-preventing film."
      }
    ],
    "safety": "Trivalent Cr(III) is safe; hexavalent Cr(VI) is a recognized carcinogen."
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "atomicMass": 54.938,
    "category": "transition-metal",
    "group": 7,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d⁵ 4s²",
    "electronsPerShell": [
      2,
      8,
      13,
      2
    ],
    "electronegativity": 1.55,
    "meltingPoint": 1519,
    "boilingPoint": 2334,
    "density": 7.21,
    "atomicRadius": 117,
    "ionizationEnergy": 717.3,
    "electronAffinity": 0,
    "oxidationStates": [
      2,
      3,
      4,
      6,
      7
    ],
    "discoveredBy": "Johan Gottlieb Gahn",
    "yearDiscovered": 1774,
    "summary": "Hard brittle metal essential for desulfurizing and strengthening all carbon steel.",
    "occurrence": "Pyrolusite (MnO2) and deep-sea nodules.",
    "extraction": "Blast furnace smelting to ferromanganese.",
    "applications": [
      "Steel deoxidation and alloying",
      "NMC lithium EV battery cathodes",
      "Alkaline battery depolarizers"
    ],
    "importantCompounds": [
      {
        "f": "MnO2",
        "n": "Manganese Dioxide",
        "u": "Battery cathode and oxidant"
      },
      {
        "f": "KMnO4",
        "n": "Potassium Permanganate",
        "u": "Purple antiseptic"
      }
    ],
    "reactions": [
      {
        "eq": "2KMnO4 + 16HCl -> 2KCl + 2MnCl2 + 5Cl2 + 8H2O",
        "t": "Redox",
        "d": "Chlorine gas generation."
      }
    ],
    "safety": "Chronic inhalation causes neurological manganism."
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "atomicMass": 55.845,
    "category": "transition-metal",
    "group": 8,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d⁶ 4s²",
    "electronsPerShell": [
      2,
      8,
      14,
      2
    ],
    "electronegativity": 1.83,
    "meltingPoint": 1811,
    "boilingPoint": 3134,
    "density": 7.874,
    "atomicRadius": 117,
    "ionizationEnergy": 762.5,
    "electronAffinity": 15.7,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Most used metal on Earth, backbone of structural steel and blood hemoglobin.",
    "occurrence": "Hematite and magnetite iron ores.",
    "extraction": "Blast furnace reduction using coke and limestone.",
    "applications": [
      "Structural steel for construction and transport",
      "Cast iron automotive machinery",
      "Ammonia Haber catalyst"
    ],
    "importantCompounds": [
      {
        "f": "Fe2O3",
        "n": "Iron(III) Oxide",
        "u": "Rust and pigment"
      },
      {
        "f": "FeSO4",
        "n": "Iron(II) Sulfate",
        "u": "Nutritional iron supplement"
      }
    ],
    "reactions": [
      {
        "eq": "Fe2O3 + 3CO -> 2Fe + 3CO2",
        "t": "Reduction",
        "d": "Blast furnace extraction."
      }
    ],
    "safety": "Non-toxic in bulk metal; massive oral overdose in children is toxic."
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "atomicMass": 58.933,
    "category": "transition-metal",
    "group": 9,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d⁷ 4s²",
    "electronsPerShell": [
      2,
      8,
      15,
      2
    ],
    "electronegativity": 1.88,
    "meltingPoint": 1768,
    "boilingPoint": 3200,
    "density": 8.9,
    "atomicRadius": 116,
    "ionizationEnergy": 760.4,
    "electronAffinity": 63.7,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Georg Brandt",
    "yearDiscovered": 1735,
    "summary": "Ferromagnetic blue-tinted metal critical for superalloys and EV battery cathodes.",
    "occurrence": "Byproduct of copper and nickel ores.",
    "extraction": "Acid leaching followed by electrowinning.",
    "applications": [
      "Lithium-ion EV batteries (NMC and LCO)",
      "Jet turbine engine superalloys",
      "Cobalt-60 cancer radiation therapy"
    ],
    "importantCompounds": [
      {
        "f": "Co3O4",
        "n": "Cobalt Oxide",
        "u": "Battery cathode synthesis"
      },
      {
        "f": "CoCl2",
        "n": "Cobalt Chloride",
        "u": "Humidity test strips"
      }
    ],
    "reactions": [
      {
        "eq": "CoCl2*6H2O <-> CoCl2 + 6H2O",
        "t": "Hydration",
        "d": "Reversible pink-to-blue color change."
      }
    ],
    "safety": "Cobalt dust is an allergen and potential carcinogen."
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "atomicMass": 58.693,
    "category": "transition-metal",
    "group": 10,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d⁸ 4s²",
    "electronsPerShell": [
      2,
      8,
      16,
      2
    ],
    "electronegativity": 1.91,
    "meltingPoint": 1728,
    "boilingPoint": 3003,
    "density": 8.908,
    "atomicRadius": 115,
    "ionizationEnergy": 737.1,
    "electronAffinity": 112,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Axel Fredrik Cronstedt",
    "yearDiscovered": 1751,
    "summary": "Ductile corrosion-resistant metal essential for austenitic stainless steel.",
    "occurrence": "Laterites and pentlandite sulfide ores.",
    "extraction": "Mond process using volatile nickel carbonyl.",
    "applications": [
      "Stainless steel alloying",
      "EV battery chemistry (NMC)",
      "Raney nickel organic hydrogenation catalyst"
    ],
    "importantCompounds": [
      {
        "f": "NiO",
        "n": "Nickel Oxide",
        "u": "Ceramic glazes and cathodes"
      },
      {
        "f": "Ni(CO)4",
        "n": "Nickel Tetracarbonyl",
        "u": "Volatile refining intermediate"
      }
    ],
    "reactions": [
      {
        "eq": "Ni + 4CO -> Ni(CO)4",
        "t": "Carbonylation",
        "d": "Mond refining step."
      }
    ],
    "safety": "Common skin allergen; nickel carbonyl gas is deadly toxic."
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "atomicMass": 63.546,
    "category": "transition-metal",
    "group": 11,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      1
    ],
    "electronegativity": 1.9,
    "meltingPoint": 1357.77,
    "boilingPoint": 2835,
    "density": 8.96,
    "atomicRadius": 117,
    "ionizationEnergy": 745.5,
    "electronAffinity": 118.4,
    "oxidationStates": [
      1,
      2
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Reddish-orange metal with supreme electrical and thermal conductivity.",
    "occurrence": "Chalcopyrite and malachite copper ores.",
    "extraction": "Froth flotation, smelting, and electrolytic refining.",
    "applications": [
      "Electrical wiring, electric motors, and grid cables",
      "Plumbing pipework and heat exchangers",
      "Brass and bronze traditional alloys"
    ],
    "importantCompounds": [
      {
        "f": "CuSO4",
        "n": "Copper Sulfate",
        "u": "Agricultural fungicide"
      },
      {
        "f": "CuO",
        "n": "Copper Oxide",
        "u": "Superconductor research"
      }
    ],
    "reactions": [
      {
        "eq": "Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O",
        "t": "Dissolution",
        "d": "Releases dense brown NO2 gas."
      }
    ],
    "safety": "Low human toxicity; highly toxic to aquatic organisms."
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "atomicMass": 65.38,
    "category": "transition-metal",
    "group": 12,
    "period": 4,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s²",
    "electronsPerShell": [
      2,
      8,
      18,
      2
    ],
    "electronegativity": 1.65,
    "meltingPoint": 692.68,
    "boilingPoint": 1180,
    "density": 7.14,
    "atomicRadius": 125,
    "ionizationEnergy": 906.4,
    "electronAffinity": -58,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Andreas Sigismund Marggraf",
    "yearDiscovered": 1746,
    "summary": "Bluish-white metal used extensively as sacrificial galvanized rust protection.",
    "occurrence": "Sphalerite zinc sulfide ore.",
    "extraction": "Roasting to ZnO followed by electrowinning.",
    "applications": [
      "Hot-dip galvanizing of construction steel",
      "Die-casting precision components (Zamak)",
      "Nutritional immune support and sunscreen (ZnO)"
    ],
    "importantCompounds": [
      {
        "f": "ZnO",
        "n": "Zinc Oxide",
        "u": "Mineral sunscreen UV filter"
      },
      {
        "f": "ZnSO4",
        "n": "Zinc Sulfate",
        "u": "Dietary supplement"
      }
    ],
    "reactions": [
      {
        "eq": "Zn + 2HCl -> ZnCl2 + H2",
        "t": "Displacement",
        "d": "Generates hydrogen gas."
      }
    ],
    "safety": "Welding zinc fumes can cause temporary metal fume fever."
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "atomicMass": 69.723,
    "category": "post-transition-metal",
    "group": 13,
    "period": 4,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      3
    ],
    "electronegativity": 1.81,
    "meltingPoint": 302.91,
    "boilingPoint": 2673,
    "density": 5.91,
    "atomicRadius": 126,
    "ionizationEnergy": 578.8,
    "electronAffinity": 28.9,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "yearDiscovered": 1875,
    "summary": "Melts in the hand (29.76°C) and powers modern high-speed semiconductors.",
    "occurrence": "Trace byproduct in bauxite.",
    "extraction": "Electrolysis of Bayer process liquors.",
    "applications": [
      "Gallium nitride (GaN) fast chargers and blue LEDs",
      "Gallium arsenide (GaAs) RF microwave chips",
      "Liquid metal thermal paste"
    ],
    "importantCompounds": [
      {
        "f": "GaAs",
        "n": "Gallium Arsenide",
        "u": "High-efficiency solar cells and radar"
      }
    ],
    "reactions": [
      {
        "eq": "4Ga + 3O2 -> 2Ga2O3",
        "t": "Oxidation",
        "d": "Forms oxide layer."
      }
    ],
    "safety": "Liquid gallium severely embrittles solid aluminium metal."
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "atomicMass": 72.63,
    "category": "metalloid",
    "group": 14,
    "period": 4,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p²",
    "electronsPerShell": [
      2,
      8,
      18,
      4
    ],
    "electronegativity": 2.01,
    "meltingPoint": 1211.4,
    "boilingPoint": 3106,
    "density": 5.323,
    "atomicRadius": 122,
    "ionizationEnergy": 762,
    "electronAffinity": 119,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Clemens Winkler",
    "yearDiscovered": 1886,
    "summary": "Lustrous gray metalloid historically used in the first transistors.",
    "occurrence": "Zinc sphalerite flue dusts.",
    "extraction": "Chlorination to GeCl4 followed by hydrolysis.",
    "applications": [
      "Fiber optic core dopant to boost refraction",
      "Infrared thermal imaging lenses",
      "Polymerization catalyst for PET plastic"
    ],
    "importantCompounds": [
      {
        "f": "GeO2",
        "n": "Germanium Dioxide",
        "u": "Optical fiber dopant"
      }
    ],
    "reactions": [
      {
        "eq": "Ge + O2 -> GeO2",
        "t": "Oxidation",
        "d": "High-temperature oxidation."
      }
    ],
    "safety": "Low toxicity in elemental state."
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "atomicMass": 74.922,
    "category": "metalloid",
    "group": 15,
    "period": 4,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p³",
    "electronsPerShell": [
      2,
      8,
      18,
      5
    ],
    "electronegativity": 2.18,
    "meltingPoint": 1090,
    "boilingPoint": 887,
    "density": 5.727,
    "atomicRadius": 119,
    "ionizationEnergy": 947,
    "electronAffinity": 78,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "discoveredBy": "Albertus Magnus",
    "yearDiscovered": 1250,
    "summary": "Notorious toxic metalloid sublimating at 614°C, used in compound semiconductors.",
    "occurrence": "Arsenopyrite mineral veins.",
    "extraction": "Roasting arsenopyrite in air.",
    "applications": [
      "GaAs high-frequency semiconductor wafers",
      "Lead-acid car battery hardener",
      "Leukemia chemotherapy (arsenic trioxide)"
    ],
    "importantCompounds": [
      {
        "f": "As2O3",
        "n": "Arsenic Trioxide",
        "u": "Acute promyelocytic leukemia drug"
      }
    ],
    "reactions": [
      {
        "eq": "4As + 3O2 -> 2As2O3",
        "t": "Combustion",
        "d": "Garlic-scented toxic fumes."
      }
    ],
    "safety": "Extremely potent poison and human carcinogen."
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "atomicMass": 78.971,
    "category": "reactive-nonmetal",
    "group": 16,
    "period": 4,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      6
    ],
    "electronegativity": 2.55,
    "meltingPoint": 494,
    "boilingPoint": 958,
    "density": 4.81,
    "atomicRadius": 120,
    "ionizationEnergy": 941,
    "electronAffinity": 195,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "yearDiscovered": 1817,
    "summary": "Photoconductive nonmetal whose conductivity rises 1000-fold under illumination.",
    "occurrence": "Copper anode slimes.",
    "extraction": "Roasting copper refinery slimes.",
    "applications": [
      "Photocopier xerography drums",
      "Ruby red colored glass manufacturing",
      "CIGS solar panels and dandruff shampoos"
    ],
    "importantCompounds": [
      {
        "f": "SeS2",
        "n": "Selenium Disulfide",
        "u": "Antidandruff shampoo agent"
      }
    ],
    "reactions": [
      {
        "eq": "Se + O2 -> SeO2",
        "t": "Combustion",
        "d": "Burns with a blue flame."
      }
    ],
    "safety": "Essential trace mineral; toxic in excess (selenosis)."
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "atomicMass": 79.904,
    "category": "reactive-nonmetal",
    "group": 17,
    "period": 4,
    "block": "p",
    "state": "Liquid",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      7
    ],
    "electronegativity": 2.96,
    "meltingPoint": 265.8,
    "boilingPoint": 332,
    "density": 3.1028,
    "atomicRadius": 120,
    "ionizationEnergy": 1139.9,
    "electronAffinity": 324.6,
    "oxidationStates": [
      -1,
      1,
      3,
      5
    ],
    "discoveredBy": "Antoine Jérôme Balard",
    "yearDiscovered": 1826,
    "summary": "Only nonmetallic liquid element at room temp, fuming dense reddish-brown vapor.",
    "occurrence": "Saline brines and the Dead Sea.",
    "extraction": "Chlorine displacement of bromide brine.",
    "applications": [
      "Brominated flame retardants in plastics",
      "Offshore well completion fluids",
      "Pharmaceutical chemical synthesis"
    ],
    "importantCompounds": [
      {
        "f": "AgBr",
        "n": "Silver Bromide",
        "u": "Photographic film emulsion"
      }
    ],
    "reactions": [
      {
        "eq": "2Br- + Cl2 -> Br2 + 2Cl-",
        "t": "Halogen Displacement",
        "d": "Displaces liquid bromine."
      }
    ],
    "safety": "Corrosive fuming liquid inflicting agonizing chemical burns."
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "atomicMass": 83.798,
    "category": "noble-gas",
    "group": 18,
    "period": 4,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      8
    ],
    "electronegativity": 3,
    "meltingPoint": 115.79,
    "boilingPoint": 119.93,
    "density": 3.749,
    "atomicRadius": 88,
    "ionizationEnergy": 1350.8,
    "electronAffinity": -96,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "William Ramsay & Morris Travers",
    "yearDiscovered": 1898,
    "summary": "Dense noble gas historically used to define the international standard meter.",
    "occurrence": "Atmospheric trace gas.",
    "extraction": "Cryogenic liquid air distillation.",
    "applications": [
      "Insulated window thermal barrier gas",
      "Excimer laser photolithography for chips (248 nm)",
      "Airport runway strobe flashlamps"
    ],
    "importantCompounds": [
      {
        "f": "KrF2",
        "n": "Krypton Difluoride",
        "u": "Fluorinating oxidizer"
      }
    ],
    "reactions": [
      {
        "eq": "Kr + F2 -> KrF2",
        "t": "UV Synthesis",
        "d": "Forms low-temp fluoride."
      }
    ],
    "safety": "Asphyxiant noble gas in confined areas."
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "atomicMass": 85.468,
    "category": "alkali-metal",
    "group": 1,
    "period": 5,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Kr] 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      1
    ],
    "electronegativity": 0.82,
    "meltingPoint": 312.46,
    "boilingPoint": 961,
    "density": 1.532,
    "atomicRadius": 235,
    "ionizationEnergy": 403,
    "electronAffinity": 46.9,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Robert Bunsen & Gustav Kirchhoff",
    "yearDiscovered": 1861,
    "summary": "Soft reactive alkali metal that ignites spontaneously in air.",
    "occurrence": "Lepidolite and pollucite ores.",
    "extraction": "Byproduct of lithium extraction.",
    "applications": [
      "Rubidium atomic GPS frequency clocks",
      "Vapor magnetometers",
      "Photocathodes"
    ],
    "importantCompounds": [
      {
        "f": "RbCl",
        "n": "Rubidium Chloride",
        "u": "Biomarker"
      }
    ],
    "reactions": [
      {
        "eq": "2Rb + 2H2O -> 2RbOH + H2",
        "t": "Explosion",
        "d": "Explosive reaction."
      }
    ],
    "safety": "Pyrophoric water-reactive metal."
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "atomicMass": 87.62,
    "category": "alkaline-earth",
    "group": 2,
    "period": 5,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Kr] 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      2
    ],
    "electronegativity": 0.95,
    "meltingPoint": 1050,
    "boilingPoint": 1655,
    "density": 2.64,
    "atomicRadius": 200,
    "ionizationEnergy": 549.5,
    "electronAffinity": 5,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Adair Crawford",
    "yearDiscovered": 1790,
    "summary": "Alkaline earth metal renowned for brilliant crimson pyrotechnic flares.",
    "occurrence": "Celestite and strontianite.",
    "extraction": "Aluminium reduction of SrO.",
    "applications": [
      "Crimson fireworks and railway warning flares",
      "Strontium-90 nuclear batteries (RTG)",
      "Optical lattice atomic clocks"
    ],
    "importantCompounds": [
      {
        "f": "SrCO3",
        "n": "Strontium Carbonate",
        "u": "Red firework colorant"
      }
    ],
    "reactions": [
      {
        "eq": "2Sr + O2 -> 2SrO",
        "t": "Combustion",
        "d": "Intense scarlet flame."
      }
    ],
    "safety": "Combustible; Sr-90 isotope is a hazardous bone seeker."
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "atomicMass": 88.906,
    "category": "transition-metal",
    "group": 3,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      9,
      2
    ],
    "electronegativity": 1.22,
    "meltingPoint": 1799,
    "boilingPoint": 3609,
    "density": 4.472,
    "atomicRadius": 180,
    "ionizationEnergy": 600,
    "electronAffinity": 29.6,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Johan Gadolin",
    "yearDiscovered": 1794,
    "summary": "Silvery transition metal used in high-temp superconductors and lasers.",
    "occurrence": "Xenotime and monazite ores.",
    "extraction": "Ion-exchange chromatography.",
    "applications": [
      "YBCO high-temperature superconductors",
      "YAG industrial cutting lasers",
      "Zirconia dental ceramics"
    ],
    "importantCompounds": [
      {
        "f": "Y2O3",
        "n": "Yttria",
        "u": "Thermal ceramic barrier"
      }
    ],
    "reactions": [
      {
        "eq": "4Y + 3O2 -> 2Y2O3",
        "t": "Oxidation",
        "d": "Forms protective oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "atomicMass": 91.224,
    "category": "transition-metal",
    "group": 4,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d² 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      10,
      2
    ],
    "electronegativity": 1.33,
    "meltingPoint": 2128,
    "boilingPoint": 4682,
    "density": 6.52,
    "atomicRadius": 160,
    "ionizationEnergy": 640.1,
    "electronAffinity": 41.1,
    "oxidationStates": [
      4
    ],
    "discoveredBy": "Martin Heinrich Klaproth",
    "yearDiscovered": 1789,
    "summary": "Corrosion-proof metal with near-zero neutron absorption for nuclear reactors.",
    "occurrence": "Zircon mineral sands.",
    "extraction": "Kroll reduction of ZrCl4 with magnesium.",
    "applications": [
      "Nuclear fuel rod cladding (Zircaloy)",
      "Cubic zirconia diamond substitutes",
      "Chemical process equipment"
    ],
    "importantCompounds": [
      {
        "f": "ZrO2",
        "n": "Zirconia",
        "u": "High-strength ceramic"
      }
    ],
    "reactions": [
      {
        "eq": "Zr + 2H2O -> ZrO2 + 2H2",
        "t": "High-temp Oxidation",
        "d": "Nuclear cladding reaction."
      }
    ],
    "safety": "Pyrophoric in fine powder form."
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "atomicMass": 92.906,
    "category": "transition-metal",
    "group": 5,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d⁴ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      12,
      1
    ],
    "electronegativity": 1.6,
    "meltingPoint": 2750,
    "boilingPoint": 5017,
    "density": 8.57,
    "atomicRadius": 146,
    "ionizationEnergy": 652.1,
    "electronAffinity": 86.1,
    "oxidationStates": [
      3,
      5
    ],
    "discoveredBy": "Charles Hatchett",
    "yearDiscovered": 1801,
    "summary": "Ductile metal that turns rainbow hues when anodized and forms MRI superconductors.",
    "occurrence": "Pyrochlore deposits.",
    "extraction": "Aluminothermic reduction of Nb2O5.",
    "applications": [
      "Superconducting MRI magnets (Nb-Ti)",
      "Structural pipeline microalloyed steel",
      "Jet engine nickel superalloys"
    ],
    "importantCompounds": [
      {
        "f": "Nb2O5",
        "n": "Niobium Pentoxide",
        "u": "High-index optical glass"
      }
    ],
    "reactions": [
      {
        "eq": "4Nb + 5O2 -> 2Nb2O5",
        "t": "Synthesis",
        "d": "High-temperature oxidation."
      }
    ],
    "safety": "Biocompatible hypoallergenic metal."
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "atomicMass": 95.95,
    "category": "transition-metal",
    "group": 6,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d⁵ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      1
    ],
    "electronegativity": 2.16,
    "meltingPoint": 2896,
    "boilingPoint": 4912,
    "density": 10.28,
    "atomicRadius": 139,
    "ionizationEnergy": 684.3,
    "electronAffinity": 71.9,
    "oxidationStates": [
      2,
      3,
      4,
      5,
      6
    ],
    "discoveredBy": "Carl Wilhelm Scheele",
    "yearDiscovered": 1778,
    "summary": "Refractory metal with the 6th highest melting point, essential enzyme cofactor.",
    "occurrence": "Molybdenite ore (MoS2).",
    "extraction": "Roasting to MoO3 followed by hydrogen reduction.",
    "applications": [
      "High-strength steel superalloys",
      "Petroleum desulfurization catalysts",
      "Solid dry lubricant (MoS2)"
    ],
    "importantCompounds": [
      {
        "f": "MoS2",
        "n": "Molybdenum Disulfide",
        "u": "Solid lubricant"
      },
      {
        "f": "99Mo",
        "n": "Moly-99",
        "u": "Precursor for Tc-99m"
      }
    ],
    "reactions": [
      {
        "eq": "2MoS2 + 7O2 -> 2MoO3 + 4SO2",
        "t": "Roasting",
        "d": "Industrial roasting."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "atomicMass": 98,
    "category": "transition-metal",
    "group": 7,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d⁵ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      2
    ],
    "electronegativity": 1.9,
    "meltingPoint": 2430,
    "boilingPoint": 4538,
    "density": 11.5,
    "atomicRadius": 136,
    "ionizationEnergy": 702,
    "electronAffinity": 53,
    "oxidationStates": [
      4,
      7
    ],
    "discoveredBy": "Emilio Segrè & Carlo Perrier",
    "yearDiscovered": 1937,
    "summary": "First artificially synthesized chemical element with no stable isotopes.",
    "occurrence": "Uranium nuclear fission byproduct.",
    "extraction": "Chemical extraction from irradiated nuclear fuel.",
    "applications": [
      "Technetium-99m nuclear diagnostic medical imaging scans (80% worldwide)"
    ],
    "importantCompounds": [
      {
        "f": "TcO4-",
        "n": "Pertechnetate",
        "u": "Medical radiotracer"
      }
    ],
    "reactions": [
      {
        "eq": "99Mo -> 99mTc + beta",
        "t": "Decay",
        "d": "Medical isotope generator."
      }
    ],
    "safety": "Radioactive material requiring lead shielding."
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "atomicMass": 101.07,
    "category": "transition-metal",
    "group": 8,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d⁷ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      15,
      1
    ],
    "electronegativity": 2.2,
    "meltingPoint": 2607,
    "boilingPoint": 4423,
    "density": 12.45,
    "atomicRadius": 134,
    "ionizationEnergy": 710.2,
    "electronAffinity": 101.3,
    "oxidationStates": [
      2,
      3,
      4,
      8
    ],
    "discoveredBy": "Karl Ernst Claus",
    "yearDiscovered": 1844,
    "summary": "Platinum group metal celebrated for chemical catalysis and hard drives.",
    "occurrence": "Platinum group deposits.",
    "extraction": "Byproduct of nickel refining.",
    "applications": [
      "Hard drive magnetic recording layers",
      "Grubbs olefin metathesis catalyst",
      "Chlor-alkali titanium anodes"
    ],
    "importantCompounds": [
      {
        "f": "RuO4",
        "n": "Ruthenium Tetroxide",
        "u": "Volatile oxidant and stain"
      }
    ],
    "reactions": [
      {
        "eq": "Ru + 2O2 -> RuO2",
        "t": "Oxidation",
        "d": "Conductive oxide."
      }
    ],
    "safety": "RuO4 fumes are highly toxic."
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "atomicMass": 102.91,
    "category": "transition-metal",
    "group": 9,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d⁸ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      16,
      1
    ],
    "electronegativity": 2.28,
    "meltingPoint": 2237,
    "boilingPoint": 3968,
    "density": 12.41,
    "atomicRadius": 134,
    "ionizationEnergy": 719.7,
    "electronAffinity": 109.7,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "William Hyde Wollaston",
    "yearDiscovered": 1804,
    "summary": "Most precious noble metal, vital for automotive toxic NOx reduction.",
    "occurrence": "Bushveld complex.",
    "extraction": "Precipitation from platinum refining residue.",
    "applications": [
      "Automotive catalytic converters (cleans NOx)",
      "Reflective optical mirrors and jewelry plating",
      "Industrial acetic acid catalysis"
    ],
    "importantCompounds": [
      {
        "f": "RhCl(PPh3)3",
        "n": "Wilkinson Catalyst",
        "u": "Hydrogenation catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2NOx -> N2 + xO2",
        "t": "Catalysis",
        "d": "Exhaust cleansing."
      }
    ],
    "safety": "Non-toxic elemental noble metal."
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "atomicMass": 106.42,
    "category": "transition-metal",
    "group": 10,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰",
    "electronsPerShell": [
      2,
      8,
      18,
      18
    ],
    "electronegativity": 2.2,
    "meltingPoint": 1828.05,
    "boilingPoint": 3236,
    "density": 12.023,
    "atomicRadius": 137,
    "ionizationEnergy": 804.4,
    "electronAffinity": 53.7,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "William Hyde Wollaston",
    "yearDiscovered": 1803,
    "summary": "Absorbs up to 900 times its volume of hydrogen gas, Nobel coupling catalyst.",
    "occurrence": "Nickel-copper ores.",
    "extraction": "Solvent extraction from refinery slimes.",
    "applications": [
      "Automotive catalytic converters",
      "Suzuki and Heck organic cross-coupling reactions",
      "Multilayer ceramic capacitors in phones"
    ],
    "importantCompounds": [
      {
        "f": "PdCl2",
        "n": "Palladium Chloride",
        "u": "Wacker catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2Pd + H2 <-> 2PdH0.5",
        "t": "Hydrogen Sponge",
        "d": "Reversible absorption."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "atomicMass": 107.87,
    "category": "transition-metal",
    "group": 11,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      1
    ],
    "electronegativity": 1.93,
    "meltingPoint": 1234.93,
    "boilingPoint": 2435,
    "density": 10.49,
    "atomicRadius": 144,
    "ionizationEnergy": 731,
    "electronAffinity": 125.6,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Highest electrical conductivity, thermal conductivity, and optical reflectivity.",
    "occurrence": "Native silver and argentite.",
    "extraction": "Parkes process and cyanide leaching.",
    "applications": [
      "Solar panel contact paste",
      "Jewelry, silverware, and bullion coins",
      "Antimicrobial wound dressings and catheters"
    ],
    "importantCompounds": [
      {
        "f": "AgNO3",
        "n": "Silver Nitrate",
        "u": "Antiseptic and analytical reagent"
      }
    ],
    "reactions": [
      {
        "eq": "Ag+ + Cl- -> AgCl (ppt)",
        "t": "Precipitation",
        "d": "Curdy white precipitate."
      }
    ],
    "safety": "Chronic intake causes argyria (blue skin discoloration)."
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "atomicMass": 112.41,
    "category": "transition-metal",
    "group": 12,
    "period": 5,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      2
    ],
    "electronegativity": 1.69,
    "meltingPoint": 594.22,
    "boilingPoint": 1040,
    "density": 8.65,
    "atomicRadius": 151,
    "ionizationEnergy": 867.8,
    "electronAffinity": -68,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Friedrich Stromeyer",
    "yearDiscovered": 1817,
    "summary": "Toxic bluish metal used in thin-film solar panels and reactor control rods.",
    "occurrence": "Zinc ores (greenockite).",
    "extraction": "Byproduct of zinc smelting.",
    "applications": [
      "Cadmium telluride (CdTe) utility solar panels",
      "Nuclear reactor neutron control rods",
      "Cadmium yellow artist pigments"
    ],
    "importantCompounds": [
      {
        "f": "CdTe",
        "n": "Cadmium Telluride",
        "u": "Solar cell semiconductor"
      }
    ],
    "reactions": [
      {
        "eq": "Cd + 2HCl -> CdCl2 + H2",
        "t": "Displacement",
        "d": "Slow dissolution."
      }
    ],
    "safety": "Highly toxic heavy metal; causes Itai-itai kidney disease."
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "atomicMass": 114.82,
    "category": "post-transition-metal",
    "group": 13,
    "period": 5,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      3
    ],
    "electronegativity": 1.78,
    "meltingPoint": 429.75,
    "boilingPoint": 2345,
    "density": 7.31,
    "atomicRadius": 167,
    "ionizationEnergy": 558.3,
    "electronAffinity": 28.9,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Ferdinand Reich",
    "yearDiscovered": 1863,
    "summary": "Soft malleable metal that emits a \"cry\" when bent; crucial for touchscreens.",
    "occurrence": "Zinc sphalerite ores.",
    "extraction": "Solvent extraction from zinc residues.",
    "applications": [
      "Indium Tin Oxide (ITO) touchscreen transparent conductors",
      "Cryogenic vacuum seals and solders",
      "InGaAs photodetectors and lasers"
    ],
    "importantCompounds": [
      {
        "f": "In2O3",
        "n": "Indium Oxide",
        "u": "ITO component"
      }
    ],
    "reactions": [
      {
        "eq": "4In + 3O2 -> 2In2O3",
        "t": "Oxidation",
        "d": "Forms indium oxide."
      }
    ],
    "safety": "Inhalation of ITO dust causes indium lung disease."
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "atomicMass": 118.71,
    "category": "post-transition-metal",
    "group": 14,
    "period": 5,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      4
    ],
    "electronegativity": 1.96,
    "meltingPoint": 505.08,
    "boilingPoint": 2875,
    "density": 7.31,
    "atomicRadius": 140,
    "ionizationEnergy": 708.6,
    "electronAffinity": 107.3,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Soft malleable silvery metal that initiated the historic Bronze Age.",
    "occurrence": "Cassiterite ore (SnO2).",
    "extraction": "Smelting cassiterite in furnaces.",
    "applications": [
      "Lead-free solder in electronics (SAC)",
      "Tinplate corrosion coating for food cans",
      "Float glass manufacturing bath"
    ],
    "importantCompounds": [
      {
        "f": "SnO2",
        "n": "Tin Dioxide",
        "u": "Gas sensors and ceramic glazes"
      }
    ],
    "reactions": [
      {
        "eq": "Sn + 2HCl -> SnCl2 + H2",
        "t": "Displacement",
        "d": "Yields tin(II) chloride."
      }
    ],
    "safety": "Non-toxic metal; organotins are toxic biocides."
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "atomicMass": 121.76,
    "category": "metalloid",
    "group": 15,
    "period": 5,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p³",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      5
    ],
    "electronegativity": 2.05,
    "meltingPoint": 903.78,
    "boilingPoint": 1860,
    "density": 6.697,
    "atomicRadius": 140,
    "ionizationEnergy": 834,
    "electronAffinity": 103.2,
    "oxidationStates": [
      -3,
      3,
      5
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Lustrous gray metalloid that expands upon freezing, flame retardant synergist.",
    "occurrence": "Stibnite needles (Sb2S3).",
    "extraction": "Roasting and carbon reduction.",
    "applications": [
      "Flame retardant synergist (Sb2O3) in textiles",
      "Lead-acid storage battery grid hardener",
      "Phase change computer memory chips"
    ],
    "importantCompounds": [
      {
        "f": "Sb2O3",
        "n": "Antimony Trioxide",
        "u": "Flame retardant"
      }
    ],
    "reactions": [
      {
        "eq": "2Sb + 3Cl2 -> 2SbCl3",
        "t": "Chlorination",
        "d": "Direct reaction."
      }
    ],
    "safety": "Toxic metalloid; chronic exposure harms heart and liver."
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "atomicMass": 127.6,
    "category": "metalloid",
    "group": 16,
    "period": 5,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      6
    ],
    "electronegativity": 2.1,
    "meltingPoint": 722.66,
    "boilingPoint": 1261,
    "density": 6.24,
    "atomicRadius": 142,
    "ionizationEnergy": 869.3,
    "electronAffinity": 190.2,
    "oxidationStates": [
      -2,
      2,
      4,
      6
    ],
    "discoveredBy": "Franz-Joseph Müller von Reichenstein",
    "yearDiscovered": 1782,
    "summary": "Brittle silvery metalloid used in thin-film solar and thermoelectric cooling.",
    "occurrence": "Copper refining slimes.",
    "extraction": "Oxidative roasting of anode slimes.",
    "applications": [
      "Cadmium telluride (CdTe) utility solar modules",
      "Bismuth telluride thermoelectric coolers",
      "Phase-change rewritable optical media"
    ],
    "importantCompounds": [
      {
        "f": "Bi2Te3",
        "n": "Bismuth Telluride",
        "u": "Solid-state thermoelectric cooler"
      }
    ],
    "reactions": [
      {
        "eq": "Te + 2H2O -> dimethyl telluride",
        "t": "Metabolic",
        "d": "Imparts garlic breath."
      }
    ],
    "safety": "Toxic; tiny exposures cause pungent garlic body odor."
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "atomicMass": 126.9,
    "category": "reactive-nonmetal",
    "group": 17,
    "period": 5,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      7
    ],
    "electronegativity": 2.66,
    "meltingPoint": 386.85,
    "boilingPoint": 457.4,
    "density": 4.933,
    "atomicRadius": 133,
    "ionizationEnergy": 1008.4,
    "electronAffinity": 295.2,
    "oxidationStates": [
      -1,
      1,
      3,
      5,
      7
    ],
    "discoveredBy": "Bernard Courtois",
    "yearDiscovered": 1811,
    "summary": "Dark lustrous halogen crystals sublimating into beautiful violet fumes.",
    "occurrence": "Caliche nitrate beds and gas brines.",
    "extraction": "Chlorine oxidation of iodide brine.",
    "applications": [
      "Iodized salt to prevent thyroid goiter",
      "Povidone-iodine medical antiseptic",
      "X-ray CT contrast agents and I-131 thyroid cancer cure"
    ],
    "importantCompounds": [
      {
        "f": "KI",
        "n": "Potassium Iodide",
        "u": "Nutritional thyroid supplement"
      },
      {
        "f": "I2",
        "n": "Elemental Iodine",
        "u": "Antiseptic"
      }
    ],
    "reactions": [
      {
        "eq": "I2 + starch -> deep blue complex",
        "t": "Indicator",
        "d": "Classic diagnostic starch test."
      }
    ],
    "safety": "Corrosive crystal; vapor causes eye and respiratory irritation."
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "atomicMass": 131.29,
    "category": "noble-gas",
    "group": 18,
    "period": 5,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8
    ],
    "electronegativity": 2.6,
    "meltingPoint": 161.4,
    "boilingPoint": 165.03,
    "density": 5.894,
    "atomicRadius": 108,
    "ionizationEnergy": 1170.4,
    "electronAffinity": -77,
    "oxidationStates": [
      2,
      4,
      6,
      8
    ],
    "discoveredBy": "William Ramsay & Morris Travers",
    "yearDiscovered": 1898,
    "summary": "Heavy noble gas that disproved inertness by forming stable chemical fluorides.",
    "occurrence": "Atmospheric trace gas.",
    "extraction": "Cryogenic liquid air distillation.",
    "applications": [
      "Ion propulsion thrusters for deep space probes",
      "High-intensity automotive headlamps and IMAX projectors",
      "Neuroprotective general anesthesia"
    ],
    "importantCompounds": [
      {
        "f": "XeF4",
        "n": "Xenon Tetrafluoride",
        "u": "Milestone noble gas fluoride"
      }
    ],
    "reactions": [
      {
        "eq": "Xe + 2F2 -> XeF4",
        "t": "Bartlett Synthesis",
        "d": "Forms crystalline fluoride."
      }
    ],
    "safety": "Non-toxic inert gas; acts as an asphyxiant and anesthetic."
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "atomicMass": 132.91,
    "category": "alkali-metal",
    "group": 1,
    "period": 6,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Xe] 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "electronegativity": 0.79,
    "meltingPoint": 301.59,
    "boilingPoint": 944,
    "density": 1.93,
    "atomicRadius": 260,
    "ionizationEnergy": 375.7,
    "electronAffinity": 46.9,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Robert Bunsen & Gustav Kirchhoff",
    "yearDiscovered": 1860,
    "summary": "Most reactive and electropositive stable metal, defines the standard SI second.",
    "occurrence": "Pollucite pegmatite mineral.",
    "extraction": "Reduction of cesium chloride with calcium.",
    "applications": [
      "Cesium beam atomic clocks (defines the SI second: 9,192,631,770 Hz)",
      "Cesium formate heavy drilling fluids for deep oil exploration",
      "Photoelectric cells"
    ],
    "importantCompounds": [
      {
        "f": "CsCl",
        "n": "Cesium Chloride",
        "u": "Centrifugation density gradient"
      }
    ],
    "reactions": [
      {
        "eq": "2Cs + 2H2O -> 2CsOH + H2",
        "t": "Explosive Reaction",
        "d": "Shatters glass violently."
      }
    ],
    "safety": "Pyrophoric; ignites instantly in air and explodes with water."
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "atomicMass": 137.33,
    "category": "alkaline-earth",
    "group": 2,
    "period": 6,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Xe] 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "electronegativity": 0.89,
    "meltingPoint": 1000,
    "boilingPoint": 2170,
    "density": 3.62,
    "atomicRadius": 215,
    "ionizationEnergy": 502.9,
    "electronAffinity": 13.95,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Carl Wilhelm Scheele & Humphry Davy",
    "yearDiscovered": 1808,
    "summary": "Heavy alkaline-earth metal creating brilliant emerald-green pyrotechnics.",
    "occurrence": "Barite mineral (BaSO4).",
    "extraction": "Aluminothermic reduction of BaO.",
    "applications": [
      "Gastrointestinal diagnostic X-ray barium meal (BaSO4)",
      "Barite heavy drilling mud for petroleum wells",
      "Emerald green fireworks and pyrotechnic flares"
    ],
    "importantCompounds": [
      {
        "f": "BaSO4",
        "n": "Barium Sulfate",
        "u": "Radiopaque X-ray contrast agent"
      }
    ],
    "reactions": [
      {
        "eq": "Ba + 2H2O -> Ba(OH)2 + H2",
        "t": "Displacement",
        "d": "Vigorous reaction in water."
      }
    ],
    "safety": "Soluble barium salts are highly toxic muscle poisons; BaSO4 is insoluble and safe."
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "atomicMass": 138.91,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "electronegativity": 1.1,
    "meltingPoint": 1193,
    "boilingPoint": 3737,
    "density": 6.162,
    "atomicRadius": 195,
    "ionizationEnergy": 538.1,
    "electronAffinity": 48,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "yearDiscovered": 1839,
    "summary": "First lanthanide element, gives its name to the entire 15-element series.",
    "occurrence": "Bastnäsite and monazite ores.",
    "extraction": "Molten fluoride electrolysis.",
    "applications": [
      "Hybrid car NiMH rechargeable batteries",
      "High-refractive optical glass for camera lenses",
      "Fluid catalytic cracking catalysts in petroleum refineries"
    ],
    "importantCompounds": [
      {
        "f": "La2O3",
        "n": "Lanthanum Oxide",
        "u": "High-index low-dispersion optical glass"
      }
    ],
    "reactions": [
      {
        "eq": "4La + 3O2 -> 2La2O3",
        "t": "Oxidation",
        "d": "Forms basic lanthanum oxide."
      }
    ],
    "safety": "Low to moderate toxicity."
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "atomicMass": 140.12,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "electronegativity": 1.12,
    "meltingPoint": 1068,
    "boilingPoint": 3716,
    "density": 6.77,
    "atomicRadius": 185,
    "ionizationEnergy": 534.4,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Martin Heinrich Klaproth & Jöns Jacob Berzelius",
    "yearDiscovered": 1803,
    "summary": "Most abundant rare earth metal, versatile redox catalyst in both +3 and +4 states.",
    "occurrence": "Bastnäsite deposits.",
    "extraction": "Electrowinning from molten chloride salt.",
    "applications": [
      "Precision optical glass polishing slurry (ceria powder CeO2)",
      "Automotive catalytic converters (oxygen storage promoter)",
      "Self-cleaning oven catalytic interior walls",
      "Mischmetal flint in lighter spark wheels"
    ],
    "importantCompounds": [
      {
        "f": "CeO2",
        "n": "Cerium(IV) Oxide (Ceria)",
        "u": "Glass polishing compound and diesel soot catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2CeO2 <-> Ce2O3 + 0.5O2",
        "t": "Redox Cycling",
        "d": "Oxygen storage buffer in car converters."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "atomicMass": 140.91,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "electronegativity": 1.13,
    "meltingPoint": 1208,
    "boilingPoint": 3793,
    "density": 6.77,
    "atomicRadius": 185,
    "ionizationEnergy": 527,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Carl Auer von Welsbach",
    "yearDiscovered": 1885,
    "summary": "Soft silvery rare earth creating vibrant yellow-green glass and powerful magnets.",
    "occurrence": "Monazite and bastnäsite.",
    "extraction": "Molten salt electrolysis.",
    "applications": [
      "Didymium glass for welder safety goggles",
      "Neodymium-praseodymium supermagnets in EV drive motors",
      "Zircon yellow ceramic glazes"
    ],
    "importantCompounds": [
      {
        "f": "Pr2O3",
        "n": "Praseodymium Oxide",
        "u": "Ceramic and glass pigment"
      }
    ],
    "reactions": [
      {
        "eq": "4Pr + 3O2 -> 2Pr2O3",
        "t": "Oxidation",
        "d": "Forms pale green oxide."
      }
    ],
    "safety": "Low to moderate toxicity."
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "atomicMass": 144.24,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "electronegativity": 1.14,
    "meltingPoint": 1297,
    "boilingPoint": 3347,
    "density": 7.01,
    "atomicRadius": 185,
    "ionizationEnergy": 533.1,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Carl Auer von Welsbach",
    "yearDiscovered": 1885,
    "summary": "Forms the strongest permanent magnets on Earth (Nd2Fe14B) driving electric motors.",
    "occurrence": "Bastnäsite and monazite.",
    "extraction": "Reduction of anhydrous fluoride with calcium.",
    "applications": [
      "NdFeB supermagnets for EV motors, wind turbines, and audio speakers",
      "Nd:YAG infrared medical and industrial lasers",
      "Neodymium purple-tinted decorative art glass"
    ],
    "importantCompounds": [
      {
        "f": "Nd2Fe14B",
        "n": "Neodymium Magnet",
        "u": "World strongest commercial permanent magnet"
      }
    ],
    "reactions": [
      {
        "eq": "4Nd + 3O2 -> 2Nd2O3",
        "t": "Oxidation",
        "d": "Forms blue-purple oxide."
      }
    ],
    "safety": "Magnetic pinching hazard in neodymium permanent magnets."
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "atomicMass": 145,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁵ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "electronegativity": 1.13,
    "meltingPoint": 1315,
    "boilingPoint": 3273,
    "density": 7.26,
    "atomicRadius": 185,
    "ionizationEnergy": 540,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Chien Shiung Wu, Jacob Marinsky & Lawrence Glendenin",
    "yearDiscovered": 1945,
    "summary": "Only radioactive lanthanide, named after Prometheus who brought fire to humanity.",
    "occurrence": "Uranium nuclear fission byproduct.",
    "extraction": "Ion exchange separation from reactor wastes.",
    "applications": [
      "Nuclear betavoltaic micro-batteries for space probes",
      "Luminous paint for dials and guided missile instruments",
      "Thickness measurement gauges"
    ],
    "importantCompounds": [
      {
        "f": "Pm2O3",
        "n": "Promethium Oxide",
        "u": "Luminescent phosphors"
      }
    ],
    "reactions": [
      {
        "eq": "147Pm -> 147Sm + beta",
        "t": "Decay",
        "d": "Pure soft beta emitter."
      }
    ],
    "safety": "Radioactive beta emitter; handles with radiation protocols."
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "atomicMass": 150.36,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁶ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "electronegativity": 1.17,
    "meltingPoint": 1345,
    "boilingPoint": 2067,
    "density": 7.52,
    "atomicRadius": 185,
    "ionizationEnergy": 544.5,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "yearDiscovered": 1879,
    "summary": "Lanthanide forming high-temperature permanent magnets (SmCo) resistant to demagnetization.",
    "occurrence": "Monazite sands.",
    "extraction": "Distillation reduction with lanthanum.",
    "applications": [
      "Samarium-Cobalt (SmCo) high-temperature aircraft magnets",
      "Samarium-153 Quadramet targeted cancer bone pain relief",
      "Neutron absorber in nuclear reactor control rods"
    ],
    "importantCompounds": [
      {
        "f": "SmCo5",
        "n": "Samarium-Cobalt",
        "u": "Heat-resistant permanent magnet"
      }
    ],
    "reactions": [
      {
        "eq": "4Sm + 3O2 -> 2Sm2O3",
        "t": "Oxidation",
        "d": "Forms yellow oxide."
      }
    ],
    "safety": "Low to moderate toxicity."
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "atomicMass": 151.96,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁷ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "electronegativity": 1.2,
    "meltingPoint": 1099,
    "boilingPoint": 1802,
    "density": 5.244,
    "atomicRadius": 185,
    "ionizationEnergy": 547.1,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Eugène-Anatole Demarçay",
    "yearDiscovered": 1901,
    "summary": "Most chemically reactive lanthanide, provides the red phosphor in TV displays and anti-counterfeiting ink.",
    "occurrence": "Bastnäsite and monazite.",
    "extraction": "Reduction of Eu2O3 with lanthanum in high vacuum.",
    "applications": [
      "Anti-counterfeiting phosphorescent ink in Euro banknotes",
      "Red and blue phosphors in OLED displays and fluorescent lamps",
      "Control rods in nuclear reactors"
    ],
    "importantCompounds": [
      {
        "f": "Eu2O3",
        "n": "Europium(III) Oxide",
        "u": "Brilliant red phosphor activator"
      }
    ],
    "reactions": [
      {
        "eq": "2Eu + 2H2O -> 2Eu(OH)2 + H2",
        "t": "Displacement",
        "d": "Reacts vigorously with water."
      }
    ],
    "safety": "Water-reactive; oxidizes rapidly in humid air."
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "atomicMass": 157.25,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁷ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "electronegativity": 1.2,
    "meltingPoint": 1585,
    "boilingPoint": 3546,
    "density": 7.9,
    "atomicRadius": 180,
    "ionizationEnergy": 593.4,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "yearDiscovered": 1880,
    "summary": "Possesses the highest thermal neutron capture cross-section and 7 unpaired electrons.",
    "occurrence": "Monazite sands.",
    "extraction": "Calcium reduction of anhydrous GdF3.",
    "applications": [
      "Gadolinium MRI contrast agents for vascular medical imaging",
      "Neutron shielding shut-down systems in nuclear reactors",
      "Magnetic refrigeration via giant magnetocaloric effect"
    ],
    "importantCompounds": [
      {
        "f": "Gd-DTPA",
        "n": "Gadopentetate Dimeglumine",
        "u": "Standard clinical MRI contrast agent"
      }
    ],
    "reactions": [
      {
        "eq": "4Gd + 3O2 -> 2Gd2O3",
        "t": "Oxidation",
        "d": "Forms white oxide."
      }
    ],
    "safety": "Free Gd3+ is toxic; clinical MRI agents use tight chelation complexes."
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "atomicMass": 158.93,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f⁹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "electronegativity": 1.2,
    "meltingPoint": 1629,
    "boilingPoint": 3503,
    "density": 8.23,
    "atomicRadius": 175,
    "ionizationEnergy": 565.8,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "yearDiscovered": 1843,
    "summary": "Emits a sharp, vivid lemon-green luminescence and forms giant magnetostrictive alloys.",
    "occurrence": "Xenotime and ion-adsorption clays.",
    "extraction": "Reduction of TbF3 with calcium.",
    "applications": [
      "Terfenol-D giant magnetostrictive sonar transducers and acoustic actuators",
      "Green phosphors in high-definition displays and fluorescent lighting",
      "Solid-state naval defense lasers"
    ],
    "importantCompounds": [
      {
        "f": "Tb4O7",
        "n": "Terbium(III,IV) Oxide",
        "u": "Green phosphor precursor"
      }
    ],
    "reactions": [
      {
        "eq": "Tb4O7 + reducing -> Tb2O3",
        "t": "Reduction",
        "d": "Color change from brown to white."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "atomicMass": 162.5,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁰ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "electronegativity": 1.22,
    "meltingPoint": 1680,
    "boilingPoint": 2840,
    "density": 8.54,
    "atomicRadius": 175,
    "ionizationEnergy": 573,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "yearDiscovered": 1886,
    "summary": "Has the highest magnetic susceptibility among elements; prevents EV magnets from failing at high heat.",
    "occurrence": "Monazite and ion-adsorption clays.",
    "extraction": "Calcium reduction of DyF3.",
    "applications": [
      "High-temperature thermal stabilizer for NdFeB EV motor magnets",
      "Nuclear reactor control rods (dysprosium titanate)",
      "Terfenol-D magnetostrictive smart materials"
    ],
    "importantCompounds": [
      {
        "f": "Dy2O3",
        "n": "Dysprosium Oxide",
        "u": "Thermal magnet additive and optical glaze"
      }
    ],
    "reactions": [
      {
        "eq": "4Dy + 3O2 -> 2Dy2O3",
        "t": "Oxidation",
        "d": "Slow oxidation."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "atomicMass": 164.93,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "electronegativity": 1.23,
    "meltingPoint": 1734,
    "boilingPoint": 2993,
    "density": 8.79,
    "atomicRadius": 175,
    "ionizationEnergy": 581,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Per Teodor Cleve",
    "yearDiscovered": 1879,
    "summary": "Possesses the highest magnetic moment of any element; acts as a magnetic flux concentrator.",
    "occurrence": "Monazite and xenotime.",
    "extraction": "Reduction of HoF3 with calcium metal.",
    "applications": [
      "Magnetic pole pieces concentrating high-field MRI magnets",
      "Holmium:YAG lasers for endoscopic kidney stone lithotripsy",
      "Spectrophotometer wavelength calibration filters"
    ],
    "importantCompounds": [
      {
        "f": "Ho2O3",
        "n": "Holmia",
        "u": "Wavelength calibration standard and laser dopant"
      }
    ],
    "reactions": [
      {
        "eq": "4Ho + 3O2 -> 2Ho2O3",
        "t": "Oxidation",
        "d": "Yellow oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "atomicMass": 167.26,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹² 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "electronegativity": 1.24,
    "meltingPoint": 1802,
    "boilingPoint": 3141,
    "density": 9.066,
    "atomicRadius": 175,
    "ionizationEnergy": 589.3,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Carl Gustaf Mosander",
    "yearDiscovered": 1843,
    "summary": "Crucial for global internet telecommunications via Erbium-Doped Fiber Amplifiers (EDFA).",
    "occurrence": "Xenotime and clay deposits.",
    "extraction": "Reduction of ErF3 with calcium.",
    "applications": [
      "Erbium-Doped Fiber Amplifiers (EDFA) powering trans-oceanic internet cables",
      "Er:YAG dental and cosmetic laser skin resurfacing",
      "Pink decorative coloring in cubic zirconia and glassware"
    ],
    "importantCompounds": [
      {
        "f": "Er2O3",
        "n": "Erbium Oxide",
        "u": "Telecommunications fiber optical amplifier dopant"
      }
    ],
    "reactions": [
      {
        "eq": "4Er + 3O2 -> 2Er2O3",
        "t": "Oxidation",
        "d": "Forms pink oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "atomicMass": 168.93,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "electronegativity": 1.25,
    "meltingPoint": 1818,
    "boilingPoint": 2223,
    "density": 9.32,
    "atomicRadius": 175,
    "ionizationEnergy": 596.7,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Per Teodor Cleve",
    "yearDiscovered": 1879,
    "summary": "Second least abundant lanthanide, yields portable X-ray sources when irradiated.",
    "occurrence": "Monazite ores.",
    "extraction": "Lanthanum reduction of Tm2O3 in vacuum.",
    "applications": [
      "Portable medical X-ray sources (Thulium-170)",
      "Thulium fiber lasers for high-precision surgical resection",
      "Euro banknote anti-counterfeiting blue fluorescence"
    ],
    "importantCompounds": [
      {
        "f": "Tm2O3",
        "n": "Thulium Oxide",
        "u": "Laser crystal host"
      }
    ],
    "reactions": [
      {
        "eq": "4Tm + 3O2 -> 2Tm2O3",
        "t": "Oxidation",
        "d": "Forms pale green oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "atomicMass": 173.05,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "electronegativity": 1.1,
    "meltingPoint": 1097,
    "boilingPoint": 1469,
    "density": 6.9,
    "atomicRadius": 175,
    "ionizationEnergy": 603.4,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "yearDiscovered": 1878,
    "summary": "Soft malleable metal with high precision optical atomic clocks and fiber lasers.",
    "occurrence": "Monazite and xenotime.",
    "extraction": "Distillation from Yb2O3 and lanthanum.",
    "applications": [
      "High-power industrial cutting ytterbium fiber lasers",
      "Next-generation optical atomic clocks",
      "Stainless steel grain refinement"
    ],
    "importantCompounds": [
      {
        "f": "Yb2O3",
        "n": "Ytterbium Oxide",
        "u": "Industrial cutting fiber laser amplifier"
      }
    ],
    "reactions": [
      {
        "eq": "4Yb + 3O2 -> 2Yb2O3",
        "t": "Oxidation",
        "d": "Forms white oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "atomicMass": 174.97,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "electronegativity": 1.27,
    "meltingPoint": 1925,
    "boilingPoint": 3675,
    "density": 9.841,
    "atomicRadius": 160,
    "ionizationEnergy": 523.5,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Georges Urbain & Carl Auer von Welsbach",
    "yearDiscovered": 1907,
    "summary": "Heaviest, hardest, and densest lanthanide, used in targeted cancer radiopharmaceuticals.",
    "occurrence": "Trace byproduct in xenotime.",
    "extraction": "Reduction of LuF3 with calcium metal.",
    "applications": [
      "Lutetium-177 targeted neuroendocrine and prostate cancer radioligand therapy",
      "PET medical scanner LSO scintillation crystals",
      "Petroleum hydrocarbon cracking catalysts"
    ],
    "importantCompounds": [
      {
        "f": "177Lu-PSMA",
        "n": "Lutetium-177 PSMA",
        "u": "Breakthrough targeted prostate cancer drug"
      }
    ],
    "reactions": [
      {
        "eq": "4Lu + 3O2 -> 2Lu2O3",
        "t": "Oxidation",
        "d": "White refractory oxide."
      }
    ],
    "safety": "Low toxicity metal; Lu-177 handled as therapeutic radioisotope."
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "atomicMass": 178.49,
    "category": "transition-metal",
    "group": 4,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d² 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 2506,
    "boilingPoint": 4876,
    "density": 13.31,
    "atomicRadius": 159,
    "ionizationEnergy": 658.5,
    "electronAffinity": 0,
    "oxidationStates": [
      4
    ],
    "discoveredBy": "Dirk Coster & George de Hevesy",
    "yearDiscovered": 1923,
    "summary": "Extraordinary neutron absorber and high-k gate dielectric in Intel computer processors.",
    "occurrence": "Zircon mineral ores (1-4% Hf).",
    "extraction": "Separation from zirconium via solvent extraction.",
    "applications": [
      "Intel microchip high-k metal gate dielectric (HfO2)",
      "Nuclear submarine reactor control rods",
      "Plasma cutting torch electrode tips"
    ],
    "importantCompounds": [
      {
        "f": "HfO2",
        "n": "Hafnium Dioxide",
        "u": "Nanoscale transistor gate insulator"
      }
    ],
    "reactions": [
      {
        "eq": "Hf + O2 -> HfO2",
        "t": "Oxidation",
        "d": "Passivating dielectric film."
      }
    ],
    "safety": "Fine hafnium powder is pyrophoric."
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "atomicMass": 180.95,
    "category": "transition-metal",
    "group": 5,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d³ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "electronegativity": 1.5,
    "meltingPoint": 3290,
    "boilingPoint": 5731,
    "density": 16.69,
    "atomicRadius": 146,
    "ionizationEnergy": 761,
    "electronAffinity": 31,
    "oxidationStates": [
      5
    ],
    "discoveredBy": "Anders Gustaf Ekeberg",
    "yearDiscovered": 1802,
    "summary": "Immune to all chemical attack below 150°C, essential for smartphone capacitors.",
    "occurrence": "Coltan mineral ores (columbite-tantalite).",
    "extraction": "Sodium reduction of potassium fluorotantalate.",
    "applications": [
      "Miniature tantalum electrolytic capacitors in smartphones and laptops",
      "Surgical biocompatible bone pins, skull plates, and cranial mesh",
      "Corrosive chemical heat exchangers and acid reactors"
    ],
    "importantCompounds": [
      {
        "f": "Ta2O5",
        "n": "Tantalum Pentoxide",
        "u": "High dielectric constant capacitor film"
      }
    ],
    "reactions": [
      {
        "eq": "4Ta + 5O2 -> 2Ta2O5",
        "t": "Synthesis",
        "d": "High-temperature oxidation."
      }
    ],
    "safety": "Completely inert, biocompatible, non-toxic metal."
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "atomicMass": 183.84,
    "category": "transition-metal",
    "group": 6,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d⁴ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "electronegativity": 2.36,
    "meltingPoint": 3695,
    "boilingPoint": 5828,
    "density": 19.25,
    "atomicRadius": 139,
    "ionizationEnergy": 770,
    "electronAffinity": 78.6,
    "oxidationStates": [
      2,
      4,
      6
    ],
    "discoveredBy": "Carl Wilhelm Scheele",
    "yearDiscovered": 1781,
    "summary": "Highest melting point of all metallic elements (3422°C / 3695 K) and ultra-high tensile strength.",
    "occurrence": "Wolframite and scheelite ores.",
    "extraction": "Hydrogen reduction of purified WO3 powder.",
    "applications": [
      "Tungsten carbide (WC) ultra-hard industrial machining tools and drill bits",
      "Filaments in traditional incandescent bulbs and electron guns",
      "Kinetic energy armor-piercing anti-tank penetrators",
      "Fusion reactor divertor plasma-facing tiles (ITER)"
    ],
    "importantCompounds": [
      {
        "f": "WC",
        "n": "Tungsten Carbide",
        "u": "Industrial drilling and metal machining tools"
      }
    ],
    "reactions": [
      {
        "eq": "WO3 + 3H2 -> W + 3H2O",
        "t": "Hydrogen Reduction",
        "d": "Metallurgical extraction of pure tungsten powder."
      }
    ],
    "safety": "Non-toxic elemental metal; tungsten carbide dust causes hard metal lung disease."
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "atomicMass": 186.21,
    "category": "transition-metal",
    "group": 7,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d⁵ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "electronegativity": 1.9,
    "meltingPoint": 3459,
    "boilingPoint": 5869,
    "density": 21.02,
    "atomicRadius": 137,
    "ionizationEnergy": 760,
    "electronAffinity": 14,
    "oxidationStates": [
      4,
      6,
      7
    ],
    "discoveredBy": "Walter Noddack, Ida Tacke & Otto Berg",
    "yearDiscovered": 1925,
    "summary": "One of the rarest elements in Earth crust, third highest melting point of all metals.",
    "occurrence": "Porphyry copper-molybdenum roaster flue gases.",
    "extraction": "Hydrogen reduction of ammonium perrhenate.",
    "applications": [
      "Jet turbine single-crystal nickel superalloy blades (up to 6% Re)",
      "Platinum-rhenium reformate catalysts for lead-free high-octane gasoline",
      "Mass spectrometer filament wires"
    ],
    "importantCompounds": [
      {
        "f": "Re2O7",
        "n": "Rhenium Heptoxide",
        "u": "Precursor for organometallic catalysts"
      }
    ],
    "reactions": [
      {
        "eq": "4Re + 7O2 -> 2Re2O7",
        "t": "Synthesis",
        "d": "Forms volatile yellow oxide."
      }
    ],
    "safety": "Low toxicity metal."
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "atomicMass": 190.23,
    "category": "transition-metal",
    "group": 8,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d⁶ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "electronegativity": 2.2,
    "meltingPoint": 3306,
    "boilingPoint": 5285,
    "density": 22.59,
    "atomicRadius": 135,
    "ionizationEnergy": 840,
    "electronAffinity": 106.1,
    "oxidationStates": [
      2,
      3,
      4,
      8
    ],
    "discoveredBy": "Smithson Tennant",
    "yearDiscovered": 1803,
    "summary": "Densest naturally occurring element (22.59 g/cm³, twice as dense as lead).",
    "occurrence": "Platinum group refining residue.",
    "extraction": "Hydrogen reduction of osmium tetroxide.",
    "applications": [
      "Wear-resistant fountain pen tipping alloys and phonograph needles",
      "Osmium tetroxide lipid histological staining for electron microscopy",
      "High-wear electrical contacts"
    ],
    "importantCompounds": [
      {
        "f": "OsO4",
        "n": "Osmium Tetroxide",
        "u": "Biological electron microscopy lipid fixative"
      }
    ],
    "reactions": [
      {
        "eq": "Os + 2O2 -> OsO4",
        "t": "Oxidation",
        "d": "Sublimates into pungent toxic tetroxide gas."
      }
    ],
    "safety": "OsO4 vapor is extremely dangerous, attacking cornea to cause blindness."
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "atomicMass": 192.22,
    "category": "transition-metal",
    "group": 9,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d⁷ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "electronegativity": 2.2,
    "meltingPoint": 2719,
    "boilingPoint": 4701,
    "density": 22.56,
    "atomicRadius": 136,
    "ionizationEnergy": 880,
    "electronAffinity": 151,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Smithson Tennant",
    "yearDiscovered": 1803,
    "summary": "Most corrosion-resistant metal known; famous Cretaceous asteroid impact layer biomarker.",
    "occurrence": "Nickel-copper matte refining.",
    "extraction": "Refining from insoluble platinum residues.",
    "applications": [
      "Proton Exchange Membrane (PEM) green hydrogen electrolyzers",
      "Crucibles for growing high-purity laser and telecom single crystals",
      "High-performance spark plug electrode tips",
      "Iridium-192 industrial radiography weld testing"
    ],
    "importantCompounds": [
      {
        "f": "IrO2",
        "n": "Iridium Dioxide",
        "u": "Premier PEM water electrolysis anode catalyst"
      }
    ],
    "reactions": [
      {
        "eq": "2H2O --(IrO2 catalyst)--> O2 + 4H+ + 4e-",
        "t": "Oxygen Evolution",
        "d": "Green hydrogen generation."
      }
    ],
    "safety": "Non-toxic elemental noble metal."
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "atomicMass": 195.08,
    "category": "transition-metal",
    "group": 10,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "electronegativity": 2.28,
    "meltingPoint": 2041.4,
    "boilingPoint": 4098,
    "density": 21.45,
    "atomicRadius": 139,
    "ionizationEnergy": 870,
    "electronAffinity": 205.3,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Antonio de Ulloa",
    "yearDiscovered": 1735,
    "summary": "Precious noble metal, extraordinary catalyst for clean automotive and cancer chemotherapy.",
    "occurrence": "Bushveld complex and Sudbury ores.",
    "extraction": "Aqua regia dissolution and thermal refining.",
    "applications": [
      "Automotive catalytic converters for diesel vehicles",
      "Cisplatin anticancer chemotherapy drugs",
      "Hydrogen fuel cell PEM electrode electrocatalysts",
      "Luxury investment jewelry and laboratory crucibles"
    ],
    "importantCompounds": [
      {
        "f": "PtCl2(NH3)2",
        "n": "Cisplatin",
        "u": "Standard life-saving cancer chemotherapy drug"
      }
    ],
    "reactions": [
      {
        "eq": "2H2 + O2 --(Pt)--> 2H2O",
        "t": "Fuel Cell Catalysis",
        "d": "Clean electricity generation."
      }
    ],
    "safety": "Inert biocompatible metal; soluble platinum chloroplatinates can cause allergic asthma."
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "atomicMass": 196.97,
    "category": "transition-metal",
    "group": 11,
    "period": 6,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "electronegativity": 2.54,
    "meltingPoint": 1337.33,
    "boilingPoint": 3129,
    "density": 19.3,
    "atomicRadius": 144,
    "ionizationEnergy": 890.1,
    "electronAffinity": 222.8,
    "oxidationStates": [
      1,
      3
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Most malleable and ductile metal, treasured throughout history as monetary wealth.",
    "occurrence": "Native gold quartz veins and placer gravels.",
    "extraction": "Cyanide leaching followed by carbon adsorption and electrowinning.",
    "applications": [
      "Monetary reserve bullion, sovereign coins, and fine jewelry",
      "Corrosion-proof wire bonding and contacts in microchips and smartphones",
      "Reflective infrared gold heat shields on spacecraft and astronaut visors",
      "Colloidal gold rapid medical diagnostic test kits (e.g. COVID/pregnancy)"
    ],
    "importantCompounds": [
      {
        "f": "HAuCl4",
        "n": "Chloroauric Acid",
        "u": "Synthesis of gold nanoparticles"
      }
    ],
    "reactions": [
      {
        "eq": "Au + HNO3 + 4HCl -> HAuCl4 + NO + 2H2O",
        "t": "Aqua Regia Dissolution",
        "d": "Dissolves noble gold into chloroauric acid."
      }
    ],
    "safety": "Non-toxic, highly biocompatible, hypoallergenic."
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "atomicMass": 200.59,
    "category": "transition-metal",
    "group": 12,
    "period": 6,
    "block": "d",
    "state": "Liquid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "electronegativity": 2,
    "meltingPoint": 234.32,
    "boilingPoint": 629.88,
    "density": 13.534,
    "atomicRadius": 151,
    "ionizationEnergy": 1007.1,
    "electronAffinity": -48,
    "oxidationStates": [
      1,
      2
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Only metallic element liquid at standard temperature and pressure (historically quicksilver).",
    "occurrence": "Cinnabar mineral ore (HgS).",
    "extraction": "Roasting cinnabar in air and condensing mercury vapor.",
    "applications": [
      "Fluorescent lighting vapor tubes",
      "Artisanal gold amalgamation extraction",
      "Dental amalgam fillings historically",
      "Tilt switches and mercury barometers"
    ],
    "importantCompounds": [
      {
        "f": "HgS",
        "n": "Cinnabar / Vermilion",
        "u": "Ancient red mineral pigment"
      },
      {
        "f": "(CH3)2Hg",
        "n": "Dimethylmercury",
        "u": "Super-potent neurotoxin"
      }
    ],
    "reactions": [
      {
        "eq": "HgS + O2 -> Hg + SO2",
        "t": "Roasting",
        "d": "Smelting cinnabar ore."
      }
    ],
    "safety": "Extremely toxic volatile neurotoxin; bioaccumulates up the aquatic food chain (Minamata disease)."
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "atomicMass": 204.38,
    "category": "post-transition-metal",
    "group": 13,
    "period": 6,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "electronegativity": 1.62,
    "meltingPoint": 577,
    "boilingPoint": 1746,
    "density": 11.85,
    "atomicRadius": 170,
    "ionizationEnergy": 589.4,
    "electronAffinity": 19.2,
    "oxidationStates": [
      1,
      3
    ],
    "discoveredBy": "William Crookes",
    "yearDiscovered": 1861,
    "summary": "Soft malleable heavy metal whose salts are tasteless, odorless, and notoriously deadly.",
    "occurrence": "Byproduct of zinc and lead smelting.",
    "extraction": "Precipitation from lead smelter flue dust.",
    "applications": [
      "Cardiac stress test medical scans (Thallium-201)",
      "Infrared optical lenses (KRS-5)",
      "High-temperature cuprate superconductors"
    ],
    "importantCompounds": [
      {
        "f": "Tl2SO4",
        "n": "Thallium Sulfate",
        "u": "Historical rodenticide; now banned globally"
      }
    ],
    "reactions": [
      {
        "eq": "4Tl + O2 -> 2Tl2O",
        "t": "Oxidation",
        "d": "Tarnishes rapidly in air."
      }
    ],
    "safety": "Extremely toxic; mimics potassium in cells, causing alopecia (hair loss) and nervous collapse."
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "atomicMass": 207.2,
    "category": "post-transition-metal",
    "group": 14,
    "period": 6,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "electronegativity": 2.33,
    "meltingPoint": 600.61,
    "boilingPoint": 2022,
    "density": 11.34,
    "atomicRadius": 175,
    "ionizationEnergy": 715.6,
    "electronAffinity": 35.1,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Dense malleable soft metal used for millennia, final stable decay product of uranium.",
    "occurrence": "Galena lead sulfide ore (PbS).",
    "extraction": "Smelting galena in blast furnaces.",
    "applications": [
      "12-volt lead-acid vehicle SLI starting batteries (85% of all lead use)",
      "Radiation shielding aprons and walls for medical X-ray/CT scanners",
      "Acoustic soundproofing dampers",
      "Lead crystal glass historically"
    ],
    "importantCompounds": [
      {
        "f": "PbO2",
        "n": "Lead Dioxide",
        "u": "Positive plate in car lead-acid batteries"
      },
      {
        "f": "PbS",
        "n": "Galena",
        "u": "Lead ore and ancient kohl eyeliner"
      }
    ],
    "reactions": [
      {
        "eq": "Pb + PbO2 + 2H2SO4 <-> 2PbSO4 + 2H2O",
        "t": "Lead-Acid Battery Cycle",
        "d": "Electrochemical discharge/charge cycle in cars."
      }
    ],
    "safety": "Cumulative neurotoxin causing cognitive impairment and anemia, especially dangerous to developing children."
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "atomicMass": 208.98,
    "category": "post-transition-metal",
    "group": 15,
    "period": 6,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "electronegativity": 2.02,
    "meltingPoint": 544.7,
    "boilingPoint": 1837,
    "density": 9.78,
    "atomicRadius": 155,
    "ionizationEnergy": 703,
    "electronAffinity": 91.2,
    "oxidationStates": [
      3,
      5
    ],
    "discoveredBy": "Known since antiquity",
    "yearDiscovered": "Ancient",
    "summary": "Forms mesmerizing rainbow stair-step hopper crystals, least toxic heavy metal.",
    "occurrence": "Bismuthinite (Bi2S3) and copper/lead byproduct.",
    "extraction": "Reduction of Bi2O3 with carbon.",
    "applications": [
      "Pepto-Bismol stomach soothing medicine (bismuth subsalicylate)",
      "Non-toxic replacement for lead in hunting shot and plumbing fixtures",
      "Low-melting fusible safety alloys (Wood metal) for fire sprinklers",
      "Bismuth telluride thermoelectric coolers"
    ],
    "importantCompounds": [
      {
        "f": "C7H5BiO4",
        "n": "Bismuth Subsalicylate",
        "u": "Active ingredient in antidiarrheal medicines"
      }
    ],
    "reactions": [
      {
        "eq": "4Bi + 3O2 -> 2Bi2O3",
        "t": "Oxidation",
        "d": "Yellow oxide."
      }
    ],
    "safety": "Virtually non-toxic heavy metal, unique among neighboring elements."
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "atomicMass": 209,
    "category": "post-transition-metal",
    "group": 16,
    "period": 6,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "electronegativity": 2,
    "meltingPoint": 527,
    "boilingPoint": 1235,
    "density": 9.196,
    "atomicRadius": 168,
    "ionizationEnergy": 812.1,
    "electronAffinity": 183.3,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Marie & Pierre Curie",
    "yearDiscovered": 1898,
    "summary": "Intensely radioactive alpha emitter named by Marie Curie after her homeland Poland.",
    "occurrence": "Uranium decay chain and neutron irradiation of bismuth-209 in reactors.",
    "extraction": "Reactor synthesis from bismuth.",
    "applications": [
      "Antistatic brushes for photographic film and cleanrooms",
      "Radioisotope thermoelectric heat sources for space probes"
    ],
    "importantCompounds": [
      {
        "f": "210Po",
        "n": "Polonium-210",
        "u": "High specific alpha activity emitter"
      }
    ],
    "reactions": [
      {
        "eq": "210Po -> 206Pb + alpha",
        "t": "Alpha Decay",
        "d": "Releases 140 W/g of thermal energy."
      }
    ],
    "safety": "Extremely radiotoxic; ingestion of microgram quantities is fatal via radiation sickness."
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "atomicMass": 210,
    "category": "reactive-nonmetal",
    "group": 17,
    "period": 6,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "electronegativity": 2.2,
    "meltingPoint": 575,
    "boilingPoint": 610,
    "density": 6.35,
    "atomicRadius": 140,
    "ionizationEnergy": 899,
    "electronAffinity": 270.1,
    "oxidationStates": [
      -1,
      1,
      3,
      5
    ],
    "discoveredBy": "Dale Corson, Kenneth MacKenzie & Emilio Segrè",
    "yearDiscovered": 1940,
    "summary": "Rarest naturally occurring element in Earth crust (less than 30 grams in entire planet).",
    "occurrence": "Natural decay of uranium/thorium; synthesized by alpha bombardment of bismuth-209.",
    "extraction": "Cyclotron synthesis: 209Bi(alpha,2n)211At.",
    "applications": [
      "Targeted Alpha Therapy (TAT) for metastatic cancer cells using Astatine-211"
    ],
    "importantCompounds": [
      {
        "f": "211At-MABG",
        "n": "Astatine-211 MABG",
        "u": "Targeted radiopharmaceutical for neuroblastoma"
      }
    ],
    "reactions": [
      {
        "eq": "211At -> 207Bi + alpha",
        "t": "Alpha Decay",
        "d": "Short-range cancer cell destruction."
      }
    ],
    "safety": "Intensely radioactive; handles only in specialized hot cells."
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "atomicMass": 222,
    "category": "noble-gas",
    "group": 18,
    "period": 6,
    "block": "p",
    "state": "Gas",
    "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "electronegativity": 2.2,
    "meltingPoint": 202,
    "boilingPoint": 211.3,
    "density": 9.73,
    "atomicRadius": 150,
    "ionizationEnergy": 1037,
    "electronAffinity": -68,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Friedrich Ernst Dorn",
    "yearDiscovered": 1900,
    "summary": "Colorless, odorless, radioactive noble gas accumulating in basements from rock uranium decay.",
    "occurrence": "Continuous decay of radium-226 in granite rock and soil.",
    "extraction": "Collected from radium salt decay.",
    "applications": [
      "Historical radiation seeds for cancer brachytherapy",
      "Hydrological tracer for groundwater monitoring"
    ],
    "importantCompounds": [
      {
        "f": "RnF2",
        "n": "Radon Difluoride",
        "u": "Radioactive fluoride"
      }
    ],
    "reactions": [
      {
        "eq": "222Rn -> 218Po + alpha",
        "t": "Alpha Decay",
        "d": "Inhaled decay daughters damage lung tissue."
      }
    ],
    "safety": "Major public health hazard; leading cause of lung cancer in non-smokers."
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "atomicMass": 223,
    "category": "alkali-metal",
    "group": 1,
    "period": 7,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Rn] 7s¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "electronegativity": 0.7,
    "meltingPoint": 300,
    "boilingPoint": 950,
    "density": 1.87,
    "atomicRadius": 260,
    "ionizationEnergy": 380,
    "electronAffinity": 47,
    "oxidationStates": [
      1
    ],
    "discoveredBy": "Marguerite Perey",
    "yearDiscovered": 1939,
    "summary": "Second rarest natural element, intensely radioactive with a half-life of just 22 minutes.",
    "occurrence": "Uranium actinium decay series; synthesized by gold heavy-ion bombardment.",
    "extraction": "Linear accelerator synthesis.",
    "applications": [
      "Atomic physics precision tests of the Standard Model and parity violation in magneto-optical traps"
    ],
    "importantCompounds": [
      {
        "f": "FrCl",
        "n": "Francium Chloride",
        "u": "Theoretical radiochemical solution"
      }
    ],
    "reactions": [
      {
        "eq": "223Fr -> 223Ra + beta",
        "t": "Beta Decay",
        "d": "Half-life of 22 minutes."
      }
    ],
    "safety": "Extremely radioactive and thermally self-vaporizing in weighable amounts."
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "atomicMass": 226,
    "category": "alkaline-earth",
    "group": 2,
    "period": 7,
    "block": "s",
    "state": "Solid",
    "electronConfiguration": "[Rn] 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "electronegativity": 0.9,
    "meltingPoint": 973,
    "boilingPoint": 2010,
    "density": 5.5,
    "atomicRadius": 221,
    "ionizationEnergy": 509.3,
    "electronAffinity": 9.65,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Marie & Pierre Curie",
    "yearDiscovered": 1898,
    "summary": "Luminescent radioactive metal isolated from pitchblende by Marie Curie.",
    "occurrence": "Uranium ores (pitchblende).",
    "extraction": "Fractional crystallization of barium-radium chloride.",
    "applications": [
      "Radium-223 dichloride (Xofigo) targeted prostate cancer bone metastasis cure",
      "Luminous watch dials historically (Radium Girls era)"
    ],
    "importantCompounds": [
      {
        "f": "223RaCl2",
        "n": "Radium-223 Dichloride",
        "u": "First approved alpha emitter cancer therapeutic"
      }
    ],
    "reactions": [
      {
        "eq": "226Ra -> 222Rn + alpha",
        "t": "Alpha Decay",
        "d": "Forms radon gas with half-life of 1600 years."
      }
    ],
    "safety": "Intensely radiotoxic; bone-seeking alpha emitter causing osteosarcoma."
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "atomicMass": 227,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "electronegativity": 1.1,
    "meltingPoint": 1323,
    "boilingPoint": 3471,
    "density": 10.07,
    "atomicRadius": 195,
    "ionizationEnergy": 499,
    "electronAffinity": 35,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "André-Louis Debierne",
    "yearDiscovered": 1899,
    "summary": "First actinide, glows with an eerie pale blue light in the dark due to intense radioactivity.",
    "occurrence": "Uranium ores and neutron bombardment of radium-226.",
    "extraction": "Extraction from irradiated radium targets.",
    "applications": [
      "Actinium-225 Targeted Alpha Therapy (TAT) cancer eradication clinical trials",
      "Neutron sources when combined with beryllium"
    ],
    "importantCompounds": [
      {
        "f": "225Ac-PSMA",
        "n": "Actinium-225 PSMA",
        "u": "Groundbreaking alpha cancer therapy"
      }
    ],
    "reactions": [
      {
        "eq": "227Ac -> 227Th + beta",
        "t": "Beta Decay",
        "d": "Emits blue radioluminescence."
      }
    ],
    "safety": "Extremely radiotoxic."
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "atomicMass": 232.04,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 6d² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 2115,
    "boilingPoint": 5061,
    "density": 11.72,
    "atomicRadius": 180,
    "ionizationEnergy": 587,
    "electronAffinity": 112,
    "oxidationStates": [
      4
    ],
    "discoveredBy": "Jöns Jacob Berzelius",
    "yearDiscovered": 1828,
    "summary": "Naturally abundant weakly radioactive metal, key fuel for proliferation-resistant nuclear power.",
    "occurrence": "Monazite phosphate beach sands.",
    "extraction": "Sulfuric acid digestion of monazite followed by solvent extraction.",
    "applications": [
      "Thorium molten salt nuclear breeder reactors (converts to fissile U-233)",
      "High-temperature gas tungsten arc (TIG) welding electrodes",
      "Gas mantle lighting historically (ThO2)"
    ],
    "importantCompounds": [
      {
        "f": "ThO2",
        "n": "Thoria",
        "u": "High-melting ceramic (3390°C)"
      }
    ],
    "reactions": [
      {
        "eq": "232Th + n -> 233Th -> 233Pa -> 233U (fissile)",
        "t": "Nuclear Breeding",
        "d": "Fertile thorium fuel cycle."
      }
    ],
    "safety": "Mildly radioactive alpha emitter; radiotoxic if inhaled in dust."
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "atomicMass": 231.04,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f² 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "electronegativity": 1.5,
    "meltingPoint": 1841,
    "boilingPoint": 4300,
    "density": 15.37,
    "atomicRadius": 180,
    "ionizationEnergy": 568,
    "electronAffinity": 50,
    "oxidationStates": [
      4,
      5
    ],
    "discoveredBy": "Otto Hahn & Lise Meitner",
    "yearDiscovered": 1917,
    "summary": "Dense radioactive metal forming a crucial intermediate in the thorium nuclear fuel cycle.",
    "occurrence": "Uranium processing residues.",
    "extraction": "Extraction from spent fuel or irradiated thorium.",
    "applications": [
      "Dating marine sediments in oceanography (Pa-231/Th-230)",
      "Fundamental actinide chemical physics"
    ],
    "importantCompounds": [
      {
        "f": "Pa2O5",
        "n": "Protactinium Pentoxide",
        "u": "White oxide"
      }
    ],
    "reactions": [
      {
        "eq": "233Pa -> 233U + beta",
        "t": "Beta Decay",
        "d": "Thorium fuel cycle intermediate."
      }
    ],
    "safety": "Highly radiotoxic alpha emitter."
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "atomicMass": 238.03,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f³ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "electronegativity": 1.38,
    "meltingPoint": 1405.3,
    "boilingPoint": 4404,
    "density": 18.95,
    "atomicRadius": 175,
    "ionizationEnergy": 597.6,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4,
      5,
      6
    ],
    "discoveredBy": "Martin Heinrich Klaproth",
    "yearDiscovered": 1789,
    "summary": "Primary nuclear fuel powering commercial nuclear reactors and submarines via U-235 fission.",
    "occurrence": "Uraninite / pitchblende ores.",
    "extraction": "In-situ leach mining followed by solvent extraction to yellowcake (U3O8).",
    "applications": [
      "Fuel for commercial clean nuclear energy reactors (U-235)",
      "Depleted uranium armor plating and kinetic penetrators",
      "Radioisotope production (Mo-99)"
    ],
    "importantCompounds": [
      {
        "f": "UO2",
        "n": "Uranium Dioxide",
        "u": "Standard nuclear power fuel pellet"
      },
      {
        "f": "UF6",
        "n": "Uranium Hexafluoride",
        "u": "Gas centrifuge isotope enrichment"
      }
    ],
    "reactions": [
      {
        "eq": "235U + n -> 141Ba + 92Kr + 3n + 200 MeV",
        "t": "Nuclear Fission",
        "d": "Core energy release in nuclear reactors."
      }
    ],
    "safety": "Chemical heavy metal toxicity to kidneys combined with radioactivity risks."
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "atomicMass": 237,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f⁴ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "electronegativity": 1.36,
    "meltingPoint": 917,
    "boilingPoint": 4273,
    "density": 20.45,
    "atomicRadius": 175,
    "ionizationEnergy": 604.5,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4,
      5,
      6
    ],
    "discoveredBy": "Edwin McMillan & Philip Abelson",
    "yearDiscovered": 1940,
    "summary": "First transuranic synthetic element discovered, named after the planet Neptune.",
    "occurrence": "Byproduct in nuclear reactor spent fuel rods.",
    "extraction": "Chemical separation from irradiated reactor fuel.",
    "applications": [
      "Precursor target for producing Plutonium-238 space batteries (RTG)",
      "High-energy neutron detection devices"
    ],
    "importantCompounds": [
      {
        "f": "NpO2",
        "n": "Neptunium Dioxide",
        "u": "Nuclear target material"
      }
    ],
    "reactions": [
      {
        "eq": "237Np + n -> 238Np -> 238Pu + beta",
        "t": "Neutron Capture",
        "d": "Manufactures Pu-238 for NASA space probes."
      }
    ],
    "safety": "Dangerous radioactive actinide."
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "atomicMass": 244,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f⁶ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "electronegativity": 1.28,
    "meltingPoint": 912.5,
    "boilingPoint": 3501,
    "density": 19.84,
    "atomicRadius": 175,
    "ionizationEnergy": 584.7,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4,
      5,
      6
    ],
    "discoveredBy": "Glenn T. Seaborg",
    "yearDiscovered": 1940,
    "summary": "Fissile transuranic metal powering deep-space NASA missions (Voyager, Perseverance) and nuclear weapons.",
    "occurrence": "Produced in uranium reactors by neutron capture in U-238.",
    "extraction": "PUREX chemical reprocessing of irradiated reactor fuel.",
    "applications": [
      "Plutonium-238 Radioisotope Thermoelectric Generators (RTG) for NASA deep space probes",
      "Mixed oxide (MOX) fuel for nuclear power reactors",
      "Fissile material in nuclear defense arsenals"
    ],
    "importantCompounds": [
      {
        "f": "PuO2",
        "n": "Plutonium Dioxide",
        "u": "Heat source ceramic pellets in space probes"
      }
    ],
    "reactions": [
      {
        "eq": "238U + n -> 239U -> 239Np -> 239Pu",
        "t": "Breeding",
        "d": "Reactor generation of fissile plutonium."
      }
    ],
    "safety": "Extreme radiological toxin; alpha emitter that deposits in bone marrow and liver."
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "atomicMass": 243,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f⁷ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1449,
    "boilingPoint": 2880,
    "density": 12,
    "atomicRadius": 175,
    "ionizationEnergy": 578,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Glenn T. Seaborg",
    "yearDiscovered": 1944,
    "summary": "Radioactive element protecting millions of households worldwide in smoke detectors.",
    "occurrence": "Decay of plutonium-241 in spent nuclear reactor fuel.",
    "extraction": "Chemical extraction from aged reactor plutonium.",
    "applications": [
      "Household ionization smoke detectors (Americium-241)",
      "Industrial thickness measurement gauges",
      "Neutron moisture probes in agriculture and civil engineering"
    ],
    "importantCompounds": [
      {
        "f": "241AmO2",
        "n": "Americium-241 Oxide",
        "u": "Microcurie alpha source in home smoke alarms"
      }
    ],
    "reactions": [
      {
        "eq": "241Am -> 237Np + alpha (5.48 MeV)",
        "t": "Alpha Ionization",
        "d": "Ionizes air in smoke detector chamber."
      }
    ],
    "safety": "Radioactive material; completely sealed and safe in household smoke alarms."
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "atomicMass": 247,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f⁷ 6d¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1613,
    "boilingPoint": 3383,
    "density": 13.51,
    "atomicRadius": 175,
    "ionizationEnergy": 581,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Glenn T. Seaborg",
    "yearDiscovered": 1944,
    "summary": "Named after Marie and Pierre Curie, power source for Mars rover X-ray spectrometers.",
    "occurrence": "Intense neutron irradiation of plutonium and americium in high-flux reactors.",
    "extraction": "Multi-column ion exchange in hot cells.",
    "applications": [
      "Alpha Particle X-ray Spectrometer (APXS) on Mars exploration rovers",
      "Precursor for synthesizing heavier transuranic elements"
    ],
    "importantCompounds": [
      {
        "f": "Cm2O3",
        "n": "Curium Oxide",
        "u": "High-density alpha radiation source"
      }
    ],
    "reactions": [
      {
        "eq": "244Cm -> 240Pu + alpha",
        "t": "Alpha Decay",
        "d": "Produces 2.8 W/g thermal power."
      }
    ],
    "safety": "Intensely radioactive alpha emitter."
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "atomicMass": 247,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f⁹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1259,
    "boilingPoint": 2900,
    "density": 14.78,
    "atomicRadius": 170,
    "ionizationEnergy": 601,
    "electronAffinity": 50,
    "oxidationStates": [
      3,
      4
    ],
    "discoveredBy": "Glenn T. Seaborg, Albert Ghiorso & Stanley Thompson",
    "yearDiscovered": 1949,
    "summary": "Synthesized at UC Berkeley, essential target material for discovering Tennessine (117).",
    "occurrence": "High-flux isotope reactor synthesis at Oak Ridge National Lab.",
    "extraction": "High-pressure ion exchange separation.",
    "applications": [
      "Target material in particle accelerators for discovering element 117 (Tennessine)",
      "Fundamental actinide chemistry research"
    ],
    "importantCompounds": [
      {
        "f": "BkO2",
        "n": "Berkelium Dioxide",
        "u": "Actinide coordination compound"
      }
    ],
    "reactions": [
      {
        "eq": "249Bk + 48Ca -> 294Ts + 3n",
        "t": "Fusion Synthesis",
        "d": "Discovered element 117."
      }
    ],
    "safety": "Dangerous radioactive actinide."
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "atomicMass": 251,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁰ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1173,
    "boilingPoint": 1743,
    "density": 15.1,
    "atomicRadius": 170,
    "ionizationEnergy": 608,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3,
      4
    ],
    "discoveredBy": "Glenn T. Seaborg, Albert Ghiorso & Stanley Thompson",
    "yearDiscovered": 1950,
    "summary": "Tremendous spontaneous neutron emitter (1 microgram emits 2.3 million neutrons per second).",
    "occurrence": "Synthesized in the High Flux Isotope Reactor (HFIR) at Oak Ridge.",
    "extraction": "Multi-stage solvent extraction in shielded hot cells.",
    "applications": [
      "Neutron startup source for commercial nuclear reactors",
      "Neutron Activation Analysis (NAA) for airport luggage and oil wells",
      "Brachytherapy for cervical cancer"
    ],
    "importantCompounds": [
      {
        "f": "252Cf",
        "n": "Californium-252",
        "u": "Compact portable neutron emitter"
      }
    ],
    "reactions": [
      {
        "eq": "252Cf -> spontaneous fission + neutrons",
        "t": "Spontaneous Fission",
        "d": "Generates intense neutron flux."
      }
    ],
    "safety": "Extreme radiation hazard; requires thick paraffin/water neutron shielding."
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "atomicMass": 252,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹¹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1133,
    "boilingPoint": 1269,
    "density": 8.84,
    "atomicRadius": 170,
    "ionizationEnergy": 619,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Albert Ghiorso and team",
    "yearDiscovered": 1952,
    "summary": "Discovered in the radioactive debris of the first thermonuclear hydrogen bomb test (Ivy Mike).",
    "occurrence": "Debris of thermonuclear explosion Ivy Mike; now produced in High Flux Isotope Reactor.",
    "extraction": "Chromatographic separation.",
    "applications": [
      "Fundamental research on heavy actinide bonding and 5f electron behavior",
      "Synthesizing mendelevium in cyclotrons"
    ],
    "importantCompounds": [
      {
        "f": "EsCl3",
        "n": "Einsteinium Trichloride",
        "u": "Sub-microgram structural study compound"
      }
    ],
    "reactions": [
      {
        "eq": "253Es + alpha -> 256Md + n",
        "t": "First Synthesis of Md",
        "d": "Discovered element 101."
      }
    ],
    "safety": "Intensely radioactive with high self-damage rate."
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "atomicMass": 257,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1800,
    "boilingPoint": null,
    "density": null,
    "atomicRadius": 170,
    "ionizationEnergy": 627,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Albert Ghiorso and team",
    "yearDiscovered": 1952,
    "summary": "Heaviest element that can be synthesized by successive neutron capture in nuclear reactors.",
    "occurrence": "Ivy Mike thermonuclear debris and High Flux Isotope Reactor.",
    "extraction": "Ion exchange elution.",
    "applications": [
      "Scientific research on the limits of nuclear stability and spontaneous fission"
    ],
    "importantCompounds": [
      {
        "f": "FmCl2",
        "n": "Fermium(II) Chloride",
        "u": "Radiochemical tracer"
      }
    ],
    "reactions": [
      {
        "eq": "257Fm -> spontaneous fission",
        "t": "Nuclear Decay",
        "d": "Fermium barrier in neutron capture."
      }
    ],
    "safety": "Highly radioactive; available only in picogram quantities."
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "atomicMass": 258,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹³ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1100,
    "boilingPoint": null,
    "density": null,
    "atomicRadius": 170,
    "ionizationEnergy": 635,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Albert Ghiorso, Glenn T. Seaborg and team",
    "yearDiscovered": 1955,
    "summary": "First element synthesized atom-by-atom (17 atoms produced in original experiment), named after Dmitri Mendeleev.",
    "occurrence": "Cyclotron alpha bombardment of einsteinium-253.",
    "extraction": "Single-atom cation-exchange elution.",
    "applications": [
      "Scientific study of anomalous divalent actinide chemistry and nuclear fission dynamics"
    ],
    "importantCompounds": [
      {
        "f": "Md2+",
        "n": "Mendelevium(II) ion",
        "u": "Unusually stable divalent aqueous state"
      }
    ],
    "reactions": [
      {
        "eq": "253Es + 4He -> 256Md + n",
        "t": "Discovery Reaction",
        "d": "Atom-at-a-time discovery."
      }
    ],
    "safety": "High radioactivity; exists only in single-atom quantities."
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "atomicMass": 259,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "f",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1100,
    "boilingPoint": null,
    "density": null,
    "atomicRadius": 170,
    "ionizationEnergy": 642,
    "electronAffinity": 50,
    "oxidationStates": [
      2,
      3
    ],
    "discoveredBy": "Georgy Flerov, Albert Ghiorso and team",
    "yearDiscovered": 1966,
    "summary": "Penultimate actinide, surprisingly stable in the +2 oxidation state due to filled 5f14 shell.",
    "occurrence": "Heavy-ion cyclotron bombardment of curium with carbon or oxygen ions.",
    "extraction": "Gas-jet recoil collection.",
    "applications": [
      "Fundamental study of relativistic electron shell contractions"
    ],
    "importantCompounds": [
      {
        "f": "NoCl2",
        "n": "Nobelium Dichloride",
        "u": "Favors +2 state over +3"
      }
    ],
    "reactions": [
      {
        "eq": "246Cm + 12C -> 254No + 4n",
        "t": "Heavy-Ion Fusion",
        "d": "Cyclotron discovery."
      }
    ],
    "safety": "Highly radioactive; atomic-scale research only."
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "atomicMass": 266,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 7s² 7p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "electronegativity": 1.3,
    "meltingPoint": 1900,
    "boilingPoint": null,
    "density": null,
    "atomicRadius": 170,
    "ionizationEnergy": 470,
    "electronAffinity": 50,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "Albert Ghiorso and team",
    "yearDiscovered": 1961,
    "summary": "Final actinide, has an anomalous 7s2 7p1 valence configuration due to strong relativistic effects.",
    "occurrence": "Heavy-ion bombardment of californium with boron ions.",
    "extraction": "Online isotope separator.",
    "applications": [
      "Confirming relativistic stabilization of the 7p1/2 orbital"
    ],
    "importantCompounds": [
      {
        "f": "LrCl3",
        "n": "Lawrencium Trichloride",
        "u": "Aqueous +3 behavior"
      }
    ],
    "reactions": [
      {
        "eq": "252Cf + 11B -> 258Lr + 5n",
        "t": "Fusion",
        "d": "Discovered at Berkeley."
      }
    ],
    "safety": "Radioactive synthetic element."
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "atomicMass": 267,
    "category": "transition-metal",
    "group": 4,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d² 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "electronegativity": null,
    "meltingPoint": 2400,
    "boilingPoint": 5800,
    "density": 23.2,
    "atomicRadius": 160,
    "ionizationEnergy": 580,
    "electronAffinity": null,
    "oxidationStates": [
      4
    ],
    "discoveredBy": "Dubna & Berkeley laboratories",
    "yearDiscovered": 1969,
    "summary": "First transactinide superheavy element, named after Ernest Rutherford, forms volatile tetrachloride.",
    "occurrence": "Particle accelerator bombardment of plutonium with neon or californium with carbon.",
    "extraction": "Gas-phase chromatography.",
    "applications": [
      "Testing relativistic chemical bonding trends in group 4 superheavy elements"
    ],
    "importantCompounds": [
      {
        "f": "RfCl4",
        "n": "Rutherfordium Tetrachloride",
        "u": "Volatile gas-phase chloride"
      }
    ],
    "reactions": [
      {
        "eq": "249Cf + 12C -> 257Rf + 4n",
        "t": "Heavy Ion Fusion",
        "d": "Discovery reaction."
      }
    ],
    "safety": "Extreme radioactivity; atom-at-a-time quantities."
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "atomicMass": 268,
    "category": "transition-metal",
    "group": 5,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d³ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 29.3,
    "atomicRadius": 150,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      5
    ],
    "discoveredBy": "Dubna & Berkeley laboratories",
    "yearDiscovered": 1970,
    "summary": "Superheavy group 5 element named after Dubna, Russia, home of the Flerov Laboratory.",
    "occurrence": "Accelerator bombardment of americium-243 with neon-22.",
    "extraction": "Fast aqueous chromatography.",
    "applications": [
      "Comparing superheavy group 5 behavior against tantalum and niobium"
    ],
    "importantCompounds": [
      {
        "f": "DbBr5",
        "n": "Dubnium Pentabromide",
        "u": "Gas phase halide"
      }
    ],
    "reactions": [
      {
        "eq": "243Am + 22Ne -> 260Db + 5n",
        "t": "Cold Fusion",
        "d": "Discovery reaction."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "atomicMass": 269,
    "category": "transition-metal",
    "group": 6,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁴ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 35,
    "atomicRadius": 140,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      6
    ],
    "discoveredBy": "Lawrence Berkeley Laboratory",
    "yearDiscovered": 1974,
    "summary": "Named after Nobel laureate Glenn T. Seaborg while he was still living, behaves like tungsten.",
    "occurrence": "Bombardment of californium-249 with oxygen-18.",
    "extraction": "Automated gas chromatography.",
    "applications": [
      "Synthesizing hexacarbonyl complexes Sg(CO)6 confirming group 6 behavior"
    ],
    "importantCompounds": [
      {
        "f": "Sg(CO)6",
        "n": "Seaborgium Hexacarbonyl",
        "u": "Volatile organometallic complex"
      }
    ],
    "reactions": [
      {
        "eq": "249Cf + 18O -> 263Sg + 4n",
        "t": "Fusion",
        "d": "Heavy-ion fusion synthesis."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "atomicMass": 270,
    "category": "transition-metal",
    "group": 7,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁵ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 37.1,
    "atomicRadius": 140,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      7
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1981,
    "summary": "Named after quantum physicist Niels Bohr, forms volatile oxychloride BhO3Cl.",
    "occurrence": "Cold fusion of bismuth-209 target with chromium-54 projectile.",
    "extraction": "Fast gas-phase chemical chromatography.",
    "applications": [
      "Confirming volatility and formation of volatile oxychloride matching rhenium"
    ],
    "importantCompounds": [
      {
        "f": "BhO3Cl",
        "n": "Bohrium Oxychloride",
        "u": "Gas-phase chromatography marker"
      }
    ],
    "reactions": [
      {
        "eq": "209Bi + 54Cr -> 262Bh + n",
        "t": "Cold Fusion",
        "d": "Discovered at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "atomicMass": 269,
    "category": "transition-metal",
    "group": 8,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁶ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 41,
    "atomicRadius": 135,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      8
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1984,
    "summary": "Named after the German state of Hesse, forms volatile tetroxide HsO4 analogous to osmium.",
    "occurrence": "Cold fusion of lead-208 with iron-58.",
    "extraction": "Gas-phase thermochromatography.",
    "applications": [
      "Confirming HsO4 deposition on silicon nitride surfaces at -44°C"
    ],
    "importantCompounds": [
      {
        "f": "HsO4",
        "n": "Hassium Tetroxide",
        "u": "Volatile tetroxide matching OsO4"
      }
    ],
    "reactions": [
      {
        "eq": "208Pb + 58Fe -> 265Hs + n",
        "t": "Cold Fusion",
        "d": "Discovered at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "atomicMass": 278,
    "category": "unknown",
    "group": 9,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁷ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 37.4,
    "atomicRadius": 135,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      1,
      3
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1982,
    "summary": "Named in honor of Austrian-Swedish physicist Lise Meitner, discoverer of nuclear fission.",
    "occurrence": "Bombardment of bismuth-209 with iron-58.",
    "extraction": "Single-atom recoil separator.",
    "applications": [
      "Nuclear physics exploration of shell closures around N=162"
    ],
    "importantCompounds": [
      {
        "f": "Mt",
        "n": "Elemental Meitnerium",
        "u": "Synthetic transactinide"
      }
    ],
    "reactions": [
      {
        "eq": "209Bi + 58Fe -> 266Mt + n",
        "t": "Heavy-Ion Fusion",
        "d": "Single atom detected at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "atomicMass": 281,
    "category": "unknown",
    "group": 10,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁸ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      16,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 34.8,
    "atomicRadius": 130,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1994,
    "summary": "Named after the city of Darmstadt, where GSI Helmholtz Centre for Heavy Ion Research is located.",
    "occurrence": "Fusion of lead-208 target with nickel-62 beam.",
    "extraction": "SHIP recoil separator.",
    "applications": [
      "Nuclear structure studies of superheavy atomic nuclei"
    ],
    "importantCompounds": [
      {
        "f": "DsF6",
        "n": "Darmstadtium Hexafluoride",
        "u": "Predicted noble compound"
      }
    ],
    "reactions": [
      {
        "eq": "208Pb + 62Ni -> 269Ds + n",
        "t": "Fusion",
        "d": "Discovered at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "atomicMass": 282,
    "category": "unknown",
    "group": 11,
    "period": 7,
    "block": "d",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d⁹ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      17,
      2
    ],
    "electronegativity": null,
    "meltingPoint": null,
    "boilingPoint": null,
    "density": 28.7,
    "atomicRadius": 125,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      3
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1994,
    "summary": "Named after Wilhelm Conrad Röntgen, discoverer of X-rays; superheavy coinage metal.",
    "occurrence": "Fusion of bismuth-209 with nickel-64.",
    "extraction": "Velocity filter SHIP separator.",
    "applications": [
      "Studying relativistic expansion of the 6d shell and stabilization of 7s"
    ],
    "importantCompounds": [
      {
        "f": "Rg",
        "n": "Elemental Roentgenium",
        "u": "Superheavy group 11 metal"
      }
    ],
    "reactions": [
      {
        "eq": "209Bi + 64Ni -> 272Rg + n",
        "t": "Fusion",
        "d": "Discovered at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "atomicMass": 285,
    "category": "post-transition-metal",
    "group": 12,
    "period": 7,
    "block": "d",
    "state": "Liquid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "electronegativity": null,
    "meltingPoint": 283,
    "boilingPoint": 340,
    "density": 14,
    "atomicRadius": 122,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "GSI Darmstadt, Germany",
    "yearDiscovered": 1996,
    "summary": "Named after astronomer Nicolaus Copernicus; relativistic effects make it behave like a volatile noble-gas-like liquid metal.",
    "occurrence": "Fusion of lead-208 with zinc-70.",
    "extraction": "Gas-phase adsorption on gold surfaces.",
    "applications": [
      "Proving relativistic inertness of 7s2 valence electrons causing extreme volatility"
    ],
    "importantCompounds": [
      {
        "f": "Cn-Au bond",
        "n": "Copernicium-Gold Adsorption",
        "u": "Thermochromatographic surface interaction"
      }
    ],
    "reactions": [
      {
        "eq": "208Pb + 70Zn -> 277Cn + n",
        "t": "Cold Fusion",
        "d": "Discovered at GSI."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "atomicMass": 286,
    "category": "unknown",
    "group": 13,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "electronegativity": null,
    "meltingPoint": 700,
    "boilingPoint": 1400,
    "density": 16,
    "atomicRadius": 136,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      1,
      3
    ],
    "discoveredBy": "RIKEN, Japan (Kosuke Morita and team)",
    "yearDiscovered": 2004,
    "summary": "First chemical element discovered in Asia, named after Nihon (Japan) at RIKEN linear accelerator.",
    "occurrence": "Fusion of bismuth-209 with zinc-70 beam over 9 years of accelerator runtime.",
    "extraction": "GARIS gas-filled recoil separator.",
    "applications": [
      "Nuclear decay chain mapping connecting to known dubnium isotopes"
    ],
    "importantCompounds": [
      {
        "f": "NhOH",
        "n": "Nihonium Hydroxide",
        "u": "Predicted volatile hydroxide"
      }
    ],
    "reactions": [
      {
        "eq": "209Bi + 70Zn -> 278Nh + n",
        "t": "Heavy-Ion Cold Fusion",
        "d": "RIKEN milestone discovery."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "atomicMass": 289,
    "category": "post-transition-metal",
    "group": 14,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "electronegativity": null,
    "meltingPoint": 340,
    "boilingPoint": 420,
    "density": 9.928,
    "atomicRadius": 143,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      2
    ],
    "discoveredBy": "Joint Institute for Nuclear Research (Dubna) & LLNL",
    "yearDiscovered": 1998,
    "summary": "Named after Flerov Laboratory; exhibits pronounced noble-gas-like volatility due to spin-orbit splitting.",
    "occurrence": "Hot fusion of plutonium-244 with calcium-48.",
    "extraction": "Cryo-online detector arrays.",
    "applications": [
      "Investigating the predicted Island of Stability around N=184"
    ],
    "importantCompounds": [
      {
        "f": "Fl",
        "n": "Elemental Flerovium",
        "u": "Relativistically stabilized closed-subshell atom"
      }
    ],
    "reactions": [
      {
        "eq": "244Pu + 48Ca -> 289Fl + 3n",
        "t": "Hot Fusion",
        "d": "Dubna-LLNL discovery."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "atomicMass": 290,
    "category": "unknown",
    "group": 15,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "electronegativity": null,
    "meltingPoint": 670,
    "boilingPoint": 1400,
    "density": 13.5,
    "atomicRadius": 162,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      1,
      3
    ],
    "discoveredBy": "Dubna & LLNL & Vanderbilt University",
    "yearDiscovered": 2003,
    "summary": "Named after Moscow Oblast, Russia; decays into nihonium via successive alpha emissions.",
    "occurrence": "Bombardment of americium-243 with calcium-48.",
    "extraction": "Gas-filled separator DGFRS.",
    "applications": [
      "Studying superheavy alpha decay trajectories towards the island of stability"
    ],
    "importantCompounds": [
      {
        "f": "McCl",
        "n": "Moscovium Monochloride",
        "u": "Predicted stable monovalent state"
      }
    ],
    "reactions": [
      {
        "eq": "243Am + 48Ca -> 288Mc + 3n",
        "t": "Hot Fusion",
        "d": "Discovery reaction."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "atomicMass": 293,
    "category": "unknown",
    "group": 16,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "electronegativity": null,
    "meltingPoint": 708,
    "boilingPoint": 1085,
    "density": 12.9,
    "atomicRadius": 175,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      2,
      4
    ],
    "discoveredBy": "Dubna & Lawrence Livermore National Laboratory",
    "yearDiscovered": 2000,
    "summary": "Named after Lawrence Livermore National Laboratory in Livermore, California.",
    "occurrence": "Fusion of curium-248 with calcium-48.",
    "extraction": "Recoil separator DGFRS.",
    "applications": [
      "Synthesizing neutron-rich superheavy nuclei approaching N=184"
    ],
    "importantCompounds": [
      {
        "f": "Lv",
        "n": "Elemental Livermorium",
        "u": "Group 16 superheavy atom"
      }
    ],
    "reactions": [
      {
        "eq": "248Cm + 48Ca -> 293Lv + 3n",
        "t": "Hot Fusion",
        "d": "Discovery reaction."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "atomicMass": 294,
    "category": "unknown",
    "group": 17,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "electronegativity": null,
    "meltingPoint": 723,
    "boilingPoint": 883,
    "density": 7.2,
    "atomicRadius": 165,
    "ionizationEnergy": null,
    "electronAffinity": null,
    "oxidationStates": [
      -1,
      1,
      3
    ],
    "discoveredBy": "Dubna, LLNL, Vanderbilt & Oak Ridge National Lab",
    "yearDiscovered": 2010,
    "summary": "Second heaviest element known, named after Tennessee for Oak Ridge contribution of Berkelium target.",
    "occurrence": "Fusion of berkelium-249 target with calcium-48 beam.",
    "extraction": "Gas-filled recoil separator.",
    "applications": [
      "Exploring halogen group trends under massive spin-orbit relativistic coupling"
    ],
    "importantCompounds": [
      {
        "f": "TsF3",
        "n": "Tennessine Trifluoride",
        "u": "Predicted halide"
      }
    ],
    "reactions": [
      {
        "eq": "249Bk + 48Ca -> 294Ts + 3n",
        "t": "Hot Fusion",
        "d": "Synthesized with rare berkelium target."
      }
    ],
    "safety": "Extreme radioactivity."
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "atomicMass": 294,
    "category": "noble-gas",
    "group": 18,
    "period": 7,
    "block": "p",
    "state": "Solid",
    "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "electronegativity": null,
    "meltingPoint": 325,
    "boilingPoint": 350,
    "density": 5,
    "atomicRadius": 152,
    "ionizationEnergy": 860,
    "electronAffinity": 5.4,
    "oxidationStates": [
      0,
      2,
      4
    ],
    "discoveredBy": "Dubna & Lawrence Livermore National Laboratory",
    "yearDiscovered": 2002,
    "summary": "Heaviest element on the periodic table, named after academician Yuri Oganessian; relativistic effects make it a semiconductor solid.",
    "occurrence": "Hot fusion of californium-249 target with calcium-48 beam.",
    "extraction": "Gas-filled recoil separator DGFRS.",
    "applications": [
      "Studying uniform Thomas-Fermi electron density smear and high polarizability in superheavy elements"
    ],
    "importantCompounds": [
      {
        "f": "OgF4",
        "n": "Oganesson Tetrafluoride",
        "u": "Predicted tetrahedral fluoride"
      }
    ],
    "reactions": [
      {
        "eq": "249Cf + 48Ca -> 294Og + 3n",
        "t": "Milestone Fusion",
        "d": "Synthesized heaviest atom known to humankind."
      }
    ],
    "safety": "Extreme radioactivity; half-life under 1 millisecond. Exists only in atom-at-a-time synthesis."
  }
];

export default elementsData;
