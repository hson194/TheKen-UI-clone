# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

The Ken theme: https://themeforest.net/item/the-ken-multipurpose-creative-wordpress-theme-/7281173

Example of folder structure base on AI's recommendation
my-app/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Static files: images, fonts, icons, etc.
│ ├── components/ # Reusable UI components (buttons, cards, etc.)
│ │ └── Button/
│ │ ├── Button.tsx
│ │ ├── Button.test.tsx
│ │ └── index.ts
│ ├── features/ # Feature-based folders (e.g. auth, dashboard, profile)
│ │ └── auth/
│ │ ├── components/ # Feature-specific UI components
│ │ ├── hooks/ # Custom hooks
│ │ ├── services/ # API calls for this feature
│ │ ├── slices/ # Redux slices (if using Redux)
│ │ └── pages/ # Pages/screens under this feature
│ ├── hooks/ # Global custom React hooks
│ ├── layouts/ # Reusable layout components (e.g. SidebarLayout, AuthLayout)
│ ├── pages/ # Top-level pages if not using feature folders for routing
│ ├── routes/ # App routing config
│ ├── services/ # API service layer (Axios, etc.)
│ ├── store/ # Redux, Zustand, or context setup
│ ├── types/ # TypeScript types & interfaces
│ ├── utils/ # Utility functions
│ ├── App.tsx
│ └── main.tsx
├── .env
├── .gitignore
├── index.html
├── package.json
└── tsconfig.json
