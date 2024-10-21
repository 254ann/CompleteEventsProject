const TicketSchema = {
    price: {
        notEmpty: {
            errorMessage: "price must not be empty",
        },
        isNumeric: {
            errorMessage: "price must be a number",
        },
    },
    quantity: {
        notEmpty: {
            errorMessage: "price must not be empty",
        },
        isNumeric: {
            errorMessage: "price must be a number",
        },
    },
    type: {
        notEmpty: {
            errorMessage: "type must not be empty",
        },
        isLength: {
            options: { min: 5 },
            errorMessage: "type must be between 5 and 12 characters",
        },
        isString: {
            errorMessage: "type must be a string",
        },
    },
    eventId: {
        notEmpty: {
            errorMessage: "eventId must not be empty",
        },
        isNumeric: {
            errorMessage: "eventId must be a number",
        },
    },
};

module.exports = TicketSchema;
