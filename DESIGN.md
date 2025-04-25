
# 🎨 Navi Design Kit

## 1. Brand Overview

Name: Navi  
Tagline: *Inspired, not planned*  
Tone: Friendly, intelligent, quietly stylish  
Inspiration: Hoxton Hotels, Claude, Flighty, retro-modern design

---

## 2. Color Palette

Sand – `#F3EBDD` (Background / base)  
Cocoa – `#3C2F2F` (Primary text / icons)  
Clay – `#D3785F` (Accent / buttons)  
Sage – `#9FBF9F` (Highlights / links)  
Ivory – `#FFFDF9` (Cards / secondary elements)

Use soft, low-contrast tones — avoid pure white or black.

---

## 3. Typography

Headline 1 – Playfair Display, 32–40px – App name, titles  
Headline 2 – Playfair Display, 24–28px – Page headers  
Body – Inter, 16–18px – Paragraphs, content  
Button – Inter Medium, 16px – Buttons  
Caption – Inter, 14px – Notes, metadata

Retro serif for branding + clean sans for content.

---

## 4. Spacing & Sizing

Spacing XS: 4px  
Spacing S: 8px  
Spacing M: 16px  
Spacing L: 24px  
Spacing XL: 32px  
Corner Radius: 12px  
Border Width: 1px  
Button Height: 48px

Use plenty of whitespace — the layout should feel calm and open.

---

## 5. UI Components

### Buttons

Primary – Clay background, Ivory text  
Secondary – Ivory background, Cocoa text with 1px Cocoa border  
Ghost – Transparent background, Cocoa text

Example JSX:
```
<Button variant="primary">Add Place</Button>
<Button variant="ghost">Upload Screenshot</Button>
<Button variant="link">View on Map</Button>
```

### Cards

Trip Card – Rounded corners, light shadow, title, 1–2 place previews  
Place Card – Name, category icon, pin, note preview

### Map Pins

Rounded pins in Clay, Sage, or Cocoa  
Category icon inside (e.g. 🍕 🧗 🛍)  
Tap = Details card with directions option

### AI Assistant

Chat bubble UI on retro beige  
AI responses styled in Sage with ✨ icon  
Input bar is fixed, rounded, and soft colored

### Notifications

Minimalist toast with rounded edge  
Example: 📍 You're near a saved place: Central Park Zoo

---

## 6. Navigation UI

Bottom Tab Bar Icons:
- Home 🏠
- Map 🗺
- Add ➕
- Assistant 💬
- Profile 👤

Large tappable icons with labels beneath.

---

## 7. Mobile Breakpoints

Default layout: iPhone 13+  
Horizontal padding: 16px  
Most screens: Scrollable

---

## 8. Assets to Prepare

- App icon (1024x1024)
- Dark and light SVG logo
- Category icons (food, activity, shopping, etc.)
- Launch animation (e.g. smiley pin bouncing in)

---

## 9. Developer Stack Alignment

UI Framework – React Native + React Native Paper  
Maps – react-native-maps  
Fonts – Google Fonts: Playfair Display + Inter  
Icons – Phosphor or Feather  
Theme – React Context or Tailwind-style tokens
