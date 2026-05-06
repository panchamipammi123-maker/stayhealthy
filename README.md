# StayHealthy - Healthcare Platform

**Project Name**: StayHealthy Go Digital Initiative  
**Description**: Front-end web platform connecting patients with doctors in remote areas using React.js, responsive design, and API integration.

## Features
- Appointment booking with doctor search
- User authentication (Login/Sign Up)
- Patient profile management
- Review submission
- Responsive design (mobile-first)

## Tech Stack
- **Frontend**: React.js, CSS3, HTML5
- **Design**: Figma
- **APIs**: Registration, Authentication, Appointments
- **Deployment**: Static hosting

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm/yarn

### Installation
```bash
git clone https://github.com/panchamipammi123-maker/panchamipammi123-maker-stayhealthy.git
cd panchamipammi123-maker-stayhealthy
npm install
npm start
```

### Build for Production
```bash
npm run build
```

### Deployment
1. Run `npm run build`
2. Deploy `build/` folder to Netlify/Vercel/GitHub Pages

## API Endpoints
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /doctors` - Doctor search
- `POST /appointments` - Book appointment

## Screenshots
- ![Navbar](./screenshots/navbar_design.png)
- ![Landing](./screenshots/launch.png)

## Deployment URL
[Live Demo](https://panchamipammi123-maker-stayhealthy.netlify.app)
