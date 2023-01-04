/*La idea es ir trayendo partes del html para trabajarlas, leerlas, modificarlas. Todo lo que se trae
se transforma en un objeto. Se trabaja quitando partes del html y ir uniendolas y/o creandolas con codigo
js. VER CON GIT VERSIONES ANTERIORES  con cosas mas basicas explicadas (branches origin/clase0... Locales)*/

( () => { /**this is IIFE, see in logseq. THIS AVOIDS ACCESS of var. and func. on web-inspect-console! */
const btn = document.querySelector('[data-form-btn]'); /*traigo el tag button*/

const createTask = (evento) => { /*this is a function abr, called arrow function*/
    evento.preventDefault(); /*this prevents page reload when en event occurs*/
    const input = document.querySelector('[data-form-input]');
    const value = input.value; /*leo el value*/
    input.value = ''; /*reseteo el value*/

    /* -Esto es lo que se va a generar con js.-
    <ul>
        <li>     
            <div>
                <i class="far fa-check-square icon"></i>
                <span class="task">${value}</span> 
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
        </li>
    </ul>
    */
    const list = document.querySelector('[data-list]'); /*gets ul tag*/
    const task = document.createElement('li'); /*creates li tag*/
    task.classList.add('card'); /*add a class to li tag*/
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;

    /* -Parte suplantada por deleteIcon().-
    const content =
    `<i class="fas fa-trash-alt trashIcon icon"></i>`;
     */

    list.appendChild(task);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
};

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);

    return i; /**if not, calling the functions returns the content of it. */
};

const completeTask = (event) => {
    console.log(event); /**en event se puede ver el path y el target que son las rutas hacia ese elemento.
    Se toma eso para identificarlo cuando hay varios iguales, en este caso, varios tildes. */

    const element = event.target; /**con lo explicado antes, es como un querySelector que identifica por
    el contenido del evento. */
    element.classList.toggle('fas'); /**toggle is to put or remove that class if it exists or not. */
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
};

const deleteTask = (event) => {
    console.log(event.target.parentElement); /**this because the event points to i tag and i have to
    delete li parent tag. */
    const parent = event.target.parentElement;
    parent.remove();
};
}) ();