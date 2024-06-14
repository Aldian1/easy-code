import { Container, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="brand.700">Welcome to Our App</Heading>
        <Text fontSize="lg" color="text.800">Experience the best of modern design trends.</Text>
        {session ? (
          <Button colorScheme="teal" onClick={logout}>Logout</Button>
        ) : (
          <Button colorScheme="teal" as="a" href="/login">Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;