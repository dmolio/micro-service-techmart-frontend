# TechMart Frontend

Frontend microservice for the TechMart e-commerce platform.

## Prerequisites

- Node.js 20+
- npm 9+
- Docker
- Kubernetes
- Azure CLI

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build



Deployment
The application is deployed using ArgoCD to Azure Kubernetes Service (AKS).

Infrastructure Setup
Create Azure Container Registry (ACR)
Create AKS cluster
Configure ArgoCD
Set up GitHub Actions secrets
Configuration
Environment variables are managed through Kubernetes ConfigMaps and Secrets:

VITE_API_BASE_URL: API Gateway URL
VITE_PAYPAL_CLIENT_ID: PayPal integration client ID
Architecture
The frontend service is part of the TechMart microservices architecture:

React + TypeScript for UI
Vite for building
Tailwind CSS for styling
React Query for data fetching
Zustand for state management
<<<<<<< HEAD
PayPal integration for payments
=======
PayPal integration for payments
>>>>>>> 7c044380ab689026521db6480d2a730f8365ccad
