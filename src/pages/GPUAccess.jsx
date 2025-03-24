// src/pages/GPUAccess.jsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Divider, 
  UnorderedList, 
  ListItem, 
  Code, 
  Alert, 
  AlertIcon, 
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  useColorMode
} from '@chakra-ui/react';

const GPUAccess = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4} fontFamily="heading">
        GPU Access Tutorial
      </Heading>
      
      <Text fontSize="lg" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mb={8}>
        Learn how to access and utilize GPU resources for your AI projects at Georgia Tech.
      </Text>
      
      <Divider my={8} />
      
      <Heading as="h2" size="lg" mb={4} fontFamily="heading">
        Available Resources
      </Heading>
      
      <Text mb={4}>
        GT^AI provides access to several GPU clusters for students and researchers. These resources are available for machine learning experimentation, model training, and research activities.
      </Text>
      
      <TableContainer mb={8}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Cluster</Th>
              <Th>GPUs</Th>
              <Th>Typical Use Case</Th>
              <Th>Access Level</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="medium">A100 Cluster</Td>
              <Td>8x NVIDIA A100 (40GB)</Td>
              <Td>Large model training, complex simulations</Td>
              <Td><Badge colorScheme="red">Advanced</Badge></Td>
            </Tr>
            <Tr>
              <Td fontWeight="medium">RTX Cluster</Td>
              <Td>16x NVIDIA RTX 3090</Td>
              <Td>Model fine-tuning, medium workloads</Td>
              <Td><Badge colorScheme="yellow">Intermediate</Badge></Td>
            </Tr>
            <Tr>
              <Td fontWeight="medium">Development Servers</Td>
              <Td>4x NVIDIA T4</Td>
              <Td>Testing, small experiments, development</Td>
              <Td><Badge colorScheme="green">Beginner</Badge></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Requesting Access
      </Heading>
      
      <Text mb={4}>
        To request GPU access, you'll need to:
      </Text>
      
      <UnorderedList spacing={2} mb={6}>
        <ListItem>Complete the GPU Access Request Form with details about your project</ListItem>
        <ListItem>Provide information about your computing needs (memory, storage, duration)</ListItem>
        <ListItem>Get approval from your faculty advisor (for research projects)</ListItem>
        <ListItem>Complete required training on GPU usage and best practices</ListItem>
      </UnorderedList>
      
      <Alert status="info" mb={8} borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="medium">Note:</Text>
          <Text>Access levels are granted based on project requirements and user experience. First-time users typically start with the Development Servers.</Text>
        </Box>
      </Alert>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Connecting to the Clusters
      </Heading>
      
      <Text mb={4}>
        Once your access is approved, you can connect to the GPU clusters via SSH:
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
        <Code display="block" whiteSpace="pre" overflowX="auto">
{`# Connect to the development server
ssh username@gtai-dev.gatech.edu

# Connect to RTX cluster
ssh username@gtai-rtx.gatech.edu

# Connect to A100 cluster
ssh username@gtai-a100.gatech.edu
`}
        </Code>
      </Box>
      
      <Text mb={4}>
        You'll need to use Georgia Tech VPN if connecting from off-campus.
      </Text>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Running Jobs
      </Heading>
      
      <Text mb={4}>
        We use Slurm for job scheduling. Here's a basic example of submitting a GPU job:
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
        <Code display="block" whiteSpace="pre" overflowX="auto">
{`#!/bin/bash
#SBATCH --job-name=my_training_job
#SBATCH --output=output_%j.log
#SBATCH --error=error_%j.log
#SBATCH --time=8:00:00
#SBATCH --gres=gpu:1
#SBATCH --mem=32G

# Load modules
module load anaconda3
module load cuda/11.3

# Activate environment
source activate myenv

# Run your code
python train.py --epochs 100 --batch-size 32
`}
        </Code>
      </Box>
      
      <Text mb={4}>
        Save this as a file (e.g., <Code>job.sh</Code>) and submit it with:
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
        <Code display="block" whiteSpace="pre" overflowX="auto">
{`sbatch job.sh
`}
        </Code>
      </Box>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Best Practices
      </Heading>
      
      <UnorderedList spacing={2} mb={6}>
        <ListItem>Request only the resources you need to avoid blocking others</ListItem>
        <ListItem>Use checkpointing to save your progress frequently</ListItem>
        <ListItem>Clean up temporary files when your job completes</ListItem>
        <ListItem>Use appropriate batch sizes for your GPU memory</ListItem>
        <ListItem>Monitor your jobs with <Code>squeue</Code> and <Code>sacct</Code></ListItem>
      </UnorderedList>
      
      <Alert status="warning" mb={8} borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="medium">Important:</Text>
          <Text>Jobs that are idle for more than 6 hours may be automatically terminated to free up resources.</Text>
        </Box>
      </Alert>
      
      <Heading as="h2" size="lg" mt={10} mb={4} fontFamily="heading">
        Need Help?
      </Heading>
      
      <Text mb={4}>
        If you encounter issues with GPU access or have questions:
      </Text>
      
      <UnorderedList spacing={2} mb={6}>
        <ListItem>Check our <Link color="brand.500" href="#">Troubleshooting FAQ</Link></ListItem>
        <ListItem>Join the #gpu-help channel on our <Link color="brand.500" href="https://discord.gg/tdZvPuTazB" isExternal>Discord server</Link></ListItem>
        <ListItem>Contact the GT^AI support team at <Link color="brand.500" href="mailto:support@gtai.gatech.edu">support@gtai.gatech.edu</Link></ListItem>
      </UnorderedList>
    </Box>
  );
};

export default GPUAccess;