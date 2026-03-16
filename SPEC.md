# MEDIOMICS by Kibria — Specification

## Concept & Vision

MEDIOMICS is a premium AI-powered health symptom analysis and wellness recommendation platform. It feels like a high-end digital health companion — trustworthy, intelligent, and beautifully crafted. The design evokes confidence and medical professionalism while remaining approachable and warm. Think of a fusion between a luxury wellness brand and a cutting-edge health-tech startup.

## Design Language

### Aesthetic Direction
Inspired by premium health apps like Whoop and Calm, combined with the clean precision of Apple's health ecosystem. Deep space gradients meet soft aurora lights — sophisticated, calming, and medical-grade trustworthy.

### Color Palette
- **Primary:** #6366F1 (Indigo-500)
- **Secondary:** #8B5CF6 (Violet-500)
- **Accent:** #06B6D4 (Cyan-500)
- **Success:** #10B981 (Emerald-500)
- **Warning:** #F59E0B (Amber-500)
- **Danger:** #EF4444 (Red-500)
- **Background:** #030712 (Gray-950)
- **Surface:** #0F172A (Slate-900)
- **Surface Light:** #1E293B (Slate-800)
- **Text Primary:** #F8FAFC (Slate-50)
- **Text Secondary:** #94A3B8 (Slate-400)
- **Text Muted:** #64748B (Slate-500)

### Typography
- **Headings:** Inter (700, 600) — clean, modern, professional
- **Body:** Inter (400, 500) — excellent readability
- **Mono:** JetBrains Mono — for data/metrics
- Fallbacks: system-ui, sans-serif

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Border radius: 8px (small), 12px (medium), 16px (large), 24px (xl)
- Container max-width: 1280px

### Motion Philosophy
- **Micro-interactions:** 150ms ease-out (buttons, toggles)
- **Content transitions:** 300ms ease-out (cards, modals)
- **Page transitions:** 500ms ease-in-out (step changes)
- **Loading states:** Infinite pulse 2s ease-in-out
- **Stagger animations:** 50ms delay between list items

## Layout & Structure

### Page Structure
1. **Sticky Glass Header** — Logo, tagline, minimal navigation feel
2. **Hero Section** — Welcome message with animated gradient text
3. **Main Content** — Two-column layout on desktop
   - Left: Active step content (60%)
   - Right: Context panel (40%) — profile summary, progress, tips
4. **Footer** — Medical disclaimer, credits

### Responsive Strategy
- Mobile: Single column, collapsible sections
- Tablet: Adjusted padding, smaller cards
- Desktop: Full two-column layout with sticky sidebar

## Features & Interactions

### Step 1: User Information
- **Fields:** Name, Age (number), Gender (select), Weight (kg), Height (cm)
- **Validation:** Required fields highlighted, inline error messages
- **Interactions:** Focus glow effect, label float animation
- **Output:** Calculate BMI automatically, display in sidebar

### Step 2: Symptom Selection
- **20 Common Symptoms:** Grid of selectable chips
- **Custom Input:** Textarea for additional symptoms
- **Interactions:** Toggle selection with scale + color change
- **Selected State:** Gradient background, checkmark icon
- **Counter:** "X symptoms selected" in sidebar

### Step 3: AI Analysis
- **Loading State:** Animated scanning effect, "Analyzing..." message
- **Transition:** Fade out form, fade in results
- **Duration:** 2-3 seconds simulated processing

### Step 4: Results Display
Four recommendation cards:
1. **Foods** — Green gradient accent
2. **Remedies** — Orange gradient accent
3. **Medicines** — Blue gradient accent (with warning)
4. **Diet Plan** — Purple gradient accent

Each card:
- Icon + title header
- Animated list entrance
- Hover lift effect
- Expandable details

### Error States
- Form validation: Red border, shake animation, error message
- Empty selections: Highlight required fields, prevent progression

### Empty States
- No symptoms selected: Friendly prompt with examples

## Component Inventory

### Header
- Glass effect with backdrop blur
- Logo with gradient text
- Subtle bottom border glow

### Step Indicator
- Horizontal stepper with numbered circles
- Active: gradient fill, scale up
- Completed: checkmark, solid color
- Upcoming: outline only

### Input Field
- Glass background
- Floating label
- Focus: cyan glow ring
- Error: red glow + shake

### Symptom Chip
- Default: outline style
- Hover: scale 1.02, border color change
- Selected: gradient fill, checkmark

### Result Card
- Glass background with colored accent border
- Icon header with gradient background
- List items with hover highlight
- Shadow lift on hover

### Button
- Primary: gradient background, hover glow
- Secondary: outline style
- Disabled: opacity 50%, no hover

### Sidebar Panel
- Sticky positioning
- Glass background
- Section dividers
- Metric badges

## Technical Approach

### Framework
- React 18 with TypeScript
- Vite build tool
- Tailwind CSS for styling

### Architecture
- Single page application
- State managed with useState hooks
- Component-based structure
- CSS animations via Tailwind + custom keyframes

### Key Implementation
- Responsive design with Tailwind breakpoints
- CSS custom properties for theme colors
- Intersection Observer for scroll animations
- Form validation with native React state
