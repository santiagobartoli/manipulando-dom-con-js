/*La idea es ir trayendo partes del html para trabajarlas, leerlas, modificarlas.
Todo lo que se trae se transforma en un objeto.*/

const btn = document.querySelector('[data-form-btn]'); /*traigo el tag button*/
console.log(btn);

/*see eventListener ando more about events in https://desarrolloweb.com/articulos/1235.php*/
/* Classic version:
btn.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault(); /*this prevents page reload when en event occurs
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
} )
*/

const createTask = (evento) => { /*this is a function abr, called arrow function*/
    evento.preventDefault(); /*this prevents page reload when en event occurs*/
    const input = document.querySelector('[data-form-input]');
    const value = input.value; /*leo el value*/
    input.value = ''; /*reseteo el value*/
    const list = document.querySelector('[data-list]'); /*gets ul tag*/
    const task = document.createElement('li'); /*creates li tag*/
    task.classList.add('card'); /*add a class to li tag*/
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span> 
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`; /*corte y pegue el html aca para hacerlo dinamico
                                                    con la variable value*/
    task.innerHTML = content; /*meto content en el html mediante el acceso del objeto task, en este caso
                            dentro de li*/
    list.appendChild(task); /**agrega como hijo la tag li a la ul. */
    console.log(content);
}

btn.addEventListener('click', createTask);
