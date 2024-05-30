# Sales Agent Dashboard

- Deployed Frontend: https://sales-agent-dash.vercel.app/
- Deployed Mock Server: https://json-server-ten-chi.vercel.app/

## Table of Contents

- [Project Overview](#project-description)
- [Project Set Up](#project-set-up)
- [Key Design Decisions](#key-design-decisions)

## Project Description

The project is a Sales Management Web App built using the following tech stack:

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Type-safe programming language
- **Vite**: build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: utility-first CSS framework for rapidly building custom user interfaces.

## Project Set Up

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/sonylomo/sales-agent-dash.git
   ```

2. **Navigate into the directory**

   Change your current directory to the project's directory:

   ```bash
   cd sales-agent-dash
   ```

3. **Install the dependencies**

   Run the following command:

   ```bash
   npm install
   ```

4. **Start the development server**

   Now you can start the development server and begin developing:

   ```bash
   npm run dev
   ```

   The project should now be running at http://localhost:5173 (or another port if 5173 is already in use).

## Key Design Decisions

### 1. Component-Based Architecture

**Decision**: Utilize React's component-based architecture to break down the app into reusable, modular components.

**Rationale**: This approach promotes reusability, maintainability, and scalability. It allows for the isolation of concerns and easier management of the app's state and logic. (Also, it was a requirement from the assignment description).

### 2. Styling with Tailwind CSS
**Decision**: Use Tailwind CSS for styling components.

**Rationale**: Tailwind CSS provides utility-first classes that enable rapid UI development without the need for writing custom CSS. It promotes consistency and reduces the amount of CSS code.

### 3. Integration with ShadCN
**Decision**: Integrate ShadCN for component and UI design consistency.

**Rationale**: Due to time constraints, it was crucial to mainatain a consistent design within the allocated period.

### 4. Responsive Design
**Decision**: Implement responsive design principles.

**Rationale**: Ensuring that the app works well on various screen sizes improves the user experience across devices. I had to hide some component on desktop view like the tables. Essentially, the target user would be expected to opoen the wep app on a desktop device.