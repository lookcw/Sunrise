export const DATA_UPDATE = 'DATA_UPDATE';
export const NEW_EVENT = 'NEW_EVENT';

export function updateData(emotions, events) {
    return {
        type: DATA_UPDATE,
        emotions,
        events
    }
}

export function createEvent(event) {
    return {
        type: NEW_EVENT,
        event
    }
}