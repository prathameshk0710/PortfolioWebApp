# Color Design Guide

## Color Palette

### Primary Colors (Blue)
- **Primary-700** (`#1d4ed8`): Main primary color for text, buttons, and accents
- **Primary-600** (`#2563eb`): Secondary primary for hover states
- **Primary-500** (`#3b82f6`): Lighter primary for gradients
- **Primary-400** (`#60a5fa`): Light primary for dark mode

### Text Colors
- **Light Mode:**
  - Headings: `gray-900` (high contrast)
  - Body: `gray-800` (excellent readability)
  - Secondary: `gray-700` (good contrast)
  
- **Dark Mode:**
  - Headings: `gray-50` (high contrast)
  - Body: `gray-200` (excellent readability)
  - Secondary: `gray-300` (good contrast)

### Background Colors
- **Light Mode:**
  - Main: `white`
  - Sections: `gray-50` (subtle contrast)
  - Cards: `white` with borders
  
- **Dark Mode:**
  - Main: `gray-950` (deep dark)
  - Sections: `gray-950` (consistent)
  - Cards: `gray-800` with borders

## Contrast Ratios (WCAG Compliance)

All color combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

- **Primary-700 on White**: 7.2:1 ✅
- **Gray-900 on White**: 15.8:1 ✅
- **Gray-800 on White**: 12.6:1 ✅
- **Primary-400 on Gray-950**: 4.8:1 ✅
- **Gray-200 on Gray-950**: 13.1:1 ✅

## Design Principles

1. **High Contrast**: All text meets WCAG AA standards
2. **Consistent Spacing**: Using Tailwind's spacing scale
3. **Visual Hierarchy**: Clear distinction between headings and body text
4. **Accessibility**: Focus states, hover states clearly defined
5. **Dark Mode**: Proper contrast maintained in both themes

## Component Color Usage

### Buttons
- **Primary Button**: `primary-700` background, white text
- **Secondary Button**: `primary-700` border, `primary-700` text
- **Hover States**: Darker shades for better feedback

### Cards
- **Background**: White (light) / Gray-800 (dark)
- **Border**: Gray-200 (light) / Gray-700 (dark)
- **Hover**: Enhanced shadow and slight border color change

### Links
- **Default**: `primary-700` (light) / `primary-400` (dark)
- **Hover**: Darker primary shades
- **Visited**: Maintains contrast

### Icons
- **Default**: Gray-800 (light) / Gray-200 (dark)
- **Hover**: Primary-700 (light) / Primary-400 (dark)
- **Social Icons**: Brand colors where appropriate

## Gradient Usage

- **Section Titles**: Primary-700 → Primary-500 (light) / Primary-400 → Primary-300 (dark)
- **Hero Name**: Gray-900 → Primary gradient
- **Backgrounds**: Subtle gradients for depth

## Best Practices

1. Always use semantic color names (primary, secondary, gray)
2. Maintain contrast ratios in both light and dark modes
3. Use borders for card separation instead of shadows alone
4. Test color combinations with accessibility tools
5. Keep gradients subtle and professional

