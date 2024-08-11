document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const studentTableBody = document.getElementById('student-table-body');
    const editIdInput = document.getElementById('edit-id');

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const student = {
            id: editIdInput.value,
            name: document.getElementById('name').value,
            branch: document.getElementById('branch').value,
            year: document.getElementById('year').value,
            regdNo: document.getElementById('regdNo').value,
            attendance: document.getElementById('attendance').value,
            totalFee: document.getElementById('totalFee').value,
            feePending: document.getElementById('feePending').value,
            examResults: document.getElementById('examResults').value,
            mobileNo: document.getElementById('mobileNo').value
        };

        if (student.id) {
            updateStudent(student);
        } else {
            addStudent(student);
        }

        studentForm.reset();
        editIdInput.value = '';
    });

    function addStudent(student) {
        const row = document.createElement('tr');
        row.dataset.id = student.id || new Date().getTime(); // Unique ID for new student
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.year}</td>
            <td>${student.regdNo}</td>
            <td>${student.attendance}</td>
            <td>${student.totalFee}</td>
            <td>${student.feePending}</td>
            <td>${student.examResults}</td>
            <td>${student.mobileNo}</td>
            <td>
                <button class="edit" onclick="editStudent('${row.dataset.id}')">Edit</button>
                <button class="delete" onclick="deleteStudent('${row.dataset.id}')">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    }

    function updateStudent(student) {
        const row = document.querySelector(`tr[data-id='${student.id}']`);
        if (row) {
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.branch}</td>
                <td>${student.year}</td>
                <td>${student.regdNo}</td>
                <td>${student.attendance}</td>
                <td>${student.totalFee}</td>
                <td>${student.feePending}</td>
                <td>${student.examResults}</td>
                <td>${student.mobileNo}</td>
                <td>
                    <button class="edit" onclick="editStudent('${student.id}')">Edit</button>
                    <button class="delete" onclick="deleteStudent('${student.id}')">Delete</button>
                </td>
            `;
        }
    }

    window.editStudent = function(id) {
        const row = document.querySelector(`tr[data-id='${id}']`);
        if (row) {
            const cells = row.children;
            document.getElementById('name').value = cells[0].innerText;
            document.getElementById('branch').value = cells[1].innerText;
            document.getElementById('year').value = cells[2].innerText;
            document.getElementById('regdNo').value = cells[3].innerText;
            document.getElementById('attendance').value = cells[4].innerText;
            document.getElementById('totalFee').value = cells[5].innerText;
            document.getElementById('feePending').value = cells[6].innerText;
            document.getElementById('examResults').value = cells[7].innerText;
            document.getElementById('mobileNo').value = cells[8].innerText;
            document.getElementById('edit-id').value = id;
        }
    }

    window.deleteStudent = function(id) {
        const row = document.querySelector(`tr[data-id='${id}']`);
        if (row) {
            row.remove();
        }
    }
});
