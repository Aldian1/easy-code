import { Box, Heading, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Daily Plans</Tab>
          <Tab>Weekly Plans</Tab>
          <Tab>Monthly Plans</Tab>
          <Tab>Yearly Plans</Tab>
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
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;