import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, Box } from '@chakra-ui/react';
import { useSupabaseAuth, SupabaseAuthUI } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} shadow="md" borderWidth="1px" borderRadius="md" bg="background.800">
        <Heading as="h2" size="lg" mb={6} color="brand.700">Login</Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;