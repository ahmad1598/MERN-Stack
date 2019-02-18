const taskList = document.querySelector('.collection');
//Remove Task Event
// taskList.addEventListener('click',removeTask);

var ul = document.getElementById('getResult');
ul.className = 'list-group';
// GET
function performGetRequest1() {
    
    axios.get('https://api.vschool.io/Ahmad/todo').then(function(response){
    getOutput(response);
    
})
}

function getOutput(response){
    let result = "";
    for(let i = 0; i < response.data.length; i++){
        const li = document.createElement('li');
        li.className="list-group-item"
        li.appendChild(document.createTextNode(response.data[i].title));

        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        //link
        const link = document.createElement('a');
        link.textContent = 'View Details';
        link.className = "badge badge-secondary link";
        
        // var box = document.getElementById('myModal');

        //FIXME
        link.addEventListener('click',function(){
            // imageBox(response.data[i].imgUrl);

        })
        li.appendChild(link);

        deleteButton.textContent = 'X'; //remove button     
        deleteButton.className = 'btn btn-danger delete';

        editButton.textContent = 'Edit'; //edit button
        editButton.className = 'btn btn-info edit';
        
        //Creating Checkbox
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = response.data[i]._id;
        checkbox.style.cssFloat = 'left';
        checkbox.style.margin = '5px 10px 0px 5px';
        li.appendChild(checkbox);

        //checking if todo is completed or not
        if(response.data[i].completed === true){
            li.classList.add("checked");
            checkbox.checked = true;
            // editButton.style.display
        }

        deleteButton.addEventListener('click',function(){
            deleteRequest(response.data[i]._id)
        })

        editButton.addEventListener('click',function(){
            editRequest(response.data[i] , editButton , li)
        })

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);

        //checkbox
        checkbox.addEventListener('change',function(e){
            e.preventDefault();
            let completeObj = {}
            completeObj.completed = this.checked
            axios.put(`https://api.vschool.io/Ahmad/todo/${response.data[i]._id}`, completeObj).then(function(response){
                e.target.parentElement.classList.toggle("checked");
            })
           
        })        
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
    axios.post('https://api.vschool.io/Ahmad/todo',newTodo).then(function(response){
        window.location.reload();
    });
    

    document.getElementById('postResult').innerHTML = `<pre>Your new todo with title of: ${newTodo.title} saved successfully</pre>`;
    
});



//PUT
function editRequest(responseData , editButton , li){
    newTodoTitle.value = responseData.title;
    price.value = responseData.price;
    description.value = responseData.description;
    imgUrl.value = responseData.imgUrl;

    editButton.style.display = "none";
    
    var saveButton = document.createElement('button');
    saveButton.textContent = 'SAVE';
    saveButton.style.margin = '-20px 0px 2px 220px'
    saveButton.style.display = 'grid'
    saveButton.className = 'btn btn-info';
    li.appendChild(saveButton);

    saveButton.addEventListener('click', function(){
        console.log('heoy')
        axios.put(`https://api.vschool.io/Ahmad/todo/${responseData._id}`,{
            title: `${newTodoTitle.value}`,
            price: `${price.value}`,
            description: `${description.value}`,
            imgUrl:`${imgUrl.value}` 
        }).then(function(response){
            alert('your todo successfully updated');
            window.location.reload();

        }).catch(function(response){
            console.log("Something went wrong, your todo didn't updated")
        })
        saveButton.style.display = "none";
        editButton.style.display = "block";
    })

    
    
}



// Delete
function deleteRequest(id){
    axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(function(response){
        window.location.reload();
    })
    alert('Your todo was successfully deleted!');

}




// function imageBox(img){
// // Get the modal
// var modal = document.getElementById('myModal');
// modal.style.display = "block";
// var span = document.getElementsByClassName("close")[0];

// var todoImg = document.getElementsByTagName('img');
// todoImg.src = img;


// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
    
// }

