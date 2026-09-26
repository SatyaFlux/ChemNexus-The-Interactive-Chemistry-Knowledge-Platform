// src/data/quizzes/environmental.js
// 20 Comprehensive Questions on Environmental Chemistry, Atmospheric Science & Green Principles

export const environmentalQuiz = {
  id: 'environmental-chemistry',
  title: 'Environmental & Atmospheric Green Chemistry',
  description: 'Master greenhouse radiative forcing, stratospheric ozone depletion, acid precipitation, photochemical smog, and green chemistry metrics.',
  category: 'Environmental Chemistry',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'env-1',
      question: 'Which anthropogenic gas contributes the largest share of total cumulative atmospheric radiative greenhouse forcing?',
      options: ['Carbon Dioxide (CO2)', 'Methane (CH4)', 'Sulfur Hexafluoride (SF6)', 'Nitrous Oxide (N2O)'],
      correctIndex: 0,
      explanation: 'Emitted in tens of billions of metric tons annually and persisting for centuries, CO2 accounts for approximately 66% of human-induced radiative warming.',
      hint: 'Primary fossil fuel combustion product.'
    },
    {
      id: 'env-2',
      question: 'In the catalytic destruction of stratospheric ozone by chlorofluorocarbons (CFCs), which reactive intermediate acts as the propagating catalyst?',
      options: ['Chlorine free radical (Cl•)', 'Fluoride anion (F⁻)', 'Carbon atom', 'Nitrogen dioxide gas'],
      correctIndex: 0,
      explanation: 'UV photolysis releases chlorine free radicals (Cl•). One single chlorine radical can destroy over 100,000 ozone molecules through cyclical catalytic regeneration.',
      hint: 'A neutral chlorine atom with an unpaired electron.'
    },
    {
      id: 'env-3',
      question: 'What are the two primary industrial atmospheric emissions responsible for generating acid precipitation (acid rain)?',
      options: [
        'Sulfur Dioxide (SO2) and Nitrogen Oxides (NOx)',
        'Argon (Ar) and Helium (He)',
        'Carbon Monoxide (CO) and Methane (CH4)',
        'Chlorine (Cl2) and Ammonia (NH3)'
      ],
      correctIndex: 0,
      explanation: 'SO2 from coal combustion and ore smelting forms sulfuric acid (H2SO4), while NOx from high-temperature vehicles forms nitric acid (HNO3), lowering rain pH below 4.5.',
      hint: 'Emissions that convert into sulfuric and nitric acids.'
    },
    {
      id: 'env-4',
      question: 'What chemical phenomenon causes ocean acidification as marine waters absorb excess atmospheric CO2?',
      options: [
        'Dissolved CO2 forms carbonic acid (H2CO3) releasing H⁺ ions, consuming carbonate ions (CO3²⁻) needed by marine organisms for calcium carbonate shells',
        'CO2 forms dry ice on the sea floor',
        'CO2 oxidizes chloride ions into bleach',
        'CO2 destroys salt molecules'
      ],
      correctIndex: 0,
      explanation: 'CO2 reacts with seawater to form carbonic acid (H2CO3), releasing H⁺ that consumes free carbonate ions (CO3²⁻), impeding coral calcification.',
      hint: 'Involves carbonic acid and depletion of carbonate ions.'
    },
    {
      id: 'env-5',
      question: 'In Green Chemistry, what does the fundamental metric "Atom Economy" measure?',
      options: [
        'The proportion of reactant atoms successfully incorporated into the final desired product versus waste',
        'The retail price of chemical reagents per kilogram',
        'The number of electrons transferred in a redox reaction',
        'The crystal packing density of atoms'
      ],
      correctIndex: 0,
      explanation: 'Formulated by Barry Trost in 1991, Atom Economy calculates (Molecular Weight of Desired Product / Total Molecular Weight of All Reactants) × 100%.',
      hint: 'A percentage evaluating how cleanly starting atoms become product atoms.'
    },
    {
      id: 'env-6',
      question: 'What is the primary toxic component of photochemical smog that causes respiratory irritation and rubber cracking in urban atmospheres?',
      options: ['Ground-level Tropospheric Ozone (O3)', 'Carbon dioxide (CO2)', 'Molecular nitrogen (N2)', 'Water vapor'],
      correctIndex: 0,
      explanation: 'Formed when sunlight triggers photochemical reactions between volatile organic compounds (VOCs) and nitrogen oxides (NOx), ground-level ozone is a powerful pulmonary oxidant.',
      hint: 'A triatomic allotrope of oxygen forming near the ground.'
    },
    {
      id: 'env-7',
      question: 'What is the 100-year Global Warming Potential (GWP) of Methane (CH4) relative to Carbon Dioxide (CO2 = 1)?',
      options: ['~28 to 36 times greater', '1 time', '0.1 times', '1,000 times'],
      correctIndex: 0,
      explanation: 'Methane traps infrared radiation much more effectively per molecule than CO2, giving it a 100-year GWP of approximately 28 to 36 (and over 80 on a 20-year timescale).',
      hint: 'Roughly 30 times more potent than CO2 over 100 years.'
    },
    {
      id: 'env-8',
      question: 'What environmental milestone international treaty, signed in 1987, successfully phased out the production of ozone-depleting chlorofluorocarbons (CFCs)?',
      options: ['The Montreal Protocol', 'The Kyoto Protocol', 'The Paris Agreement', 'The Geneva Convention'],
      correctIndex: 0,
      explanation: 'The Montreal Protocol is universally ratified and widely regarded as the most successful global environmental agreement, setting the ozone layer on a path to recovery.',
      hint: 'Named after the Canadian city where it was signed in 1987.'
    },
    {
      id: 'env-9',
      question: 'What is the primary chemical mechanism of eutrophication in freshwater lakes and estuaries?',
      options: [
        'Excess runoff of agricultural nitrates and phosphates causes explosive algal blooms, followed by bacterial decomposition that depletes dissolved oxygen (hypoxia)',
        'Acid rain neutralizes all algae',
        'Thermal evaporation dries up the lake',
        'Salinity drops to zero'
      ],
      correctIndex: 0,
      explanation: 'Phosphorus and nitrogen from agricultural fertilizers trigger algal blooms. When algae die, decomposing aerobic bacteria consume dissolved oxygen, causing massive fish kills.',
      hint: 'Nutrient over-enrichment causing dissolved oxygen depletion.'
    },
    {
      id: 'env-10',
      question: 'Which of the Twelve Principles of Green Chemistry emphasizes designing chemical syntheses to generate minimal waste byproducts?',
      options: [
        'Prevention of Waste (It is better to prevent waste than to treat or clean up waste after it is formed)',
        'Maximize Energy Use',
        'Use of Stoichiometric Reagents over Catalysts',
        'Design for Non-degradability'
      ],
      correctIndex: 0,
      explanation: 'Principle 1 of Anastas and Warner’s Green Chemistry dictates that waste prevention at the source is vastly superior to post-synthetic waste treatment.',
      hint: 'Principle #1 of Green Chemistry.'
    },
    {
      id: 'env-11',
      question: 'What is Biochemical Oxygen Demand (BOD) in water quality analysis?',
      options: [
        'The amount of dissolved oxygen consumed by aerobic microorganisms to biologically break down organic matter in a water sample over 5 days at 20°C',
        'The oxygen required to rust an iron nail',
        'The oxygen produced by water plants',
        'The percentage of oxygen in atmospheric air'
      ],
      correctIndex: 0,
      explanation: 'Standard BOD5 test measures organic pollution; high BOD indicates heavy sewage contamination that risks suffocating aquatic aquatic fauna.',
      hint: 'Standard water pollution test measured over 5 days.'
    },
    {
      id: 'env-12',
      question: 'Which persistent synthetic organic pollutant (POP) was famously banned following Rachel Carson’s 1962 book "Silent Spring"?',
      options: ['DDT (Dichlorodiphenyltrichloroethane)', 'Aspirin', 'Penicillin', 'Polyethylene'],
      correctIndex: 0,
      explanation: 'DDT is a lipophilic organochlorine pesticide that bioaccumulates up the food chain, thinning the eggshells of birds of prey like the bald eagle and peregrine falcon.',
      hint: 'Pesticide abbreviated DDT.'
    },
    {
      id: 'env-13',
      question: 'What is "Biomagnification" (Bioamplification) in ecotoxicology?',
      options: [
        'The progressive increase in concentration of a persistent toxin in fatty tissues of organisms at successively higher trophic levels of the food chain',
        'The growth of bacteria in petri dishes',
        'The enlargement of cells under microscopes',
        'The dilution of chemicals in rivers'
      ],
      correctIndex: 0,
      explanation: 'Fat-soluble, non-biodegradable toxins (e.g. methylmercury, PCBs, DDT) accumulate in fat tissues and become concentrated by orders of magnitude in top predators.',
      hint: 'Toxin concentration multiplying up the food web.'
    },
    {
      id: 'env-14',
      question: 'Which greenhouse gas has the highest known Global Warming Potential (GWP ≈ 23,500 over 100 years)?',
      options: ['Sulfur Hexafluoride (SF6)', 'Carbon dioxide (CO2)', 'Methane (CH4)', 'Nitrous oxide (N2O)'],
      correctIndex: 0,
      explanation: 'SF6 is an octahedral, chemically inert gas used as an electrical dielectric insulator in high-voltage substations, with an atmospheric lifetime exceeding 3,200 years.',
      hint: 'Used in electrical high-voltage switchgear.'
    },
    {
      id: 'env-15',
      question: 'What chemical species is primarily responsible for the indoor environmental hazard known as "Sick Building Syndrome"?',
      options: [
        'Volatile Organic Compounds (VOCs) like formaldehyde emitted from adhesives and carpets',
        'Pure oxygen',
        'Solid table salt',
        'Argon gas'
      ],
      correctIndex: 0,
      explanation: 'Off-gassing of formaldehyde and other VOCs from particle board, foam insulation, and paints in poorly ventilated modern buildings causes chronic headaches and respiratory distress.',
      hint: 'VOCs off-gassing from building furnishings.'
    },
    {
      id: 'env-16',
      question: 'How does an electrostatic precipitator remove fly ash and fine particulates (PM2.5 / PM10) from industrial smokestacks?',
      options: [
        'By charging airborne particles with a high-voltage corona discharge and collecting them on oppositely charged plates',
        'By boiling the flue gas in water',
        'By burning the ash into nitrogen gas',
        'By using magnetic magnets on non-metallic dust'
      ],
      correctIndex: 0,
      explanation: 'High-voltage electrode wires ionize passing flue gas, giving dust particles a negative charge so they are electrostatically attracted to grounded collector plates with >99% efficiency.',
      hint: 'Uses high voltage electrostatic attraction.'
    },
    {
      id: 'env-17',
      question: 'What chemical substance is commonly injected into coal-fired power plant flue gas desulfurization (FGD) scrubbers to capture SO2 emissions?',
      options: ['Limestone / Slaked Lime slurry (CaCO3 / Ca(OH)2)', 'Concentrated hydrochloric acid', 'Ethanol', 'Metallic copper'],
      correctIndex: 0,
      explanation: 'Basic lime/limestone reacts with acidic SO2 to form synthetic calcium sulfite and gypsum (CaSO4·2H2O), which is sold to manufacture commercial wallboard drywall.',
      hint: 'Calcium carbonate reacting to produce synthetic gypsum.'
    },
    {
      id: 'env-18',
      question: 'What is the natural pH of unpolluted rainwater in equilibrium with atmospheric carbon dioxide?',
      options: ['Approximately 5.6 (slightly acidic due to dissolved carbonic acid)', '7.0 (strictly neutral)', '8.5 (basic)', '3.0 (strongly acidic)'],
      correctIndex: 0,
      explanation: 'Natural rain absorbs ambient CO2 (~420 ppm) to form weak carbonic acid (CO2 + H2O <-> H2CO3 <-> H⁺ + HCO3⁻), yielding a natural pristine pH of ~5.6.',
      hint: 'Around 5.6 due to dissolved natural atmospheric CO2.'
    },
    {
      id: 'env-19',
      question: 'What toxic organic chemical compound is formed when trace chlorine bleaches react with lignins during traditional paper pulp manufacturing?',
      options: ['Polychlorinated Dioxins (e.g. 2,3,7,8-TCDD)', 'Aspirin', 'Soap', 'Glucose'],
      correctIndex: 0,
      explanation: 'Chlorine bleaching of wood pulp historically produced carcinogenic, highly toxic trace chlorinated dibenzodioxins and furans, leading to modern Elemental Chlorine-Free (ECF) bleaching.',
      hint: 'Dioxins.'
    },
    {
      id: 'env-20',
      question: 'In Green Chemistry, what does the E-factor (Environmental Factor) measure?',
      options: [
        'The mass of waste generated per kilogram of desired chemical product: E-factor = kg of waste / kg of product',
        'The electricity consumed by laboratory lamps',
        'The cost of environmental fines',
        'The number of green leaves on a plant'
      ],
      correctIndex: 0,
      explanation: 'Introduced by Roger Sheldon, the E-factor quantifies waste: petroleum refining has an E-factor < 0.1, whereas pharmaceutical manufacturing can have E-factors > 100 due to multi-step syntheses.',
      hint: 'Ratio of kilograms of waste to kilograms of product.'
    }
  ]
};
