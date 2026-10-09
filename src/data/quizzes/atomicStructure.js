// src/data/quizzes/atomicStructure.js

export const atomicStructureQuiz = {
  "id": "atomic-structure",
  "title": "Quantum Atomic Structure & Orbitals",
  "description": "Master quantum numbers, electron configurations, Hund's rule, Pauli exclusion, Bohr radius, and orbital nodes.",
  "category": "Atomic Physics",
  "difficulty": "Intermediate",
  "estimatedMinutes": 15,
  "questions": [
    {
      "id": "as-1",
      "question": "What quantum rule states that no two electrons in an atom can have an identical set of all four quantum numbers?",
      "options": [
        "Heisenberg Uncertainty Principle",
        "Aufbau Principle",
        "Pauli Exclusion Principle",
        "De Broglie Relation"
      ],
      "correctIndex": 2,
      "explanation": "The Pauli Exclusion Principle dictates that each atomic orbital can hold at most two electrons, and they must have antiparallel spins (ms = +1/2, -1/2).",
      "hint": "Wolfgang Pauli won the 1945 Nobel Prize for this principle."
    },
    {
      "id": "as-2",
      "question": "According to the Aufbau Principle, which atomic orbital fills with electrons immediately after the 3p subshell in neutral ground-state atoms?",
      "options": [
        "3f",
        "3d",
        "4p",
        "4s"
      ],
      "correctIndex": 3,
      "explanation": "Following the (n + l) rule, 4s (4 + 0 = 4) is lower in energy than 3d (3 + 2 = 5) and is populated first (e.g. Potassium: [Ar] 4s¹).",
      "hint": "The (n + l) rule determines the filling order."
    },
    {
      "id": "as-3",
      "question": "What physical property of an electron orbital is determined primarily by the principal quantum number (n)?",
      "options": [
        "The overall size and main energy level of the electron shell",
        "The 3D spatial shape of the orbital",
        "The spatial orientation of the orbital in space",
        "The intrinsic spin direction of the electron"
      ],
      "correctIndex": 0,
      "explanation": "The principal quantum number (n = 1, 2, 3...) designates the electron shell, determining its average radial distance from the nucleus and energy.",
      "hint": "Higher n means larger average distance from the nucleus."
    },
    {
      "id": "as-4",
      "question": "What does the Heisenberg Uncertainty Principle establish regarding subatomic particles?",
      "options": [
        "The mass of an electron increases with speed",
        "Electrons travel in precise circular planetary orbits",
        "It is fundamentally impossible to simultaneously determine both the exact position and momentum of a particle",
        "Energy is emitted in continuous waves only"
      ],
      "correctIndex": 2,
      "explanation": "The wave-particle duality imposes a fundamental quantum limit (Δx · Δp ≥ ℏ / 2) on the simultaneous precision of conjugate position and momentum.",
      "hint": "Formulated by Werner Heisenberg in 1927."
    },
    {
      "id": "as-5",
      "question": "Why does Chromium (Z = 24) have a ground-state configuration of [Ar] 3d⁵ 4s¹ rather than [Ar] 3d⁴ 4s²?",
      "options": [
        "The 4s orbital is absent in transition metals",
        "A half-filled d-subshell (3d⁵) provides extra quantum mechanical exchange energy and orbital symmetry",
        "Chromium has fewer nuclear protons than Vanadium",
        "4s electrons pair up inside the nucleus"
      ],
      "correctIndex": 1,
      "explanation": "Promoting one 4s electron into 3d produces five parallel-spin electrons in 3d, maximizing stabilizing exchange energy and minimizing repulsion.",
      "hint": "Half-filled (d⁵) subshells have extra stability."
    },
    {
      "id": "as-6",
      "question": "What are the possible values for the orbital angular momentum quantum number (l) for a shell with n = 3?",
      "options": [
        "-1, 0, +1",
        "1, 2, 3",
        "0, 1",
        "0, 1, 2 (corresponding to s, p, and d subshells)"
      ],
      "correctIndex": 3,
      "explanation": "For any shell n, the angular momentum quantum number l ranges from 0 to (n - 1). For n = 3, l can be 0 (s), 1 (p), or 2 (d).",
      "hint": "l values range from 0 up to (n - 1)."
    },
    {
      "id": "as-7",
      "question": "What is the maximum number of electrons that can occupy a complete d subshell (l = 2)?",
      "options": [
        "10 electrons (5 orbitals × 2 electrons each)",
        "6 electrons",
        "14 electrons",
        "2 electrons"
      ],
      "correctIndex": 0,
      "explanation": "For l = 2, ml ranges from -2 to +2 (5 distinct magnetic orbitals). Each orbital holds 2 electrons, allowing a maximum of 10 electrons.",
      "hint": "Five orbitals with two electrons each."
    },
    {
      "id": "as-8",
      "question": "What does Hund’s Rule of Maximum Multiplicity dictate when degenerate orbitals of equal energy are being filled?",
      "options": [
        "Electrons fill higher energy orbitals first",
        "Electrons pair up immediately in the first orbital",
        "Electrons enter orbitals with opposite spins first",
        "Electrons occupy orbitals singly with parallel spins before pairing up"
      ],
      "correctIndex": 3,
      "explanation": "Hund’s rule states that the ground state configuration has the maximum number of unpaired electrons with parallel spins, minimizing Coulombic repulsion.",
      "hint": "Passengers filling empty bus seats before sharing."
    },
    {
      "id": "as-9",
      "question": "What spatial shape corresponds to an atomic orbital with l = 1 (p orbital)?",
      "options": [
        "Spherical",
        "Dumbbell-shaped (two lobes with a nodal plane)",
        "Cloverleaf-shaped with four lobes",
        "Donut-shaped ring"
      ],
      "correctIndex": 1,
      "explanation": "An l = 1 (p) orbital has two lobes oriented along a Cartesian axis (px, py, or pz) separated by a planar node at the nucleus.",
      "hint": "Two opposite lobes centered on the nucleus."
    },
    {
      "id": "as-10",
      "question": "What is the de Broglie wavelength equation relating the momentum (p = m*v) of a particle to its matter wave wavelength (λ)?",
      "options": [
        "λ = h / (m * v) = h / p",
        "λ = h * c / E",
        "λ = m * c²",
        "λ = h * v"
      ],
      "correctIndex": 0,
      "explanation": "Louis de Broglie proposed that matter exhibits wave properties, with wavelength inversely proportional to momentum: λ = h / p.",
      "hint": "Wavelength equals Planck’s constant divided by momentum."
    },
    {
      "id": "as-11",
      "question": "Why does Copper (Z = 29) possess a ground-state configuration of [Ar] 3d¹⁰ 4s¹ rather than [Ar] 3d⁹ 4s²?",
      "options": [
        "Copper cannot hold 4s electrons",
        "Copper is a noble gas",
        "A completely filled d-subshell (3d¹⁰) provides superior exchange stability and spherically symmetric charge distribution",
        "The 3d subshell is completely empty"
      ],
      "correctIndex": 2,
      "explanation": "A fully occupied 3d¹⁰ subshell confers dramatic thermodynamic and quantum exchange stability, favoring promotion of a 4s electron.",
      "hint": "Completely filled d¹⁰ configurations have high stability."
    },
    {
      "id": "as-12",
      "question": "How many radial nodes (spherical nodes) are present in a 3s atomic orbital?",
      "options": [
        "0",
        "2 radial nodes (Radial nodes = n - l - 1 = 3 - 0 - 1 = 2)",
        "1",
        "3"
      ],
      "correctIndex": 1,
      "explanation": "The number of radial nodes is given by the formula (n - l - 1). For 3s, n = 3 and l = 0, giving 3 - 0 - 1 = 2 radial nodes.",
      "hint": "Formula: Radial nodes = n - l - 1."
    },
    {
      "id": "as-13",
      "question": "How many angular nodes (nodal planes) are present in any d orbital (l = 2)?",
      "options": [
        "3",
        "0",
        "1",
        "2 angular nodes (Angular nodes = l = 2)"
      ],
      "correctIndex": 3,
      "explanation": "The number of angular nodes is equal to the angular momentum quantum number l. For d orbitals, l = 2, so there are exactly 2 angular nodes.",
      "hint": "Angular nodes equal the value of quantum number l."
    },
    {
      "id": "as-14",
      "question": "What is the Rydberg formula used to calculate in atomic physics?",
      "options": [
        "The atomic radius of uranium",
        "The mass of a neutron",
        "The wavelengths of spectral emission lines of hydrogen: 1/λ = R_H (1/n1² - 1/n2²)",
        "The velocity of sound in gases"
      ],
      "correctIndex": 2,
      "explanation": "Johannes Rydberg developed the formula predicting the wavelength of light emitted when an electron drops from higher level n2 to lower level n1 in hydrogen.",
      "hint": "Relates hydrogen emission spectra to principal energy levels."
    },
    {
      "id": "as-15",
      "question": "What is the Bohr radius (a0), the approximate radius of the ground-state electron orbit in a hydrogen atom?",
      "options": [
        "0.529 Ångströms (5.29 × 10⁻¹¹ m)",
        "1.00 Ångström",
        "0.01 Ångströms",
        "2.50 Ångströms"
      ],
      "correctIndex": 0,
      "explanation": "The Bohr radius a0 = 4πε0ℏ² / (m_e · e²) ≈ 0.529 Å (52.9 pm), representing the most probable radial distance of the 1s electron in hydrogen.",
      "hint": "Approximately half an Ångström (53 pm)."
    },
    {
      "id": "as-16",
      "question": "What does the magnetic quantum number (ml) specify for an electron in an atom?",
      "options": [
        "The electron spin direction",
        "The principal energy level",
        "The spatial orientation of the orbital in space relative to Cartesian axes",
        "The total number of protons"
      ],
      "correctIndex": 2,
      "explanation": "The magnetic quantum number ml (-l to +l) designates the spatial orientation of the orbital in an external magnetic field (e.g. px, py, pz).",
      "hint": "Determines the direction the orbital points in 3D space."
    },
    {
      "id": "as-17",
      "question": "What is the phenomenon where spectral emission lines split into multiple components in the presence of an external magnetic field?",
      "options": [
        "The Raman Effect",
        "The Photoelectric Effect",
        "The Compton Effect",
        "The Zeeman Effect"
      ],
      "correctIndex": 3,
      "explanation": "Pieter Zeeman discovered that magnetic fields lift the degeneracy of magnetic quantum states (ml), splitting single spectral lines into multiple frequencies.",
      "hint": "Named after Dutch physicist Pieter Zeeman (1902 Nobel Prize)."
    },
    {
      "id": "as-18",
      "question": "Which of the following elements has the ground-state configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³?",
      "options": [
        "Phosphorus (P, Z = 15)",
        "Arsenic (As, Z = 33)",
        "Selenium (Se, Z = 34)",
        "Germanium (Ge, Z = 32)"
      ],
      "correctIndex": 1,
      "explanation": "Summing electrons: 2+2+6+2+6+2+10+3 = 33 electrons, corresponding to Arsenic (As, Group 15, Period 4).",
      "hint": "Count total electrons: 33."
    },
    {
      "id": "as-19",
      "question": "What property does the spin quantum number (ms) describe, taking values of +1/2 or -1/2?",
      "options": [
        "The intrinsic angular momentum (magnetic spin) of the electron",
        "The circular orbit radius of the electron",
        "The nuclear charge",
        "The orbital angular momentum"
      ],
      "correctIndex": 0,
      "explanation": "Stern and Gerlach demonstrated that electrons possess an intrinsic two-valued magnetic moment, termed spin \"up\" (+1/2) and spin \"down\" (-1/2).",
      "hint": "Two opposite orientations in the Stern-Gerlach experiment."
    },
    {
      "id": "as-20",
      "question": "What is an atomic orbital node?",
      "options": [
        "The center of the atomic nucleus",
        "A spatial region or plane where the probability density of finding an electron (ψ²) is exactly zero",
        "The point of maximum electron density",
        "The outer edge of the valence shell"
      ],
      "correctIndex": 1,
      "explanation": "A node occurs where the wave function ψ passes through zero and changes mathematical sign, resulting in zero probability density (ψ² = 0).",
      "hint": "A point or surface of zero electron wave amplitude."
    }
  ]
};
