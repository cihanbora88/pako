# Codebase Health & Review Report

## 1. Health Check
**Status:** 🔴 **Critical Failure**

The codebase currently fails to build due to missing source files referenced in multiple components.

### Critical Issues:
- **Missing Directory:** `src/imports` (and possibly `src/app/imports`) is referenced but does not exist in the repository.
  - Referenced in: `src/app/components/layout/Header.tsx`, `Footer.tsx`, `SearchBar.tsx`, `ContactPage.tsx`.
  - Effect: Build fails immediately.
  - Likely Cause: Missing Figma export artifacts or `.gitignore` misconfiguration.

## 2. Unnecessary Files & Cleanup
- ✅ **Removed:** `src/app/utils/translations.ts` (Redundant custom i18n implementation; replaced by `react-i18next`).
- **Unused Dependencies:**
  - `react-dnd`, `react-dnd-html5-backend`: No usage found.
  - `react-slick`: Redundant (project uses `embla-carousel-react` via shadcn/ui).
  - `@mui/material`, `@mui/icons-material`: No usage found (project uses Tailwind + Radix UI/Lucide).
  - `next-themes`: Installed but not fully utilized (custom theme logic in `MainLayout.tsx`).

## 3. Mistakes & Discrepancies
- **Architecture Documentation:**
  - Mentions `src/imports` (missing).
  - Describes custom i18n implementation (now obsolete/removed).
  - Mentions `next-intl` pattern but uses `react-i18next`.
- **Routing & Layout:**
  - `MainLayout` is used inside individual page components rather than as a Layout Route. This causes full re-renders of the layout on navigation and complicates state persistence (e.g., theme).
- **Theme Management:**
  - Custom implementation in `MainLayout.tsx` relies on `localStorage` and manual DOM manipulation, ignoring the installed `next-themes` library which handles hydration mismatch and system preference changes more robustly.

## 4. Improvements
1.  **Fix Missing Imports:** Restore `src/imports` from backup or Figma export.
2.  **Refactor Routing:** Move `MainLayout` to a root layout route in `react-router` configuration.
3.  **Use `next-themes`:** Replace custom theme logic with `ThemeProvider` from `next-themes`.
4.  **Consolidate UI Stack:** Remove Material UI and other unused libraries to reduce bundle size.
5.  **Update Documentation:** synchronise `ARCHITECTURE.md` with the current codebase state.
