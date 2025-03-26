// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/react';
import { SidebarContext } from './contexts/SidebarContext';

// Layouts
import MainLayout from './components/layout/MainLayout';
import DocLayout from './components/layout/DocLayout';

// Pages
import HomePage from './pages/Home';
import GettingStartedPage from './pages/GettingStarted';
import GPUAccessPage from './pages/GPUAccess';
import PythonPracticesPage from './pages/PythonPractices';
import ModelDeploymentPage from './pages/ModelDeployment';
import APIDocumentationPage from './pages/APIDocumentation';
import ContributingGuidelinesPage from './pages/ContributingGuidelines';
import NotFoundPage from './pages/NotFound';

function App() {
  const { colorMode } = useColorMode();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <Box 
        minH="100vh" 
        bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
        display="flex"
        flexDirection="column"
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          
          <Route path="/docs" element={<DocLayout />}>
            <Route index element={<GettingStartedPage />} />
            <Route path="started" element={<GettingStartedPage />} />
            <Route path="gpu" element={<GPUAccessPage />} />
            <Route path="practices" element={<PythonPracticesPage />} />
            <Route path="deployment" element={<ModelDeploymentPage />} />
            <Route path="api" element={<APIDocumentationPage />} />
            <Route path="contributions" element={<ContributingGuidelinesPage />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </SidebarContext.Provider>
  );
}

export default App;