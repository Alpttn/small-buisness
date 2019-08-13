

const container = document.querySelector(".employee")

const renderToDom = (HTMLString) => {
container.innerHTML += HTMLString
}

export default renderToDom