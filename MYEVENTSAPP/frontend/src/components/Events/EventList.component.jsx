import { useState } from "react";
import useEvents from "../../hooks/useEvents";
import {
    Card,
    Image,
    CardBody,
    Heading,
    Text,
    Button,
    SimpleGrid,
    HStack,
} from "@chakra-ui/react";
import EventEditComponent from "./EventEdit.component";
import eventsService from "../../services/eventsService";
import TicketsList from "../tickets/TicketsList";
import { formatDate } from "../../utils/formatDate";
import AddTicket from "../tickets/AddTicket";

const EventListComponent = () => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [isTicketPopupOpen, setIsTicketPopupOpen] = useState(false);
    const [isAddTicketPopupOpen, setIsAddTicketPopupOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);

    const { events, error, setEvents, setError } = useEvents();
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    const handleAddTicketClick = (event) => {
        setCurrentEvent(event);
        setIsAddTicketPopupOpen(true);
    };
    const handTicketleClick = (event) => {
        setCurrentEvent(event);
        setIsTicketPopupOpen(true);
    };
    const closeAddTicketPopup = () => {
        setIsAddTicketPopupOpen(false);
        setCurrentEvent(null);
    };

    const closeTicketPopup = () => {
        setIsTicketPopupOpen(false);
        setCurrentEvent(null);
    };
    const handleEditClick = (event) => {
        setCurrentEvent(event);
        setIsEditPopupOpen(true);
    };

    const handleAddTicket = (ticket) => {
        console.log(ticket);
        // setEvents(events.map((p) => (p.id === ticket.id ? ticket : p)));
        eventsService
            .createTicket({ ...ticket, eventId: currentEvent.id, quantity: 1 })
            .then((res) => alert(`updated successfully ${res.statusText}`))
            .catch((error) => {
                setError(error.message);
            });
    };
    const handleSave = (updatedEvent) => {
        const originalEvents = [...events];
        setEvents(
            events.map((p) => (p.id === updatedEvent.id ? updatedEvent : p))
        );
        eventsService
            .updateEvent(updatedEvent)
            .then((res) => alert(`updated successfully ${res.statusText}`))
            .catch((error) => {
                setEvents(originalEvents);
                setError(error.message);
            });
    };

    const closeEditPopup = () => {
        setIsEditPopupOpen(false);
        setCurrentEvent(null);
    };

    const handleDelete = (id) => {
        setEvents(events.filter((event) => event.id !== id));
        eventsService.deleteEvent(id);
    };

    if (error) return <p>{error}</p>;
    if (events.length <= 0) return <p>No events</p>;
    return (
        <>
            <h2>Event List</h2>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }}
                padding="10px"
                spacing={6}
                marginTop={6}
                marginBottom={6}
            >
                {events.map((event) => (
                    <Card key={event.id} marginBottom={10}>
                        <Heading fontSize="md">{event.title}</Heading>
                        <Image
                            src={event.imageUrl}
                            objectFit="cover"
                            height="200px"
                        />
                        <CardBody>
                            <Text>{event.description}</Text>
                            <Text>{event.location}</Text>
                            <Text>{formatDate(event.date)}</Text>
                            {isAdmin ? (
                                <HStack justifyContent="space-between">
                                    <Button
                                        colorScheme="blue"
                                        onClick={() => handleEditClick(event)}
                                        className="mx-2"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        colorScheme="blue"
                                        onClick={() =>
                                            handleAddTicketClick(event)
                                        }
                                        className="mx-2"
                                    >
                                        Add Ticket
                                    </Button>
                                    <Button
                                        colorScheme="red"
                                        onClick={() => handleDelete(event.id)}
                                    >
                                        Delete
                                    </Button>
                                </HStack>
                            ) : (
                                <Button
                                    colorScheme="blue"
                                    onClick={() => handTicketleClick(event)}
                                >
                                    Buy Ticket
                                </Button>
                            )}
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
            {isEditPopupOpen && (
                <EventEditComponent
                    event={currentEvent}
                    onClose={closeEditPopup}
                    onSave={handleSave}
                />
            )}
            {isTicketPopupOpen && (
                <TicketsList event={currentEvent} onClose={closeTicketPopup} />
            )}
            {isAddTicketPopupOpen && (
                <AddTicket
                    onSave={handleAddTicket}
                    onClose={closeAddTicketPopup}
                />
            )}
        </>
    );
};

export default EventListComponent;
