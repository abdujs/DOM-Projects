const inputBox = document.getElementById('input-box');
const listCountainer = document.getElementById('list-countainer');


function addTask(){
    if(inputBox.value === ''){
        alert('you must write something!');
    }
    //add list
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listCountainer.appendChild(li);

        //add cancel icon
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; 
        li.appendChild(span);
    }
    inputBox.value = ''; //after list is added the input space become free
    saveData();
}

//delete list
listCountainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listCountainer.innerHTML);
}

function showTask(){
    listCountainer.innerHTML = localStorage.getItem('data');
}
showTask();