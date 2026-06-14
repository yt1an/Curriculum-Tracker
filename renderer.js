const loadBtn = document.getElementById("loadBtn");
const container = document.getElementById("subjectsContainer");

loadBtn.addEventListener('click', async () => {
    const subjects = await window.api.loadSubjects();

    container.innerHTML = '';

    subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.innerHTML = `<h3>[${subject.code}] ${subject.title}</h3> <p>Units: ${subject.units} | Status: ${subject.remarks === 'x' ? 'To Take' : 'Completed'}</p> <hr>`;
        container.appendChild(subjectDiv);

    });
});