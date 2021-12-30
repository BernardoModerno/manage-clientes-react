import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText, Heading, Image, Input, InputGroup, InputLeftElement, Link, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

export default function SignIn() {
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
                <Heading>Cadastro de Clientes</Heading>
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
                                <FormHelperText textAlign="right">
                                    <Link>Esqueceu a senha?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button type="submit" variant="solid" colorScheme="green">
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                Ainda não possui cadastro? <Link color="green">Cadastre-se</Link>
            </Box>
        </Flex>
    );
}