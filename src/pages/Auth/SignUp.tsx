import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, Heading, Image, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

export default function SignUp() {
    return (
        <Flex 
          flexDirection="column"
          width="100wh"
          height="100vh"
          backgroundColor="gray.200"
          justifyContent="center"
          alignItems="center"
        > 
            <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center"> 
                <Image src={logo} alt="Logo" boxSize="80px" objectFit="contain" />
                <Heading>Cadastrar-se</Heading>
                <Box minW={{ base: "90%", md: "470px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            borderRadius="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement 
                                    pointerEvents="none"
                                    children={<AtSignIcon color="gray.300" />}/>
                                <Input type="email" placeholder="Endereço de email" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement 
                                    pointerEvents="none"
                                    children={<LockIcon color="gray.300" />}/>
                                <Input type="password" placeholder="Senha" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement 
                                    pointerEvents="none"
                                    children={<LockIcon color="gray.300" />}/>
                                <Input type="password" placeholder="Confirmar Senha" />
                                </InputGroup>
                            </FormControl>
                            <Button type="submit" variant="solid" colorScheme="green">
                                Cadastrar
                            </Button>
                            <Button type="button" variant="link" colorScheme="green">
                                Voltar
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            
        </Flex>
    );
}