import { useForm } from "react-hook-form";

const AddTicket = ({ onClose, onSave }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const newPrice = parseFloat(data.price);
        onSave({ type: data.type, price: newPrice });
        onClose();
    };
    return (
        <>
            <div className="popup-overlay">
                <div className="popup-content">
                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Type
                            </label>
                            <input
                                {...register("type")}
                                id="type"
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                {...register("price")}
                                id="price"
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Add Ticket
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTicket;
