import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Dashboard = () => {
  const { session } = useSupabaseAuth();

  // Placeholder data for stats
  const stats = {
    daily: 5,
    weekly: 20,
    monthly: 80,
    yearly: 960,
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Daily Plans</Heading>
          <Text mt={2}>You have {stats.daily} tasks today.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Weekly Plans</Heading>
          <Text mt={2}>You have {stats.weekly} tasks this week.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Monthly Plans</Heading>
          <Text mt={2}>You have {stats.monthly} tasks this month.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Yearly Plans</Heading>
          <Text mt={2}>You have {stats.yearly} tasks this year.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;