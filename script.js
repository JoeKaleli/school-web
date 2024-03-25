document.addEventListener('DOMContentLoaded', function() {
    const studentList = document.getElementById('student-list');
    const studentDetails = document.getElementById('student-details');

    // Fetch student data from db.json
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            data.students.forEach(student => {
                const li = document.createElement('li');
                li.textContent = student.name;
                li.addEventListener('click', function() {
                    displayStudentDetails(student);
                });
                studentList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayStudentDetails(student) {
        studentDetails.innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
        `;
    }
});
