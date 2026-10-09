// src/data/quizzes/advancedMaterials.js

export const advancedMaterialsQuiz = {
  "id": "advanced-materials",
  "title": "Advanced Materials & Nuclear Chemistry",
  "description": "Master semiconductors, nuclear fission/fusion, radioactive decay modes, superalloys, graphene, and transuranic elements.",
  "category": "Advanced Materials",
  "difficulty": "Advanced",
  "estimatedMinutes": 15,
  "questions": [
    {
      "id": "am-1",
      "question": "Why is Zirconium preferred over stainless steel for nuclear fuel rod cladding in pressurized water reactors?",
      "options": [
        "It undergoes nuclear fission directly to produce power",
        "It melts at a lower temperature than aluminium",
        "It has an extremely low neutron absorption cross-section",
        "It is cheaper than ordinary carbon steel"
      ],
      "correctIndex": 2,
      "explanation": "Zirconium has an exceptionally low capture cross-section for thermal neutrons (0.18 barns), allowing neutrons to freely sustain the chain reaction.",
      "hint": "Crucial for neutron economy inside nuclear reactor cores."
    },
    {
      "id": "am-2",
      "question": "Which superheavy element was named in honor of the nuclear chemist who proposed the actinide concept and co-discovered 10 transuranic elements?",
      "options": [
        "Meitnerium (Mt, 109)",
        "Bohrium (Bh, 107)",
        "Rutherfordium (Rf, 104)",
        "Seaborgium (Sg, 106)"
      ],
      "correctIndex": 3,
      "explanation": "Glenn T. Seaborg formulated the actinide series concept in 1944. Element 106 was named Seaborgium in his honor during his lifetime.",
      "hint": "Nobel laureate who pulled the actinides out of the d-block."
    },
    {
      "id": "am-3",
      "question": "In commercial smartphone lithium-ion batteries, what material predominantly forms the negative electrode (anode)?",
      "options": [
        "Graphite (Carbon)",
        "Lithium Cobalt Oxide",
        "Silicon-Nitride",
        "Metallic Sodium"
      ],
      "correctIndex": 0,
      "explanation": "Graphite is the ubiquitous commercial anode material, intercalating lithium ions (LiC6) between graphene honeycomb sheets during charging.",
      "hint": "An allotrope of carbon consisting of layered hexagonal planar rings."
    },
    {
      "id": "am-4",
      "question": "What radioactive isotope provides long-term thermal power in NASA Voyager and Mars rover Radioisotope Thermoelectric Generators (RTGs)?",
      "options": [
        "Cobalt-60",
        "Uranium-235",
        "Plutonium-238",
        "Cesium-137"
      ],
      "correctIndex": 2,
      "explanation": "Plutonium-238 decays via pure alpha emission with an 87.7-year half-life, generating steady decay heat (0.57 W/g) without dangerous penetrating gamma or neutron flux.",
      "hint": "An even-numbered alpha-emitting actinide isotope with an 88-year half-life."
    },
    {
      "id": "am-5",
      "question": "Which compound semiconductor enables ultra-fast GaN smartphone chargers with dramatically smaller physical dimensions?",
      "options": [
        "Silicon Germanium (SiGe)",
        "Gallium Nitride (GaN)",
        "Cadmium Selenide (CdSe)",
        "Gallium Antimonide (GaSb)"
      ],
      "correctIndex": 1,
      "explanation": "GaN is a wide-bandgap (3.4 eV) semiconductor with superior electron mobility and dielectric breakdown strength, allowing power converters to switch at megaHertz frequencies with low heat loss.",
      "hint": "A binary Group 13-15 semiconductor containing Gallium and Nitrogen."
    },
    {
      "id": "am-6",
      "question": "What is Graphene, awarded the 2010 Nobel Prize in Physics?",
      "options": [
        "Diamond subjected to high pressure",
        "A hollow spherical carbon cage",
        "A rolled-up carbon tube",
        "A single atom-thick two-dimensional sheet of sp²-bonded carbon atoms arranged in a hexagonal honeycomb lattice"
      ],
      "correctIndex": 3,
      "explanation": "Isolated by Geim and Novoselov in 2004, graphene is a 2D material with zero bandgap Dirac cone electrons, extreme tensile strength (130 GPa), and thermal conductivity over 5,000 W/m·K.",
      "hint": "A single atomic layer of graphite."
    },
    {
      "id": "am-7",
      "question": "What nuclear phenomenon occurs when two light atomic nuclei (such as Deuterium and Tritium) combine to form a heavier nucleus?",
      "options": [
        "Nuclear Fusion (yielding Helium-4, a high-energy neutron, and 17.6 MeV energy)",
        "Nuclear Fission",
        "Alpha Decay",
        "Beta Plus Decay"
      ],
      "correctIndex": 0,
      "explanation": "Thermonuclear fusion powers stars: ²H + ³H -> ⁴He (3.5 MeV) + ¹n (14.1 MeV), releasing energy from mass deficit per Einstein's E = mc².",
      "hint": "Powers the Sun and experimental ITER tokamak reactors."
    },
    {
      "id": "am-8",
      "question": "What type of radioactive decay involves an unstable neutron converting into a proton, emitting an electron and an antineutrino?",
      "options": [
        "Electron Capture",
        "Alpha (α) Decay",
        "Positron (β⁺) Emission",
        "Beta-Minus (β⁻) Decay"
      ],
      "correctIndex": 3,
      "explanation": "Mediated by the weak nuclear force: n -> p⁺ + e⁻ + ν_bar_e. The atomic number Z increases by 1 while mass number A remains unchanged (e.g. ¹⁴C -> ¹⁴N).",
      "hint": "Increases the atomic number by +1 while mass number stays constant."
    },
    {
      "id": "am-9",
      "question": "What is the Meissner Effect, the hallmark property of superconducting materials below their critical temperature (Tc)?",
      "options": [
        "The loss of all mass",
        "The complete expulsion of magnetic flux fields from the interior of the superconductor, causing magnetic levitation",
        "The absorption of light",
        "An exponential increase in electrical resistance"
      ],
      "correctIndex": 1,
      "explanation": "Superconductors exhibit zero electrical resistance and perfect diamagnetism below Tc, actively expelling magnetic fields and causing permanent magnets to levitate.",
      "hint": "Perfect diamagnetic expulsion of magnetic lines of force."
    },
    {
      "id": "am-10",
      "question": "Which fissile isotope of uranium is enriched to ~3-5% for commercial light-water nuclear power generation?",
      "options": [
        "Uranium-235",
        "Uranium-238",
        "Uranium-234",
        "Uranium-239"
      ],
      "correctIndex": 0,
      "explanation": "Only Uranium-235 (0.72% natural abundance) is readily fissile with thermal neutrons. Centrifuge enrichment increases ²³⁵U concentration to 3-5% for power reactors.",
      "hint": "The rare naturally occurring fissile uranium isotope."
    },
    {
      "id": "am-11",
      "question": "What are Quantum Dots in advanced materials chemistry?",
      "options": [
        "Single atoms of gold",
        "Subatomic particles inside protons",
        "Nanoscale semiconductor crystals (2-10 nm) whose optical and electronic bandgaps are size-tunable due to quantum confinement of exciton Bohr radii",
        "Black holes created in laboratories"
      ],
      "correctIndex": 2,
      "explanation": "Awarded the 2023 Nobel Prize (Bawendi, Brus, Ekimov), quantum dots emit pure saturated colors dictated solely by particle physical diameter, used in QLED television displays.",
      "hint": "Nanocrystals whose color depends directly on their physical size."
    },
    {
      "id": "am-12",
      "question": "What is the critical temperature (Tc) of the high-temperature ceramic superconductor YBCO (YBa2Cu3O7)?",
      "options": [
        "4 Kelvin",
        "93 Kelvin (-180°C), well above the boiling point of liquid nitrogen (77 K)",
        "273 Kelvin",
        "300 Kelvin"
      ],
      "correctIndex": 1,
      "explanation": "Discovered in 1987, YBCO was the first material to superconduct above the liquid nitrogen barrier (77 K), enabling inexpensive cryogenic cooling using liquid nitrogen instead of costly helium.",
      "hint": "Superconducts above the boiling point of liquid nitrogen (77 K)."
    },
    {
      "id": "am-13",
      "question": "Which element is added to iron along with at least 10.5% Chromium to form corrosion-resistant Stainless Steel?",
      "options": [
        "Mercury",
        "Lead",
        "Sodium",
        "Chromium (which forms a self-healing Cr2O3 passive oxide layer)"
      ],
      "correctIndex": 3,
      "explanation": "Chromium in stainless steel (>10.5%) reacts with atmospheric oxygen to form an invisible, self-repairing nanometer-thin Cr2O3 passivating film that prevents further rust oxidation.",
      "hint": "Forms a passive chromium oxide surface film."
    },
    {
      "id": "am-14",
      "question": "In semiconductor chemistry, what is an \"n-type\" semiconductor created by doping pure silicon with Group 15 elements (like Phosphorus or Arsenic)?",
      "options": [
        "A pure insulator that conducts no current",
        "A semiconductor with positively charged holes as majority carriers",
        "A semiconductor where extra valence electrons provide negative majority charge carriers",
        "A semiconductor made of solid nitrogen"
      ],
      "correctIndex": 2,
      "explanation": "Doping tetravalent Silicon with pentavalent Phosphorus introduces unbonded fifth valence electrons into the conduction band, producing negative (n-type) majority carriers.",
      "hint": "Doped with an element that has five valence electrons."
    },
    {
      "id": "am-15",
      "question": "What is a \"p-type\" semiconductor created by doping pure silicon with Group 13 elements (like Boron or Gallium)?",
      "options": [
        "A semiconductor containing electron vacancies (\"holes\") acting as positive majority charge carriers",
        "A semiconductor with extra free electrons",
        "A semiconductor containing phosphorus",
        "A liquid semiconductor alloy"
      ],
      "correctIndex": 0,
      "explanation": "Trivalent Boron creates an electron deficiency or positive \"hole\" in the silicon valence band that attracts adjacent electrons, acting as a positive charge carrier.",
      "hint": "Trivalent dopant creating electron vacancies (holes)."
    },
    {
      "id": "am-16",
      "question": "What are Metal-Organic Frameworks (MOFs)?",
      "options": [
        "Plastic polymers containing iron",
        "Solid steel building beams",
        "Crystalline porous coordination networks of metal nodes linked by organic ligands possessing immense internal surface areas (>7000 m²/g)",
        "Biological enzymes in bones"
      ],
      "correctIndex": 2,
      "explanation": "MOFs feature customizable cage-like nanostructures with internal surface areas exceeding 7,000 square meters per gram, used for carbon capture, gas storage, and water harvesting from desert air.",
      "hint": "Ultra-porous crystalline coordination networks."
    },
    {
      "id": "am-17",
      "question": "What is the nuclear half-life of Carbon-14 (¹⁴C) used in radiocarbon dating of archaeological artifacts?",
      "options": [
        "4.5 billion years",
        "24,000 years",
        "100 years",
        "5,730 years"
      ],
      "correctIndex": 3,
      "explanation": "Carbon-14 decays to Nitrogen-14 via beta decay with a half-life of 5,730 ± 40 years, enabling accurate age determination of organic samples up to ~50,000 years old.",
      "hint": "Approximately 5,730 years."
    },
    {
      "id": "am-18",
      "question": "What is the role of the Heavy Water (D2O) moderator in Canadian CANDU nuclear reactors?",
      "options": [
        "Cooling the exterior concrete dome",
        "Slowing fast fission neutrons down to thermal energies without wastefully absorbing them, allowing use of unenriched natural uranium",
        "Acting as nuclear fuel itself",
        "Generating heavy hydrogen isotopes"
      ],
      "correctIndex": 1,
      "explanation": "Deuterium in D2O has an extremely low neutron capture cross-section compared to ordinary protium (H2O), moderating neutrons with minimal absorption so natural 0.7% ²³⁵U fuel can be used.",
      "hint": "Slows neutrons without capturing them, enabling natural uranium fuel."
    },
    {
      "id": "am-19",
      "question": "What is Shape Memory Alloy (SMA) Nitinol composed of?",
      "options": [
        "Near-equiatomic Nickel and Titanium (NiTi)",
        "Copper and Zinc brass",
        "Iron and Carbon steel",
        "Aluminium and Magnesium"
      ],
      "correctIndex": 0,
      "explanation": "Nitinol (Nickel Titanium Naval Ordnance Laboratory) undergoes a reversible solid-state martensitic to austenitic phase transformation, returning to its pre-deformed shape upon mild heating.",
      "hint": "An alloy of Nickel and Titanium."
    },
    {
      "id": "am-20",
      "question": "What is Perovskite solar cell technology, a major breakthrough in next-generation photovoltaics?",
      "options": [
        "Silicon panels made from sea sand",
        "Hybrid organic-inorganic lead halide crystals (ABX3) with high absorption coefficients and laboratory solar efficiencies exceeding 26%",
        "Solar panels that only absorb green light",
        "Plastic mirrors reflecting sunlight"
      ],
      "correctIndex": 1,
      "explanation": "Possessing the ABX3 crystal structure (like methylammonium lead iodide), perovskites achieve >26% power conversion efficiency in tandem cells with low-temperature solution printability.",
      "hint": "Crystals named after Russian mineralogist L.A. Perovski sharing the ABX3 structure."
    }
  ]
};
