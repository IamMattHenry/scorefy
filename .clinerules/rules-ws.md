# Scorefy Workspace Rules

## 1. Project Standards
- Use **Next.js 13+ (App Router)** with **TypeScript** where possible.
- Use **Tailwind CSS** for all styling; prefer utility classes over inline styles.
- Co-locate components inside `src/components/` and pages inside `src/app/`.
- Use **atomic/component-driven design**:
  - Atoms: buttons, cards, inputs
  - Molecules: mission cards, stat displays
  - Organisms: dashboard sections, music player

## 2. Code Quality
- Enforce **ESLint + Prettier** formatting.
- Use `clsx` + `tailwind-merge` for conditional classes.
- Keep components **small, focused, and reusable**.
- Prefer **functional components** with hooks over class components.
- Document complex components with comments or JSDoc.

## 3. Gamification Logic
- Store and track user progress: `points`, `level`, `streaks`, `missions`.
- Create clear formulas for:
  - XP gained per song
  - XP → Level thresholds
  - Streak increment/reset rules
- Gamification feedback must be **immediate** (animations, updated UI).

## 4. Music Player
- Build a **basic audio player** first with `HTMLAudioElement`.
- Features: play, pause, skip, track progress bar.
- Later: integrate **Spotify Web API** (auth, playback control).
- Player should be modular, reusable, and responsive.

## 5. State Management
- Use **React Context or Zustand** for global state (auth, player, gamification).
- Keep local component state minimal and isolated.
- Avoid prop drilling where context is more appropriate.

## 6. Data & APIs
- Use **Next.js API routes** (`src/app/api/`) for backend logic.
- Store sensitive info (Spotify client secrets, etc.) in `.env.local`.
- Never hardcode secrets or API keys.

## 7. Testing & Reliability
- Write **unit tests** for gamification logic and player controls.
- Use **React Testing Library** + Jest for testing.
- Ensure critical flows (auth, missions, playback) have test coverage.

## 8. Git & Workflow
- Use **Conventional Commits** (`feat:`, `fix:`, `refactor:`, etc.).
- Keep commits small and meaningful.
- Branch strategy: `main` (stable), `dev` (active work), feature branches.
- Run lint & test checks before merging.

## 9. UI & Design
- Maintain a consistent **design system**:
  - Tailwind theme for colors, spacing, typography
  - Use dark theme by default
- Dashboard must be **fully responsive** across desktop & mobile.
- Reuse UI patterns (cards, grids) instead of duplicating styles.

## 10. Community Features
- Leaderboard logic:
  - Sort by `points`, `level`, or `streak`.
  - Allow pagination or infinite scroll for performance.
- Profile pages show: listening history, progress, badges.
- Prepare data models to scale for future features (friends, social feed).

---
