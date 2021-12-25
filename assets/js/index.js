const openModal = () => {
    modalContainer.classList.remove('invisible');
}
const openModalEdit = () => {
    modalContainer.classList.remove('invisible');
    btnSaveChanges.classList.remove('invisible');
    btnSave.remove()
    document.getElementById('btns-modal').insertBefore(btnSaveChanges, btnCancel);
}
const closeModal = () => modalContainer.classList.add('invisible');
const cleanForm = () => document.getElementById('form-modal').reset();
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');
const modalContainer = document.getElementById('modal-container');
const btnSaveChanges = document.getElementById('btn-save-changes');

document.getElementById('btn-add').addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
})

btnSaveChanges.addEventListener('click', (e) => {
   e.preventDefault();
   attCour();
   closeModal();
   cleanForm();
   
})


btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    cleanForm();
})

btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    createCourse();
    closeModal();
    cleanForm();
})

//function deleteCard(event) {
//    event.target.parentNode.parentNode.remove();
//}

function editModal() {
    openModalEdit();
    showCourse();
}

var dataCourses = [
    {
        'id': 'newIdCourse',
        'name': 'newNameCourse',
        'image': 'newImageCourse',
        'description': 'newDescriptionCourse'
    }
];
const attCour = () => {
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

    const attCourse = document.getElementById('first-element')
    attCourse.innerHTML = `
    <th scope="row" id="id-course">${newIdCourse}</th>
    <td class="name-course" id="name-course">${newNameCourse}</td>
    <td> <img id="img-course-new" class="img-course img-fluid table-img" src="${newImageCourse}" alt=""></td>
    <td class="descrip-course" id="descrip-course">${newDescriptionCourse}</td>
    <td class="btn-action"><button class="btn btn-secondary btn-edit" id="btn-edit" onclick="editModal()">EDIT</button> <button class="btn btn-danger btn-delete" onclick="deleteCard(event)">DELETE</button></td>
    `
}

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
    <td class="btn-action"><button class="btn btn-secondary btn-edit" id="btn-edit" onclick="editModal()">EDIT</button> <button class="btn btn-danger btn-delete" onclick="deleteCard(event)">DELETE</button></td>
    `
    newCourse.id = 'first-element'
    var firstChild = document.getElementById('first-element')
    document.getElementById('container-body').insertBefore(newCourse, firstChild);
}  

function showCourse() {
    var courseId = document.getElementById('id-course') 
    var courseName = document.getElementById('name-course')
    var courseImg = document.getElementById('img-course-new')
    var courseDesc = document.getElementById('descrip-course')

    document.getElementById('add-course-id').value = `${courseId.innerHTML}`
    document.getElementById('add-course-name').value = `${courseName.innerHTML}`
    document.getElementById('add-course-img').value = `${courseImg.src}`
    document.getElementById('add-course-descp').value = `${courseDesc.innerHTML}`
}

function deleteCard(id) {    
    document.getElementById('first-element').remove();
    for(let i = 1; i < dataCourses.length; i++) {        
        if (dataCourses[i]){
            dataCourses.splice(i, 1);
        }        
    }
}