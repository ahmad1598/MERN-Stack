const taskList = document.querySelector('.collection');
const sendBtn = document.getElementById('sendButton');

let ul = document.getElementById('getResult');
ul.className = 'list-group';

// GET
const performGetRequest1 = () => {
    
    axios.get('https://api.vschool.io/Ahmad/todo').then( response => {
    getOutput(response);
    
})
}

const getOutput = response => {

    for(let i = 0; i < response.data.length; i++){

        const li = document.createElement('li');
        li.className="list-group-item"
        li.appendChild(document.createTextNode(response.data[i].title));

        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        //link
        const link = document.createElement('a');
        link.textContent = 'View Image';
        link.className = "badge badge-secondary link";

        //images
        const img = document.createElement('img');
        img.textContent = response.data[i].imgUrl;


        //link & image
        let modal = document.getElementById('myModal');
        let modalImg = document.getElementById('img01');
        let closeImg = document.getElementById('close');
       
        link.addEventListener('click',() => {
            modal.style.display = 'block';
            modalImg.src = response.data[i].imgUrl;
            
            closeImg.addEventListener('click',() => {
                modal.style.display = "none";
            })
        })
        

        li.appendChild(link);

        deleteButton.textContent = 'X'; //remove button     
        deleteButton.className = 'btn btn-danger delete';

        editButton.textContent = 'Edit'; //edit button
        editButton.className = 'btn btn-info edit';
        
        // Checkbox
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = response.data[i]._id;
        checkbox.style.cssFloat = 'left';
        checkbox.style.margin = '5px 10px 0px 5px';
        li.appendChild(checkbox);

        //checking if todo is completed or not
        if(response.data[i].completed === true){
            li.classList.add("checked");
            checkbox.checked = true;
            editButton.classList.add('disabled');
        }

        deleteButton.addEventListener('click',() => {
            deleteRequest(response.data[i]._id)
        })

        editButton.addEventListener('click',() => {
            editRequest(response.data[i] , editButton , li)
        })

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);

        //checkbox
        checkbox.addEventListener('change',(e) => {
            e.preventDefault();
            let completeObj = {}
            completeObj.completed = checkbox.checked
            axios.put(`https://api.vschool.io/Ahmad/todo/${response.data[i]._id}`, completeObj).then(response => {
                e.target.parentElement.classList.toggle("checked");
                editButton.classList.toggle('disabled');
                
            })
           
        })        
}
}

// POST
let newTodoTitle = document.getElementById('todoTitle');
let price = document.getElementById('todoPrice');
let description = document.getElementById('todoDescription');
let imgUrl = document.getElementById('todoImg');
let newTodo;

document.getElementById('todoInputForm').addEventListener('submit', (e) => {
    e.preventDefault();
    newTodo = {
        title: `${newTodoTitle.value}`,
        price: `${price.value}`,
        description: `${description.value}`,
        imgUrl:`${imgUrl.value}` 
    };
    axios.post('https://api.vschool.io/Ahmad/todo',newTodo).then(response => {
        window.location.reload();
    });
    
    document.getElementById('postResult').innerHTML = `<pre>Your new todo with title of: ${newTodo.title} saved successfully</pre>`;
    
});

//PUT
const editRequest = (responseData , editButton , li) => {
    newTodoTitle.value = responseData.title;
    price.value = responseData.price;
    description.value = responseData.description;
    imgUrl.value = responseData.imgUrl;
    editButton.style.display = "none";
    let saveButton = document.createElement('button');
    saveButton.textContent = 'SAVE';
    saveButton.style.margin = '-20px 0px 2px 220px'
    saveButton.style.display = 'grid'
    saveButton.className = 'btn btn-success';
    li.appendChild(saveButton);
    sendBtn.classList.add('disabled');
    saveButton.addEventListener('click', () => {
        console.log('heoy')
        axios.put(`https://api.vschool.io/Ahmad/todo/${responseData._id}`,{
            title: `${newTodoTitle.value}`,
            price: `${price.value}`,
            description: `${description.value}`,
            imgUrl:`${imgUrl.value}` 
        }).then(response => {
            alert('your todo successfully updated');
            window.location.reload();

        }).catch(response => {
            console.log("Something went wrong, your todo didn't updated")
        })
        saveButton.style.display = "none";
        editButton.style.display = "block";
    })

}

// Delete
const deleteRequest = id => {
    axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(response => {
        window.location.reload();
    }).catch(response => {
        console.log("Something went wrong, your todo didn't deleted")
    })
    alert('Your todo was successfully deleted!');

}
