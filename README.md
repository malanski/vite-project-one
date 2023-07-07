# Todo List App - Frontend

<!--- ![Todo List App Screenshot](/public/screenshot.png) -->
 
![Todo List App Screenshot Gif](/sample.gif)

This is a frontend application built with TypeScript, Vite, React, and CSS to create a simple Todo List app. The app allows users to register and manage their tasks, creating TODO lists to stay organized and productive.

## Features

- Create, Read, Update, and Delete tasks
- Mark tasks as completed
- Filter tasks by status (All, Active, Completed)
- Clear completed tasks
- Responsive design for various screen sizes

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 12 or above)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/malanski/vite-project-one.git
cd todo-list-app
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000` to see the Todo List app.

## Project Structure

The project structure follows a common React project layout:

```
todo-list-app/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── components/
  │   │   ├── TodoForm.tsx
  │   │   ├── TodoItem.tsx
  │   │   └── TodoList.tsx
  │   ├── App.tsx
  │   ├── index.tsx
  │   └── styles.css
  ├── package.json
  ├── tsconfig.json
  ├── vite.config.ts
  └── README.md
```

- `public/`: Contains the HTML template and other static assets.
- `src/`: Contains the TypeScript source code.
  - `components/`: Contains React components used in the app.
  - `App.tsx`: The main component that handles the Todo List app.
  - `index.tsx`: The entry point of the application.
  - `styles.css`: Global CSS styles for the app.
- `package.json`: Lists project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.

## Dependencies

The main dependencies used in this project are:

- React A JavaScript library for building user interfaces.
- Vite: A fast-build tooling for modern web development.
- TypeScript: A superset of JavaScript that provides static typing.
- CSS: Used for styling the components.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Happy coding! :rocket:
