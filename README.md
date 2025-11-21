# Portfolio Web Application

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing professional experience, projects, education, and skills.

## Features

- 🎨 Modern and beautiful UI design
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form
- 🔗 Social media integration

## Sections

- **Hero**: Introduction with social links
- **About**: Personal information and journey
- **Education**: Academic background
- **Experience**: Work experience timeline
- **Tech Stack**: Technologies and skills
- **Projects**: Portfolio projects showcase
- **Contact**: Contact form and information

## Getting Started

### ⚠️ Prerequisites

**Node.js must be installed first!**

- **Node.js** (v16 or higher) - [Download LTS version here](https://nodejs.org/)
- **npm** (comes with Node.js automatically)

> **Don't have Node.js?** See [INSTALL_NODEJS.md](./INSTALL_NODEJS.md) for step-by-step installation guide.

### 🚀 Quick Start (3 Steps)

**Option 1: Automated Script (Easiest)**
1. Double-click `install-and-run.bat` (Windows)
   - OR run `.\install-and-run.ps1` in PowerShell
2. Wait for dependencies to install
3. Browser will open automatically at `http://localhost:5173`

**Option 2: Manual Commands**
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### 📦 What Gets Installed

When you run `npm install`, these will be installed:
- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.4.0
- Framer Motion 10.16.16
- React Icons 4.12.0

### 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

> **Note**: If `npm` command is not recognized, install Node.js first and restart your terminal. See [START_HERE.md](./START_HERE.md) for quick start guide.

## Customization

All personal data is centralized in the `src/constants/` directory for easy updates:

### Update Personal Information

Edit `src/constants/personalInfo.js`:
- Name, title, bio
- Email, phone, location
- Statistics

### Update Social Media Links

Edit `src/constants/socialLinks.js`:
- Add/remove social platforms
- Update URLs

### Update Education

Edit `src/constants/education.js`:
- Add your educational background
- Update degrees, institutions, years

### Update Work Experience

Edit `src/constants/experience.js`:
- Add your work history
- Update job titles, companies, descriptions

### Update Projects

Edit `src/constants/projects.js`:
- Add your portfolio projects
- Update descriptions, technologies, links

### Update Tech Stack

Edit `src/constants/techStack.js`:
- Add/remove technologies
- Organize by categories

> **Tip**: See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed customization guide.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

```
src/
├── components/     # React components
├── constants/      # Static data (personal info, projects, etc.)
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
└── config/         # Configuration files
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure documentation.

## Documentation

- [SETUP.md](./SETUP.md) - Detailed setup instructions
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Directory structure guide
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development guidelines

## License

This project is open source and available under the MIT License.

## Contact

Prathamesh Kondawale
- Email: prathamesh.kondawale@email.com
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/prathamesh-kondawale)
- GitHub: [GitHub Profile](https://github.com/prathamesh-kondawale)

