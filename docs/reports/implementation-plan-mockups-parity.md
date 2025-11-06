# Functional Parity with Mockups — Implementation Plan

**Issue Type:** Epic / Umbrella Issue  
**Labels:** `enhancement`, `a11y`, `frontend`, `mockups-parity`  
**Created:** 2025-11-06  
**Related Report:** [Functional Gap Report](./functional-gap-2025-11-06.md)

---

## Overview

This epic tracks the implementation of all features shown in the approved UI/UX Catalog mockups but not yet functional in the codebase. The work is organized into 7 milestones (A-G) representing logical groupings of related functionality.

**Current Status:** 72% complete (68/95 features implemented)  
**Remaining Work:** 27 features across 7 milestones

---

## Milestone A: Global Infrastructure

**Goal:** Complete cross-cutting concerns and global components  
**Priority:** High  
**Estimated Effort:** 2-3 days

### Tasks

#### ✅ A.1 - ThemeProvider with localStorage Persistence
- **Status:** COMPLETE
- **Files:** `components/theme/ThemeProvider.tsx`, `app/layout.tsx`
- **Acceptance:**
  - [x] Accent, focus, motion, contrast persist across sessions
  - [x] Early hydration script prevents FOUC
  - [x] Data attributes applied to body

#### ✅ A.2 - Command Palette (Cmd/Ctrl+K)
- **Status:** COMPLETE
- **Files:** `components/ui/CommandPalette.tsx`, `components/layout/GlobalProviders.tsx`
- **Acceptance:**
  - [x] Global keyboard shortcut
  - [x] Deep anchor navigation
  - [x] Focus management
  - [x] Smooth scroll + heading focus

#### ✅ A.3 - Mobile Navigation Drawer
- **Status:** COMPLETE
- **Files:** `components/ui/Drawer.tsx`, `components/layout/Header.tsx`
- **Acceptance:**
  - [x] Hamburger menu
  - [x] Focus trap
  - [x] Scroll lock
  - [x] Reduced motion support

#### ✅ A.4 - Copy-to-Clipboard Utilities
- **Status:** COMPLETE
- **Files:** `components/ui/CopyButton.tsx`
- **Acceptance:**
  - [x] Navigator Clipboard API
  - [x] Visual feedback
  - [x] Error handling

#### ✅ A.5 - Toast Notification System
- **Status:** COMPLETE
- **Files:** `components/ui/ToastCenter.tsx`
- **Acceptance:**
  - [x] 4 variants (success, error, warning, info)
  - [x] Queue management
  - [x] Auto-dismiss
  - [x] Accessible announcements

---

## Milestone B: Tokens & Accessibility

**Goal:** Ensure all design tokens are accessible and copyable, with full a11y preset support  
**Priority:** Medium  
**Estimated Effort:** 1-2 days

### Tasks

#### ✅ B.1 - Accent Switcher
- **Status:** COMPLETE
- **Files:** `components/ui/AccentSwitcher.tsx`
- **Acceptance:**
  - [x] 7 accent colors available
  - [x] Persists to localStorage
  - [x] Updates CSS variable immediately

#### ✅ B.2 - A11y Controls (Focus, Motion, Contrast)
- **Status:** COMPLETE
- **Files:** `components/ui/A11yControls.tsx`
- **Acceptance:**
  - [x] Focus style switcher (ring/outline)
  - [x] Motion mode switcher (base/reduced)
  - [x] Contrast mode switcher (normal/high)
  - [x] All persist to localStorage

#### ⚠️ B.3 - Add aria-pressed to Toggle Pills
- **Status:** PARTIAL
- **Path:** `components/ui/Pill.tsx`
- **Summary:** Pill component used for toggles needs `aria-pressed` attribute
- **Changes:**
  - Add `aria-pressed={active}` to Pill component
  - Update all usages (A11yControls, AccentSwitcher, Animations filters)
- **Acceptance:**
  - [ ] Pill component accepts `aria-pressed` prop
  - [ ] All toggle pills announce state to screen readers
  - [ ] Tested with screen reader (NVDA/JAWS/VoiceOver)
