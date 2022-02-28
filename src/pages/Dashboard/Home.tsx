import { AtSignIcon, InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

    const modalAddClient = useDisclosure();
    const modalLogout = useDisclosure();
    const { register, handleSubmit, setValue } = useForm();
    const [clients, setClients] = useState<Client[]>([]);
    const [editingClient, setEditingClient] = useState<Client | null>();
    const navigate = useNavigate();

    const save = (data: any) => {
        modalAddClient.onClose();
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
        modalAddClient.onOpen();
    }

    const logout = () => {
      modalLogout.onOpen();
    }

    const doLogout = () => {
      localStorage.removeItem("token");
      navigate("/");
    }

    return (
        <Flex
        flexDirection="column"
        width="10wh"
        height="100vh"
        backgroundColor="gray.200"
        >
            <Header onLogout={logout} />
            <Container maxW="container.lg">
                <Stack mt={4}>
                    <SearchBar />
                    <Flex justifyContent="flex-end">
                        <Button type="button" variant="solid" colorScheme="green" onClick={modalAddClient.onOpen}>
                            Adicionar
                        </Button>
                    </Flex>
                    <ClientList clients={clients} onEditing={edit} />
                </Stack>
            </Container>

            {/* MODAL DE CADASTRO */}
            <Modal isOpen={modalAddClient.isOpen} onClose={modalAddClient.onClose}>
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
                      <Button variant='ghost' mr={3} onClick={modalAddClient.onClose} >
                        Cancelar
                      </Button>
                      <Button colorScheme='green' type="submit">
                        Salvar
                      </Button>
                      
                    </ModalFooter>
                 </form>
                 
               </ModalContent>
            </Modal>

            {/* MODAL DE LOGOUT */}
            <Modal isOpen={modalLogout.isOpen} onClose={modalLogout.onClose}>
               <ModalOverlay />
               <ModalContent>
                 <ModalHeader>Tem certeza?</ModalHeader>
                 
                    <ModalBody>
                      <Text>Você tem certeza que deseja sair?</Text>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button variant='ghost' mr={3} onClick={modalLogout.onClose} >
                        Cancelar
                      </Button>
                      <Button colorScheme='green' type="button" onClick={doLogout} >
                        Sair
                      </Button>
                      
                    </ModalFooter>
                 
                 
               </ModalContent>
            </Modal>
        </Flex>
    );
}