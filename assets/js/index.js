const closeModal = () => modalContainer.classList.add('invisible');
const cleanForm = () => document.getElementById('form-modal').reset();
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');
const modalContainer = document.getElementById('modal-container');
const btnSaveChanges = document.getElementById('btn-save-changes');

var dataCourses = [
    {
        'id': 'newIdCourse',
        'name': 'newNameCourse',
        'image': 'newImageCourse',
        'description': 'newDescriptionCourse'
    }
];

document.getElementById('btn-add').addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('invisible');
    btnSaveChanges.classList.add('invisible');
    btnSave.classList.remove('invisible');
    document.getElementById('btns-modal').insertBefore(btnCancel, btnSaveChanges);
    document.getElementById('btns-modal').insertBefore(btnSave, btnCancel);
    cleanForm();
})

btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    cleanForm();
})

btnSaveChanges.addEventListener('click', (e) => {
    e.preventDefault();
    attCourse();
})

btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    createCourse();
    closeModal();
    cleanForm();
})

const createCourse = () => {
    let newIdCourse = document.getElementById('add-course-id').value
    let newNameCourse = document.getElementById('add-course-name').value
    let newImageCourse = document.getElementById('add-course-img').value
    let newDescriptionCourse = document.getElementById('add-course-descp').value

    if(newIdCourse == ""){
        window.alert('Digite um ID válido!')
        return false;
    }    

    for(let i = 0; i < dataCourses.length; i++) {        
        if (dataCourses[i]['id'] == newIdCourse){                       
            return window.alert('Esse ID de curso já existe!');
        }        
    }

    dataCourses.push({
        'id': newIdCourse,
        'name': newNameCourse,
        'image': newImageCourse,
        'description': newDescriptionCourse
    })

    const newCourse = document.createElement('tr')
    newCourse.innerHTML = `
    <th scope="row" id="id-course">${newIdCourse}</th>
    <td class="name-course" id="name-course">${newNameCourse}</td>
    <td> <img id="img-course-new" class="img-course img-fluid table-img" src="${newImageCourse}" alt=""></td>
    <td class="descrip-course" id="descrip-course">${newDescriptionCourse}</td>
    <td class="btn-action"><button class="btn btn-secondary btn-edit" id="btn-edit" onclick="editModal(${newIdCourse})">EDIT</button> <button class="btn btn-danger btn-delete" onclick="deleteCard(${newIdCourse})">DELETE</button></td>
    `
    newCourse.setAttribute('id', `${newIdCourse}`);
    document.getElementById('container-body').appendChild(newCourse);
} 

function editModal(id) {    
    modalContainer.classList.remove('invisible');
    btnSaveChanges.classList.remove('invisible');
    document.getElementById('btns-modal').insertBefore(btnSaveChanges, btnSave);
    btnSave.classList.add('invisible')
    document.getElementById('btns-modal').insertBefore(btnCancel, btnSave);
    
    for(let i = 0; i < dataCourses.length; i++) {        
        if (dataCourses[i]['id'] == id){
            document.getElementById('add-course-id').value = dataCourses[i]['id'];
            document.getElementById('add-course-name').value = dataCourses[i]['name'];
            document.getElementById('add-course-img').value = dataCourses[i]['image'];
            document.getElementById('add-course-descp').value = dataCourses[i]['description'];
        }        
    } 
}

const attCourse = () => {
    let atualizaCurso = document.getElementById('add-course-id').value

    editModal();
    deleteCard(atualizaCurso);
    createCourse();
    closeModal();
}

const deleteCard = (id) => {    
    document.getElementById(id).remove();
    for(let i = 0; i < dataCourses.length; i++) {        
        if (dataCourses[i]['id'] == id){
            dataCourses.splice(i, 1);
        }        
    }
}
