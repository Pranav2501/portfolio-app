# Pranav Raj's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all devices
- Interactive UI with smooth animations using Framer Motion
- Contact form with EmailJS integration
- Modular component architecture
- Clean and modern UI with dark theme

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Pranav2501/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Setup EmailJS for Contact Form

To enable email functionality in the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with parameters: `name`, `email`, `subject`, `message`
4. Get your Service ID, Template ID, and User ID
5. Update the Contact component with your IDs:
   ```typescript
   // In Contact.tsx
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const userId = 'your_user_id';
   ```
6. Test your form by submitting a message

## Deployment

### Deploying to Render

1. Create an account on [Render](https://render.com/) if you don't have one

2. Create a new Web Service
   - Click "New +" and select "Static Site"
   - Connect your GitHub repository
   - Select the repository containing your portfolio

3. Configure the build settings:
   - **Name**: `your-portfolio-name`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
   
4. Click "Create Static Site"

5. Render will automatically build and deploy your portfolio
   - It will also redeploy whenever you push changes to your repository

6. Once deployed, you can use a custom domain by going to "Settings" > "Custom Domain"

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Router

## Author

Pranav Raj Sowrirajan Balaji

## License

MIT
