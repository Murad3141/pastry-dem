# pastry-react

A pixel-perfect React conversion of The Pastry website (thepastry.nl).

## Project Structure

```
pastry-react/
├── index.html          ← STANDALONE: Open directly in browser (uses CDN)
├── public/
│   ├── index.html      ← React app HTML template
│   ├── css/            ← All original CSS files preserved
│   ├── js/             ← All original JS files preserved
│   ├── images/         ← All original images preserved
│   └── html/           ← Original sub-pages preserved
├── src/
│   ├── App.jsx         ← Main React component (full site HTML as JSX)
│   ├── index.js        ← React entry point
│   └── index.css       ← Extra inline styles from original
└── package.json        ← React project config
```

## How to Run

### Option 1: Standalone (No build required)
Open `index.html` directly via a local HTTP server:

```bash
cd pastry-react
npx serve .          # or
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

> Note: Must use a server (not file://) due to module loading

### Option 2: React Development Server
```bash
cd pastry-react
npm install
npm start
```

### Option 3: Production Build
```bash
cd pastry-react
npm install
npm run build
# Serve the build/ folder
```

## Features Preserved
- ✅ All 9 cake product sections (Honeycomb, Rosebox, Mondrian, Triangles, Heart, Origami, Cherries, Cluster)
- ✅ Desktop & Mobile navigation with hamburger menu
- ✅ Product image rotator/slider (prev/next arrows)
- ✅ "More Info" button - reveals product details with fade animation
- ✅ "Add to Cart" button functionality
- ✅ Cart modal with close button
- ✅ Mobile product modals
- ✅ About Us section with scrollable text
- ✅ Contact section
- ✅ Cookie consent banner
- ✅ Fixed side navigation dots
- ✅ All original CSS, fonts, and assets
- ✅ Fully responsive (mobile + desktop layouts)
- ✅ All hover effects and transitions
- ✅ Slick slider on mobile for product images

## Technical Notes
- All original CSS files loaded in exact original order
- All original JS files (jQuery, Slick, Fancybox, custom scripts) preserved
- React renders the JSX, original jQuery scripts handle all interactions
- Images reference both local assets and CDN fallbacks
