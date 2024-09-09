# BikeEase - Bike Rental Service

Welcome to **BikeEase**, a service where users can rent bikes effortlessly. This repository contains the frontend code for the BikeEase platform.

## Project Name

**bike-rental-frontend**

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Project Live Link](#project-live-link)
- [Project Admin](#project-admin)

## Introduction

BikeEase is a modern bike rental service designed to provide a seamless experience for users looking to rent bikes. This frontend project is built using React and TypeScript, with additional support for state management and UI design libraries.

## Features

- User-friendly interface for renting bikes.
- Date and time picker with restrictions to prevent incorrect rentals.
- State management using Redux Toolkit.
- Modern UI components with Ant Design and Tailwind CSS.
- Payment integration with a clear display of total, due amounts, and a 'Pay Now' button.

## Technologies Used

- **React**: ^18.3.1
- **TypeScript**: ^5.2.2
- **Redux Toolkit**: ^2.2.7
- **React Hook Form**: ^7.53.0
- **Ant Design**: ^5.20.3
- **Tailwind CSS**: ^3.4.10
- **Vite**: ^5.3.1
- **ESLint**: ^8.57.0
- **Moment & Moment Timezone**: ^2.30.1, ^0.5.45
- **Day.js**: ^1.11.13

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/bikeease-frontend.git
   cd bikeease-frontend

2. **Install the dependencies:**

   ```bash
   npm install

3. **Run the development server:**

   ```bash
   npm run dev

4. **Build the project for production::**

   ```bash
   npm run build

## Usage

Once the development server is running, you can access the application at http://localhost:5173/. From there, you can browse and rent bikes as a user.

The payment page includes details like total payment, due payment, and a prominent 'Pay Now' button. The layout is designed to be modern and eye-catching.

## Scripts

Here are the key scripts available in this project:

- **`dev`**: Starts the development server using Vite.
- **`build`**: Compiles TypeScript and builds the project using Vite.
- **`lint`**: Runs ESLint to check for code quality.
- **`preview`**: Previews the production build.
## Folder Structure

```
bike-rental-frontend/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Application pages
│   ├── store/             # Redux store and slices
│   ├── styles/            # Global styles and Tailwind setup
│   └── utils/             # Utility functions
├── .eslintrc.json         # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project metadata

```

## Project Live Link

- Project Live Link: [Go Live](https://bike-rental-frontend-xi.vercel.app/)

## Project Admin

- Admin Email: admin123@gmail.com
- Admin Pass: admin123