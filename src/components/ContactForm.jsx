import { useState } from "react";
import { Box, Button, VStack, Heading, Center } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tb894xg",
        "template_cla0ghj",
        formData,
        "hfSreb9_EGWzMIn6Q"
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. I’ll get back to you soon.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setFormData({ from_name: "", reply_to: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Something went wrong.",
            description: "Please try again later.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Center minH="100vh" bg="gray.100">
      <Box
        bg="#1a2942"
        color="black"
        py={10}
        px={6}
        borderRadius="lg"
        shadow="xl"
        w="100%"
        maxW="700px"
        mx="auto"
        my="10"
        border="2px solid"
        borderColor="navy"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          mb={6}
          textAlign="center"
          fontSize="2xl"
          color="#eaf3ff"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Send Me a Message
        </Heading>

        <form onSubmit={sendEmail} style={{ width: "70%" }}>
          <VStack spacing={5} w="90%" maxW="600px" mx="auto" align="center">
            <FormControl isRequired w="100%">
              <FormLabel color="white">Name</FormLabel>
              <Input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                border="2px solid navy"
                padding="10px"
                borderRadius="8px"
                _hover={{ borderColor: "#00a6ffff" }}
                focusBorderColor="black"
                w="100%"
              />
            </FormControl>

            <FormControl isRequired w="100%">
              <FormLabel color="white">Email</FormLabel>
              <Input
                type="email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                border="2px solid navy"
                padding="10px"
                borderRadius="8px"
                _hover={{ borderColor: "#00a6ffff" }}
                focusBorderColor="black"
                w="100%"
              />
            </FormControl>

            <FormControl isRequired w="100%">
              <FormLabel color="white">Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                border="2px solid navy"
                padding="10px"
                borderRadius="8px"
                _hover={{ borderColor: "#00a6ffff" }}
                focusBorderColor="black"
                rows={7}
                w="100%"
              />
            </FormControl>

            <Button
              type="submit"
              bg="#0077b6"
              color="white"
              px={8}
              py={6}
              _hover={{ bg: "#009cf0ff", fontWeight: "bold" }}
              w="full"
            >
              Send Message
            </Button>
          </VStack>
        </form>

        <Box textAlign="center" mt={8}>
          <Button
            as="a"
            href="/"
            bg="transparent"
            border="2px solid white"
            color="white"
            _hover={{ bg: "#eaf3ff", color: "#1a2942" }}
            px={8}
            py={5}
            borderRadius="md"
            textDecoration={"none"}
          >
            ← Back to Home
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default ContactForm;
