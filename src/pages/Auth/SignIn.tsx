import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText, Heading, Image, Input, InputGroup, InputLeftElement, Link, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import RouterLink from "../../components/RouterLink";

export default function SignIn() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const login = () => {

        // verificar se os dados de email e senha foram preenchidos
        // requisição para o backend
        // em caso de sucesso. or para a rota home
        localStorage.setItem("token", "token");
        navigate("/home");
    }

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
                    <form onSubmit={handleSubmit(login)} >
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
                                <Input type="email" placeholder="Endereço de email" {...register("email")} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement 
                                    pointerEvents="none"
                                    children={<LockIcon color="gray.300" />}/>
                                <Input type="password" placeholder="Senha" {...register("password")} />
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
                Ainda não possui cadastro?{" "} 
                    <RouterLink to="/signup">
                        Cadastre-se
                    </RouterLink>
            </Box>
        </Flex>
    );
}