- **A11y:** Critical - impacts screen reader users
- **Effort:** Small (S)
- **Files to modify:**
  - `components/ui/Pill.tsx`
  - `components/ui/A11yControls.tsx`
  - `components/ui/AccentSwitcher.tsx`
  - `app/animations/page.tsx`

#### ✅ B.4 - Token Copy Buttons
- **Status:** ASSUMED COMPLETE (needs verification)
- **Path:** `app/tokens/page.tsx`
- **Summary:** Verify all token rows have copy buttons
- **Acceptance:**
  - [x] Colors, spacing, radius, shadows, borders, opacity, z-index, motion tokens all copyable
- **QA:** Manual verification needed

---

## Milestone C: Animations Catalog

**Goal:** Ensure all animation demos work correctly and respect reduced-motion  
**Priority:** Medium  
**Estimated Effort:** 2-3 days

### Tasks

#### ✅ C.1 - Animation Filters
- **Status:** COMPLETE
- **Files:** `app/animations/page.tsx`
- **Acceptance:**
  - [x] Filter pills (all, micro, route, layout, scroll)
  - [x] Filter logic functional

#### ✅ C.2 - Micro Interaction Demos
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Button press (downscale)
  - [x] Toggle spring
  - [x] Staggered enter with replay
  - [x] Pulse animation

#### ⚠️ C.3 - Complete Reduced-Motion Gating
- **Status:** PARTIAL
- **Path:** `app/animations/page.tsx`
- **Summary:** Not all animations explicitly check `data-motion="reduced"`
- **Changes:**
  - Audit each demo for reduced-motion compliance
  - Add conditional rendering or CSS classes based on motion preset
  - Test with `data-motion="reduced"` attribute
- **Acceptance:**
  - [ ] All animations disabled when reduced-motion active
  - [ ] Replay buttons still visible but show static state
  - [ ] CSS animations respect `[data-motion="reduced"]` selector
  - [ ] Inline animations check motion mode
- **A11y:** Critical - WCAG 2.1 AA requirement
- **Effort:** Medium (M)
- **Files to modify:**
  - `app/animations/page.tsx` (inline styles and state-based animations)
  - `styles/animations.css` (if exists)

#### ⚠️ C.4 - Make Snackbar Demo Interactive
- **Status:** PARTIAL
- **Path:** `app/animations/page.tsx:144-164`
- **Summary:** Snackbar demo shows static placeholder instead of dismissible toast
- **Changes:**
  - Add state for snackbar visibility
  - Add dismiss button with animation
  - Add replay button
- **Acceptance:**
  - [ ] Snackbar appears with animation
  - [ ] Dismiss button removes snackbar with exit animation
  - [ ] Replay button shows snackbar again
  - [ ] Respects reduced-motion
- **Effort:** Small (S)

#### ✅ C.5 - Route Transition Demos
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Crossfade demo
  - [x] Parallax scroll demo

#### ✅ C.6 - Layout Animation Demos
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Layout shift (grid columns)
  - [x] Card hover lift

#### ✅ C.7 - Scroll-based Reveal Demo
- **Status:** COMPLETE (on animations page)
- **Acceptance:**
  - [x] Fade-up animation demo

---

## Milestone D: Use Cases

**Goal:** Complete all use case demonstrations (already mostly complete)  
**Priority:** Low (already 100% complete)  
**Estimated Effort:** 0 days

### Tasks

#### ✅ D.1 - Announcements with Persistence
- **Status:** COMPLETE
- **Files:** `app/use-cases/page.tsx`
- **Acceptance:**
  - [x] Banner dismiss persists via `catalog.announceDismissed`
  - [x] Restore button functional
  - [x] Toast feedback

#### ✅ D.2 - Forms Validation
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Email validation with regex
  - [x] Live error display
  - [x] Password visibility toggle
  - [x] ARIA attributes (aria-invalid, aria-describedby, aria-pressed)
  - [x] Submit handler with success/error feedback

#### ✅ D.3 - Dashboard with Chart
- **Status:** COMPLETE
- **Acceptance:**
  - [x] KPI cards with animated values
  - [x] Recharts integration (RevenueChart component)
  - [x] Dark-themed chart
  - [x] Recent activity log

