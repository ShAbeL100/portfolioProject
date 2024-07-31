let projects = [
    { 
        id: 1,
        name: 'XO Game',
        description: 'An interactive and engaging Tic-Tac-Toe game where two players can compete against each other. This web application will have a sleek, modern design, featuring a responsive grid layout and real-time updates to keep track of the game state.'
    },
    { 
        id: 2,
        name: 'Netflix Clone',
        description: 'A clone of the popular streaming service, Netflix. This project will include user authentication, a dynamic and responsive layout, movie trailers, and a simulated backend to manage user data and streaming content. It will showcase advanced UI/UX design and seamless navigation.'
    },
    { 
        id: 3,
        name: 'Online Calculator',
        description: 'A web-based calculator that performs basic arithmetic operations. The calculator will have a clean, user-friendly interface with responsive design, ensuring functionality across all devices. It will also feature a history section to keep track of previous calculations.'
    },
    { 
        id: 4,
        name: 'To-Do List Manager',
        description: 'A simple yet powerful to-do list application to help users manage their daily tasks efficiently. The application will feature task creation, editing, deletion, and categorization, with a sleek and responsive design. Users will also have the option to mark tasks as completed and filter them accordingly.'
    },
];
let project = document.querySelector(".project");
function initProj(){
    projects.forEach((element) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("Project-box");
        newDiv.innerHTML = `
        <h3>Project ${element.id}</h3>
        <h5>${element.name}</h5>
        <p>${element.description}</p>
        `;
        project.appendChild(newDiv);
    })
}
initProj();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const formData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Form data saved!');
    document.getElementById('contact-form').reset();
});