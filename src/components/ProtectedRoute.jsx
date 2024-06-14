import { Navigate, useLocation } from 'react-router-dom';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';
import { Spinner, Box } from '@chakra-ui/react';

const ProtectedRoute = ({ children }) => {
    const { session, loading } = useSupabaseAuth();
    const location = useLocation();

    if (loading) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Spinner color="brand.700" /></Box>;
    }

    if (!session) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;