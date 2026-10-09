// src/data/quizzes/acidsBases.js

export const acidsBasesQuiz = {
  "id": "acids-and-bases",
  "title": "Acids, Bases, pH & Buffer Solutions",
  "description": "Master pH calculations, buffer systems, Henderson-Hasselbalch equation, acid-base theories, and indicators.",
  "category": "Analytical Chemistry",
  "difficulty": "Intermediate",
  "estimatedMinutes": 15,
  "questions": [
    {
      "id": "ab-1",
      "question": "What is the pH of a 0.001 M aqueous solution of strong hydrochloric acid (HCl) at 25°C?",
      "options": [
        "3.0",
        "1.0",
        "7.0",
        "11.0"
      ],
      "correctIndex": 0,
      "explanation": "Strong acid HCl dissociates 100%: [H⁺] = 0.001 M = 10⁻³ M. Therefore, pH = -log(10⁻³) = 3.0.",
      "hint": "Formula: pH = -log[H⁺]."
    },
    {
      "id": "ab-2",
      "question": "Which equation is used to calculate the pH of an acid-base buffer system containing a weak acid and its conjugate base?",
      "options": [
        "Nernst Equation: E = E° - (RT/nF) ln(Q)",
        "Arrhenius Rate Equation: k = A exp(-Ea / RT)",
        "Henderson-Hasselbalch Equation: pH = pKa + log([Base] / [Acid])",
        "Van der Waals Equation"
      ],
      "correctIndex": 2,
      "explanation": "The Henderson-Hasselbalch equation connects pH, weak acid pKa, and the ratio of conjugate base to weak acid.",
      "hint": "Derived from the Ka equilibrium expression."
    },
    {
      "id": "ab-3",
      "question": "How does the Lewis acid-base theory define an acid?",
      "options": [
        "A proton (H⁺) donor",
        "An electron-pair acceptor",
        "A hydroxide (OH⁻) donor",
        "An electron-pair donor"
      ],
      "correctIndex": 1,
      "explanation": "G.N. Lewis defined an acid as any chemical species capable of accepting a pair of electrons (e.g. BF3, AlCl3, H⁺).",
      "hint": "Focuses on electron pairs rather than protons."
    },
    {
      "id": "ab-4",
      "question": "What is the conjugate acid of the hydrogen phosphate ion (HPO4²⁻)?",
      "options": [
        "OH⁻",
        "PO4³⁻ (Phosphate ion)",
        "H3PO4 (Phosphoric acid)",
        "H2PO4⁻ (Dihydrogen phosphate ion)"
      ],
      "correctIndex": 3,
      "explanation": "A conjugate acid is formed when a base accepts one proton (H⁺). Adding H⁺ to HPO4²⁻ yields H2PO4⁻.",
      "hint": "Add one H⁺ and increase charge by +1."
    },
    {
      "id": "ab-5",
      "question": "What is the autoionization ion product of pure water (Kw) at standard 25°C?",
      "options": [
        "1.0 × 10⁻¹⁴",
        "1.0 × 10⁻⁷",
        "7.0",
        "14.0"
      ],
      "correctIndex": 0,
      "explanation": "In pure water at 25°C, [H⁺][OH⁻] = Kw = 1.0 × 10⁻¹⁴, explaining why pH + pOH = 14.0 at 25°C.",
      "hint": "Relates to neutral pH being 7.0."
    },
    {
      "id": "ab-6",
      "question": "What is the pH of a 0.01 M sodium hydroxide (NaOH) solution at 25°C?",
      "options": [
        "14.0",
        "2.0",
        "7.0",
        "12.0"
      ],
      "correctIndex": 3,
      "explanation": "NaOH dissociates completely: [OH⁻] = 0.01 M = 10⁻² M. pOH = -log(10⁻²) = 2.0. Then pH = 14 - pOH = 14 - 2 = 12.0.",
      "hint": "Find pOH first, then subtract from 14."
    },
    {
      "id": "ab-7",
      "question": "Which of the following mixtures forms an effective buffer solution resisting pH changes?",
      "options": [
        "Hydrochloric acid (HCl) and Sodium chloride (NaCl)",
        "Acetic acid (CH3COOH) and Sodium acetate (CH3COONa)",
        "Sodium hydroxide (NaOH) and Sodium chloride (NaCl)",
        "Sulfuric acid (H2SO4) and Sodium sulfate (Na2SO4)"
      ],
      "correctIndex": 1,
      "explanation": "An effective buffer requires a weak acid and its conjugate base (or weak base and conjugate acid). Acetic acid and acetate form a classic buffer system.",
      "hint": "A weak acid paired with its conjugate base salt."
    },
    {
      "id": "ab-8",
      "question": "What happens to the pH of pure water when it is heated from 25°C to 60°C?",
      "options": [
        "pH decreases slightly (below 7.0) because autoionization is endothermic, but water remains neutral",
        "pH increases above 7.0 and becomes alkaline",
        "pH remains exactly 7.0",
        "pH drops to 1.0"
      ],
      "correctIndex": 0,
      "explanation": "Autoionization (H2O <-> H⁺ + OH⁻) is endothermic. Heating increases Kw (~10⁻¹³ at 60°C), so [H⁺] rises and pH drops (~6.5), yet [H⁺] = [OH⁻], so water remains strictly neutral.",
      "hint": "Higher temperature drives endothermic autoionization forward."
    },
    {
      "id": "ab-9",
      "question": "Which of the following is categorized as a strong diprotic acid that dissociates completely in its first ionization step?",
      "options": [
        "Carbonic acid (H2CO3)",
        "Phosphoric acid (H3PO4)",
        "Sulfuric acid (H2SO4)",
        "Acetic acid (CH3COOH)"
      ],
      "correctIndex": 2,
      "explanation": "Sulfuric acid dissociates completely in its first step (H2SO4 -> H⁺ + HSO4⁻) with Ka1 >> 1, acting as a strong mineral diprotic acid.",
      "hint": "A dense oily mineral acid also called oil of vitriol."
    },
    {
      "id": "ab-10",
      "question": "What color does the indicator phenolphthalein turn in an alkaline aqueous solution (pH > 10)?",
      "options": [
        "Colorless",
        "Vibrant Pink / Magenta",
        "Deep Blue",
        "Bright Yellow"
      ],
      "correctIndex": 1,
      "explanation": "Phenolphthalein is colorless in acidic and neutral solutions (pH < 8.2) and turns vivid pink/magenta in basic solutions (pH 8.2-10).",
      "hint": "Commonly used in strong acid - strong base titrations."
    },
    {
      "id": "ab-11",
      "question": "What is the conjugate base of the ammonium ion (NH4⁺)?",
      "options": [
        "NH5²⁺",
        "NH2⁻ (Amide ion)",
        "N2 (Nitrogen gas)",
        "NH3 (Ammonia)"
      ],
      "correctIndex": 3,
      "explanation": "A conjugate base is formed when an acid loses a proton (H⁺). NH4⁺ - H⁺ = NH3.",
      "hint": "Remove one H⁺ from NH4⁺."
    },
    {
      "id": "ab-12",
      "question": "What is the principal physiological buffer system regulating human arterial blood pH between 7.35 and 7.45?",
      "options": [
        "Hydrochloric acid buffer system",
        "Phosphate buffer system",
        "Carbonic acid - Bicarbonate buffer system (H2CO3 / HCO3⁻)",
        "Acetate buffer system"
      ],
      "correctIndex": 2,
      "explanation": "The carbonic acid-bicarbonate buffer coupled with pulmonary ventilation of CO2 maintains human blood in the tight window of pH 7.35-7.45.",
      "hint": "Regulated by respiration and renal bicarbonate reabsorption."
    },
    {
      "id": "ab-13",
      "question": "Which of the following salt solutions produces a basic solution (pH > 7) when dissolved in water due to anion hydrolysis?",
      "options": [
        "Sodium acetate (CH3COONa)",
        "Ammonium chloride (NH4Cl)",
        "Sodium chloride (NaCl)",
        "Potassium nitrate (KNO3)"
      ],
      "correctIndex": 0,
      "explanation": "Sodium acetate is the salt of a strong base (NaOH) and a weak acid (CH3COOH). The acetate anion hydrolyzes: CH3COO⁻ + H2O <-> CH3COOH + OH⁻, producing basic pH.",
      "hint": "Salt of a strong base and a weak acid."
    },
    {
      "id": "ab-14",
      "question": "What is the pKa of an acid whose dissociation constant Ka is 1.0 × 10⁻⁵?",
      "options": [
        "9.0",
        "-5.0",
        "5.0",
        "1.0"
      ],
      "correctIndex": 2,
      "explanation": "pKa = -log(Ka) = -log(1.0 × 10⁻⁵) = 5.0.",
      "hint": "Formula: pKa = -log(Ka)."
    },
    {
      "id": "ab-15",
      "question": "According to the Bronsted-Lowry definition, an amphoteric substance is one that can:",
      "options": [
        "Never change color",
        "Dissolve in any organic solvent",
        "React only with noble gases",
        "Act as either a proton donor (acid) or a proton acceptor (base)"
      ],
      "correctIndex": 3,
      "explanation": "Amphoteric species (such as H2O, HCO3⁻, HSO4⁻) can either donate a proton or accept a proton depending on the chemical environment.",
      "hint": "Water acts as an acid with NH3 and a base with HCl."
    },
    {
      "id": "ab-16",
      "question": "Why is hydrofluoric acid (HF) classified as a weak acid in dilute aqueous solution, unlike HCl or HBr?",
      "options": [
        "Fluorine has a low electronegativity",
        "The H-F covalent bond is exceptionally strong and the small F⁻ ion forms tight, solvent-separated ion pairs [H3O⁺···F⁻]",
        "HF is a solid at room temperature",
        "Fluorine has no valence electrons"
      ],
      "correctIndex": 1,
      "explanation": "The extreme H-F bond strength (567 kJ/mol) and electrostatic ion-pairing between H3O⁺ and small F⁻ prevent complete free proton dissociation in dilute water.",
      "hint": "High bond dissociation energy and strong ion pairing."
    },
    {
      "id": "ab-17",
      "question": "In an acid-base titration, what is the \"Equivalence Point\"?",
      "options": [
        "The exact point where stoichiometric moles of acid and base neutralize each other completely",
        "The point where the indicator first changes color",
        "When the burette runs completely empty",
        "When the solution boils"
      ],
      "correctIndex": 0,
      "explanation": "The equivalence point is the theoretical stoichiometric completion point, whereas the \"endpoint\" is where the visual indicator changes color.",
      "hint": "Stoichiometric equivalence of H⁺ and OH⁻."
    },
    {
      "id": "ab-18",
      "question": "What is the pH at the equivalence point of a titration between a strong acid (HCl) and a weak base (NH3)?",
      "options": [
        "Neutral (pH = 7)",
        "Acidic (pH < 7)",
        "Basic (pH > 7)",
        "pH = 14"
      ],
      "correctIndex": 1,
      "explanation": "Neutralization produces ammonium chloride (NH4Cl). The ammonium ion hydrolyzes: NH4⁺ + H2O <-> NH3 + H3O⁺, generating an acidic solution at equivalence.",
      "hint": "The conjugate acid of the weak base hydrolyzes to release H⁺."
    },
    {
      "id": "ab-19",
      "question": "What is a \"Superacid\"?",
      "options": [
        "Concentrated vinegar",
        "Any acid that explodes in water",
        "An acid with an acidity greater than that of 100% pure sulfuric acid (Hammett acidity H0 < -12)",
        "Battery acid containing lead"
      ],
      "correctIndex": 2,
      "explanation": "Superacids (such as fluoroantimonic acid, HSbF6, H0 = -31) possess protonating ability billions of times stronger than pure sulfuric acid, protonating even methane.",
      "hint": "Acidity exceeding 100% anhydrous sulfuric acid."
    },
    {
      "id": "ab-20",
      "question": "What is the pH of a solution where the hydronium ion concentration [H3O⁺] is 2.0 × 10⁻⁴ M?",
      "options": [
        "4.00",
        "4.30",
        "2.00",
        "3.70"
      ],
      "correctIndex": 3,
      "explanation": "pH = -log(2.0 × 10⁻⁴) = -[log(2.0) + log(10⁻⁴)] = -[0.301 - 4] = 4 - 0.301 = 3.699 ≈ 3.70.",
      "hint": "Calculate -log(2 × 10⁻⁴)."
    }
  ]
};
