'use strict';

export async function processEvent(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Function executed successfully.',
                event: event,
                context: context
            },
            null, 2),
    };
};
