export default () => {
    return fetch('/api/users')
    .then(response => response.json());
}