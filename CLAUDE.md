# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ImageClec is a full-stack web application with a React TypeScript frontend and Spring Boot backend, deployed on AWS infrastructure. The platform connects healthcare professionals with patients for medical imaging services.

## Architecture

**Frontend (frontend/)**
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API communication
- Testing with React Testing Library and Jest
- Deployed via AWS Amplify

**Backend (backend/)**
- Spring Boot 3.5.3 with Java 17
- Spring Data JPA with PostgreSQL
- Spring Mail for email functionality
- Maven build system
- Deployed on AWS Elastic Beanstalk

**Deployment**
- Frontend: AWS Amplify (https://imageclec.cl)
- Backend: AWS Elastic Beanstalk (https://api.imageclec.cl)
- Database: PostgreSQL (configured via environment variables)

## Development Commands

### Frontend Development
```bash
cd frontend
npm install                 # Install dependencies
npm start                   # Start development server (localhost:3000)
npm run build              # Build for production
npm test                   # Run tests
```

### Backend Development
```bash
cd backend
./mvnw spring-boot:run     # Start development server (localhost:5000)
./mvnw clean package       # Build JAR file
./mvnw test                # Run tests
```

### Full Application
The frontend proxy is configured to forward API requests to localhost:8080 in development, but the backend runs on port 5000. Update the proxy or backend port as needed for local development.

## Key Configuration

**CORS Configuration**: Both programmatic (CorsConfig.java) and property-based CORS settings are configured for:
- https://imageclec.cl
- https://www.imageclec.cl
- https://main.d1oqjwaqzwsxgm.amplifyapp.com (Amplify preview)
- http://localhost:3000 (development)

**API Endpoints**: Configured in frontend/src/config/api.ts with environment-based switching:
- Production: https://api.imageclec.cl
- Development: http://localhost:8080

**Database**: PostgreSQL connection configured via environment variables:
- DATABASE_URL
- DATABASE_USERNAME  
- DATABASE_PASSWORD

**Email**: Gmail SMTP configured via environment variables:
- MAIL_USERNAME
- MAIL_PASSWORD

## Code Structure

**Frontend Pages**: Located in frontend/src/pages/
- Home.tsx - Landing page
- Contact.tsx - Contact form
- Login.tsx, Register.tsx - Authentication (not yet implemented)
- Dashboard.tsx - User dashboard (not yet implemented)
- FAQ.tsx - Frequently asked questions
- CentrosDeSalud.tsx - Healthcare centers
- Ecografistas.tsx - Ultrasound technicians

**Backend Controllers**: Located in backend/src/main/java/com/imageclec/controller/
- ContactController.java - Handles contact form submissions and health checks

**Database Models**: Located in backend/src/main/java/com/imageclec/model/
- ContactMessage.java - Contact form data model

## Important Notes

- The backend uses environment variables for sensitive configuration (database, email)
- CORS is configured for production domains and localhost development
- The application uses Spring Boot Actuator for health monitoring
- Tailwind CSS is configured for the frontend styling system
- TypeScript strict mode is enabled for better code quality