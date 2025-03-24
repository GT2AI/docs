// src/components/common/Sidebar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { 
  Box, 
  VStack,
  Heading,
  Text,
  Divider,
  List,
  ListItem,
  Link,
  IconButton,
  Flex,
  useColorMode,
  useMediaQuery,
  Icon
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FiFileText, 
  FiCpu, 
  FiCode, 
  FiPackage, 
  FiTool, 
  FiUsers, 
  FiChevronLeft,
  FiHome,
  FiBookOpen
} from 'react-icons/fi';
import { SidebarContext } from '../../contexts/SidebarContext';

// Navigation structure
const navItems = [
  { 
    name: 'Getting Started', 
    path: '/docs/started', 
    icon: FiFileText,
    description: 'Introduction to GT^AI tools and resources' 
  },
  { 
    name: 'GPU Access', 
    path: '/docs/gpu', 
    icon: FiCpu,
    description: 'How to access GPU resources for your projects' 
  },
  { 
    name: 'Python Best Practices', 
    path: '/docs/practices', 
    icon: FiCode,
    description: 'Coding standards and best practices' 
  },
  { 
    name: 'Model Deployment', 
    path: '/docs/deployment', 
    icon: FiPackage,
    description: 'Guidelines for deploying ML models' 
  },
  { 
    name: 'API Documentation', 
    path: '/docs/api', 
    icon: FiTool,
    description: 'Reference for GT^AI API endpoints' 
  },
  { 
    name: 'Contributing Guidelines', 
    path: '/docs/contributions', 
    icon: FiUsers,
    description: 'How to contribute to GT^AI projects' 
  },
];

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth)
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(isMobile)
  console.log(isSidebarOpen)
  
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const activeColor = colorMode === 'dark' ? 'brand.200' : 'brand.600';
  const hoverBgColor = colorMode === 'dark' ? 'gray.700' : 'gray.100';
  
  // Determine if sidebar should be shown
  const showSidebar = isMobile ? false : isSidebarOpen;
  
  return (
    <>
      {/* Mobile overlay when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
          zIndex="overlay"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <Box
        as="aside"
        position={{ base: 'fixed', md: 'fixed' }}
        left="0"
        top="0"
        bottom="0"
        w="280px"
        bg={bgColor}
        borderRight="1px"
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
        zIndex="sticky"
        transform={{ base: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'translateX(0)' }}
        transition="transform 0.3s ease"
        pt="60px" // Space for header
        overflowY="auto"
        display={!isMobile || isSidebarOpen ? 'block' : 'none'}
        shadow={isMobile ? 'xl' : 'none'}
      >
        <Box py={5} px={4}>
          <Flex align="center" justify="space-between" mb={6}>
            <Heading as="h3" size="md" fontFamily="heading" display="flex" alignItems="center">
              <Icon as={FiBookOpen} mr={2} /> Documentation
            </Heading>
            
            <IconButton
              aria-label="Close sidebar"
              icon={<FiChevronLeft />}
              onClick={toggleSidebar}
              size="sm"
              variant="ghost"
              display={{ base: 'flex', md: 'none' }}
            />
          </Flex>
          
          <Link 
            as={NavLink} 
            to="/" 
            display="flex"
            alignItems="center"
            py={2}
            px={3}
            borderRadius="md"
            mb={4}
            fontWeight="medium"
            _hover={{
              textDecoration: 'none',
              bg: hoverBgColor,
            }}
          >
            <Icon as={FiHome} mr={2} />
            Back to Home
          </Link>
          
          <Divider mb={4} />
          
          <List spacing={1}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.path}>
                  <Link
                    as={NavLink}
                    to={item.path}
                    py={2}
                    px={3}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    fontWeight={isActive ? 'semibold' : 'normal'}
                    bg={isActive ? (colorMode === 'dark' ? 'gray.700' : 'gray.100') : 'transparent'}
                    color={isActive ? activeColor : 'inherit'}
                    _hover={{
                      textDecoration: 'none',
                      bg: hoverBgColor,
                    }}
                  >
                    <Icon as={item.icon} mr={2} />
                    {item.name}
                  </Link>
                  {isActive && (
                    <Text 
                      pl={9} 
                      pr={3} 
                      fontSize="xs" 
                      color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                      mt={1}
                      mb={2}
                    >
                      {item.description}
                    </Text>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
      
      {/* Toggle button for desktop */}
      {!isMobile && isSidebarOpen && (
        <IconButton
          aria-label="Open sidebar"
          icon={<FiChevronLeft style={{ transform: 'rotate(180deg)' }} />}
          position="fixed"
          left="0"
          top="80px"
          colorScheme="gray"
          size="sm"
          onClick={toggleSidebar}
          borderLeftRadius="0"
          zIndex="docked"
          boxShadow="md"
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        />
      )}
    </>
  );
};

export default Sidebar;