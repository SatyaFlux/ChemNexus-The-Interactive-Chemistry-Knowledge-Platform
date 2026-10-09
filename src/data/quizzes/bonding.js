// src/data/quizzes/bonding.js

export const bondingQuiz = {
  "id": "chemical-bonding",
  "title": "Chemical Bonding & VSEPR Molecular Geometry",
  "description": "Master VSEPR geometry, hybridization, formal charge, dipole moments, and intermolecular forces.",
  "category": "Chemical Bonding",
  "difficulty": "Beginner",
  "estimatedMinutes": 15,
  "questions": [
    {
      "id": "cb-1",
      "question": "What is the molecular geometry of the water molecule (H2O) according to VSEPR theory?",
      "options": [
        "Tetrahedral with bond angle 109.5°",
        "Linear with bond angle 180°",
        "Trigonal Planar with bond angle 120°",
        "Bent (Angular) with bond angle ~104.5°"
      ],
      "correctIndex": 3,
      "explanation": "Oxygen has four electron domains (two bonding pairs and two lone pairs). Repulsion from the two lone pairs compresses the H-O-H angle down to ~104.5° in a bent shape.",
      "hint": "Two single bonds and two non-bonding lone pairs on oxygen."
    },
    {
      "id": "cb-2",
      "question": "What is the orbital hybridization of each carbon atom in ethylene (C2H4)?",
      "options": [
        "sp²",
        "sp",
        "sp³",
        "sp³d"
      ],
      "correctIndex": 0,
      "explanation": "Each carbon forms three sigma bonds using sp² hybrid orbitals in a planar triangle (~120°), with an unhybridized 2p orbital forming a pi bond.",
      "hint": "Three electron regions around each carbon atom."
    },
    {
      "id": "cb-3",
      "question": "What is the molecular geometry of sulfur hexafluoride (SF6)?",
      "options": [
        "Square Planar",
        "Trigonal Bipyramidal",
        "Octahedral",
        "Tetrahedral"
      ],
      "correctIndex": 2,
      "explanation": "Sulfur has six bonding pairs and zero lone pairs, forming an expanded octet with sp³d² hybridization directed toward the six vertices of an octahedron (90° angles).",
      "hint": "Six fluorine atoms arranged symmetrically around sulfur."
    },
    {
      "id": "cb-4",
      "question": "Why is carbon tetrachloride (CCl4) non-polar despite containing four polar C-Cl bonds?",
      "options": [
        "Chlorine and carbon have identical electronegativities",
        "Its tetrahedral symmetry causes the four individual bond dipole vectors to cancel out completely",
        "The C-Cl bonds are purely ionic",
        "Carbon loses all its electrons to chlorine"
      ],
      "correctIndex": 1,
      "explanation": "Because CCl4 has a regular tetrahedral geometry, the vector sum of the four polar C-Cl bond dipoles equals zero, yielding a non-polar molecule.",
      "hint": "3D vector dipole cancellation."
    },
    {
      "id": "cb-5",
      "question": "What type of bond forms when ammonia (NH3) bonds with a proton (H⁺) to yield the ammonium ion (NH4⁺)?",
      "options": [
        "London Dispersion Interaction",
        "Pure Ionic Bond",
        "Metallic Bond",
        "Coordinate Covalent (Dative) Bond"
      ],
      "correctIndex": 3,
      "explanation": "Nitrogen supplies both electrons from its lone pair to share with the bare proton, forming a coordinate covalent (dative) bond.",
      "hint": "Both shared electrons come from a single atom."
    },
    {
      "id": "cb-6",
      "question": "What is the molecular geometry of the xenon tetrafluoride molecule (XeF4)?",
      "options": [
        "Square Planar",
        "Tetrahedral",
        "Octahedral",
        "See-saw"
      ],
      "correctIndex": 0,
      "explanation": "Xenon has six electron domains (four single bonds and two lone pairs). The lone pairs occupy axial positions 180° apart, leaving four fluorines in a square planar geometry.",
      "hint": "Octahedral electron geometry with two opposite lone pairs."
    },
    {
      "id": "cb-7",
      "question": "What is the formal charge on the central nitrogen atom in the nitrate ion (NO3⁻)?",
      "options": [
        "+2",
        "0",
        "-1",
        "+1"
      ],
      "correctIndex": 3,
      "explanation": "Formal Charge = Valence e⁻ - Nonbonding e⁻ - 1/2(Bonding e⁻) = 5 - 0 - 1/2(8) = 5 - 4 = +1.",
      "hint": "Nitrogen has 5 valence electrons and forms four bonds in nitrate."
    },
    {
      "id": "cb-8",
      "question": "Which of the following molecules possesses a triple bond consisting of one sigma and two pi bonds?",
      "options": [
        "Oxygen gas (O2)",
        "Nitrogen gas (N2)",
        "Fluorine gas (F2)",
        "Carbon dioxide (CO2)"
      ],
      "correctIndex": 1,
      "explanation": "N2 features a diatomic triple bond (N≡N) with one end-on sigma bond and two lateral pi bonds, possessing huge bond dissociation energy (945 kJ/mol).",
      "hint": "Diatomic gas making up 78% of air."
    },
    {
      "id": "cb-9",
      "question": "What is the hybridization of the carbon atom in carbon dioxide (CO2)?",
      "options": [
        "sp",
        "sp²",
        "sp³",
        "dsp²"
      ],
      "correctIndex": 0,
      "explanation": "Carbon in CO2 forms two double bonds (two sigma bonds, two pi bonds) in a linear 180° geometry, corresponding to sp hybridization.",
      "hint": "Two electron domains around the central carbon."
    },
    {
      "id": "cb-10",
      "question": "Which intermolecular force is responsible for the unusually high boiling point of water (100°C) compared to H2S (-60°C)?",
      "options": [
        "Dipole-Dipole forces only",
        "London Dispersion Forces",
        "Hydrogen Bonding",
        "Covalent bonding between molecules"
      ],
      "correctIndex": 2,
      "explanation": "Strong electrostatic attraction between partially positive hydrogen and highly electronegative oxygen lone pairs creates extensive intermolecular hydrogen bonds.",
      "hint": "Involves H bonded to N, O, or F."
    },
    {
      "id": "cb-11",
      "question": "What is the molecular geometry of the ammonia molecule (NH3)?",
      "options": [
        "Trigonal Planar (120°)",
        "Trigonal Pyramidal (~107°)",
        "Tetrahedral (109.5°)",
        "T-shaped"
      ],
      "correctIndex": 1,
      "explanation": "Nitrogen has three bonding pairs and one lone pair. Lone pair repulsion pushes the three N-H bonds downward into a trigonal pyramid with a 107° angle.",
      "hint": "Three bonds and one lone pair on nitrogen."
    },
    {
      "id": "cb-12",
      "question": "What is the molecular shape of phosphorus pentachloride (PCl5) in the gas phase?",
      "options": [
        "Pentagonal Planar",
        "Octahedral",
        "Square Pyramidal",
        "Trigonal Bipyramidal"
      ],
      "correctIndex": 3,
      "explanation": "Phosphorus has five bonding pairs (sp³d hybridization) arranged as three equatorial bonds at 120° and two axial bonds at 90° in a trigonal bipyramid.",
      "hint": "Five electron domains with zero lone pairs."
    },
    {
      "id": "cb-13",
      "question": "What is the bond order of the oxygen molecule (O2) according to Molecular Orbital (MO) Theory?",
      "options": [
        "3.0",
        "1.0",
        "2.0 (Paramagnetic with 2 unpaired electrons)",
        "1.5"
      ],
      "correctIndex": 2,
      "explanation": "MO configuration: 10 bonding electrons and 6 antibonding electrons. Bond order = (10 - 6) / 2 = 2.0. The two highest electrons occupy degenerate pi* orbitals, making O2 paramagnetic.",
      "hint": "Formula: (Bonding e⁻ - Antibonding e⁻) / 2."
    },
    {
      "id": "cb-14",
      "question": "Which of the following compounds exhibits ionic bonding with the highest lattice energy?",
      "options": [
        "Magnesium Oxide (MgO)",
        "Sodium Chloride (NaCl)",
        "Potassium Bromide (KBr)",
        "Calcium Chloride (CaCl2)"
      ],
      "correctIndex": 0,
      "explanation": "Lattice energy is proportional to (q1 · q2) / r. In MgO, both ions carry divalent charges (Mg²⁺ and O²⁻, product = 4) and small radii, maximizing electrostatic attraction (-3791 kJ/mol).",
      "hint": "Look for the highest ion charges and smallest ionic radii."
    },
    {
      "id": "cb-15",
      "question": "What is the geometry of the carbonate ion (CO3²⁻)?",
      "options": [
        "Tetrahedral",
        "Trigonal Pyramidal",
        "Trigonal Planar with bond angles of 120°",
        "Bent"
      ],
      "correctIndex": 2,
      "explanation": "Carbon has three equivalent resonance bonds to oxygen atoms with zero lone pairs, producing a flat trigonal planar geometry with 120° O-C-O angles.",
      "hint": "Three equivalent resonance structures with sp² hybridization."
    },
    {
      "id": "cb-16",
      "question": "Which intermolecular force is present in ALL atoms and molecules, regardless of polarity?",
      "options": [
        "Permanent Dipole-Dipole Forces",
        "Hydrogen Bonding",
        "Ion-Dipole Forces",
        "London Dispersion Forces (Induced Dipole-Induced Dipole)"
      ],
      "correctIndex": 3,
      "explanation": "Temporary fluctuations in electron cloud distribution create instantaneous dipole moments in all atoms and molecules, inducing weak London dispersion attractions.",
      "hint": "Discovered by Fritz London in 1930."
    },
    {
      "id": "cb-17",
      "question": "What is the molecular shape of the sulfur dioxide molecule (SO2)?",
      "options": [
        "Linear 180°",
        "Bent (Angular) ~119°",
        "Trigonal Planar",
        "Tetrahedral"
      ],
      "correctIndex": 1,
      "explanation": "Sulfur has two bonding domains and one lone pair in a trigonal planar electron geometry. The lone pair pushes the two S=O bonds into a bent shape (~119°).",
      "hint": "Two bonds and one lone pair on sulfur."
    },
    {
      "id": "cb-18",
      "question": "What type of orbital overlap constitutes a sigma (σ) bond?",
      "options": [
        "Head-to-head (axial) cylindrical overlap along the internuclear axis",
        "Side-by-side (lateral) parallel overlap above and below the axis",
        "Non-overlapping electrostatic field",
        "Overlap of d-orbitals only"
      ],
      "correctIndex": 0,
      "explanation": "Sigma bonds feature direct head-on orbital overlap along the internuclear axis, giving cylindrical symmetry and permitting free rotation.",
      "hint": "Direct head-on overlap along the bond axis."
    },
    {
      "id": "cb-19",
      "question": "What is the molecular geometry of the triiodide ion (I3⁻)?",
      "options": [
        "Bent ~104.5°",
        "Linear with 180° bond angle",
        "Trigonal Planar",
        "T-shaped"
      ],
      "correctIndex": 1,
      "explanation": "The central iodine has five electron domains (two bonding pairs and three lone pairs). The three lone pairs occupy equatorial positions, forcing the two iodine bonds into a linear 180° geometry.",
      "hint": "Trigonal bipyramidal electron geometry with 3 equatorial lone pairs."
    },
    {
      "id": "cb-20",
      "question": "Why does metallic bonding enable metals to conduct electricity and heat so efficiently?",
      "options": [
        "Metals have no protons in their crystal nuclei",
        "Valence electrons are locked in rigid directional covalent bonds",
        "Delocalized valence electrons form an electron sea freely moving throughout the cationic lattice",
        "Metals are composed entirely of neutrons"
      ],
      "correctIndex": 2,
      "explanation": "The \"electron sea\" model describes positive metal cations immersed in a cloud of freely mobile delocalized valence electrons that rapidly drift under electric and thermal potentials.",
      "hint": "The electron sea model."
    }
  ]
};
