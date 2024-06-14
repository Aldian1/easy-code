import { Container, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    {session ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button as="a" href="/login">Login</Button>
      )}
    </Container>
  );
};

export default Index;