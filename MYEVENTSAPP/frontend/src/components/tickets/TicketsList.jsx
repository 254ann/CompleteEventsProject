import useTicket from "../../hooks/useTicket";
import eventsService from "../../services/eventsService";
import "../popup.css";

const TicketsList = ({ onClose, event }) => {
    const { tickets, error } = useTicket(event.id);
    const id = localStorage.getItem("userId");
    const userId = Number(id);

    const handleSubmit = (ticket) => {
        eventsService
            .createBouhgtTicket({
                eventId: ticket.eventId,
                price: ticket.price,
                type: ticket.type,
                event_title: event.title,
                userId: userId,
            })
            .then((res) => {
                alert(
                    `${res.statusText} you have bought a ticket successfully`
                );
                onClose();
            });
    };

    if (error) return <p className="text-danger">{error}</p>;
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="alert alert-dismissible fade show" role="alert">
                    <button
                        onClick={onClose}
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                    ></button>
                </div>

                <h2>tickets</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>type</th>
                            <th>price</th>
                            <th>event</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>{ticket.type}</td>
                                <td>ksh. {ticket.price}</td>
                                <td>{event.title}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => handleSubmit(ticket)}
                                    >
                                        Buy
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TicketsList;
