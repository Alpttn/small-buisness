import API from "./data.js"
import renderToDom from "./dom.js"
import htmlRep from "./factory.js"

API.getData()
.then(employeeArray => {
    employeeArray.forEach(employee => {
        console.log('employee: ', employee);
        const employeeHTML = htmlRep(employee)
        renderToDom(employeeHTML)
    });
})