# Project Structure

This document outlines the directory structure and organization of the portfolio web application.

## Directory Structure

```
ProtfolioWebApp/
├── public/                 # Static assets (if any)
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Reusable/common components
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── SocialIcon.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── constants/         # Constant data and configuration
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   ├── socialLinks.js
│   │   └── techStack.js
│   ├── config/            # Configuration files
│   │   └── theme.js
│   ├── hooks/             # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── utils/             # Utility functions
│   │   ├── animations.js
│   │   ├── formatters.js
│   │   └── validators.js
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
└── PROJECT_STRUCTURE.md  # This file
```

## Component Organization

### Main Components (`src/components/`)
- **Hero.jsx**: Landing section with introduction and social links
- **About.jsx**: Personal information and journey
- **Education.jsx**: Academic background display
- **Experience.jsx**: Work experience timeline
- **TechStack.jsx**: Technologies and skills showcase
- **Projects.jsx**: Portfolio projects grid
- **Contact.jsx**: Contact form and information
- **Footer.jsx**: Footer with links and copyright
- **Navbar.jsx**: Navigation bar with dark mode toggle

### Common Components (`src/components/common/`)
Reusable components used across the application:
- **Card.jsx**: Standard card component with hover effects
- **SectionTitle.jsx**: Consistent section heading styling
- **SocialIcon.jsx**: Social media icon with animations

## Data Organization

### Constants (`src/constants/`)
All static data is organized in separate files for easy maintenance:
- **personalInfo.js**: Personal details, bio, stats
- **socialLinks.js**: Social media links and icons
- **education.js**: Educational background
- **experience.js**: Work experience details
- **projects.js**: Project portfolio data
- **techStack.js**: Technology stack organized by category

## Utilities

### Hooks (`src/hooks/`)
- **useScrollAnimation.js**: Custom hook for scroll-triggered animations

### Utils (`src/utils/`)
- **animations.js**: Reusable animation configurations
- **formatters.js**: Data formatting functions
- **validators.js**: Form validation functions

## Configuration

### Config (`src/config/`)
- **theme.js**: Theme configuration and color schemes

## Best Practices

1. **Separation of Concerns**: Data is separated from components
2. **Reusability**: Common components are extracted to `common/` folder
3. **Maintainability**: Constants are centralized for easy updates
4. **Scalability**: Structure allows easy addition of new features
5. **Consistency**: Shared utilities ensure consistent behavior

## Adding New Features

### Adding a New Section
1. Create component in `src/components/`
2. Add data to appropriate file in `src/constants/`
3. Import and add to `App.jsx`

### Adding a New Utility
1. Create function in appropriate `src/utils/` file
2. Export and import where needed

### Adding a New Constant
1. Add to appropriate file in `src/constants/`
2. Import in components that need it

## Code Style

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and single-purpose

