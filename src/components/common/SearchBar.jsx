// src/components/common/SearchBar.jsx
import React, { useState } from 'react';
import { 
  InputGroup, 
  Input, 
  InputLeftElement, 
  Icon, 
  useColorMode,
  Box,
  List,
  ListItem,
  Text,
  VStack,
  Badge,
  Kbd,
  Flex,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Simulated search results data
const searchableContent = [
  { 
    title: 'Getting Started Guide', 
    path: '/docs/started', 
    content: 'Introduction to GT^AI tools and resources',
    keywords: ['getting started', 'introduction', 'overview', 'install'] 
  },
  { 
    title: 'GPU Access Tutorial', 
    path: '/docs/gpu', 
    content: 'Learn how to access GPU resources for your projects',
    keywords: ['gpu', 'cuda', 'compute', 'a100', 'rtx'] 
  },
  { 
    title: 'Python Best Practices', 
    path: '/docs/practices', 
    content: 'Coding standards and best practices for GT^AI projects',
    keywords: ['python', 'coding', 'standards', 'linting', 'formatting'] 
  },
  { 
    title: 'Model Deployment', 
    path: '/docs/deployment', 
    content: 'Guidelines for deploying machine learning models',
    keywords: ['deployment', 'production', 'model', 'api', 'containerization'] 
  },
  { 
    title: 'API Documentation', 
    path: '/docs/api', 
    content: 'Reference for GT^AI API endpoints and usage',
    keywords: ['api', 'endpoints', 'reference', 'http', 'rest'] 
  },
  { 
    title: 'Contributing Guidelines', 
    path: '/docs/contributions', 
    content: 'How to contribute to GT^AI projects and community',
    keywords: ['contributing', 'github', 'pr', 'pull request', 'commit'] 
  },
];

const SearchBar = () => {
  const { colorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.length >= 2) {
      // Filter content based on query
      const results = searchableContent.filter(item => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query) ||
          item.keywords.some(keyword => keyword.includes(query))
        );
      });
      
      setSearchResults(results);
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
    }
  };
  
  // Handle search result selection
  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setSearchResults([]);
    setIsOpen(false);
  };
  
  return (
    <Popover
      isOpen={isOpen && searchResults.length > 0}
      onClose={() => setIsOpen(false)}
      autoFocus={false}
      closeOnBlur={true}
      placement="bottom"
    >
      <PopoverTrigger>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} />
          </InputLeftElement>
          <Input
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.length >= 2 && setIsOpen(true)}
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
            border="none"
            borderRadius="md"
            _hover={{
              bg: colorMode === 'dark' ? 'gray.700' : 'gray.200'
            }}
            _focus={{
              bg: colorMode === 'dark' ? 'gray.700' : 'gray.200',
              boxShadow: 'outline'
            }}
          />
        </InputGroup>
      </PopoverTrigger>
      
      <Portal>
        <PopoverContent
          bg={colorMode === 'dark' ? 'gray.800' : 'white'}
          borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
          boxShadow="lg"
          maxH="400px"
          overflowY="auto"
          width="100%"
          zIndex="popover"
        >
          <PopoverBody p={0}>
            <List spacing={0}>
              {searchResults.map((result, index) => (
                <ListItem
                  key={index}
                  p={3}
                  cursor="pointer"
                  transition="background 0.2s"
                  _hover={{
                    bg: colorMode === 'dark' ? 'gray.700' : 'gray.100'
                  }}
                  onClick={() => handleResultClick(result.path)}
                >
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="medium">{result.title}</Text>
                    <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                      {result.content}
                    </Text>
                  </VStack>
                </ListItem>
              ))}
            </List>
            
            <Box p={2} borderTop="1px" borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}>
              <Flex justify="space-between" align="center" fontSize="xs" color={colorMode === 'dark' ? 'gray.500' : 'gray.600'}>
                <Text>Search results</Text>
                <HStack>
                  <Kbd fontSize="xs">↑</Kbd> <Kbd fontSize="xs">↓</Kbd> <Text>to navigate</Text>
                  <Kbd fontSize="xs">Enter</Kbd> <Text>to select</Text>
                </HStack>
              </Flex>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default SearchBar;