import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import eventsService from "../../services/eventsService";

function EventCreateComponent() {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (event) => {
        const id = localStorage.getItem("userId");
        const userId = parseInt(id, 10);
        event.preventDefault();
        eventsService
            .createEvent({
                userId,
                title,
                imageUrl,
                description,
                location,
                date,
            })
            .then((res) => alert(res.statusText));
        console.log({
            title,
            imageUrl,
            description,
            location,
            date,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="event-create-form">
            <h2>Create Event</h2>

            <label htmlFor="title" className="form-label">
                Title
            </label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="imageUrl" className="form-label">
                Image Url
            </label>
            <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <label htmlFor="description" className="form-label">
                Description
            </label>
            <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="location" className="location">
                Location
            </label>
            <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <label htmlFor="date" className="form-label">
                Date
            </label>

            <Input value={date} onChange={(e) => setDate(e.target.value)} />

            <Button colorScheme="blue" type="submit">
                Add Event
            </Button>
        </form>
    );
}

export default EventCreateComponent;
