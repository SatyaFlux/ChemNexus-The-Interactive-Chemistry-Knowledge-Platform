// src/services/assistantService.js
import { elementsData } from '@/data/elementsData';
import { reactionsData } from '@/data/reactionsData';
import { formatChemicalFormula } from '@/utils/chemistryUtils';

// Local Intelligent Chemistry Knowledge Engine
function answerWithLocalChemistryEngine(query) {
  const q = query.toLowerCase().trim();

  // 1. Check for specific element queries (e.g., "tell me about gold", "what is Fe", "carbon properties")
  const matchedElement = elementsData.find((el) => {
    const nameMatch = q.includes(el.name.toLowerCase());
    const symbolRegex = new RegExp(`\\b${el.symbol.toLowerCase()}\\b`, 'i');
    const symbolMatch = symbolRegex.test(q);
    const numberMatch = q.includes(`element ${el.number}`) || q.includes(`atomic number ${el.number}`);
    return nameMatch || symbolMatch || numberMatch;
  });

  if (matchedElement) {
    const el = matchedElement;
    const compounds = el.importantCompounds?.map(c => `${c.name} (${c.formula})`).join(', ') || 'None';
    const uses = el.applications?.slice(0, 3).join('; ') || 'Various industrial applications';

    return `### **${el.name} (${el.symbol}) — Atomic #${el.number}**
- **Category:** ${el.category.replace(/-/g, ' ').toUpperCase()}
- **Atomic Mass:** ${el.atomicMass} u
- **Electron Configuration:** \`${el.electronConfiguration}\`
- **State (STP):** ${el.state}
- **Electronegativity:** ${el.electronegativity ?? 'N/A'} (Pauling scale)
- **Melting / Boiling:** ${el.meltingPoint ?? 'N/A'} K / ${el.boilingPoint ?? 'N/A'} K

**Overview:**
${el.summary}

**Occurrence & Extraction:**
${el.occurrence} ${el.extraction}

**Key Applications:**
${uses}.

**Key Compounds:**
${compounds}.

👉 *You can view the full profile and animated Bohr atomic model on the [${el.name} Details Page](/element/${el.symbol}).*`;
  }

  // 2. Periodic Trends
  if (q.includes('electronegativity')) {
    return `### **Electronegativity Trend in the Periodic Table**
Electronegativity measures the tendency of an atom in a molecule to attract shared pairs of electrons towards itself.

- **Across a Period (Left to Right):** **Increases**, because nuclear charge (protons) increases while the valence shell remains at the same distance, creating a stronger electrostatic pull on bonding electrons.
- **Down a Group (Top to Bottom):** **Decreases**, because additional electron energy shells are added, increasing atomic radius and electron shielding, which weakens the nuclear attraction on outer electrons.
- **Extreme Elements:** **Fluorine (F)** is the most electronegative element (3.98 Pauling), while **Cesium (Cs)** and **Francium (Fr)** are the least electronegative (~0.79).`;
  }

  if (q.includes('radius') || q.includes('atomic size')) {
    return `### **Atomic Radius Trend**
- **Across a Period (Left to Right):** **Decreases.** As protons are added across the same principal quantum shell, effective nuclear charge ($Z_{eff}$) increases, pulling the electron clouds closer to the nucleus.
- **Down a Group (Top to Bottom):** **Increases.** Each new period adds an entire principal quantum shell ($n$), significantly enlarging the electron cloud radius.
- **Largest vs Smallest:** **Cesium/Francium** have the largest atomic radii, while **Helium/Hydrogen** have the smallest.`;
  }

  if (q.includes('ionization') || q.includes('ionization energy')) {
    return `### **First Ionization Energy Trend**
First ionization energy is the energy required to remove the most loosely held valence electron from an isolated gaseous atom ($X_{(g)} \\rightarrow X^+_{(g)} + e^-$).

- **Across a Period:** **Generally increases** due to higher effective nuclear charge and smaller radius. *(Notable exceptions occur at half-filled or filled subshells, such as N having higher ionization energy than O).*
- **Down a Group:** **Decreases**, as outer electrons reside farther from the nucleus and experience more inner-shell electron shielding.
- **Highest:** **Helium (He)** at 2372.3 kJ/mol.
- **Lowest:** **Cesium (Cs)** at 375.7 kJ/mol.`;
  }

  // 3. Chemical Reactions & Balancing
  const matchedReaction = reactionsData.find(rx => {
    return q.includes(rx.title.toLowerCase()) ||
           rx.relatedElements.some(sym => q.includes(sym.toLowerCase()) && q.includes('reaction'));
  });

  if (matchedReaction || q.includes('balance') || q.includes('reaction')) {
    const rx = matchedReaction || reactionsData[0];
    return `### **Chemical Reaction Insight: ${rx.title}**
**Balanced Equation:**
\`${rx.equation}\`

- **Reaction Type:** ${rx.type}
- **Conditions:** ${rx.conditions}
- **Reactants:** ${rx.reactants.join(' + ')}
- **Products:** ${rx.products.join(' + ')}

**Mechanism & Context:**
${rx.explanation}

👉 *Explore more reactions in our dedicated [Chemical Reactions Database](/reactions).*`;
  }

  // 4. Fundamental Definitions
  if (q.includes('mole') || q.includes('avogadro')) {
    return `### **The Mole & Avogadro's Number**
A mole is the SI base unit for amount of substance. Exactly one mole contains **$6.02214076 \\times 10^{23}$** elementary entities (Avogadro's constant $N_A$).
- The mass in grams of 1 mole of any substance is numerically equivalent to its atomic or molecular mass in atomic mass units (u). For example, 1 mole of Carbon-12 weighs exactly 12 grams.`;
  }

  if (q.includes('le chatelier')) {
    return `### **Le Chatelier's Principle**
*If a dynamic equilibrium is disturbed by changing conditions (concentration, temperature, or pressure), the position of equilibrium moves to counteract the change.*
- **Concentration:** Adding a reactant shifts equilibrium towards products.
- **Pressure:** Increasing pressure shifts equilibrium towards the side with fewer moles of gas.
- **Temperature:** Increasing temperature favors the endothermic direction.`;
  }

  if (q.includes('allotrope')) {
    return `### **Allotropes**
Allotropes are different structural forms of the same chemical element in the same physical state.
- **Carbon:** Diamond (tetrahedral $sp^3$), Graphite (planar hexagonal $sp^2$), Graphene, Fullerenes (C60), and Carbon Nanotubes.
- **Oxygen:** Diatomic Oxygen ($O_2$) and Ozone ($O_3$).
- **Phosphorus:** White phosphorus ($P_4$), Red phosphorus (polymeric chain), and Black phosphorus.`;
  }

  // General helpful chemistry guide
  return `### **ChemNexus Chemistry Assistant**
I can assist you with:
1. **Element Inquiries:** Ask about any of the 118 elements (e.g. *"Tell me about Lithium"* or *"Properties of Platinum"*).
2. **Periodic Trends:** Ask about *electronegativity*, *ionization energy*, or *atomic radii*.
3. **Chemical Reactions:** Ask about *Haber process*, *combustion*, *thermite*, or *neutralization*.
4. **Core Concepts:** Ask about *allotropes*, *Le Chatelier's principle*, or *the mole concept*.
5. **Interactive Learning:** Try taking our [Chemistry Quizzes](/quizzes) to test your skills!`;
}

export const assistantService = {
  async sendMessage(message, history = []) {
    try {
      // Attempt serverless API call first
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          return { text: data.reply, isAI: true };
        }
      }
    } catch {
      // In local Vite dev without vercel dev server, fetch('/api/assistant') will 404
      // Gracefully fall back to local chemistry knowledge engine
    }

    // Fallback to local built-in chemistry knowledge engine
    const localReply = answerWithLocalChemistryEngine(message);
    return { text: localReply, isAI: false };
  },
};

export default assistantService;

