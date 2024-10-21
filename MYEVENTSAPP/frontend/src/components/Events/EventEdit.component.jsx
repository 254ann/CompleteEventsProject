import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import "../popup.css";
const EventEditComponent = ({ event, onClose, onSave }) => {
    // const forms = useForm();
    const [formData, setFormData] = useState(event);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <Button className="close-button" onClick={onClose}>
                        close
                    </Button>
                    <form onSubmit={handleSubmit}>
                        <h2>Edit Event</h2>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Title
                            </label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label">
                                Image Url
                            </label>
                            <Input
                                id="imageUrl"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <Input
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">
                                Location
                            </label>
                            <Input
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">
                                Date
                            </label>
                            <Input
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <Button colorScheme="blue" type="submit">
                            save
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EventEditComponent;
