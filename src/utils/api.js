// utils/api.js
export const apiFetch = (url, options = {}) => {
    return fetch(url, {
        ...options,
        headers: {
            "ngrok-skip-browser-warning": "true",
            ...options.headers,   // your headers override defaults
        },
    });
};