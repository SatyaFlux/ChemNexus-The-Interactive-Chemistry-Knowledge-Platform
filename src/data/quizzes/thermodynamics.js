// src/data/quizzes/thermodynamics.js
// 20 Comprehensive Questions on Thermodynamics, Kinetics, Enthalpy & Entropy

export const thermodynamicsQuiz = {
  id: 'thermodynamics-kinetics',
  title: 'Thermodynamics & Reaction Kinetics',
  description: 'Master Gibbs free energy, enthalpy of reaction, entropy changes, rate laws, half-life, and activation energy.',
  category: 'Physical Chemistry',
  difficulty: 'Advanced',
  estimatedMinutes: 15,
  questions: [
    {
      id: 'tk-1',
      question: 'Under standard conditions, a chemical process is thermodynamically spontaneous when Gibbs Free Energy (ΔG) is:',
      options: ['Negative (ΔG < 0)', 'Positive (ΔG > 0)', 'Zero (ΔG = 0)', 'Equal to the enthalpy of formation'],
      correctIndex: 0,
      explanation: 'A negative change in Gibbs free energy (ΔG < 0) signifies an exergonic process that can proceed spontaneously without external continuous energy input.',
      hint: 'Spontaneous reactions release free energy.'
    },
    {
      id: 'tk-2',
      question: 'In the Arrhenius equation k = A * exp(-Ea / RT), what does a plot of ln(k) versus (1 / T) yield?',
      options: [
        'A straight line with a slope equal to (-Ea / R)',
        'A horizontal line equal to the gas constant R',
        'A curve whose inflection point gives entropy',
        'A vertical asymptote at absolute zero'
      ],
      correctIndex: 0,
      explanation: 'Taking the natural logarithm: ln(k) = ln(A) - (Ea / R)(1/T). Plotting ln(k) vs 1/T yields a linear slope of -Ea / R.',
      hint: 'Linear form: y = m*x + b where x = (1/T).'
    },
    {
      id: 'tk-3',
      question: 'What fundamental law states that the total enthalpy change for a chemical reaction is independent of the pathway taken?',
      options: [
        'Hess’s Law of Constant Heat Summation',
        'Le Chatelier’s Principle',
        'Raoult’s Law',
        'Avogadro’s Hypothesis'
      ],
      correctIndex: 0,
      explanation: 'Because enthalpy (H) is a thermodynamic state function, Hess’s Law allows calculating overall reaction enthalpy by summing individual steps.',
      hint: 'Named after Russian chemist Germain Hess in 1840.'
    },
    {
      id: 'tk-4',
      question: 'How does adding a catalyst affect the equilibrium constant (K_eq) of a reversible chemical reaction?',
      options: [
        'It does not change K_eq at all',
        'It increases K_eq significantly',
        'It decreases K_eq by stabilizing reactants',
        'It inverts K_eq into 1 / K_eq'
      ],
      correctIndex: 0,
      explanation: 'A catalyst lowers the activation energy equally for both forward and reverse reactions, speeding up rates without altering thermodynamic equilibrium K_eq.',
      hint: 'Catalysts influence rate (kinetics), not equilibrium position (thermodynamics).'
    },
    {
      id: 'tk-5',
      question: 'What does the Second Law of Thermodynamics state regarding an isolated system?',
      options: [
        'The total entropy of an isolated system always increases in spontaneous processes',
        'Energy can neither be created nor destroyed',
        'The entropy of a perfect crystal at absolute zero is zero',
        'Matter is conserved in all chemical reactions'
      ],
      correctIndex: 0,
      explanation: 'The Second Law states that any spontaneous natural process leads to an increase in the total entropy of the universe (isolated system).',
      hint: 'Relates to universal disorder and the thermodynamic arrow of time.'
    },
    {
      id: 'tk-6',
      question: 'What is the relationship between the rate constant (k) and half-life (t_1/2) for a first-order chemical reaction?',
      options: [
        't_1/2 = 0.693 / k (independent of initial reactant concentration)',
        't_1/2 = 1 / (k * [A]0)',
        't_1/2 = [A]0 / (2k)',
        't_1/2 = k * [A]0'
      ],
      correctIndex: 0,
      explanation: 'For first-order reactions, integrated rate law gives t_1/2 = ln(2) / k ≈ 0.693 / k. The half-life is constant regardless of starting concentration.',
      hint: 'Nuclear radioactive decay is a first-order process.'
    },
    {
      id: 'tk-7',
      question: 'Under what conditions of enthalpy (ΔH) and entropy (ΔS) is a chemical reaction spontaneous at ALL temperatures?',
      options: [
        'ΔH is negative (exothermic) and ΔS is positive (increasing disorder)',
        'ΔH is positive (endothermic) and ΔS is negative',
        'Both ΔH and ΔS are positive',
        'Both ΔH and ΔS are negative'
      ],
      correctIndex: 0,
      explanation: 'In ΔG = ΔH - TΔS, if ΔH < 0 and ΔS > 0, the term (-TΔS) is always negative, ensuring ΔG is negative at any positive absolute temperature.',
      hint: 'Exothermic with increasing disorder.'
    },
    {
      id: 'tk-8',
      question: 'What is the overall reaction order if the rate law is determined to be: Rate = k [A]² [B]¹?',
      options: ['Third order (2 + 1 = 3)', 'Second order', 'First order', 'Fourth order'],
      correctIndex: 0,
      explanation: 'The overall reaction order is the sum of exponents of reactant concentrations in the experimentally determined rate law (2 + 1 = 3).',
      hint: 'Sum the concentration exponents in the rate law.'
    },
    {
      id: 'tk-9',
      question: 'What does the Third Law of Thermodynamics define?',
      options: [
        'The entropy of a perfect, pure crystalline substance at absolute zero (0 Kelvin) is exactly zero',
        'Energy cannot be created or destroyed',
        'Entropy always increases in spontaneous processes',
        'Temperature is proportional to volume'
      ],
      correctIndex: 0,
      explanation: 'At 0 K, thermal motion ceases and a perfect crystal has only one accessible microstate (W = 1), so S = k ln(1) = 0.',
      hint: 'Establishes absolute zero entropy for flawless crystals.'
    },
    {
      id: 'tk-10',
      question: 'What is the standard enthalpy of formation (ΔHf°) of any pure chemical element in its most stable standard reference state?',
      options: ['Exactly 0.0 kJ/mol (by definition)', '+100 kJ/mol', '-50 kJ/mol', 'Equal to its atomic mass'],
      correctIndex: 0,
      explanation: 'By international convention, the standard enthalpy of formation of an element in its standard reference state (e.g. O2(g), C(graphite), Fe(s) at 298 K, 1 atm) is 0.',
      hint: 'Standard thermodynamic reference baseline.'
    },
    {
      id: 'tk-11',
      question: 'If a chemical reaction has an equilibrium constant K > 1, what does this indicate about standard free energy change (ΔG°)?',
      options: [
        'ΔG° is negative (products favored at equilibrium)',
        'ΔG° is positive (reactants favored)',
        'ΔG° is zero',
        'The reaction cannot occur'
      ],
      correctIndex: 0,
      explanation: 'From ΔG° = -RT ln(K), when K > 1, ln(K) is positive, making ΔG° negative and indicating products are thermodynamically favored.',
      hint: 'Use ΔG° = -RT ln(K).'
    },
    {
      id: 'tk-12',
      question: 'What are the SI units of the rate constant (k) for a second-order chemical reaction?',
      options: ['M⁻¹·s⁻¹ (L·mol⁻¹·s⁻¹)', 's⁻¹', 'M·s⁻¹', 'M⁻²·s⁻¹'],
      correctIndex: 0,
      explanation: 'For Rate (M/s) = k [A]², units of k = (M/s) / M² = M⁻¹·s⁻¹ (or L/(mol·s)).',
      hint: 'Rate has units of M/s.'
    },
    {
      id: 'tk-13',
      question: 'What is the activation energy (Ea) in Transition State Theory?',
      options: [
        'The minimum kinetic energy required by colliding reactant molecules to form the activated transition state complex',
        'The net heat released by the reaction',
        'The energy needed to boil the solvent',
        'The total bond energy of products'
      ],
      correctIndex: 0,
      explanation: 'Activation energy represents the energy barrier that colliding particles must overcome to reach the transition state geometry and form products.',
      hint: 'The height of the energy hill between reactants and products.'
    },
    {
      id: 'tk-14',
      question: 'In an endothermic reaction (ΔH > 0), how is the activation energy of the forward reaction related to the reverse reaction?',
      options: [
        'Forward Ea is greater than reverse Ea (Ea_fwd = Ea_rev + ΔH)',
        'Reverse Ea is greater than forward Ea',
        'Forward and reverse Ea are identical',
        'Forward Ea is always zero'
      ],
      correctIndex: 0,
      explanation: 'In an endothermic reaction, products sit at a higher energy than reactants, so the forward barrier exceeds the reverse barrier by exactly ΔH.',
      hint: 'Products are higher in potential energy than reactants.'
    },
    {
      id: 'tk-15',
      question: 'Which of the following processes results in an increase in system entropy (ΔS > 0)?',
      options: [
        'Sublimation of solid dry ice into carbon dioxide gas: CO2(s) -> CO2(g)',
        'Freezing of liquid water into ice',
        'Condensation of steam into liquid water',
        'Synthesis of ammonia gas from N2 and H2'
      ],
      correctIndex: 0,
      explanation: 'Sublimation converts a rigid crystalline solid into freely moving gas particles, vastly increasing positional disorder and microstates (ΔS > 0).',
      hint: 'Transition from solid to gas increases disorder.'
    },
    {
      id: 'tk-16',
      question: 'What is the rate-determining step in a multi-step chemical reaction mechanism?',
      options: [
        'The slowest elementary step with the highest activation energy barrier',
        'The fastest elementary step',
        'The final product-releasing step',
        'The step involving solvent molecules'
      ],
      correctIndex: 0,
      explanation: 'The slowest step acts as the kinetic bottleneck, controlling the overall reaction rate and determining the observed rate law.',
      hint: 'The bottleneck step in the reaction pathway.'
    },
    {
      id: 'tk-17',
      question: 'What happens to the rate constant (k) of a chemical reaction when temperature increases?',
      options: [
        'k increases exponentially because a larger fraction of molecules possess kinetic energy exceeding Ea',
        'k decreases because molecules move too fast',
        'k remains constant',
        'k drops to zero at high temperatures'
      ],
      correctIndex: 0,
      explanation: 'Per the Maxwell-Boltzmann distribution and Arrhenius law, higher temperature increases the proportion of collisions with energy ≥ Ea, raising k.',
      hint: 'Maxwell-Boltzmann distribution shifts to higher kinetic energies.'
    },
    {
      id: 'tk-18',
      question: 'What is the relationship between constant-pressure heat capacity (Cp) and constant-volume heat capacity (Cv) for one mole of an ideal gas?',
      options: ['Cp - Cv = R (Molar gas constant)', 'Cp = Cv', 'Cp / Cv = R', 'Cp + Cv = R'],
      correctIndex: 0,
      explanation: 'At constant pressure, gas does expansion work (PΔV = RΔT) when heated, requiring R more Joules per mole per Kelvin: Cp - Cv = R.',
      hint: 'Mayer’s relation for ideal gases.'
    },
    {
      id: 'tk-19',
      question: 'For a zero-order chemical reaction (Rate = k), how does reaction rate depend on reactant concentration?',
      options: [
        'Rate is completely independent of reactant concentration',
        'Rate is directly proportional to concentration',
        'Rate quadruples when concentration doubles',
        'Rate is inversely proportional to concentration'
      ],
      correctIndex: 0,
      explanation: 'In zero-order kinetics, rate = k [A]⁰ = k. The reaction proceeds at a constant speed regardless of concentration, often limited by saturated catalyst surfaces.',
      hint: '[A] raised to the power of 0 equals 1.'
    },
    {
      id: 'tk-20',
      question: 'What is the equation for the change in entropy when heat (q_rev) is transferred reversibly at constant absolute temperature (T)?',
      options: ['ΔS = q_rev / T', 'ΔS = q_rev * T', 'ΔS = T / q_rev', 'ΔS = ΔH * T'],
      correctIndex: 0,
      explanation: 'By Clausius thermodynamic definition, entropy change is defined as the reversible heat absorbed divided by absolute temperature: dS = dq_rev / T.',
      hint: 'Units of entropy are Joules per Kelvin (J/K).'
    }
  ]
};
