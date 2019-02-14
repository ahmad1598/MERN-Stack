const taskList = document.querySelector('.collection');
//Remove Task Event
// taskList.addEventListener('click',removeTask);

var ul = document.getElementById('getResult');
// GET
function performGetRequest1() {
    
    axios.get('https://api.vschool.io/Ahmad/todo').then(function(response){
    // output.innerHTML = getOutput(response);  
    getOutput(response);
    
    // putResult(response);
    
})
}

// deleteRequest(${response.data[i].id})
function getOutput(response){
    let result = "";
    // deleteRequest(response.data[1]._id)
    for(let i = 0; i < response.data.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(response.data[i].title));

        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        deleteButton.textContent = 'X'; //remove button 
        editButton.textContent = 'Edit'; //edit button

        deleteButton.addEventListener('click',function(){
            deleteRequest(response.data[i]._id)
        })
        editButton.addEventListener('click',function(){
            console.log('whaa')
            editRequest(response.data[i] , editButton , li)
        })
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
        
}
}

// POST
var newTodoTitle = document.getElementById('todoTitle');
var price = document.getElementById('todoPrice');
var description = document.getElementById('todoDescription');
var imgUrl = document.getElementById('todoImg');
var newTodo;

document.getElementById('todoInputForm').addEventListener('submit', function(e){
    e.preventDefault();
    newTodo = {
        title: `${newTodoTitle.value}`,
        price: `${price.value}`,
        description: `${description.value}`,
        imgUrl:`${imgUrl.value}` 
    };
    axios.post('https://api.vschool.io/Ahmad/todo',newTodo);

    document.getElementById('postResult').innerHTML = `<pre>Your new todo with title of: ${newTodo.title} saved successfully</pre>`;
    // window.location.reload();
    
});



//PUT
function editRequest(responseData , editButton , li){
    newTodoTitle.value = responseData.title;
    price.value = responseData.price;
    description.value = responseData.description;
    imgUrl.value = responseData.imgUrl;
    editButton.style.display = "none";
    // document.getElementById('sendButton').style.display = none;
    var saveButton = document.createElement('button');
    saveButton.textContent = 'SAVE';
    li.appendChild(saveButton );

    saveButton.addEventListener('click', function(){
        console.log('heoy')
        axios.put(`https://api.vschool.io/Ahmad/todo/${responseData._id}`,{
            title: `${newTodoTitle.value}`,
            price: `${price.value}`,
            description: `${description.value}`,
            imgUrl:`${imgUrl.value}` 
        }).then(function(response){
            console.log('your todo successfully updated')
        })
    })
}



// Delete

function deleteRequest(id){
    axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`)
    alert('Your todo was successfully deleted!');
    
    // console.log(document.getElementsByClassName('btn-danger').parentElement)
    // console.log(id + 'hi')

}

