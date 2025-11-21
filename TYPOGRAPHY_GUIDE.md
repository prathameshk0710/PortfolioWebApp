# Typography Guide

## Font Families

### Primary Font: Inter
- **Usage**: Body text, paragraphs, general content
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Characteristics**: Modern, clean, highly readable
- **Best for**: All body text and UI elements

### Display Font: Poppins
- **Usage**: Headings, titles, hero text
- **Weights**: 400, 500, 600, 700, 800, 900
- **Characteristics**: Bold, geometric, attention-grabbing
- **Best for**: H1, H2, H3, section titles, hero name

## Font Sizes

### Hero Section (Intro)
- **Name (H1)**: 
  - Mobile: `text-4xl` (2.25rem / 36px)
  - Tablet: `text-5xl` (3rem / 48px)
  - Desktop: `text-6xl` (3.75rem / 60px)
  - Large: `text-7xl` (4.5rem / 72px)
  - Font: Poppins (display)
  - Line Height: 1.1
  - Letter Spacing: -0.03em

- **Title/Subtitle**: 
  - Mobile: `text-xl` (1.25rem / 20px)
  - Tablet: `text-2xl` (1.5rem / 24px)
  - Desktop: `text-3xl` (1.875rem / 30px)
  - Font: Poppins (display)
  - Weight: Semibold

- **Bio/Description**: 
  - Mobile: `text-base` (1rem / 16px)
  - Tablet: `text-lg` (1.125rem / 18px)
  - Desktop: `text-xl` (1.25rem / 20px)
  - Font: Inter
  - Line Height: 1.75 (relaxed)

### About Section
- **Section Title (H2)**: 
  - Mobile: `text-4xl` (2.25rem / 36px)
  - Desktop: `text-5xl` (3rem / 48px)
  - Font: Poppins
  - Margin Bottom: 3rem (mb-12)

- **Card Headings (H3)**: 
  - Mobile: `text-2xl` (1.5rem / 24px)
  - Desktop: `text-3xl` (1.875rem / 30px)
  - Font: Poppins
  - Margin Bottom: 1.5rem (mb-6)

- **Paragraphs**: 
  - Mobile: `text-lg` (1.125rem / 18px)
  - Desktop: `text-xl` (1.25rem / 20px)
  - Font: Inter
  - Line Height: 1.75 (relaxed)
  - Margin Bottom: 1.5rem (mb-6)

- **Card Padding**: `p-8` (2rem / 32px) for better spacing

### Education & Experience
- **Degree/Job Title (H3)**: 
  - Mobile: `text-2xl` (1.5rem / 24px)
  - Desktop: `text-3xl` (1.875rem / 30px)
  - Font: Poppins

- **Field/Company**: 
  - `text-xl` (1.25rem / 20px)
  - Font: Inter, Semibold

- **Description**: 
  - `text-lg` (1.125rem / 18px)
  - Line Height: 1.75 (relaxed)

- **Card Padding**: `p-8` (2rem / 32px)

### Projects
- **Project Title (H3)**: 
  - Mobile: `text-xl` (1.25rem / 20px)
  - Desktop: `text-2xl` (1.5rem / 24px)
  - Font: Poppins

- **Description**: 
  - Mobile: `text-base` (1rem / 16px)
  - Desktop: `text-lg` (1.125rem / 18px)
  - Line Height: 1.75 (relaxed)

- **Card Padding**: `p-8` (2rem / 32px)

### Contact Form
- **Form Heading**: 
  - Mobile: `text-3xl` (1.875rem / 30px)
  - Desktop: `text-4xl` (2.25rem / 36px)
  - Font: Poppins

- **Labels**: 
  - `text-base` (1rem / 16px)
  - Font Weight: Semibold

- **Inputs**: 
  - `text-lg` (1.125rem / 18px)
  - Padding: `px-5 py-4` (1.25rem / 20px vertical)

## Line Heights

- **Headings**: 1.1 - 1.3 (tight for impact)
- **Body Text**: 1.75 - 1.8 (relaxed for readability)
- **Paragraphs**: 1.8 (optimal for reading)

## Letter Spacing

- **H1**: -0.03em (tighter for large text)
- **H2**: -0.02em (slightly tighter)
- **H3**: -0.01em (minimal adjustment)
- **Body**: Normal (0em)

## Spacing Improvements

### Section Spacing
- **Section Container**: `py-16` (4rem / 64px vertical padding)
- **Section Title Margin**: `mb-12` (3rem / 48px)

### Card Spacing
- **Card Padding**: `p-8` (2rem / 32px) - increased from p-6
- **Card Gap**: `gap-10` (2.5rem / 40px) - increased from gap-8
- **Paragraph Spacing**: `mb-6` (1.5rem / 24px) - increased from mb-4

### Element Spacing
- **Heading Margins**: Increased for better breathing room
- **List Items**: `space-y-3` (0.75rem / 12px) - increased spacing
- **Form Fields**: `space-y-6` (1.5rem / 24px) - better separation

## Typography Hierarchy

1. **Hero Name**: Largest, most prominent (H1)
2. **Section Titles**: Large, gradient (H2)
3. **Card Headings**: Medium-large (H3)
4. **Body Text**: Comfortable reading size (17px base)
5. **Labels/Captions**: Smaller but readable (16px)

## Best Practices

1. **Consistency**: Use font-display for all headings
2. **Readability**: Minimum 16px for body text
3. **Hierarchy**: Clear size differences between levels
4. **Spacing**: Generous margins and padding
5. **Line Height**: 1.75-1.8 for optimal reading

## Responsive Typography

All font sizes use responsive classes:
- Base size for mobile
- `md:` prefix for tablet (768px+)
- `lg:` prefix for desktop (1024px+)

This ensures optimal readability across all devices.

