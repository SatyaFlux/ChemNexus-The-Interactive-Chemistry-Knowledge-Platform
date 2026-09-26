// src/data/reactionsData.js
// ChemNexus Verified Chemical Reaction Database

export const reactionsData = [
  {
    id: 'rx-01',
    title: 'Water Synthesis / Hydrogen Combustion',
    equation: '2H2 + O2 -> 2H2O',
    reactants: ['2H2 (Hydrogen gas)', 'O2 (Oxygen gas)'],
    products: ['2H2O (Water vapor / liquid)'],
    type: 'Combustion / Synthesis',
    conditions: 'Spark or flame activation; exothermic (Delta H = -572 kJ/mol)',
    explanation: 'A fundamental exothermic redox reaction in which hydrogen gas is oxidized by oxygen, releasing thermal energy and water. Utilized in liquid-propellant rocket engines and clean fuel cells.',
    relatedElements: ['H', 'O'],
    notes: 'Forms an explosive stoichiometric mixture (Knallgas) at 2:1 volume ratio.'
  },
  {
    id: 'rx-02',
    title: 'Haber-Bosch Ammonia Synthesis',
    equation: 'N2 + 3H2 <-> 2NH3',
    reactants: ['N2 (Nitrogen gas)', '3H2 (Hydrogen gas)'],
    products: ['2NH3 (Ammonia gas)'],
    type: 'Synthesis / Catalytic Equilibrium',
    conditions: '400-450°C, 150-200 atm pressure, enriched Fe catalyst with K2O promoter',
    explanation: 'Overcomes the exceptionally stable nitrogen triple bond (N≡N) to produce ammonia, sustaining modern agricultural synthetic fertilizers and feeding roughly half the global population.',
    relatedElements: ['N', 'H', 'Fe'],
    notes: 'Exothermic equilibrium reaction governed by Le Chatelier principle.'
  },
  {
    id: 'rx-03',
    title: 'Thermite Reaction (Aluminothermic Reduction)',
    equation: '2Al + Fe2O3 -> Al2O3 + 2Fe',
    reactants: ['2Al (Aluminium powder)', 'Fe2O3 (Iron(III) oxide)'],
    products: ['Al2O3 (Aluminium oxide slag)', '2Fe (Molten iron metal)'],
    type: 'Single Displacement / Redox',
    conditions: 'Ignition with magnesium ribbon; releases over 2500°C heat',
    explanation: 'Aluminium possesses higher oxygen affinity than iron, reducing rust vigorously into pure molten iron. Used worldwide in in-situ railway track welding.',
    relatedElements: ['Al', 'Fe', 'O'],
    notes: 'Once ignited, cannot be extinguished with water due to secondary steam explosion risk.'
  },
  {
    id: 'rx-04',
    title: 'Cellular Aerobic Respiration / Glucose Oxidation',
    equation: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O',
    reactants: ['C6H12O6 (Glucose)', '6O2 (Oxygen gas)'],
    products: ['6CO2 (Carbon dioxide)', '6H2O (Water)'],
    type: 'Oxidation / Biochemical Combustion',
    conditions: 'Enzymatically catalyzed in mitochondria (glycolysis, Krebs cycle, electron transport)',
    explanation: 'Primary biological metabolic process converting glucose and oxygen into cellular energy currency (ATP), releasing carbon dioxide and water.',
    relatedElements: ['C', 'H', 'O'],
    notes: 'Yields approximately 30-32 moles of ATP per mole of oxidized glucose.'
  },
  {
    id: 'rx-05',
    title: 'Limestone Calcination (Thermal Decomposition)',
    equation: 'CaCO3 -> CaO + CO2',
    reactants: ['CaCO3 (Limestone / Calcium carbonate)'],
    products: ['CaO (Quicklime / Calcium oxide)', 'CO2 (Carbon dioxide gas)'],
    type: 'Decomposition / Endothermic',
    conditions: 'Heated above 840°C in lime kilns',
    explanation: 'Thermal roasting drives off carbon dioxide gas from calcium carbonate to produce quicklime (CaO), an essential chemical flux in steelmaking and Portland cement manufacturing.',
    relatedElements: ['Ca', 'C', 'O'],
    notes: 'One of the oldest industrial pyrochemical processes known to human civilization.'
  },
  {
    id: 'rx-06',
    title: 'Contact Process (Sulfuric Acid Precursor Oxidation)',
    equation: '2SO2 + O2 <-> 2SO3',
    reactants: ['2SO2 (Sulfur dioxide)', 'O2 (Oxygen)'],
    products: ['2SO3 (Sulfur trioxide)'],
    type: 'Catalytic Oxidation / Equilibrium',
    conditions: '450°C, 1-2 atm, Vanadium(V) oxide (V2O5) catalyst',
    explanation: 'The critical rate-determining step in global sulfuric acid manufacture. Sulfur trioxide is subsequently absorbed in concentrated H2SO4 to form oleum (H2S2O7), avoiding corrosive sulfuric acid mists.',
    relatedElements: ['S', 'O', 'V'],
    notes: 'Sulfuric acid is the #1 produced chemical commodity in the world by mass.'
  },
  {
    id: 'rx-07',
    title: 'Classic Acid-Base Neutralization',
    equation: 'HCl + NaOH -> NaCl + H2O',
    reactants: ['HCl (Hydrochloric acid)', 'NaOH (Sodium hydroxide)'],
    products: ['NaCl (Sodium chloride salt)', 'H2O (Water)'],
    type: 'Double Displacement / Neutralization',
    conditions: 'Aqueous solution at room temperature; exothermic',
    explanation: 'Hydronium ions (H3O+) from strong hydrochloric acid react stoichiometrically with hydroxide ions (OH-) from strong sodium hydroxide to yield harmless water and dissolved table salt.',
    relatedElements: ['H', 'Cl', 'Na', 'O'],
    notes: 'Net ionic equation: H+ (aq) + OH- (aq) -> H2O (l); Delta H = -57.3 kJ/mol.'
  },
  {
    id: 'rx-08',
    title: 'Lead-Acid Battery Electrochemical Discharge',
    equation: 'Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O',
    reactants: ['Pb (Sponge lead anode)', 'PbO2 (Lead dioxide cathode)', '2H2SO4 (Sulfuric acid electrolyte)'],
    products: ['2PbSO4 (Lead(II) sulfate on plates)', '2H2O (Water)'],
    type: 'Electrochemical Redox / Comproportionation',
    conditions: 'Ambient temperature electrochemical cell; generates ~2.1 V per cell',
    explanation: 'Both the elemental lead anode (0 oxidation state) and the lead dioxide cathode (+4 oxidation state) are converted to lead(II) sulfate (+2 state), delivering high surge currents required to crank automotive starters.',
    relatedElements: ['Pb', 'S', 'O', 'H'],
    notes: 'Fully reversible upon recharging: 2PbSO4 + 2H2O -> Pb + PbO2 + 2H2SO4.'
  },
  {
    id: 'rx-09',
    title: 'Methane Steam Reforming (Industrial Hydrogen Production)',
    equation: 'CH4 + H2O <-> CO + 3H2',
    reactants: ['CH4 (Natural gas / Methane)', 'H2O (Steam)'],
    products: ['CO (Carbon monoxide)', '3H2 (Hydrogen gas)'],
    type: 'Endothermic Reforming',
    conditions: '700-1000°C, 3-25 bar pressure, Nickel catalyst',
    explanation: 'The dominant global industrial route for generating hydrogen gas from natural gas. The byproduct carbon monoxide is further shifted with steam in the water-gas shift reaction (CO + H2O -> CO2 + H2).',
    relatedElements: ['C', 'H', 'O', 'Ni'],
    notes: 'Accounts for approximately 95% of current worldwide commercial hydrogen production.'
  },
  {
    id: 'rx-10',
    title: 'Silver Halide Analytical Precipitation',
    equation: 'AgNO3 + NaCl -> AgCl + NaNO3',
    reactants: ['AgNO3 (Silver nitrate solution)', 'NaCl (Sodium chloride solution)'],
    products: ['AgCl (Curdy white precipitate)', 'NaNO3 (Aqueous sodium nitrate)'],
    type: 'Double Displacement / Precipitation',
    conditions: 'Room temperature aqueous solution',
    explanation: 'Silver ions and chloride ions instantly combine to precipitate insoluble silver chloride (AgCl, Ksp = 1.8 x 10^-10), which darkens under light exposure. Classical qualitative test for chloride ions.',
    relatedElements: ['Ag', 'N', 'O', 'Na', 'Cl'],
    notes: 'AgCl dissolves readily in dilute aqueous ammonia due to complex diamminesilver(I) ion formation.'
  },
  {
    id: 'rx-11',
    title: 'Ozone Depletion Catalytic Cycle',
    equation: 'Cl + O3 -> ClO + O2',
    reactants: ['Cl (Chlorine free radical)', 'O3 (Stratospheric ozone)'],
    products: ['ClO (Chlorine monoxide radical)', 'O2 (Diatomic oxygen)'],
    type: 'Free Radical Catalysis',
    conditions: 'Stratospheric UV radiation breaking chlorofluorocarbons (CFCs)',
    explanation: 'Homolytic cleavage of CFCs releases chlorine free radicals. A single chlorine radical can destroy upwards of 100,000 ozone molecules through cyclical catalytic regeneration with oxygen radicals (ClO + O -> Cl + O2).',
    relatedElements: ['Cl', 'O'],
    notes: 'Addressed globally by the landmark 1987 Montreal Protocol international environmental treaty.'
  },
  {
    id: 'rx-12',
    title: 'Iron Atmospheric Rusting / Electrochemical Corrosion',
    equation: '4Fe + 3O2 + 6H2O -> 4Fe(OH)3',
    reactants: ['4Fe (Iron metal)', '3O2 (Atmospheric oxygen)', '6H2O (Moisture / Humidity)'],
    products: ['4Fe(OH)3 (Hydrated Iron(III) hydroxide rust precursor)'],
    type: 'Electrochemical Oxidation',
    conditions: 'Water droplets acting as micro-electrochemical electrolytes in presence of oxygen',
    explanation: 'Iron is oxidized to Fe2+ at anodic sites, while oxygen is reduced to OH- at cathodic sites. The resulting iron hydroxide further dehydrates into porous, non-passivating Fe2O3*nH2O rust flakes.',
    relatedElements: ['Fe', 'O', 'H'],
    notes: 'Accelerated dramatically in coastal saltwater environments due to higher electrolyte conductivity.'
  }
];

export default reactionsData;

