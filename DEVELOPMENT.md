# Development Guide

## Code Organization Principles

### 1. Separation of Concerns
- **Components**: Only handle UI and user interactions
- **Constants**: Store all static data
- **Utils**: Reusable utility functions
- **Hooks**: Reusable logic and state management

### 2. Maintainability
- All personal data is centralized in `src/constants/`
- Easy to update information without touching component code
- Consistent styling through Tailwind utility classes
- Reusable components in `src/components/common/`

### 3. Scalability
- Easy to add new sections by creating components and adding data
- Modular structure allows independent updates
- Clear separation makes testing easier

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.jsx`, `About.jsx`)
- **Utilities**: camelCase (e.g., `formatters.js`, `validators.js`)
- **Constants**: camelCase (e.g., `personalInfo.js`, `socialLinks.js`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollAnimation.js`)

## Component Structure

Each component follows this structure:

```jsx
// 1. Imports
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { data } from '../constants/data'

// 2. Component definition
const ComponentName = () => {
  // 3. Hooks
  const { ref, isInView } = useScrollAnimation()
  
  // 4. Render
  return (
    <section ref={ref}>
      {/* Component JSX */}
    </section>
  )
}

// 5. Export
export default ComponentName
```

## Data Management

### Updating Personal Information

Edit `src/constants/personalInfo.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  // ... other fields
}
```

### Adding Projects

Edit `src/constants/projects.js`:
```javascript
export const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    live: 'https://live-demo.com',
  },
  // Add more projects...
]
```

### Updating Social Links

Edit `src/constants/socialLinks.js`:
```javascript
export const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn',
  },
  // Add more links...
]
```

## Styling Guidelines

### Tailwind CSS
- Use utility classes for styling
- Follow mobile-first approach
- Use dark mode variants: `dark:bg-gray-800`
- Maintain consistent spacing using Tailwind's spacing scale

### Color Scheme
- Primary colors defined in `tailwind.config.js`
- Use semantic color names (primary, secondary)
- Support both light and dark modes

## Animation Guidelines

### Framer Motion
- Use `useScrollAnimation` hook for scroll-triggered animations
- Keep animations subtle and performant
- Use `initial`, `animate`, and `transition` props consistently

### Animation Patterns
```javascript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Fade in from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
```

## Best Practices

1. **Component Size**: Keep components focused and under 200 lines
2. **Props**: Use props for customization, constants for data
3. **Performance**: Use React.memo for expensive components if needed
4. **Accessibility**: Include aria-labels for icons and interactive elements
5. **SEO**: Use semantic HTML elements (section, article, nav, etc.)

## Testing Checklist

Before deploying:
- [ ] All sections render correctly
- [ ] Dark mode toggle works
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] All links are correct and functional
- [ ] Contact form validation works
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Performance is acceptable (Lighthouse score)

## Common Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Add section data to appropriate constant file
3. Import component in `App.jsx`
4. Add navigation link in `Navbar.jsx`

### Modifying Styles
1. Update Tailwind classes in components
2. Or modify `tailwind.config.js` for global changes
3. Update `src/index.css` for custom styles

### Adding New Utilities
1. Create function in `src/utils/`
2. Export function
3. Import where needed

## Performance Optimization

1. **Code Splitting**: Consider lazy loading for heavy components
2. **Image Optimization**: Use optimized images or placeholders
3. **Bundle Size**: Monitor with `npm run build`
4. **Animations**: Use `will-change` CSS property for animated elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Minimum: ES6+ support required

