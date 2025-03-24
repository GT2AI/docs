// src/pages/GettingStarted.jsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Link, 
  Divider, 
  UnorderedList, 
  ListItem, 
  Code, 
  Alert, 
  AlertIcon, 
  AlertTitle, 
  AlertDescription,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorMode
} from '@chakra-ui/react';

const GettingStarted = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4} fontFamily="heading">
        Getting Started with GT^AI
      </Heading>
      
      <Text fontSize="lg" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mb={8}>
        Welcome to the GT^AI platform! This guide will help you get started with our tools and resources.
      </Text>
      
      <Divider my={8} />
      
      <Heading as="h2" size="lg" mb={4} fontFamily="heading">
        Introduction
      </Heading>
      
      <Text mb={4}>
        GT^AI is a student-led initiative at Georgia Tech focused on building AI-powered tools to enhance the student experience. Our platform includes various resources for research, development, and deployment of AI models.
      </Text>
      
      <Alert status="info" mb={6} borderRadius="md">
        <AlertIcon />
        <AlertDescription>
          All GT^AI tools are available to Georgia Tech students, faculty, and staff. Most services require GT authentication.
        </AlertDescription>
      </Alert>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Core Tools & Services
      </Heading>
      
      <TableContainer mb={6}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Tool</Th>
              <Th>Description</Th>
              <Th>Access</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="medium">GT^Search</Td>
              <Td>Semantic search for Georgia Tech resources</Td>
              <Td>
                <Link color="brand.500" href="https://gt-ai-search.vercel.app/" isExternal>
                  Web Access
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="medium">GPU Clusters</Td>
              <Td>High-performance compute resources for AI training</Td>
              <Td>
                <Link color="brand.500" href="/docs/gpu">
                  Request Access
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="medium">Model Zoo</Td>
              <Td>Pre-trained models specific to GT use cases</Td>
              <Td>
                <Link color="brand.500" href="/docs/api">
                  API Documentation
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Getting Access
      </Heading>
      
      <Text mb={4}>
        To get started with GT^AI tools, follow these steps:
      </Text>
      
      <UnorderedList spacing={2} mb={6}>
        <ListItem>Sign in with your Georgia Tech credentials at <Link color="brand.500" href="https://gt-ai.gatech.edu">gt-ai.gatech.edu</Link></ListItem>
        <ListItem>Complete the onboarding form to indicate which resources you need</ListItem>
        <ListItem>For GPU access, submit additional information about your research project</ListItem>
        <ListItem>Join our Discord community for support and collaboration</ListItem>
      </UnorderedList>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Quick Start Example
      </Heading>
      
      <Text mb={4}>
        Here's a simple example of using the GT^AI Python client:
      </Text>
      
      <Box
        as="pre"
        p={4}
        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
        borderRadius="md"
        overflowX="auto"
        mb={6}
        fontFamily="mono"
      >
        <Code display="block" whiteSpace="pre" overflowX="auto" w="full">
{`# Install the client
pip install gt-ai-client

# Import and authenticate
import gtai

# Connect to GT services
client = gtai.Client(auth_token="YOUR_AUTH_TOKEN")

# Use GT^Search programmatically
results = client.search("machine learning courses spring 2023")

# Print results
for result in results:
    print(f"{result.title} - {result.url}")
`}
        </Code>
      </Box>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Next Steps
      </Heading>
      
      <Text mb={4}>
        Now that you're set up with GT^AI, here are some recommended next steps:
      </Text>
      
      <UnorderedList spacing={2} mb={6}>
        <ListItem>
          <Link color="brand.500" href="/docs/gpu">Learn about GPU resources</Link> - Get access to computational resources for your projects
        </ListItem>
        <ListItem>
          <Link color="brand.500" href="/docs/practices">Review Python best practices</Link> - Follow our coding standards for consistent, high-quality code
        </ListItem>
        <ListItem>
          <Link color="brand.500" href="/docs/contributions">Contribute to GT^AI</Link> - Join our open-source community and help build the future of AI at Georgia Tech
        </ListItem>
      </UnorderedList>
      
      <Alert status="success" mt={10} borderRadius="md">
        <AlertIcon />
        <Box>
          <AlertTitle mb={1}>Ready to build?</AlertTitle>
          <AlertDescription>
            If you need help at any time, join our <Link color="brand.500" href="https://discord.gg/tdZvPuTazB" isExternal>Discord community</Link> where you can connect with other users and GT^AI team members.
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};

export default GettingStarted;