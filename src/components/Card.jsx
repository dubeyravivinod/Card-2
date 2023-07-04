import {
  Button,
  Box,
  Spacer,
  Container,
  Image,
  Text,
  Heading,
  Flex,
  Center,
  IconButton,
} from "@chakra-ui/react";

const Card = () => {
  return (
    <Container
      margin="150px auto"
      width="800"
      bg="white"
      border="2px solid red"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <br />
      <Container boxShadow="dark-lg" p="6" rounded="md" bg="white">
        <Center>
          <Image
            src="https://media.licdn.com/dms/image/C5603AQHhYCsV_XoACw/profile-displayphoto-shrink_800_800/0/1659548557674?e=2147483647&v=beta&t=X0cafc8kOnr08NpkCJEPRnZSOLyhqdF8PcH-OQeoA90"
            alt="Dubey Ravi Vinod"
          />
        </Center>
      </Container>
      <br />
      <Heading>Dubey Ravi Vinod</Heading>
      <Text>Student at Geekster</Text>
      <Flex margin="auto 40px" color="#9b45e4">
        <Box p="0 10">
          <Heading>78</Heading>
        </Box>
        <Spacer />
        <Box p="0 10">
          <Heading>80</Heading>
        </Box>
        <Spacer />
        <Box p="0 10">
          <Heading>99</Heading>
        </Box>
      </Flex>
      <Flex margin="0 40px" color="#9b45e4">
        <Box>
          <Text>Posts</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Followers</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Following</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Card;
