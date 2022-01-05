import { SearchIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Avatar, Box, Button, Container, Flex, Input, InputGroup, InputLeftElement, Stack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Header from "../../components/Header";

export default function Home() {

    const clients = [
        "Fulano de Tal 1",
        "Fulano de Tal 2",
        "Fulano de Tal 3"
    ]

    // const clients: any[] = [];

    return (
        <Flex
        flexDirection="column"
        width="10wh"
        height="100vh"
        backgroundColor="gray.200"
        >
            <Header/>
            <Container maxW="container.lg">
                <Stack mt={4}>
                    <Box
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                    borderRadius="md"
                    p="1rem"
                >
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                            <Input type="text" placeholder="Buscar"/>
                        </InputGroup>
                    </Box>
                    <Flex justifyContent="flex-end">
                        <Button type="button" variant="solid" colorScheme="green">
                            Adicionar
                        </Button>
                    </Flex>
                    <Box backgroundColor="whiteAlpha.900" boxShadow="md" borderRadius="md" p="1rem">
                        {clients.length > 0 ? 
                        <Table >
                            <Thead>
                                <Tr>
                                    <Th>Avatar</Th>
                                    <Th width="90%">Nome</Th>
                                    <Th textAlign="end">Ação</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {clients.map((item, index) => (
                                    <Tr key={index}>
                                        <Td><Avatar bg="green" /></Td>
                                        <Td>{item}</Td>
                                        <Td textAlign="end">
                                            <Button type="button" variant="outline" colorScheme="green" >
                                            Editar
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                                
                            </Tbody>
                        </Table> : 
                        <Alert status='info'>
                            <AlertIcon />
                            Não existem itens para exibir!
                        </Alert> }
                    </Box>
                </Stack>
            </Container>
        </Flex>
    );
}