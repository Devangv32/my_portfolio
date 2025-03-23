# My Portfolio

This is my online portfolio built with **React** and **Vite**. It showcases my projects, skills, and contact information in a clean and responsive design.

## Features

- **About Me**: A brief introduction about myself.
- **Projects**: A gallery of my projects with descriptions and images.
- **Contact**: A form to get in touch with me.
- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.

---

## Development Process

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **React Router DOM**: For handling routing in the app.
- **CSS**: For styling the components and pages.
- **Git**: For version control.

### Project Setup

1. **Initialize the Project**:

   - Created a new React project using Vite:
     ```bash
     npm create vite@latest my-portfolio --template react
     cd my-portfolio
     npm install
     ```

2. **Install Dependencies**:

   - Installed additional dependencies:
     ```bash
     npm install react-router-dom axios
     ```

3. **Develop Components**:

- Created reusable components like `Header`, `ProjectGallery`, and `ContactForm`.
- Developed pages like `Home`, `About`, `Projects`, and `Contact`.

5. **Styling**:

- Used `index.css` for global styles and `App.css` for component-specific styles.
- Added responsive design using media queries.

6. **Testing**:

- Wrote unit tests for critical components using **Jest** and **React Testing Library**.
- Achieved over 80% test coverage.

---

## Challenges Faced and Solutions

### Challenge 1: Lazy Loading Images

- **Problem**: Images were slowing down the initial page load.
- **Solution**: Used `react-lazy-load-image-component` to lazy load images. This ensures images are only loaded when they are visible in the viewport.

### Challenge 2: Centering Content

- **Problem**: The content was aligned to the left and looked unappealing.
- **Solution**: Used CSS Flexbox and Grid to center the content and improve the layout.

### Challenge 3: Deployment Issues

- **Problem**: The production build was not working as expected.
- **Solution**: Verified the build locally using `serve` and fixed missing image paths and CSS issues.

### Challenge 4: Git Identity Error

- **Problem**: Git commit failed with the error `Author identity unknown`.
- **Solution**: Configured Git username and email using:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
