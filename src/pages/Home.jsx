// src/pages/Home.jsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Card, 
  CardBody, 
  Icon, 
  useColorMode 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FiFileText, 
  FiCpu, 
  FiCode, 
  FiPackage, 
  FiTool, 
  FiUsers, 
  FiArrowRight 
} from 'react-icons/fi';

const Home = () => {
  const { colorMode } = useColorMode();

  // Documentation cards data
  const docCards = [
    { 
      title: 'Getting Started Guide', 
      description: 'Introduction to GT^AI tools and resources', 
      icon: FiFileText,
      path: '/docs/started' 
    },
    { 
      title: 'GPU Access Tutorial', 
      description: 'Learn how to access GPU resources for your projects', 
      icon: FiCpu,
      path: '/docs/gpu' 
    },
    { 
      title: 'Python Best Practices', 
      description: 'Coding standards for GT^AI projects', 
      icon: FiCode,
      path: '/docs/practices' 
    },
    { 
      title: 'Model Deployment', 
      description: 'Guidelines for deploying ML models', 
      icon: FiPackage,
      path: '/docs/deployment' 
    },
    { 
      title: 'API Documentation', 
      description: 'Reference for GT^AI API endpoints', 
      icon: FiTool,
      path: '/docs/api' 
    },
    { 
      title: 'Contributing Guidelines', 
      description: 'How to contribute to GT^AI projects', 
      icon: FiUsers,
      path: '/docs/contributions' 
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        bg={colorMode === 'dark' ? 'gray.800' : 'blue.50'} 
        py={[10, 20]} 
        px={4}
        borderRadius="lg"
        mb={10}
        position="relative"
        overflow="hidden"
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.05"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6TTQgNGgxdjFINHpNOCA4aDF2MUg4ek0xMiAxMmgxdjFoLTF6TTE2IDE2aDF2MWgtMXoiIGZpbGw9IiNmZmYiPjwvcGF0aD48L3N2Zz4=')"
          }}
          backgroundSize="20px 20px"
        />
        
        <VStack spacing={6} position="relative" maxW="container.md" mx="auto" textAlign="center">
          <Heading 
            as="h1" 
            size="3xl"
            padding={10} 
            fontFamily="heading"
            bgGradient={colorMode === 'dark' 
              ? 'linear(to-r, brand.200, brand.400)'
              : 'linear(to-r, brand.500, brand.700)'
            }
            bgClip="text"
            letterSpacing="tight"
          >
            GT<sup>AI</sup> Documentation
          </Heading>

          <Text fontSize="xl" maxW="container.md">
            Comprehensive resources for GT^AI tools, libraries, and best practices
          </Text>
          
          <Button
            as={RouterLink}
            to="/docs/started"
            colorScheme="brand"
            size="lg"
            rightIcon={<FiArrowRight />}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            Get Started
          </Button>
        </VStack>
      </Box>
      
      {/* Documentation Cards */}
      <Box px={4} maxW="container.xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {docCards.map((card) => (
            <Card
              key={card.title}
              as={RouterLink}
              to={card.path}
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
                textDecoration: 'none',
              }}
              h="100%"
            >
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Box
                    p={2}
                    borderRadius="md"
                    bg={colorMode === 'dark' ? 'brand.900' : 'brand.50'}
                    color={colorMode === 'dark' ? 'brand.200' : 'brand.500'}
                  >
                    <Icon as={card.icon} boxSize={6} />
                  </Box>
                  
                  <Heading as="h3" size="md" fontFamily="heading">
                    {card.title}
                  </Heading>
                  
                  <Text>{card.description}</Text>
                  
                  <HStack fontSize="sm" color={colorMode === 'dark' ? 'brand.200' : 'brand.500'}>
                    <Text>Learn more</Text>
                    <Icon as={FiArrowRight} />
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;