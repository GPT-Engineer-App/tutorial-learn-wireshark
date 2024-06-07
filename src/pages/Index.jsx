import { Container, Text, VStack, Heading, Box, IconButton, Image, Link } from "@chakra-ui/react";
import { FaNetworkWired, FaSearch, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Network Tools Tutorial
        </Heading>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Wireshark
          </Heading>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aXJlc2hhcmslMjBsb2dvfGVufDB8fHx8MTcxNzc1MzA4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wireshark Logo" boxSize="150px" mx="auto" mb={4} />
          <Text>Wireshark is a network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network. It is widely used for network troubleshooting, analysis, software and protocol development, and education.</Text>
          <Link href="https://www.wireshark.org/" isExternal color="teal.500" mt={2}>
            Learn more about Wireshark
          </Link>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Nmap
          </Heading>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxubWFwJTIwbG9nb3xlbnwwfHx8fDE3MTc3NTMwODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Nmap Logo" boxSize="150px" mx="auto" mb={4} />
          <Text>Nmap ("Network Mapper") is a free and open-source utility for network discovery and security auditing. It is used to discover hosts and services on a computer network by sending packets and analyzing the responses.</Text>
          <Link href="https://nmap.org/" isExternal color="teal.500" mt={2}>
            Learn more about Nmap
          </Link>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Packet Tracer
          </Heading>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWNrZXQlMjB0cmFjZXIlMjBsb2dvfGVufDB8fHx8MTcxNzc1MzA4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Packet Tracer Logo" boxSize="150px" mx="auto" mb={4} />
          <Text>Packet Tracer is a network simulation tool developed by Cisco that allows users to create network topologies and simulate modern computer networks. It is widely used for educational purposes and for practicing network configuration and troubleshooting.</Text>
          <Link href="https://www.netacad.com/courses/packet-tracer" isExternal color="teal.500" mt={2}>
            Learn more about Packet Tracer
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
