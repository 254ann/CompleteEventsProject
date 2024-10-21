import useBoughtTicket from "../../hooks/useBoughtTicket";

const MyTickets = () => {
    const userId = localStorage.getItem("userId");
    const { boughtTickets } = useBoughtTicket(userId);
    return (
        <div>
            <table className="table table-border">
                <thead>
                    <tr>
                        <td>Event title</td>
                        <td>Type Of Ticket</td>
                        <td>event ID</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {boughtTickets.map((boughtTicket) => (
                        <tr key={boughtTicket.id}>
                            <td>{boughtTicket.event_title}</td>
                            <td>{boughtTicket.type}</td>
                            <td>{boughtTicket.eventId}</td>
                            <td>{boughtTicket.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTickets;
