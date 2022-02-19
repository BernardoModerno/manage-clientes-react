import { AtSignIcon, InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ClientList from "./ClientList";

let ids = 1

export type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export default function Home() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, setValue } = useForm();
    const [clients, setClients] = useState<Client[]>([]);
    const [editingClient, setEditingClient] = useState<Client | null>()

    const save = (data: any) => {
        onClose();
        let clientsCopy = [...clients];
        if (editingClient) {
            clientsCopy = clientsCopy.filter(client => client.id !== editingClient.id);
            data.id = editingClient.id;
        } else {
            data.id = ids;
            ids++;
        }
        
        console.log(data);
        clientsCopy.push(data);
        clientsCopy.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        setClients(clientsCopy);
        setValue("name", "");
        setValue("email", "");
        setValue("phone", "");
    }

    const edit = (client: Client) => {
        setEditingClient(client);
        setValue("name", client.name);
        setValue("email", client.email);
        setValue("phone", client.phone);
        onOpen();
    }

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
                    <SearchBar />
                    <Flex justifyContent="flex-end">
                        <Button type="button" variant="solid" colorScheme="green" onClick={onOpen}>
                            Adicionar
                        </Button>
                    </Flex>
                    <ClientList clients={clients} onEditing={edit} />
                </Stack>
            </Container>

            {/* MODAL DE CADASTRO */}
            <Modal isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent>
                 <ModalHeader>Cadastro</ModalHeader>
                 <form onSubmit={handleSubmit(save)}>
                    <ModalBody>
                      <Stack spacing={4}>
                         <InputGroup>
                             <InputLeftElement 
                             pointerEvents="none"
                             children={<InfoOutlineIcon color="gray.300" />}/>
                             <Input type="text" placeholder="Nome completo" {...register("name")}/>
                         </InputGroup>
                         <InputGroup>
                             <InputLeftElement 
                             pointerEvents="none"
                             children={<AtSignIcon color="gray.300" />}/>
                             <Input type="email" placeholder="Endereço de email" {...register("email")} />
                         </InputGroup>
                         <InputGroup>
                             <InputLeftElement 
                             pointerEvents="none"
                             children={<PhoneIcon color="gray.300" />}/>
                             <Input type="text" placeholder="Telefone" {...register("phone")} />
                         </InputGroup>
                      </Stack>
                    
                    </ModalBody>
          
                    <ModalFooter>
                      <Button variant='ghost' mr={3} onClick={onClose} >
                        Cancelar
                      </Button>
                      <Button colorScheme='green' type="submit">
                        Salvar
                      </Button>
                      
                    </ModalFooter>
                 </form>
                 
               </ModalContent>
            </Modal>
        </Flex>
    );
}