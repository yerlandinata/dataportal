export interface Action<T, P, E> {
    type: T;
    payload?: P;
    error?: E;
}

export const ActionCreator = <T, P, E>(type: T) => (payload?: P, error?: E): Action<T, P, E> => ({
    type,
    payload,
    error,
});
