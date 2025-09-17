# DevOps Practice App

A simple Node.js web application designed for DevOps practice, including containerization, CI/CD, and monitoring.

## Features

-  Health check endpoints
-  Basic metrics endpoint
-  RESTful API
-  Container-ready
-  CI/CD ready

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:3000

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /` - Home page
- `GET /health` - Health check (JSON)
- `GET /api/info` - Application info (JSON)
- `GET /metrics` - Basic metrics (JSON)

## Environment Variables

Copy `.env.example` to `.env` and adjust values as needed.

## Development

This app is designed for learning DevOps practices including:
- Docker containerization
- Kubernetes deployment
- CI/CD pipelines
- Monitoring and logging
- Infrastructure as Code

See the DevOps section below for container and deployment examples.

## Personal Learning note.

 Here's the essential information
 you'll need for creating Dockerfile, GitHub Actions, and Kubernetes
 configurations:

  Application Overview

  - Type: Node.js Express web application with EJS templating
  - Entry Point: src/app.js
  - Main Command: npm start (production) / npm run dev (development)
  - Node Version: >=18.0.0, npm >=8.0.0

  For Dockerfile:

  - Base Image: node:18-alpine or node:18-slim
  - Working Directory: /app
  - Dependencies: Standard npm install (no native compilation needed)
  - Port: 3000 (configurable via PORT env var)
  - Static Files: src/public/ directory
  - Views: views/ directory with EJS templates
  - Health Check: GET /health endpoint available
  - Graceful Shutdown: App handles SIGTERM properly

  For GitHub Actions:

  - Test Command: npm test (Jest framework)
  - Lint Command: npm run lint (ESLint)
  - Build Process: No build step required (pure Node.js)
  - Node Version: 18.x
  - Test Framework: Jest with supertest for API testing
  - Health Check: npm run health-check or curl -f http://localhost:3000/health

  Environment Variables:

  - NODE_ENV: development/production
  - PORT: 3000 (default)
  - Optional future vars for database/monitoring (commented in .env.example)

  For Kubernetes:

  - Container Port: 3000
  - Service Type: ClusterIP/LoadBalancer
  - Health Checks:
    - Readiness: GET /health
    - Liveness: GET /health
  - Resource Requirements: Lightweight app, minimal CPU/memory needed
  - No Persistent Storage: Stateless application
  - No Database Dependencies: Currently standalone (future database support planned)

  API Endpoints:

  - / - Home page (HTML)
  - /health - Health check (JSON)
  - /api/info - App info (JSON)
  - /metrics - Basic metrics (JSON)

  The application is containerization-ready with proper error handling, logging, and
   health endpoints for production deployment.
