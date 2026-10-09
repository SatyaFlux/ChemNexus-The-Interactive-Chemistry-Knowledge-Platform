// src/data/quizzes/statesOfMatter.js

export const statesOfMatterQuiz = {
  "id": "states-of-matter",
  "title": "Gas Laws & Kinetic Molecular Theory",
  "description": "Master PV=nRT ideal gas law, Graham's effusion, van der Waals real gas corrections, phase diagrams, and supercritical fluids.",
  "category": "Physical Chemistry",
  "difficulty": "Beginner",
  "estimatedMinutes": 15,
  "questions": [
    {
      "id": "sm-1",
      "question": "According to Boyle’s Law, if the volume of an ideal gas sample is halved at constant temperature, what happens to its pressure?",
      "options": [
        "The pressure remains unchanged",
        "The pressure is reduced to one-fourth",
        "The pressure doubles (2×)",
        "The pressure drops by 50%"
      ],
      "correctIndex": 2,
      "explanation": "Boyle’s Law states P1V1 = P2V2 at constant T. Halving volume doubles the rate of molecular collisions against container walls, doubling pressure.",
      "hint": "Pressure and volume are inversely proportional."
    },
    {
      "id": "sm-2",
      "question": "According to Graham’s Law of Effusion, how does the effusion rate of gas A compare to gas B?",
      "options": [
        "Effusion rate is independent of molecular weight",
        "It is directly proportional to their molar masses",
        "Lighter gases always effuse more slowly",
        "It is inversely proportional to the square root of their molar masses: Rate_A / Rate_B = sqrt(M_B / M_A)"
      ],
      "correctIndex": 3,
      "explanation": "Because average kinetic energy depends only on temperature (1/2 m v² = 3/2 kT), lighter gas molecules move faster and effuse quicker inversely with sqrt(M).",
      "hint": "Helium effuses much faster than dense xenon."
    },
    {
      "id": "sm-3",
      "question": "Under which conditions do real gases deviate MOST significantly from ideal gas behavior?",
      "options": [
        "Extremely high pressure and very low temperature",
        "High temperature and low pressure",
        "Standard room temperature and pressure",
        "In a complete vacuum"
      ],
      "correctIndex": 0,
      "explanation": "At high pressures, molecular volume is no longer negligible. At low temperatures, slow-moving molecules experience attractive intermolecular van der Waals forces.",
      "hint": "When molecules are squeezed tightly and moving slowly."
    },
    {
      "id": "sm-4",
      "question": "On a single-substance phase diagram, what is represented by the \"Triple Point\"?",
      "options": [
        "The standard boiling point",
        "The temperature above which gas cannot be liquefied",
        "The unique temperature and pressure where solid, liquid, and gas phases coexist in thermodynamic equilibrium",
        "The point where sublimation ceases"
      ],
      "correctIndex": 2,
      "explanation": "The triple point is the invariant state point where solid, liquid, and vapor lines converge and all three phases coexist in equilibrium.",
      "hint": "Three phases in simultaneous equilibrium."
    },
    {
      "id": "sm-5",
      "question": "What volume is occupied by exactly 1.0 mole of an ideal gas at Standard Temperature and Pressure (STP: 0°C, 1 atm)?",
      "options": [
        "11.2 Liters",
        "22.4 Liters",
        "44.8 Liters",
        "1.0 Liter"
      ],
      "correctIndex": 1,
      "explanation": "Substituting STP conditions (T = 273.15 K, P = 1.0 atm, R = 0.0821 L·atm/mol·K) into PV = nRT yields molar volume V = 22.414 L.",
      "hint": "Standard stoichiometric gas constant."
    },
    {
      "id": "sm-6",
      "question": "According to Charles’s Law, what is the direct relationship between the volume and absolute temperature of a gas at constant pressure?",
      "options": [
        "Volume remains constant",
        "Volume is inversely proportional to temperature in Celsius",
        "Volume is proportional to the square of temperature",
        "Volume is directly proportional to temperature in Kelvin (V1 / T1 = V2 / T2)"
      ],
      "correctIndex": 3,
      "explanation": "Jacques Charles discovered that gases expand uniformly when heated at constant pressure, with volume directly proportional to temperature in Kelvin.",
      "hint": "V is proportional to T in Kelvin."
    },
    {
      "id": "sm-7",
      "question": "In the van der Waals equation (P + a*n²/V²)(V - n*b) = n*R*T, what does the constant \"a\" correct for?",
      "options": [
        "Attractive intermolecular forces between real gas molecules",
        "The finite volume excluded by gas molecules",
        "The velocity of sound in the gas",
        "The viscosity of the container"
      ],
      "correctIndex": 0,
      "explanation": "Constant \"a\" corrects for attractive intermolecular forces that pull molecules together and slightly reduce the pressure exerted on the container walls.",
      "hint": "Corrects for intermolecular attractions."
    },
    {
      "id": "sm-8",
      "question": "In the van der Waals equation, what does the constant \"b\" correct for?",
      "options": [
        "Atmospheric ozone concentration",
        "Intermolecular attraction",
        "Thermal conductivity",
        "The finite physical volume occupied by the gas molecules themselves (excluded volume)"
      ],
      "correctIndex": 3,
      "explanation": "Constant \"b\" accounts for the non-zero volume of real gas molecules, reducing the effective free volume available for motion.",
      "hint": "Corrects for the physical size of molecules."
    },
    {
      "id": "sm-9",
      "question": "What is Dalton’s Law of Partial Pressures for a mixture of non-reacting gases?",
      "options": [
        "Total pressure equals the average pressure divided by volume",
        "The total pressure of a gas mixture equals the sum of the partial pressures of each individual gas: P_total = P1 + P2 + P3...",
        "The heaviest gas exerts all the pressure",
        "Total pressure is always 1 atmosphere"
      ],
      "correctIndex": 1,
      "explanation": "John Dalton established that in an ideal gas mixture, each gas exerts pressure independently as if it occupied the entire container alone.",
      "hint": "Total pressure is the sum of individual pressures."
    },
    {
      "id": "sm-10",
      "question": "What state of matter exists beyond the Critical Temperature (Tc) and Critical Pressure (Pc) on a phase diagram?",
      "options": [
        "Supercritical Fluid (exhibiting gas-like effusion and liquid-like solvent density)",
        "Solid crystal lattice",
        "Degenerate electron plasma only",
        "Ideal vacuum"
      ],
      "correctIndex": 0,
      "explanation": "Beyond the critical point, the liquid-gas phase boundary disappears, forming a supercritical fluid used industrially for decaffeinating coffee (supercritical CO2).",
      "hint": "Neither a true liquid nor a true gas."
    },
    {
      "id": "sm-11",
      "question": "According to the Kinetic Molecular Theory, the average translational kinetic energy of gas molecules is directly proportional to:",
      "options": [
        "The volume of the container",
        "The molar mass of the gas",
        "Absolute Temperature in Kelvin (KE_avg = 3/2 k_B T)",
        "The density of the gas"
      ],
      "correctIndex": 2,
      "explanation": "Temperature is a macroscopic measure of average microscopic molecular kinetic energy. All gases at the same temperature have the same average kinetic energy.",
      "hint": "Directly proportional to Kelvin temperature."
    },
    {
      "id": "sm-12",
      "question": "What is the root-mean-square velocity (v_rms) formula for gas molecules derived from kinetic theory?",
      "options": [
        "v_rms = 3 R T / M",
        "v_rms = sqrt(3 R T / M)",
        "v_rms = sqrt(2 R T / P)",
        "v_rms = R T / sqrt(M)"
      ],
      "correctIndex": 1,
      "explanation": "Equating 1/2 M v_rms² = 3/2 RT gives v_rms = sqrt(3RT / M), showing that velocity increases with temperature and decreases with molar mass.",
      "hint": "Square root of 3RT over molar mass M."
    },
    {
      "id": "sm-13",
      "question": "Why does liquid water expand when it freezes into ice, unlike almost all other substances?",
      "options": [
        "Water molecules break apart into H2 and O2",
        "Water gains electrons upon freezing",
        "Ice absorbs air bubbles",
        "Hydrogen bonding forces water molecules into an open hexagonal crystal lattice with lower density than liquid water"
      ],
      "correctIndex": 3,
      "explanation": "Below 4°C, hydrogen bonds organize water molecules into an open tetrahedral/hexagonal network with significant void space, causing ice to float with a ~9% volume expansion.",
      "hint": "Open hexagonal cage-like hydrogen-bonded crystal lattice."
    },
    {
      "id": "sm-14",
      "question": "What property describes a liquid’s resistance to flow caused by internal friction between molecular layers?",
      "options": [
        "Vapor Pressure",
        "Surface Tension",
        "Viscosity",
        "Capillary Action"
      ],
      "correctIndex": 2,
      "explanation": "Viscosity measures dynamic fluid friction. Strong intermolecular forces (e.g. hydrogen bonds in glycerol or honey) cause high viscosity.",
      "hint": "Motor oils are rated by this flow-resistance property."
    },
    {
      "id": "sm-15",
      "question": "What is the \"Normal Boiling Point\" of a liquid?",
      "options": [
        "The temperature at which its equilibrium vapor pressure equals exactly 1.0 atmosphere (101.325 kPa)",
        "The temperature at which it freezes",
        "The temperature where density is greatest",
        "The temperature of water in an open beaker"
      ],
      "correctIndex": 0,
      "explanation": "Boiling occurs when vapor pressure equals external atmospheric pressure. When external pressure is standard 1 atm, this is the normal boiling point.",
      "hint": "Vapor pressure equals 1 standard atmosphere."
    },
    {
      "id": "sm-16",
      "question": "Why does water boil at a lower temperature at high altitude (e.g. atop Mount Everest at ~68°C)?",
      "options": [
        "Gravity is weaker",
        "The air is colder",
        "Atmospheric pressure is lower at high altitudes, so vapor pressure equals ambient pressure at a lower temperature",
        "Water loses its hydrogen bonds"
      ],
      "correctIndex": 2,
      "explanation": "On mountain summits, lower barometric pressure means water molecules require less thermal kinetic energy to match external pressure and boil.",
      "hint": "Reduced barometric atmospheric pressure."
    },
    {
      "id": "sm-17",
      "question": "What is a crystalline solid that lacks long-range periodic order, such as window glass or obsidian?",
      "options": [
        "Network Covalent Crystal",
        "Ionic Solid",
        "Metallic Crystal",
        "Amorphous Solid (Non-crystalline glass)"
      ],
      "correctIndex": 3,
      "explanation": "Amorphous solids possess short-range atomic order but lack long-range repeating translational crystal symmetry, softening over a temperature range.",
      "hint": "From the Greek meaning \"without shape\"."
    },
    {
      "id": "sm-18",
      "question": "What type of crystal lattice structure does Diamond exhibit?",
      "options": [
        "Molecular Solid bound by dispersion forces",
        "Covalent Network Solid with sp³ tetrahedral carbon bonding throughout",
        "Metallic Crystal",
        "Ionic Salt"
      ],
      "correctIndex": 1,
      "explanation": "Diamond is a 3D covalent network where every carbon is covalently bonded to four others in rigid sp³ tetrahedra, giving extreme Mohs 10 hardness.",
      "hint": "Continuous covalent network."
    },
    {
      "id": "sm-19",
      "question": "What is the Clausius-Clapeyron equation used to calculate?",
      "options": [
        "The quantitative relationship between a liquid’s vapor pressure and its temperature: ln(P2/P1) = -ΔH_vap/R (1/T2 - 1/T1)",
        "The speed of sound in liquids",
        "The freezing point of alloys",
        "The rate of chemical reactions"
      ],
      "correctIndex": 0,
      "explanation": "The Clausius-Clapeyron equation models the exponential rise of vapor pressure with temperature using enthalpy of vaporization ΔH_vap.",
      "hint": "Relates vapor pressure to heat of vaporization."
    },
    {
      "id": "sm-20",
      "question": "What is the definition of \"Sublimation\"?",
      "options": [
        "The transition from gas directly to solid",
        "The direct phase transition of a substance from solid to gas without passing through an intermediate liquid state",
        "The transition from liquid to gas",
        "The melting of a metal"
      ],
      "correctIndex": 1,
      "explanation": "Sublimation occurs when vapor pressure of a solid exceeds external pressure below its triple point, seen in dry ice (CO2) and iodine crystals.",
      "hint": "Solid straight to gas (like dry ice)."
    }
  ]
};
