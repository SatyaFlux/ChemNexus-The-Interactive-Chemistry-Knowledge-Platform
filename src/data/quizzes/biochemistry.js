// src/data/quizzes/biochemistry.js
// 20 Comprehensive Questions on Biochemistry, Enzymes, Biomolecules & Cellular Metabolism

export const biochemistryQuiz = {
  id: 'biochemistry',
  title: 'Biochemistry, Enzymes & Molecular Biology',
  description: 'Master amino acids, protein folding, enzyme kinetics, Chargaff’s DNA rules, glycolysis, ATP synthesis, and lipid metabolism.',
  category: 'Biochemistry',
  difficulty: 'Intermediate',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'bio-1',
      question: 'In protein biochemistry, what non-covalent interactions predominantly stabilize secondary structures such as alpha-helices and beta-pleated sheets?',
      options: [
        'Hydrogen bonds between backbone carbonyl oxygens and amide hydrogens (C=O···H-N)',
        'Covalent disulfide bridges',
        'Hydrophobic aromatic pi-stacking interactions',
        'Coordinate bonds with zinc cations'
      ],
      correctIndex: 0,
      explanation: 'Secondary structures are stabilized by repeating hydrogen bonds between backbone peptide carbonyl (-C=O) and amide (-NH) groups, independent of side-chain R groups.',
      hint: 'Hydrogen bonding along the peptide backbone.'
    },
    {
      id: 'bio-2',
      question: 'What type of chemical reaction links two amino acids together to form a peptide bond?',
      options: [
        'Condensation (Dehydration Synthesis) eliminating a water molecule',
        'Electrophilic Aromatic Substitution',
        'Free-Radical Halogenation',
        'Reductive Cleavage'
      ],
      correctIndex: 0,
      explanation: 'Ribosomal peptide bond formation is a condensation reaction where the alpha-amino group of one amino acid attacks the carboxyl group of another, eliminating H2O.',
      hint: 'Joining two biological monomers by eliminating water.'
    },
    {
      id: 'bio-3',
      question: 'According to Chargaff’s Rules in double-stranded DNA, which nitrogenous bases form specific complementary base pairs?',
      options: [
        'Adenine pairs with Thymine (2 H-bonds); Guanine pairs with Cytosine (3 H-bonds)',
        'Adenine pairs with Guanine; Cytosine pairs with Thymine',
        'Uracil pairs with Guanine; Adenine pairs with Cytosine',
        'All four bases pair interchangeably without specificity'
      ],
      correctIndex: 0,
      explanation: 'Purine Adenine pairs with pyrimidine Thymine via two hydrogen bonds, and purine Guanine pairs with pyrimidine Cytosine via three hydrogen bonds.',
      hint: 'A-T (2 H-bonds) and G-C (3 H-bonds).'
    },
    {
      id: 'bio-4',
      question: 'How do biological enzyme catalysts accelerate the rate of biochemical reactions by orders of magnitude?',
      options: [
        'By stabilizing the transition state and dramatically lowering the Gibbs free energy of activation (ΔG‡)',
        'By raising the overall standard free energy of the products',
        'By making non-spontaneous endergonic reactions spontaneous',
        'By heating the cellular cytoplasm to high temperatures'
      ],
      correctIndex: 0,
      explanation: 'Enzymes bind substrate molecules within their active sites, providing optimal spatial orientation and strain that lowers the activation energy barrier (ΔG‡) without altering overall ΔG.',
      hint: 'Enzymes lower the transition state activation energy barrier.'
    },
    {
      id: 'bio-5',
      question: 'Which chemical bonds within Adenosine Triphosphate (ATP) release large quantities of free energy upon hydrolysis to drive cellular metabolic work?',
      options: [
        'Phosphoanhydride bonds connecting the terminal phosphate groups',
        'Carbon-carbon single bonds in the ribose sugar ring',
        'Covalent glycosidic bonds linking adenine to ribose',
        'Peptide amide bonds'
      ],
      correctIndex: 0,
      explanation: 'Hydrolysis of the phosphoanhydride bonds linking the beta and gamma phosphates of ATP releases ~30.5 kJ/mol of free energy (ΔG°\' = -30.5 kJ/mol).',
      hint: 'High-energy bonds linking adjacent phosphate groups.'
    },
    {
      id: 'bio-6',
      question: 'In the Michaelis-Menten enzyme kinetics equation v = (Vmax * [S]) / (Km + [S]), what does the Michaelis constant (Km) represent?',
      options: [
        'The substrate concentration at which the reaction velocity is exactly half of the maximum velocity (1/2 Vmax)',
        'The maximum possible velocity of the enzyme',
        'The number of active sites on the enzyme',
        'The molecular weight of the substrate'
      ],
      correctIndex: 0,
      explanation: 'Km is the substrate concentration at which v = Vmax / 2. A lower Km indicates higher enzyme affinity for its substrate.',
      hint: 'Substrate concentration at half-maximal velocity.'
    },
    {
      id: 'bio-7',
      question: 'What metabolic pathway converts one molecule of glucose (6 carbons) into two molecules of pyruvate (3 carbons), producing net 2 ATP and 2 NADH?',
      options: ['Glycolysis (Embden-Meyerhof-Parnas pathway)', 'The Krebs Citric Acid Cycle', 'Beta-Oxidation', 'The Calvin Cycle'],
      correctIndex: 0,
      explanation: 'Glycolysis is the universal, evolutionarily ancient anaerobic metabolic sequence occurring in the cytoplasm, generating 2 net ATP via substrate-level phosphorylation.',
      hint: 'The universal cytoplasmic glucose-splitting pathway.'
    },
    {
      id: 'bio-8',
      question: 'Which covalent linkage connects adjacent nucleotide subunits along the sugar-phosphate backbone of a DNA or RNA strand?',
      options: ['3\',5\'-Phosphodiester Bond', 'Peptide Bond', 'Disulfide Bond', 'Glycosidic Bond'],
      correctIndex: 0,
      explanation: 'DNA and RNA polymers are assembled by phosphodiester bridges linking the 3\'-hydroxyl of one deoxyribose/ribose sugar to the 5\'-phosphate of the next.',
      hint: 'Bridges between 3\' and 5\' carbons of adjacent sugars.'
    },
    {
      id: 'bio-9',
      question: 'Which amino acid is the only standard proteinogenic amino acid that lacks a chiral stereocenter and is optically inactive?',
      options: ['Glycine (H on side chain)', 'Alanine', 'Proline', 'Cysteine'],
      correctIndex: 0,
      explanation: 'Glycine’s alpha-carbon is bonded to two identical hydrogen atoms (side chain R = -H), making it achiral and optically inactive.',
      hint: 'The simplest amino acid with a hydrogen atom as its side chain.'
    },
    {
      id: 'bio-10',
      question: 'What covalent bond forms between the thiol side chains of two cysteine residues to stabilize the tertiary and quaternary structure of extracellular proteins?',
      options: ['Disulfide Bridge (-S-S-)', 'Phosphodiester Bond', 'Ester Linkage', 'Ionic Salt Bridge'],
      correctIndex: 0,
      explanation: 'Oxidation of two cysteine -SH groups forms a covalent disulfide bridge (-S-S-), crucial for stabilizing antibodies, insulin, and keratin hair proteins.',
      hint: 'Covalent bond between two sulfur atoms.'
    },
    {
      id: 'bio-11',
      question: 'What is the principal biological function of the enzyme ATP Synthase in the inner mitochondrial membrane?',
      options: [
        'Utilizing a proton-motive electrochemical gradient across the membrane to synthesize ATP from ADP and inorganic phosphate',
        'Pumping protons out of the matrix into the cytoplasm',
        'Breaking down glucose directly',
        'Transporting oxygen to red blood cells'
      ],
      correctIndex: 0,
      explanation: 'Peter Mitchell’s Chemiosmotic Hypothesis proved that protons flowing down their electrochemical gradient rotate the F0F1 ATP Synthase rotary motor to generate ATP.',
      hint: 'The molecular rotary motor powered by proton flow.'
    },
    {
      id: 'bio-12',
      question: 'Which lipid class forms the structural bilayer matrix of biological cell membranes due to its amphipathic nature?',
      options: [
        'Phospholipids (polar hydrophilic head group and two hydrophobic fatty acid tails)',
        'Triglycerides only',
        'Steroid hormones only',
        'Free fatty acids'
      ],
      correctIndex: 0,
      explanation: 'Phospholipids self-assemble in aqueous environments into a fluid lipid bilayer, shielding their hydrophobic hydrocarbon tails while exposing hydrophilic phosphate heads.',
      hint: 'Molecules with hydrophilic heads and hydrophobic tails.'
    },
    {
      id: 'bio-13',
      question: 'What type of reversible enzyme inhibition occurs when an inhibitor binds directly to the active site, competing with the natural substrate?',
      options: [
        'Competitive Inhibition (increases apparent Km without altering Vmax)',
        'Non-competitive Inhibition',
        'Uncompetitive Inhibition',
        'Allosteric Irreversible Inhibition'
      ],
      correctIndex: 0,
      explanation: 'Competitive inhibitors resemble the substrate and compete for the catalytic pocket; increasing substrate concentration overcomes the inhibition, so Vmax is unchanged.',
      hint: 'Can be overcome by adding high concentrations of substrate.'
    },
    {
      id: 'bio-14',
      question: 'What is the primary storage polysaccharide of D-glucose in animal liver and skeletal muscle cells?',
      options: ['Glycogen (highly branched alpha-1,4 and alpha-1,6 polymer)', 'Starch', 'Cellulose', 'Chitin'],
      correctIndex: 0,
      explanation: 'Glycogen is a heavily branched polymer of glucose serving as the immediate source of glucose during fasting or strenuous exercise.',
      hint: 'The "animal starch" stored in liver and muscles.'
    },
    {
      id: 'bio-15',
      question: 'Which water-soluble B-vitamin serves as the chemical precursor for the central metabolic redox coenzyme NAD⁺ (Nicotinamide Adenine Dinucleotide)?',
      options: ['Niacin (Vitamin B3)', 'Riboflavin (Vitamin B2)', 'Thiamine (Vitamin B1)', 'Folic Acid (Vitamin B9)'],
      correctIndex: 0,
      explanation: 'Dietary niacin (nicotinic acid / nicotinamide) is synthesized into NAD⁺ and NADP⁺, vital cellular hydride (H⁻) carriers in catabolic dehydrogenase reactions.',
      hint: 'Vitamin B3, deficiency causes pellagra.'
    },
    {
      id: 'bio-16',
      question: 'What is the structural basis for the cooperative oxygen-binding curve (sigmoidal shape) of Hemoglobin?',
      options: [
        'Allosteric quaternary conformational transition between the low-affinity T (Tense) state and high-affinity R (Relaxed) state',
        'Oxygen covalently bonding irreversibly to iron',
        'Hemoglobin dissolving in cellular lipids',
        'Each subunit operating completely independently'
      ],
      correctIndex: 0,
      explanation: 'Oxygen binding to one iron atom pulls the proximal histidine, triggering a concerted quaternary structural transition from the low-affinity T state to the high-affinity R state.',
      hint: 'Allosteric transition between T and R conformational states.'
    },
    {
      id: 'bio-17',
      question: 'What are Zwitterions in amino acid biochemistry?',
      options: [
        'Dipolar ions that carry both a positive charge (-NH3⁺) and a negative charge (-COO⁻) simultaneously at physiological pH, with net zero charge',
        'Negatively charged ions only',
        'Amino acids containing heavy isotopes',
        'Synthetic peptide drugs'
      ],
      correctIndex: 0,
      explanation: 'At physiological pH (~7.4), free amino acids exist predominantly as zwitterions with protonated amino groups (-NH3⁺) and deprotonated carboxyl groups (-COO⁻).',
      hint: 'From the German "zwitter" meaning hybrid or hermaphrodite.'
    },
    {
      id: 'bio-18',
      question: 'What type of RNA molecule carries the specific genetic triplet codons transcribed from nuclear DNA to the ribosome for protein translation?',
      options: ['Messenger RNA (mRNA)', 'Transfer RNA (tRNA)', 'Ribosomal RNA (rRNA)', 'MicroRNA (miRNA)'],
      correctIndex: 0,
      explanation: 'Messenger RNA (mRNA) carries the genetic protein blueprint from genomic DNA in the nucleus to ribosomes in the cytoplasm.',
      hint: 'Carries the genetic message.'
    },
    {
      id: 'bio-19',
      question: 'Which metabolic cycle takes place in the mitochondrial matrix to oxidize acetyl-CoA into CO2, producing NADH, FADH2, and GTP?',
      options: ['The Citric Acid Cycle (Krebs Cycle / TCA Cycle)', 'Glycolysis', 'The Urea Cycle', 'The Pentose Phosphate Pathway'],
      correctIndex: 0,
      explanation: 'Hans Krebs elucidated this 8-step cycle where acetyl-CoA condenses with oxaloacetate to form citrate, generating reducing equivalents for the electron transport chain.',
      hint: 'Discovered by Hans Krebs in 1937.'
    },
    {
      id: 'bio-20',
      question: 'What process converts glucose-6-phosphate into Ribose-5-phosphate for nucleotide synthesis and generates NADPH for anabolic reductive biosynthesis?',
      options: ['The Pentose Phosphate Pathway (Phosphogluconate Pathway)', 'Beta-Oxidation', 'Lactic Acid Fermentation', 'Gluconeogenesis'],
      correctIndex: 0,
      explanation: 'The Pentose Phosphate Pathway operates in parallel with glycolysis to generate NADPH (for fatty acid synthesis and glutathione antioxidant protection) and 5-carbon ribose sugars.',
      hint: 'Generates NADPH and 5-carbon pentose sugars.'
    }
  ]
};
