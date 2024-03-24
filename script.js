document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const studentInfo = document.getElementById('studentInfo');
    let studentsData;
  
    // Fetch student data from db.json
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        studentsData = data;
      })
      .catch(error => console.error('Error fetching student data:', error));
  
    // Function to display student info
    function displayStudentInfo(student) {
      studentInfo.innerHTML = `
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
        <p>Grade: ${student.grade}</p>
      `;
    }
  
    // Event listener for search input
    searchInput.addEventListener('input', function () {
      const searchValue = searchInput.value.trim().toLowerCase();
      const student = studentsData.find(student => student.name.toLowerCase().includes(searchValue));
  
      if (student) {
        displayStudentInfo(student);
      } else {
        studentInfo.innerHTML = 'Student not found';
      }
    });
  });
  