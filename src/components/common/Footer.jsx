// src/components/common/Footer.jsx (simplified from homepage)
import React from 'react';
import { 
  Box, 
  Container, 
  Stack, 
  Text, 
  Link, 
  Flex, 
  Divider, 
  IconButton, 
  useColorMode, 
  HStack,
} from '@chakra-ui/react';
import { FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      borderTop="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      mt="auto"
    >
      <Container maxW="container.xl" py={6}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
            © {currentYear} GT^AI. All rights reserved.
          </Text>

          <HStack spacing={2}>
            <Link href="https://github.com/GT2AI" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                size="sm"
                colorScheme="gray"
                variant="ghost"
              />
            </Link>
            <Link href="https://discord.gg/tdZvPuTazB" isExternal>
              <IconButton
                aria-label="Discord"
                icon={<FaDiscord />}
                size="sm"
                colorScheme="gray"
                variant="ghost"
              />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;