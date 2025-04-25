# 🌍 Navi – Your Smart Travel Notebook

**Navi** is a beautifully designed cross-platform mobile app that revolutionises how travellers plan and experience their trips. With a warm, journal-inspired aesthetic, Navi blends powerful features with an intuitive, spontaneous interface.

This is the official React landing page for Navi, built with Vite.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v8+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/navi-website-react.git
cd navi-website-react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit the `.env` file with your API keys.

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

### Environment Variables

- `VITE_APPLE_MAPS_KEY`: Your Apple Maps API key

---

## ✨ Core Features

- **Smart Trip Management**  
  Organise trips with custom names and dates in an elegant interface.

- **Intelligent Place Organisation**  
  Add and categorise places with notes:
  - 🏨 Places to Stay  
  - 🍴 Places to Eat  
  - 🏛️ Places to Visit  
  - 📸 Photo Spots

- **Magic Screenshot Import**  
  Upload travel screenshots (e.g., TikToks, Instagram), extract location info using AI, and add them to your trips.

- **Interactive Map Experience**  
  Real-time map with colour-coded pins and quick access to directions.

- **Smart Notifications**  
  Get alerts when you're near saved places with customizable thresholds.

- **AI Travel Assistant**  
  Natural language assistant for suggestions, questions, and smart routing.

- **Travel Journal**  
  Document your adventures with photos and personal notes.

---

## 🧰 Tech Stack

- **React** - UI framework
- **Vite** - Build tool and development server
- **Styled Components** - CSS-in-JS styling
- **Apple Maps API** - Interactive mapping
- **Web APIs** - For native features like lazy loading

---

## 📁 Project Structure

```
navi-website-react/
├── src/
│   ├── assets/
│   │   └── images/ - Optimized WebP images
│   ├── components/
│   │   ├── common/ - Reusable components
│   │   └── styled/ - Styled components
│   └── styles/
│       ├── GlobalStyles.jsx - Global CSS
│       └── theme.js - Design tokens
└── public/ - Static assets
```

---

## 👋 Stay Spontaneous

Navi is all about flexibility, fun, and being in the moment. Whether you're exploring a new city or planning your next adventure, Navi is your perfect travel companion. 🌍

---