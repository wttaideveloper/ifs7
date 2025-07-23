# IBLU - Interactive Bible Learning University

## Overview

This is a full-stack web application for IBLU (Interactive Bible Learning University), a revolutionary digital Bible learning platform. The application features a React frontend with TypeScript, Express.js backend, and is configured to use PostgreSQL with Drizzle ORM for data persistence. The UI is built with shadcn/ui components and styled with Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Configured for PostgreSQL session storage with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Monorepo Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Managed via drizzle-kit in `migrations/` directory
- **Current Schema**: Basic user table with id, username, and password fields

### API Layer
- **Base Path**: All API routes prefixed with `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **CRUD Operations**: Designed for user management with extensible interface

### Frontend Components
- **Design System**: Custom color palette with primary blue theme
- **Component Library**: Comprehensive set of shadcn/ui components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation System**: Framer Motion integration for page transitions

### Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **User Model**: Basic username/password authentication ready
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages client-side cache and updates

## External Dependencies

### Core Framework Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Query Management**: TanStack React Query for data fetching
- **Validation**: Zod for runtime type checking

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Build Tools**: Vite for frontend, esbuild for backend
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Production Mode**: Single Node.js process serves both API and static files

### Environment Configuration
- **Development**: Separate Vite dev server with Express API server
- **Production**: Express serves static files and API from single process
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Scripts
- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Push database schema changes

The application is designed as a modern, scalable web platform ready for educational content delivery with a focus on Bible learning and interactive features.