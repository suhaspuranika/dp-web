# - Data Prowess

A modern HR Management System built with Vite + React, featuring a split-screen design with Data Prowess branding and HR login functionality.

## Features

### Data Prowess Section (Left Half)
- **Modern Hero Section** with animated rotating elements and Data Prowess branding
- **About Section** with animated statistics counters
- **Services Section** with interactive service cards showcasing Data Prowess offerings
- **Responsive Navigation** with smooth scrolling and glassmorphism effects
- **Animated Backgrounds** with particle effects and gradient overlays

### HR Management Login (Right Half)
- **Secure Login Form** with email/password authentication
- **Social Login Options** (Google, Microsoft)
- **HR Portal Features** showcase including:
  - Time Tracking
  - Leave Management
  - Performance Reviews
  - Document Management
  - Payroll
  - Notifications
- **Responsive Design** optimized for all screen sizes

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: CSS3 with advanced animations and glassmorphism effects
- **Icons**: Font Awesome 6
- **Fonts**: Inter & Universo
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── DataProwessSection.jsx      # Main Data Prowess container
│   ├── DataProwessSection.css      # Data Prowess specific styles
│   ├── Navigation.jsx              # Navigation component
│   ├── HeroSection.jsx             # Hero section with animations
│   ├── AboutSection.jsx            # About section with stats
│   ├── ServicesSection.jsx         # Services showcase
│   ├── HRLoginSection.jsx          # HR login form
│   └── HRLoginSection.css          # HR login specific styles
├── App.jsx                         # Main app component
├── App.css                         # App layout styles
├── main.jsx                        # React entry point
└── index.css                       # Global styles and animations

public/
├── images/                         # Service images
└── data-prowess-logo.png           # Company logo
```

## Design Features

### Data Prowess Branding
- Maintains original Data Prowess design and branding
- Animated rotating elements in hero section
- Glassmorphism navigation with particle effects
- Interactive service cards with hover effects
- Smooth scroll animations and transitions

### HR Management Theme
- Professional login interface
- Modern form design with validation
- Feature showcase grid
- Social authentication options
- Responsive mobile-first design

## Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
The application uses CSS custom properties for easy theming:
- `--primary-orange`: #ff6b35
- `--secondary-orange`: #ff8c42
- `--dark-gray`: #2c3e50
- `--medium-gray`: #6c757d
- `--light-gray`: #f8f9fa

### Adding New Services
To add new services to the Data Prowess section, update the `services` array in `ServicesSection.jsx`.

### Modifying HR Features
Update the `features-grid` section in `HRLoginSection.jsx` to modify or add HR portal features.

## License

This project is proprietary software developed for Data Prowess Pvt. Ltd.

## Contact

For questions or support, contact Data Prowess at:
- Email: info@dataprowess.com.au
- Phone: +61 424 479 526
- Address: Level 35, Tower One, International Towers, 100 Barangaroo Avenue, Sydney, NSW 2000 Australia