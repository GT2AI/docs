# GT^AI Docs

**GT^AI Docs** is the centralized documentation hub for the GT^AI ecosystem — a student-led initiative at Georgia Tech focused on building AI tools for research, education, and campus life. This site provides guides, best practices, tutorials, and API references to help users onboard and contribute.

## 🌟 Features

* 📚 **Structured Docs**: Clear sections for Getting Started, GPU Access, API Reference, and more.
* 🔍 **Instant Search**: Smart in-site search for fast navigation.
* 🎨 **Themed UI**: Fully responsive and dark-mode friendly using Chakra UI.
* ⚙️ **PWA Support**: Installable as a mobile/web app via Vite PWA plugin.
* 🧭 **Sidebar Navigation**: Persistent and responsive sidebar with context-aware descriptions.

## 🛠️ Tech Stack

* [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* [Chakra UI](https://chakra-ui.com/)
* [React Router](https://reactrouter.com/)
* [VitePWA](https://vite-pwa-org.netlify.app/) for offline support
* ESLint, custom theming, and keyboard navigation UX

## 🚀 Getting Started

### Prerequisites

* Node.js and npm

### Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/GT2AI/docs.git
   cd docs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## 🧭 Site Structure

* `/docs` – Main documentation section

  * Getting Started
  * GPU Access
  * Python Practices
  * Model Deployment
  * API Docs
  * Contributing Guidelines
* `/` – Landing page

## 📦 PWA

This project supports Progressive Web App features via `vite-plugin-pwa`. Users can install the site on mobile or desktop for offline access.

## 🤝 Contributing

See the [Contributing Guidelines](/docs/contributions) to learn how to help improve GT^AI Docs.

## 📄 License

MIT