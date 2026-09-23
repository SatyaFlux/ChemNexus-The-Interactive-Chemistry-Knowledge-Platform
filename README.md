# ChemNexus — The Interactive Chemistry Knowledge Platform

> **“Explore Every Element. Understand Every Reaction.”**

ChemNexus is a centralized, research-grade chemistry knowledge platform designed to provide students, researchers, and educators with an exhaustive, unified interface for chemical sciences. Built from the ground up as a production-ready application, ChemNexus eliminates the need to visit multiple disparate websites to study periodic trends, reaction stoichiometry, electron configurations, and industrial extraction methodologies.

---

## 🔬 Core Features

* **Complete 118-Element Periodic Table:**
  * All 118 elements cataloged with IUPAC standard atomic weights, electron configurations, and periodic groupings.
  * 18-column desktop grid with distinct Lanthanide and Actinide series blocks.
  * Property Heatmap Mode: Toggle visual gradients by Electronegativity, First Ionization Energy, Atomic Radius, Density, Melting Point, and Boiling Point.
  * Multi-dimensional filtering: by Category, Block ($s, p, d, f$), and State of Matter at STP (Solid, Liquid, Gas).
  * Alternative responsive view modes: Interactive Grid, Card Grid, and Compact Table List.

* **Dedicated Element Profile Explorer (`/element/:symbol`):**
  * **10 Deep Analysis Tabs:**
    1. *Overview:* Key parameters, atomic mass, periodic position, and scientific summary.
    2. *Physical Properties:* Melting/boiling points (in K, °C, °F), density, atomic radius, and ionization energy.
    3. *Chemical Properties:* Pauling electronegativity, oxidation states, electron affinity, and valence behavior.
    4. *Atomic Structure:* Noble gas configuration, subshell breakdown, and an **interactive animated SVG Bohr Electron Shell Model** with orbiting valence electrons.
    5. *Occurrence & Extraction:* Natural cosmic and crustal abundances, mineral ores, and commercial metallurgical extraction processes.
    6. *Representative Reactions:* Balanced chemical equations with conditions and mechanism descriptions.
    7. *Essential Compounds:* Formulas, IUPAC names, and practical utility.
    8. *Everyday & High-Tech Applications:* Industrial, aerospace, semiconductor, and medical applications.
    9. *History & Discovery:* Discoverers, discovery year, historical context, and name origins.
    10. *Safety & Hazards:* GHS classifications, toxicological warnings, and handling precautions.
  * Seamless Next / Previous element navigation arrows.

* **Chemical Reaction Database & Explorer (`/reactions`):**
  * Verified database of classic synthesis, decomposition, single/double displacement, combustion, redox, and acid-base neutralization reactions.
  * Formatted balanced equations with clear reactants, products, catalysts, and temperature/pressure conditions.
  * One-click copying of chemical equations.
  * Linked element chips allowing instant navigation from reactions back to participating elements.

* **Interactive Chemistry Quiz Engine (`/quizzes` & `/quiz/:id`):**
  * Multi-category quiz suites: Periodic Trends, Element Fundamentals, Chemical Reactions, and Advanced Materials.
  * Instant feedback with educational explanations and hints.
  * Real-time score calculation and celebratory confetti animations upon completion.
  * Automatic synchronization of quiz scores and historical performance to Supabase PostgreSQL.

* **Secure AI Chemistry Assistant (`/assistant`):**
  * Specialized chemistry query assistant for balancing reactions, clarifying concepts, and explaining trends.
  * **Zero-Secret Architecture:** Serverless Vercel function (`api/assistant.js`) securely handles external AI API keys without ever exposing secrets to frontend code.
  * **Built-in Offline Knowledge Engine:** Includes a fallback chemical heuristic engine that responds accurately to element questions, trends, definitions, and reactions even without an external API key configured.

* **Student Learning Dashboard (`/dashboard`):**
  * Tracks total elements explored ($X / 118$) with real-time percentage progress.
  * Block mastery breakdown ($s, p, d, f$).
  * Bookmarked elements management with one-click removal.
  * Recent quiz history records and average score accuracy.
  * Suggested next elements to explore.

* **Authentication & Row Level Security (RLS):**
  * Supabase Authentication (Sign Up, Sign In, Sign Out, Session Persistence).
  * Protected routes for personalized study data.
  * PostgreSQL Row Level Security (RLS) policies guaranteeing that bookmarks, learning progress, and quiz history are strictly isolated to each student.
  * Guest Demo Mode: Instant one-click exploration for presentations and offline testing without mandatory login.

---

## 🛠 Technology Stack

* **Frontend:** React 18, Vite 6, Tailwind CSS, Lucide React Icons, Canvas Confetti
* **Routing:** React Router v6 (SPA with Vercel rewrites)
* **Backend / Database:** Supabase (PostgreSQL, Supabase Auth, Row Level Security)
* **Serverless Functions:** Vercel Serverless Functions (`api/assistant.js`)
* **Deployment:** Fully optimized for zero-configuration Vercel deployment

---

## 📁 Project Structure

