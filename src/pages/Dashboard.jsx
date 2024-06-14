import { useState } from "react";
import { Box, Heading, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Spinner, Button, Input, InputGroup, InputRightElement, Flex, IconButton } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useUserData, useDeleteUserData } from "../integrations/supabase/index.js";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const { session } = useSupabaseAuth();
  const { data: userData, isLoading: loading } = useUserData(session?.user?.id);

  const deleteUserData = useDeleteUserData();

  const handleDelete = (id) => {
    deleteUserData.mutate(id);
  };

  // Placeholder data for stats
  const stats = {
    daily: 5,
    weekly: 20,
    monthly: 80,
    yearly: 960,
  };

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <Flex height="100vh" bg="background.900">
      <Box width="250px" bg="background.800" p={4}>
        <Heading size="md" color="brand.700" mb={4}>Dashboard</Heading>
        <Tabs orientation="vertical" variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "brand.700" }}>Daily Plans</Tab>
            <Tab _selected={{ color: "white", bg: "brand.700" }}>Weekly Plans</Tab>
            <Tab _selected={{ color: "white", bg: "brand.700" }}>Monthly Plans</Tab>
            <Tab _selected={{ color: "white", bg: "brand.700" }}>Yearly Plans</Tab>
            <Tab _selected={{ color: "white", bg: "brand.700" }}>User Data</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
                <Heading size="md" color="brand.700">Daily Plans</Heading>
                <Text mt={2} color="text.800">You have {stats.daily} tasks today.</Text>
                <Box mt={4}>
                  <Heading size="sm" color="brand.700">Chat</Heading>
                  <Box maxH="200px" overflowY="auto" mt={2} p={2} borderWidth="1px" borderRadius="md" bg="background.800">
                    {messages.map((msg, index) => (
                      <Text key={index} mt={1} color="text.800">{msg}</Text>
                    ))}
                  </Box>
                  <InputGroup mt={2}>
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                      bg="background.700"
                      color="text.900"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleSendMessage} colorScheme="teal">
                        Send
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
                <Heading size="md" color="brand.700">Weekly Plans</Heading>
                <Text mt={2} color="text.800">You have {stats.weekly} tasks this week.</Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
                <Heading size="md" color="brand.700">Monthly Plans</Heading>
                <Text mt={2} color="text.800">You have {stats.monthly} tasks this month.</Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
                <Heading size="md" color="brand.700">Yearly Plans</Heading>
                <Text mt={2} color="text.800">You have {stats.yearly} tasks this year.</Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
                <Heading size="md" color="brand.700">User Data</Heading>
                {loading ? (
                  <Spinner color="brand.700" />
                ) : (
                  <VStack spacing={4} align="start">
                    {userData.map((data) => (
                      <Box key={data.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.800">
                        <Text color="text.800"><strong>ID:</strong> {data.id}</Text>
                        <Text color="text.800"><strong>Created At:</strong> {data.created_at}</Text>
                        <Text color="text.800"><strong>User Data:</strong> {JSON.stringify(data.user_data)}</Text>
                        <Button colorScheme="red" onClick={() => handleDelete(data.id)}>Delete</Button>
                      </Box>
                    ))}
                  </VStack>
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box flex="1" p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <InputGroup width="300px">
            <Input placeholder="Search..." bg="background.700" color="text.900" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} />
            </InputRightElement>
          </InputGroup>
          <IconButton aria-label="Notifications" icon={<BellIcon />} />
        </Flex>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="background.700">
          <Heading size="md" color="brand.700">Content Area</Heading>
          <Text mt={2} color="text.800">This is where the main content will be displayed.</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;