# Surprise Birthday Feature — `/surprise` & `/deepanjali`

A hidden, password-protected birthday surprise page built for Deepanjali.

---

## Routes

| Route | Component | File | Purpose |
|-------|-----------|------|---------|
| `/surprise` | `SurpriseLogin` | `src/components/SurpriseLogin.jsx` | Login/gate page |
| `/deepanjali` | `DeepanjaliLetter` | `src/components/DeepanjaliLetter.jsx` | The actual birthday letter page |

## Authentication

- **Username:** `deepanjali`
- **Password:** `14112002`
- Auth is stored in `sessionStorage` (`surprise_auth = 'true'`)
- Visiting `/deepanjali` directly without auth redirects to `/surprise`

## Tech Stack Used

- **React** + **React Router v6** (route protection via `useNavigate` + `sessionStorage`)
- **Framer Motion** (animations: `motion.div`, `useInView`, `AnimatePresence`, drag gestures)
- **Tailwind CSS** (styling, responsive design, glassmorphism)
- **Google Fonts** — Caveat (handwriting font for letter & captions)

## `/surprise` — Login Page

- Dark navy/slate gradient background (`#0f172a → #1e293b`)
- Animated sparkle particles (pink + blue dots)
- Glassmorphic login card with:
  - Animated 🎁 gift icon
  - Gradient title
  - Username ("Who are you?") + Password ("Secret code") fields
  - Shake animation on wrong credentials
  - Error message: "Hmm... that doesn't seem right 💭"
  - Gradient submit button (pink → fuchsia → blue)

## `/deepanjali` — Birthday Letter Page

### Page Flow (top to bottom)

1. **Heartbeat Splash Screen** — A 💗 heart pulses for 1.5s, bursts into 40 tiny hearts scattered across the full screen, shows "Someone special is about to read this...", then fades out (~4.5s total)

2. **Header** — "Happy Birthday, DeepaBoiii! 🎉" with gradient text + animated underline

3. **Dynamic Age Counter** — Shows years, months, days since 14/11/2002, updates every minute. Three glassmorphic cards with gradient numbers. "...and counting! ✨"

4. **Letter Section** — Glassmorphic card with:
   - Title: "Something I've Been Meaning to Say..."
   - Full letter content loaded from `letter.txt` (Caveat handwriting font)
   - Justified text alignment
   - Floating hearts animation inside
   - Sign-off: "Tera pyara bot.... 🤖"

5. **Our Memories — Polaroids** — 9 photos from `public/photos/1-9.jpg`
   - **Desktop (md+):** 3×3 grid of tilted polaroids with tape strip, hover straighten effect
   - **Mobile:** Stacked cards (Tinder-style swipe), 3 cards visible behind current, dot indicators + counter, swipe left/right to navigate
   - Each polaroid has a handwritten caption below the photo

6. **Confetti Burst** — 60 confetti particles (circles + rectangles, multicolor) burst when the final wish section scrolls into view (triggers once)

7. **Final Wish** — Glassmorphic card with pulsing 🥳 emoji, "Wishing you the happiest birthday ever!", "Built with sleepless nights & lots of love ❤️"

### Background Effects

- Dark gradient background (`#0f172a → #1e293b → #1a1f3d`)
- 35 floating particles (pink + blue) across the full page
- Floating hearts (pink-300) rising from bottom to top

## File Structure

```
src/
├── App.jsx                          # Routes: /surprise, /deepanjali
├── components/
│   ├── SurpriseLogin.jsx            # Login gate page
│   └── DeepanjaliLetter.jsx         # Birthday letter + memories page
public/
└── photos/
    ├── 1.jpg through 9.jpg          # Memory photos
letter.txt                           # Source text for the letter content
```

## Key Components (inside DeepanjaliLetter.jsx)

| Component | Purpose |
|-----------|---------|
| `Polaroid` | Polaroid-style photo card with tape, caption, tilt |
| `StackedCards` | Mobile swipeable card stack with drag gestures |
| `AgeCounter` | Dynamic years/months/days counter from DOB |
| `ConfettiBurst` | Scroll-triggered confetti animation |
| `HeartbeatIntro` | Splash screen with heartbeat + burst animation |

## Styling Theme

- **Background:** Dark navy/slate (`#0f172a`, `#1e293b`, `#1a1f3d`)
- **Accents:** Pink-300/400 (`#f472b6`, `#f9a8d4`) + Blue-400 (`#60a5fa`, `#93c5fd`)
- **Cards:** Glassmorphic (`backdrop-blur-xl bg-white/5 border border-pink-300/15`)
- **Text:** White/80 body, pink-300 headings/labels, gradient for titles
- **Font:** Caveat (handwriting) for letter + captions, system font for UI

## How to Add/Change Photos

1. Drop images into `public/photos/`
2. Update the `memories` array at the top of `DeepanjaliLetter.jsx`:
   ```js
   { src: '/photos/10.jpg', caption: 'Your caption here 🎉', rotate: 3 },
   ```

## How to Edit the Letter

Edit the `<p>` tags inside the letter section in `DeepanjaliLetter.jsx` (around line 230+). Each paragraph is a `<p className="text-white/80">` block.

## Responsive Design

- Mobile-first approach with Tailwind breakpoints (`sm:`, `md:`)
- Polaroids: stacked swipeable cards on mobile, 3-col grid on desktop
- Letter font scales down on smaller screens
- `overflow-x-hidden` on page wrapper to prevent horizontal scroll