```
Minor Project/
├── api/
│   └── assistant.js           # Vercel Serverless Function for secure AI processing
├── public/
│   ├── favicon.svg            # Scientific atom SVG branding icon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── assistant/         # AI Assistant chat components
│   │   ├── common/            # Navbar, Footer, ProtectedRoute, SkeletonLoader
│   │   ├── dashboard/         # QuickStats, ProgressOverview, RecentActivity
│   │   ├── element-detail/    # ElementDetailTabs, BohrAtomModel
│   │   ├── periodic-table/    # PeriodicTableGrid, ElementCell, PeriodicFilters, MobileElementList
│   │   ├── quiz/              # QuizCard, QuizSession, QuizScoreSummary
│   │   └── reactions/         # ReactionCard, ReactionEquation
│   ├── context/
│   │   ├── AuthContext.jsx    # Supabase auth + guest mode fallback
│   │   ├── BookmarkContext.jsx# Element bookmarking synced to Supabase / LocalStorage
│   │   └── ProgressContext.jsx# Explored elements and quiz results tracking
│   ├── data/
│   │   ├── elementsData.js    # Verified dataset for ALL 118 elements
│   │   ├── reactionsData.js   # Verified chemical reaction database
│   │   └── quizzesData.js     # Categorized chemistry quiz questions
│   ├── lib/
│   │   └── supabase.js        # Supabase client and database service helpers
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── AssistantPage.jsx
│   │   ├── BookmarksPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── ElementDetailPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PeriodicTablePage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── QuizDetailPage.jsx
│   │   ├── QuizzesPage.jsx
│   │   ├── ReactionsPage.jsx
│   │   ├── SearchPage.jsx
│   │   └── SignupPage.jsx
│   ├── styles/
│   │   └── index.css          # Tailwind CSS and chemistry styling
│   ├── utils/
│   │   ├── chemistryUtils.js  # Formula formatting, unit converters, heatmaps
│   │   └── storageUtils.js    # Offline/guest local storage helpers
│   ├── App.jsx                # Route hierarchy and layout wrapper
│   └── main.jsx               # React DOM entry point
├── supabase/
│   ├── schema.sql             # Complete PostgreSQL database schema with RLS
│   └── seed.sql               # Verification queries and seed script
├── .env.example               # Environment variables template
├── .gitignore                 # Standard exclusions (node_modules, dist, .env)
├── index.html                 # HTML shell with meta headers
├── package.json               # Root dependencies & build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind theme & chemistry color tokens
├── vercel.json                # Vercel SPA rewrites & serverless routing
└── vite.config.js             # Vite configuration with @ path alias
```

---

## 🚀 Quickstart & Local Installation

### Prerequisites
* Node.js version 18 or higher (Node v20+ recommended)
* npm version 9+

### 1. Clone & Install Dependencies
Run the following in the project root:
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Populate `.env` with your Supabase credentials (optional for initial offline/guest preview):
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Optional: Server-side AI Key (Never prefix with VITE_)
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with ChemNexus!

### 4. Build for Production
```bash
npm run build
```
Verify the production build locally:
```bash
npm run preview
```

---

## 🗄️ Supabase PostgreSQL & Row Level Security (RLS) Setup

To connect a Supabase project:

1. Create a free project at [supabase.com](https://supabase.com).
2. Navigate to the **SQL Editor** tab in your Supabase dashboard.
3. Open the file `supabase/schema.sql` from this repository.
4. Copy the SQL script, paste it into the Supabase SQL editor, and click **Run**.
5. The script automatically creates:
   * `profiles` (with automatic profile trigger on signup)
   * `bookmarks` (with user isolation)
   * `learning_progress` (viewed and mastered elements tracking)
   * `quiz_results` (quiz completion history)
   * `user_preferences` (settings and unit preferences)
   * All associated performance indexes and strict Row Level Security (RLS) policies.
6. Retrieve your Project URL and Anon Public Key from **Project Settings -> API** and add them to your `.env` or Vercel environment variables.

---

## ☁️ Vercel Deployment Instructions

ChemNexus is specifically engineered for simple, error-free deployment to **Vercel**:

### Method 1: Deploy via GitHub (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial ChemNexus commit"
   git branch -M main
   git remote add origin https://github.com/your-username/chemnexus.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `chemnexus` GitHub repository.
4. Set the Framework Preset to **Vite**.
5. In **Environment Variables**, add:
   * `VITE_SUPABASE_URL`
   * `VITE_SUPABASE_ANON_KEY`
   * `GEMINI_API_KEY` (Optional for serverless AI)
6. Click **Deploy**. Vercel will run `npm install` and `npm run build`, and your application will be live immediately!

---

## 🔍 Verification & Audit Checklist

- [x] All 118 elements cataloged with verified scientific properties.
- [x] Responsive 18-group periodic table with heatmaps and mobile views.
- [x] Multi-tab element detail system with animated SVG Bohr atom visualizer.
- [x] Chemical reaction database with balanced equations and element linking.
- [x] Interactive quiz system with explanations, scoring, and history.
- [x] Student dashboard with real metrics, block progress, and bookmarks.
- [x] Supabase Auth + PostgreSQL schema with Row Level Security.
- [x] Intelligent guest/demo mode fallback for zero-configuration evaluation.
- [x] Secure serverless AI Assistant with zero client secret exposure.
- [x] Vercel SPA routing configured via `vercel.json`.
- [x] Successful local production build (`npm run build`).

---

## 📜 Scientific Reference Standards

* **Nomenclature & Weights:** International Union of Pure and Applied Chemistry (IUPAC)
* **Atomic Spectra & Ionization:** National Institute of Standards and Technology (NIST)
* **Thermodynamic Data:** CRC Handbook of Chemistry and Physics (104th Edition)
* **Safety Classifications:** Globally Harmonized System of Classification and Labelling of Chemicals (GHS)

#   C h e m N e x u s - T h e - I n t e r a c t i v e - C h e m i s t r y - K n o w l e d g e - P l a t f o r m  
 