import { Box, Heading, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useUserData } from "../integrations/supabase/index.js";

const Dashboard = () => {
  const { session } = useSupabaseAuth();
  const { data: userData, isLoading: loading } = useUserData(session?.user?.id);

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
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Daily Plans</Tab>
          <Tab>Weekly Plans</Tab>
          <Tab>Monthly Plans</Tab>
          <Tab>Yearly Plans</Tab>
          <Tab>User Data</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading size="md">Daily Plans</Heading>
              <Text mt={2}>You have {stats.daily} tasks today.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading size="md">Weekly Plans</Heading>
              <Text mt={2}>You have {stats.weekly} tasks this week.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading size="md">Monthly Plans</Heading>
              <Text mt={2}>You have {stats.monthly} tasks this month.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading size="md">Yearly Plans</Heading>
              <Text mt={2}>You have {stats.yearly} tasks this year.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading size="md">User Data</Heading>
              {loading ? (
                <Spinner />
              ) : (
                <VStack spacing={4} align="start">
                  {userData.map((data) => (
                    <Box key={data.id} p={4} shadow="md" borderWidth="1px">
                      <Text><strong>ID:</strong> {data.id}</Text>
                      <Text><strong>Created At:</strong> {data.created_at}</Text>
                      <Text><strong>User Data:</strong> {JSON.stringify(data.user_data)}</Text>
                    </Box>
                  ))}
                </VStack>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;