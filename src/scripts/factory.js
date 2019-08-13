const htmlRep = (employeeObj) => {
    return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employeeObj.full_name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employeeObj.department.name} department
            </section>
            <section class="employee__computer">
                Currently using a ${employeeObj.computer.computerModel}
            </section>
        </article>
    `
}

export default htmlRep