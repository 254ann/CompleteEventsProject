const EventSchema = {
    imageUrl: {
        notEmpty: {
            errorMessage: "imageUrl must not be empty",
        },
        isLength: {
            options: { min: 100 },
            errorMessage: "imageUrl must be between 5 and 12 characters",
        },
        isString: {
            errorMessage: "imageUrl must be a string",
        },
    },
    title: {
        notEmpty: {
            errorMessage: "title must not be empty",
        },
        isLength: {
            options: { min: 5 },
            errorMessage: "title must be between 5 and 12 characters",
        },
        isString: {
            errorMessage: "title must be a string",
        },
    },

    date: {
        notEmpty: {
            errorMessage: "date must not be empty",
        },
        isString: {
            errorMessage: "date must be a string",
        },
    },
    location: {
        notEmpty: {
            errorMessage: "location must not be empty",
        },
        isLength: {
            options: { min: 5 },
            errorMessage: "location must be between 5 and 12 characters",
        },
        isString: {
            errorMessage: "location must be a string",
        },
    },
    userId: {
        notEmpty: {
            errorMessage: "userId must not be empty",
        },
        isNumeric: {
            errorMessage: "userId must be a number",
        },
    },
};

module.exports = EventSchema;
