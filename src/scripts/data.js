const API = {
    getData: () => {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
            .then(response => response.json())
    }
};

export default API