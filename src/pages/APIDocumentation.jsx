// src/pages/APIDocumentation.jsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Divider, 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge, 
  Flex,
  Link,
  Card,
  CardHeader,
  CardBody,
  Code,
  HStack,
  VStack,
  Alert,
  AlertIcon,
  useColorMode,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

const APIDocumentation = () => {
  const { colorMode } = useColorMode();
  
  // Example API endpoints
  const endpoints = [
    {
      method: 'GET',
      path: '/api/search',
      description: 'Search Georgia Tech resources',
      parameters: [
        { name: 'q', type: 'string', required: true, description: 'Search query' },
        { name: 'limit', type: 'integer', required: false, description: 'Maximum number of results to return (default: 10)' },
        { name: 'filter', type: 'string', required: false, description: 'Filter results by type (web, pdf, document)' },
      ],
      responses: [
        { code: '200', description: 'Successful operation', example: '{ "results": [...], "count": 10 }' },
        { code: '400', description: 'Invalid request', example: '{ "error": "Missing required parameter: q" }' },
        { code: '401', description: 'Unauthorized', example: '{ "error": "Invalid API key" }' },
      ]
    },
    {
      method: 'POST',
      path: '/api/vectorize',
      description: 'Generate embeddings for text input',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to vectorize' },
        { name: 'model', type: 'string', required: false, description: 'Embedding model to use (default: "gt-base")' },
      ],
      requestBody: {
        example: `{
  "text": "Machine learning applications in education",
  "model": "gt-base"
}`
      },
      responses: [
        { code: '200', description: 'Successful operation', example: '{ "embedding": [0.1, 0.2, ...], "dimensions": 768 }' },
        { code: '400', description: 'Invalid request', example: '{ "error": "Text exceeds maximum length" }' },
        { code: '401', description: 'Unauthorized', example: '{ "error": "Invalid API key" }' },
      ]
    },
    {
      method: 'GET',
      path: '/api/models',
      description: 'List available models in the GT^AI model zoo',
      parameters: [
        { name: 'type', type: 'string', required: false, description: 'Filter by model type (classification, embedding, generation)' },
      ],
      responses: [
        { code: '200', description: 'Successful operation', example: '{ "models": [{"id": "gt-base", "type": "embedding", "dimensions": 768}] }' },
        { code: '401', description: 'Unauthorized', example: '{ "error": "Invalid API key" }' },
      ]
    },
  ];

  return (
    <Box className="doc-content">
      <Heading as="h1" size="xl" mb={4} fontFamily="heading">
        API Documentation
      </Heading>
      
      <Text fontSize="lg" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mb={8}>
        Complete reference guide for the GT^AI API endpoints and usage examples.
      </Text>
      
      <Divider my={8} />
      
      <Heading as="h2" size="lg" mb={6} fontFamily="heading">
        Introduction
      </Heading>
      
      <Text mb={4}>
        The GT^AI API provides programmatic access to Georgia Tech's AI tools and resources. 
        This document provides details about the available endpoints, parameters, and example responses.
      </Text>
      
      <Alert status="info" mb={6} borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="medium">Base URL</Text>
          <Code fontFamily="mono">https://api.gt-ai.gatech.edu/v1</Code>
        </Box>
      </Alert>
      
      <Card variant="outline" mb={8}>
        <CardBody>
          <Heading as="h3" size="md" mb={4}>
            Authentication
          </Heading>
          
          <Text mb={4}>
            All API requests require authentication using an API key. You can obtain an API key from the 
            <Link href="#" color="brand.500" mx={1}>Developer Portal</Link>.
          </Text>
          
          <Heading as="h4" size="sm" mb={2}>
            Authentication Methods
          </Heading>
          
          <Tabs variant="enclosed" colorScheme="brand" mb={4}>
            <TabList>
              <Tab>Header (Recommended)</Tab>
              <Tab>Query Parameter</Tab>
            </TabList>
            
            <TabPanels>
              <TabPanel p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>Include your API key in the request header:</Text>
                <Code fontFamily="mono" display="block" p={3} bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} borderRadius="md">
                  X-GT-API-Key: your_api_key_here
                </Code>
              </TabPanel>
              <TabPanel p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>Include your API key as a query parameter:</Text>
                <Code fontFamily="mono" display="block" p={3} bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} borderRadius="md">
                  ?api_key=your_api_key_here
                </Code>
                <Text fontSize="sm" color="orange.500" mt={2}>
                  Note: This method is less secure and should be avoided in production.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
          
          <Heading as="h4" size="sm" mb={2}>
            Rate Limits
          </Heading>
          
          <Text mb={2}>
            The API is rate limited to protect our services from abuse. Current limits:
          </Text>
          
          <Table size="sm" variant="simple" mb={4}>
            <Thead>
              <Tr>
                <Th>Plan</Th>
                <Th>Rate Limit</Th>
                <Th>Monthly Quota</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Basic (Students)</Td>
                <Td>10 requests/minute</Td>
                <Td>1,000 requests</Td>
              </Tr>
              <Tr>
                <Td>Research</Td>
                <Td>60 requests/minute</Td>
                <Td>10,000 requests</Td>
              </Tr>
              <Tr>
                <Td>Production</Td>
                <Td>300 requests/minute</Td>
                <Td>100,000 requests</Td>
              </Tr>
            </Tbody>
          </Table>
          
          <Text fontSize="sm">
            Need higher limits? <Link href="#" color="brand.500">Contact us</Link> to discuss custom rate limits for your application.
          </Text>
        </CardBody>
      </Card>
      
      <Heading as="h2" size="lg" mb={6} id="endpoints" fontFamily="heading">
        API Endpoints
      </Heading>
      
      {endpoints.map((endpoint, index) => (
        <Card key={index} variant="apiEndpoint" mb={6}>
          <CardHeader p={0}>
            <Flex p={3} align="center" gap={3}>
              <Badge 
                variant={endpoint.method.toLowerCase()} 
                px={2} 
                py={1} 
                borderRadius="md" 
                textTransform="uppercase" 
                fontWeight="bold"
                minW="60px"
                textAlign="center"
              >
                {endpoint.method}
              </Badge>
              
              <Text fontFamily="mono" fontWeight="medium">
                {endpoint.path}
              </Text>
            </Flex>
          </CardHeader>
          
          <CardBody>
            <Text mb={4}>{endpoint.description}</Text>
            
            <Accordion allowMultiple defaultIndex={[0]} mb={4}>
              {/* Parameters Section */}
              {endpoint.parameters && endpoint.parameters.length > 0 && (
                <AccordionItem border="1px" borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'} borderRadius="md" mb={2}>
                  <AccordionButton py={3}>
                    <Box flex="1" textAlign="left" fontWeight="medium">
                      Parameters
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Table size="sm" variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Type</Th>
                          <Th>Required</Th>
                          <Th>Description</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {endpoint.parameters.map((param, paramIndex) => (
                          <Tr key={paramIndex}>
                            <Td fontFamily="mono">{param.name}</Td>
                            <Td>{param.type}</Td>
                            <Td>{param.required ? 'Yes' : 'No'}</Td>
                            <Td>{param.description}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </AccordionPanel>
                </AccordionItem>
              )}
              
              {/* Request Body Section */}
              {endpoint.requestBody && (
                <AccordionItem border="1px" borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'} borderRadius="md" mb={2}>
                  <AccordionButton py={3}>
                    <Box flex="1" textAlign="left" fontWeight="medium">
                      Request Body
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Box
                      as="pre"
                      p={3}
                      borderRadius="md"
                      bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                      overflow="auto"
                      fontFamily="mono"
                      fontSize="sm"
                    >
                      {endpoint.requestBody.example}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              )}
              
              {/* Responses Section */}
              <AccordionItem border="1px" borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'} borderRadius="md">
                <AccordionButton py={3}>
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    Responses
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack spacing={4} align="stretch">
                    {endpoint.responses.map((response, responseIndex) => (
                      <Box key={responseIndex}>
                        <HStack mb={2}>
                          <Badge 
                            colorScheme={
                              response.code.startsWith('2') ? 'green' : 
                              response.code.startsWith('4') ? 'orange' : 'red'
                            }
                            borderRadius="md"
                            px={2}
                            py={1}
                          >
                            {response.code}
                          </Badge>
                          <Text fontWeight="medium">{response.description}</Text>
                        </HStack>
                        
                        <Box
                          as="pre"
                          p={3}
                          borderRadius="md"
                          bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                          overflow="auto"
                          fontFamily="mono"
                          fontSize="sm"
                        >
                          {response.example}
                        </Box>
                      </Box>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            
            {/* Example Usage (Python) */}
            <Box mt={6}>
              <Heading as="h4" size="sm" mb={2}>
                Example Usage (Python)
              </Heading>
              
              <Box
                as="pre"
                p={4}
                borderRadius="md"
                bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                overflow="auto"
                fontFamily="mono"
                fontSize="sm"
              >
                {endpoint.method === 'GET' ? 
                `import requests

# Set your API key
api_key = "your_api_key_here"

# Set the endpoint URL
url = "https://api.gt-ai.gatech.edu/v1${endpoint.path}"

# Set parameters
params = {${endpoint.parameters.map(p => `
    "${p.name}": ${p.type === 'string' ? '"example_value"' : p.type === 'integer' ? '10' : 'true'}`).join(',')}
}

# Set headers
headers = {
    "X-GT-API-Key": api_key
}

# Make the request
response = requests.get(url, params=params, headers=headers)

# Print the response
print(response.status_code)
print(response.json())`
                :
                `import requests
import json

# Set your API key
api_key = "your_api_key_here"

# Set the endpoint URL
url = "https://api.gt-ai.gatech.edu/v1${endpoint.path}"

# Set the request body
payload = ${endpoint.requestBody ? endpoint.requestBody.example : '{}'}

# Set headers
headers = {
    "X-GT-API-Key": api_key,
    "Content-Type": "application/json"
}

# Make the request
response = requests.post(url, data=json.dumps(payload), headers=headers)

# Print the response
print(response.status_code)
print(response.json())`}
              </Box>
            </Box>
          </CardBody>
        </Card>
      ))}
      
      <Divider my={10} />
      
      <Heading as="h2" size="lg" mb={6} fontFamily="heading">
        Client Libraries
      </Heading>
      
      <Text mb={4}>
        We provide official client libraries for several programming languages to make it easier to integrate with our API.
      </Text>
      
      <Tabs variant="soft-rounded" colorScheme="brand" mb={8}>
        <TabList mb={4}>
          <Tab>Python</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Java</Tab>
          <Tab>Go</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel p={0}>
            <Card variant="outline">
              <CardBody>
                <Heading as="h3" size="md" mb={4}>
                  Python Client
                </Heading>
                
                <Text mb={4}>
                  Install the Python client library using pip:
                </Text>
                
                <Box
                  as="pre"
                  p={3}
                  borderRadius="md"
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                  overflow="auto"
                  fontFamily="mono"
                  fontSize="sm"
                  mb={4}
                >
                  pip install gt-ai-client
                </Box>
                
                <Text mb={4}>
                  Basic usage example:
                </Text>
                
                <Box
                  as="pre"
                  p={4}
                  borderRadius="md"
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                  overflow="auto"
                  fontFamily="mono"
                  fontSize="sm"
                >
{`import gtai

# Initialize client with your API key
client = gtai.Client(api_key="your_api_key_here")

# Search GT resources
results = client.search("machine learning course")

# Print results
for result in results:
    print(f"{result.title} - {result.url}")

# Generate embeddings for text
embedding = client.vectorize("How do I register for classes?")
print(f"Embedding dimensions: {len(embedding)}")

# List available models
models = client.list_models()
print(f"Available models: {len(models)}")
for model in models:
    print(f"- {model.id} ({model.type})")`}
                </Box>
                
                <Link href="https://github.com/GT2AI/python-client" isExternal color="brand.500" mt={4} display="inline-flex" alignItems="center">
                  View full documentation on GitHub <FiExternalLink style={{ marginLeft: '0.5rem' }} />
                </Link>
              </CardBody>
            </Card>
          </TabPanel>
          
          <TabPanel p={0}>
            <Card variant="outline">
              <CardBody>
                <Heading as="h3" size="md" mb={4}>
                  JavaScript Client
                </Heading>
                
                <Text mb={4}>
                  Install the JavaScript client library using npm or yarn:
                </Text>
                
                <Box
                  as="pre"
                  p={3}
                  borderRadius="md"
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                  overflow="auto"
                  fontFamily="mono"
                  fontSize="sm"
                  mb={4}
                >
                  npm install gt-ai-client
                </Box>
                
                <Text mb={4}>
                  Basic usage example:
                </Text>
                
                <Box
                  as="pre"
                  p={4}
                  borderRadius="md"
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                  overflow="auto"
                  fontFamily="mono"
                  fontSize="sm"
                >
{`import { GtAiClient } from 'gt-ai-client';

// Initialize client with your API key
const client = new GtAiClient('your_api_key_here');

// Using async/await
async function searchExample() {
  try {
    // Search GT resources
    const results = await client.search('machine learning course');
    
    // Process results
    results.forEach(result => {
      console.log(\`\${result.title} - \${result.url}\`);
    });
    
    // Generate embeddings for text
    const embedding = await client.vectorize('How do I register for classes?');
    console.log(\`Embedding dimensions: \${embedding.length}\`);
    
    // List available models
    const models = await client.listModels();
    console.log(\`Available models: \${models.length}\`);
    models.forEach(model => {
      console.log(\`- \${model.id} (\${model.type})\`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

searchExample();`}
                </Box>
                
                <Link href="https://github.com/GT2AI/js-client" isExternal color="brand.500" mt={4} display="inline-flex" alignItems="center">
                  View full documentation on GitHub <FiExternalLink style={{ marginLeft: '0.5rem' }} />
                </Link>
              </CardBody>
            </Card>
          </TabPanel>
          
          <TabPanel p={0}>
            <Card variant="outline">
              <CardBody>
                <Text mb={4}>
                  Java client library documentation coming soon.
                </Text>
                
                <Link href="https://github.com/GT2AI/java-client" isExternal color="brand.500" display="inline-flex" alignItems="center">
                  View GitHub repository <FiExternalLink style={{ marginLeft: '0.5rem' }} />
                </Link>
              </CardBody>
            </Card>
          </TabPanel>
          
          <TabPanel p={0}>
            <Card variant="outline">
              <CardBody>
                <Text mb={4}>
                  Go client library documentation coming soon.
                </Text>
                
                <Link href="https://github.com/GT2AI/go-client" isExternal color="brand.500" display="inline-flex" alignItems="center">
                  View GitHub repository <FiExternalLink style={{ marginLeft: '0.5rem' }} />
                </Link>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <Heading as="h2" size="lg" mb={6} fontFamily="heading">
        API Status and Support
      </Heading>
      
      <HStack spacing={8} mb={8} wrap="wrap">
        <Box flex="1" minW="200px">
          <Heading as="h3" size="md" mb={4}>
            API Status
          </Heading>
          
          <Link href="https://status.gt-ai.gatech.edu" isExternal color="brand.500" display="inline-flex" alignItems="center">
            Check API Status Dashboard <FiExternalLink style={{ marginLeft: '0.5rem' }} />
          </Link>
        </Box>
        
        <Box flex="1" minW="200px">
          <Heading as="h3" size="md" mb={4}>
            API Support
          </Heading>
          
          <Text mb={2}>
            If you need help with the API:
          </Text>
          
          <VStack align="flex-start">
            <Link href="https://discord.gg/tdZvPuTazB" isExternal color="brand.500">
              Join our Discord community
            </Link>
            <Link href="mailto:api-support@gtai.gatech.edu" color="brand.500">
              Email API support
            </Link>
            <Link href="https://github.com/GT2AI/api-docs/issues" isExternal color="brand.500">
              Report an issue on GitHub
            </Link>
          </VStack>
        </Box>
      </HStack>
      
      <Alert status="warning" mb={6} borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="medium">API Versioning</Text>
          <Text>
            Our API is currently in beta. We may introduce breaking changes in future versions. 
            We recommend pinning to a specific version in production applications.
          </Text>
        </Box>
      </Alert>
    </Box>
  );
};

export default APIDocumentation;