#### ✅ D.4 - Docs with TOC & Code Switcher
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Sticky TOC sidebar
  - [x] Active section tracking via IntersectionObserver
  - [x] Language switcher (JS/TS)
  - [x] Code block updates based on language
  - [x] Copy button on code snippets
  - [x] Smooth scroll to section with heading focus

---

## Milestone E: Components Library

**Goal:** Fix navigation and add missing component demos  
**Priority:** High  
**Estimated Effort:** 5-7 days

### Tasks

#### ✅ E.1 - Quick Install Copy Button
- **Status:** COMPLETE
- **Files:** `app/library/page.tsx:149`

#### ✅ E.2 - Live Button & Input Demos
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Button demos with toast feedback
  - [x] Input with clear button

#### ✅ E.3 - Segmented Control (Tabs) Demo
- **Status:** COMPLETE
- **Acceptance:**
  - [x] Tab semantics (role="tablist", role="tab", aria-selected)
  - [x] Keyboard navigation

#### ✅ E.4 - Drawer Demo
- **Status:** COMPLETE

#### ✅ E.5 - Toast Demo
- **Status:** COMPLETE

#### ❌ E.6 - Fix Component Category Card Links
- **Status:** MISSING
- **Path:** `app/library/page.tsx:470-488`
- **Summary:** All component cards link to `href="#"` (dead links)
- **Changes:**
  - Create component detail pages (e.g., `/components/command-palette`, `/components/breadcrumbs`)
  - Or implement modal overlays with component details
  - Each detail should include:
    - Component description
    - Live demo
    - Props API table
    - Code examples
    - A11y notes
    - Motion behavior
- **Acceptance:**
  - [ ] All component cards navigate to detail view
  - [ ] Detail pages/modals show comprehensive component info
  - [ ] No `href="#"` links remain
  - [ ] Keyboard accessible
- **A11y:** High - broken navigation impacts all users
- **Effort:** Large (L) - 15+ component pages/modals
- **Dependencies:** Component API documentation, examples
- **Files to create/modify:**
  - Create: `app/components/[slug]/page.tsx` (dynamic route)
  - Modify: `app/library/page.tsx` (update hrefs)

#### ❌ E.7 - Add Missing Component Demos
- **Status:** MISSING
- **Path:** `app/library/page.tsx`
- **Summary:** Mentioned components lack live demos
- **Components to add:**
  - [ ] Breadcrumbs (with responsive truncation)
  - [ ] Combobox (async search with typeahead)
  - [ ] Date range picker (keyboard navigable calendars)
  - [ ] File uploader (drag-drop with image crop)
  - [ ] Data table (pin/resize/sort/filter + virtualization)
  - [ ] Popover/Menu (alignment + collision handling)
  - [ ] Code block (syntax highlighting + copy)
  - [ ] Diff viewer (side-by-side or unified)
- **Acceptance:**
  - [ ] Each component has live demo on library page or detail page
  - [ ] All demos are interactive
  - [ ] A11y requirements met for each
- **A11y:** Varies by component (see individual requirements)
- **Effort:** Extra Large (XL) - 8 new components
- **Dependencies:** Component specifications, design mockups
- **Files to create:**
  - `components/ui/Breadcrumbs.tsx`
  - `components/ui/Combobox.tsx`
  - `components/ui/DateRangePicker.tsx`
  - `components/ui/FileUploader.tsx`
  - `components/ui/DataTable.tsx`
  - `components/ui/Popover.tsx`
  - `components/ui/DiffViewer.tsx`
  - (CodeBlock.tsx already exists - verify usage)

---

## Milestone F: Patterns

**Goal:** Create pattern showcase pages  
**Priority:** High  
**Estimated Effort:** 7-10 days

### Tasks

#### ❌ F.1 - Fix Pattern Card Links
- **Status:** MISSING
- **Path:** `app/patterns/page.tsx:50`
- **Summary:** All 12 pattern cards link to `href="#"` (completely non-functional)
- **Changes:**
  - Create pattern detail pages (e.g., `/patterns/auth`, `/patterns/onboarding`)
  - Or implement modal overlays with pattern details
  - Each pattern should include:
    - Pattern description
    - Composed flow diagram
    - Step-by-step implementation
    - Code examples
    - A11y guidelines
    - Motion recommendations
    - Real-world example screenshot/demo
