import { Container, VStack, Heading, SimpleGrid, Box, Input, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Note Taking App
        </Heading>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button colorScheme="teal" onClick={addNote}>
              Add Note
            </Button>
          </VStack>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {notes.map((note, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h3" size="md" mb={2}>
                {note.title}
              </Heading>
              <Box>{note.content}</Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;