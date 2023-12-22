const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);     //добавляем события начало передвижения элемента
item.addEventListener('dragend', dragEnd);         //добавляем события конец передвижения элемента


//пробегаемся циклом по placeHolder из массива placeHolders
for (const placeHolder of placeHolders) {
    placeHolder.addEventListener('dragover', dragOver);      //событие, при котором перетаскиваемый элемент находится над placeHolder, в который мы можем его поместить
    placeHolder.addEventListener('dragenter', dragEnter);     //событие, когда заходим на территорию занимаемого placeHolder
    placeHolder.addEventListener('dragleave', dragLeave);     //событие, когда мы перетащили, но вышли оттуда
    placeHolder.addEventListener('drop', dragDrop);          //событие, когда отпустили
};

//функция, которая будет выполнена, когда произойдет событие по началу передвижению
function dragStart(event) {
    event.target.classList.add('hold');            //добавляем класс hold к элементу в момент перемещения (рамка)
    setTimeout(() => event.target.classList.add('hide'), 0);    //действие с задержкой в котором добавляем класс hold к элементу в момент перемещения (display: none), чтобы элемент пропал из колонки
                
};

//функция, которая будет выполнена, когда произойдет событие по окончанию передвижению
function dragEnd(event) {
    event.target.classList.remove('hold', 'hide');        //удаляем класс hold к элементу по окончанию перемещения (чтобы класс не остался на неактивном элементе) ИИИИ удаляем класс hide, чтобы элемент вернулся в поток 
};


//функции обработки событий:
function dragOver(event) {
event.preventDefault();
}

function dragEnter(event) {
    event.target.classList.add('hovered');
}

function dragLeave(event) {
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}