- **Patterns to implement:**
  1. [ ] Auth (sign in/up, magic link, 2FA, reset password)
  2. [ ] Onboarding (checklist, progressive disclosure, coach marks)
  3. [ ] Settings (tabbed layout, account & billing, API keys)
  4. [ ] Search (facets, sort, saved views, URL params)
  5. [ ] Table CRUD (inline edit, optimistic updates, bulk actions)
  6. [ ] Content editor (MDX with preview, file uploads, versioning)
  7. [ ] Notifications (inbox + toasts, read states, activity feed)
  8. [ ] Payments (checkout, subscriptions, invoices)
  9. [ ] Docs layout (sticky TOC, code switcher, next/prev)
  10. [ ] Dashboard (KPI cards, filters, resizable panels)
  11. [ ] File manager (grid/list, selection, preview, rename)
  12. [ ] Messaging (chat composer, threads, presence)
- **Acceptance:**
  - [ ] All pattern cards navigate to detail view
  - [ ] Each pattern page shows composed flow
  - [ ] A11y and motion guidelines included
  - [ ] No `href="#"` links remain
  - [ ] Keyboard accessible
- **A11y:** High - keyboard navigation required for each pattern
- **Effort:** Extra Large (XL) - 12 pattern pages
- **Dependencies:** Pattern specifications, flow diagrams, mockups
- **Files to create:**
  - `app/patterns/[slug]/page.tsx` (dynamic route)
  - Pattern content/examples for each

---

## Milestone G: Enhancements

**Goal:** Polish and additional features  
**Priority:** Low  
**Estimated Effort:** 2-3 days

### Tasks

#### ⚠️ G.1 - Add Scroll-Reveal to Home Page
- **Status:** MISSING
- **Path:** `app/page.tsx`
- **Summary:** Feature and catalog cards don't animate on scroll (IntersectionObserver not used)
- **Changes:**
  - Create `useScrollReveal` hook with IntersectionObserver
  - Apply fade-up animation class when cards enter viewport
  - Respect `data-motion="reduced"` attribute
- **Acceptance:**
  - [ ] Feature cards (lines 149-195) fade up on scroll
  - [ ] Catalog cards (lines 238-264) fade up on scroll
  - [ ] Animation disabled when reduced-motion active
  - [ ] Smooth, staggered reveal (not all at once)
- **A11y:** Must respect reduced-motion
- **Effort:** Small (S)
- **Files to modify:**
  - `app/page.tsx`
  - Create: `lib/hooks/useScrollReveal.ts`

#### ⚠️ G.2 - Verify Copy Buttons on Token Rows
- **Status:** NEEDS VERIFICATION
- **Path:** `app/tokens/page.tsx`
- **Summary:** Confirm all token rows have copy buttons
- **Changes:** Add copy button to each token if missing
- **Acceptance:**
  - [ ] Every color token has copy button
  - [ ] Every spacing token has copy button
  - [ ] Every radius, shadow, border, opacity, z-index, motion token has copy button
- **Effort:** Small (S)
- **QA:** Visual inspection + manual testing

#### ⚠️ G.3 - Add type="button" to Non-Submit Buttons
- **Status:** NEEDS AUDIT
- **Path:** Multiple files
- **Summary:** Some buttons may be missing `type="button"` attribute (prevents accidental form submission)
- **Changes:**
  - Audit all `<button>` elements not used for form submission
  - Add `type="button"` where missing
- **Acceptance:**
  - [ ] All non-submit buttons have `type="button"`
  - [ ] Submit buttons explicitly have `type="submit"`
- **A11y:** Prevents form submission bugs
- **Effort:** Small (S)
- **Files to audit:**
  - All page files
  - All component files

---

## Priority Matrix

