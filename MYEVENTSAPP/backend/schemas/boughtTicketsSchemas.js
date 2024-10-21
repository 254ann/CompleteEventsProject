const BoughtTicketSchema = {
    event_title: {
        notEmpty: {
            errorMessage: "event_title must not be empty",
        },
        isLength: {
            options: { min: 5 },
            errorMessage: "event_title must be between 5 and 12 characters",
        },
        isString: {
            errorMessage: "event_title must be a string",
        },
    },
    price: {
        notEmpty: {
            errorMessage: "price must not be empty",
        },
        isNumeric: {
            errorMessage: "price must be a number",
        },
    },
    userId: {
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

module.exports = BoughtTicketSchema;