| Milestone | Priority | Effort | Impact | Status      | Tasks Complete |
|-----------|----------|--------|--------|-------------|----------------|
| A. Global | High     | M      | High   | ✅ Complete | 5/5            |
| B. Tokens & A11y | Medium | S | Medium | ⚠️ Partial | 4/5 (80%)      |
| C. Animations | Medium | M | Medium | ⚠️ Partial | 6/9 (67%)      |
| D. Use Cases | Low | None | High | ✅ Complete | 4/4            |
| E. Library | High | XL | High | ⚠️ Partial | 5/7 (71%)      |
| F. Patterns | High | XL | High | ❌ Missing | 0/1 (0%)       |
| G. Enhancements | Low | S | Low | ⚠️ Partial | 0/3 (0%)       |

---

## Estimated Timeline

### Sprint 1 (Week 1)
- **Focus:** High-priority fixes and a11y
- Tasks: B.3, E.6 (start), F.1 (start)
- **Deliverables:**
  - aria-pressed on Pill components
  - Component detail page infrastructure
  - Pattern detail page infrastructure

### Sprint 2 (Week 2)
- **Focus:** Component library completion
- Tasks: E.6 (continue), E.7 (start)
- **Deliverables:**
  - 50% of component detail pages
  - Start on missing component demos

### Sprint 3 (Week 3)
- **Focus:** Patterns + remaining components
- Tasks: F.1 (continue), E.7 (continue)
- **Deliverables:**
  - 50% of pattern detail pages
  - 50% of missing components

### Sprint 4 (Week 4)
- **Focus:** Completion + polish
- Tasks: C.3, C.4, F.1 (finish), E.7 (finish), G.1, G.2, G.3
- **Deliverables:**
  - All patterns complete
  - All components complete
  - Reduced-motion compliance
  - Enhancements

---

## Definition of Done

A task is considered complete when:
- [ ] All acceptance criteria are met
- [ ] Code is linted and builds successfully
- [ ] A11y requirements verified (keyboard, screen reader, ARIA)
- [ ] Reduced-motion compliance verified
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Browser compatibility tested (Chrome, Firefox, Safari, Edge)
- [ ] No console errors or warnings
- [ ] Documentation updated (if applicable)
- [ ] PR reviewed and approved

---

## Success Metrics

**Goal:** Achieve 100% functional parity with mockups

Current: 72% → Target: 100%

**Tracking:**
- [ ] All dead `href="#"` links replaced with functional navigation
- [ ] All mentioned components have live demos or detail pages
- [ ] All patterns have detail pages with examples
- [ ] 100% WCAG 2.1 AA compliance
- [ ] 100% reduced-motion compliance
- [ ] Zero broken links
- [ ] All interactive elements keyboard accessible

---

## Notes

### Design System Principles (from mockups)
1. **Pure CSS wherever reasonable** - Avoid heavy JS animations
2. **Recharts for charts** - Already implemented ✅
3. **Reduced-motion/high-contrast respected** - Foundational support exists, needs completion
4. **Focus-visible styles switchable** - Implemented ✅
5. **Dark theme with glassmorphism** - Implemented ✅

### Dependencies to Clarify
- [ ] Component API specifications
- [ ] Pattern flow diagrams
- [ ] Missing component mockups (Combobox, Date Range, File Upload, Data Table)
- [ ] Diff viewer requirements
- [ ] Pattern detail page content structure

### Open Questions
1. Should component/pattern details be:
   - Separate pages (dynamic routes)? ✓ Recommended
   - Modal overlays?
   - Accordion on existing pages?
2. Which components are highest priority for E.7?
3. Which patterns are highest priority for F.1?
4. Is Breadcrumbs component already built but not demoed?

---

## Related Issues

- #TBD - Component detail pages (E.6)
- #TBD - Pattern detail pages (F.1)
- #TBD - Missing component implementations (E.7)
- #TBD - Reduced-motion compliance (C.3)
- #TBD - ARIA enhancements (B.3)

---

## Cross-Links

- **Report:** [Functional Gap Report](./functional-gap-2025-11-06.md)
- **Repository:** [amnrzni/catalog](https://github.com/amnrzni/catalog)
- **Branch:** `copilot/audit-functionality-gaps`

---

**Created:** 2025-11-06  
**Last Updated:** 2025-11-06  
**Status:** Draft  
**Assignee:** TBD
