const taskList = document.querySelector('.collection');
//Remove Task Event
// taskList.addEventListener('click',removeTask);


// GET
function performGetRequest1() {
    var output = document.getElementById('getResult');
    axios.get('https://api.vschool.io/Ahmad/todo').then(function(response){
    output.innerHTML = getOutput(response);  
    
    // putResult(response);
    
})
}
// deleteRequest(${response.data[i].id})
function getOutput(response){
    let result = "";
    // deleteRequest(response.data[1]._id)
    for(let i = 0; i < response.data.length; i++){
        
        
        if(response.data[i].completed){
            result +=
            `
                <ul>
                    <li><strike>${response.data[i].title}</strike></li>
                </ul>
            `
            // `
            //     <tr>
            //         <td><input type="checkbox"></td>
            //         <td><strike>${response.data[i].title}</strike></td>
            //         <td><button class="btn btn-primary"  >Edit <i class="fa fa-edit" style="color:white"></i></button></td>
            //         <td><button class="btn btn-danger delete-item" id="deleteBtn" onclick= deleteRequest()>Delete <i class="fa fa-remove" style="color:white"></i></button></td>
            //         <td><a>View Details</a></td>
            //     </tr>
            // `
        } else{
            result +=
            `
                
                <ul>
                    <li>${response.data[i].title}</li>
                </ul>
            `
        // `
        //         <tr>
        //         <td><input type="checkbox"></td>
        //             <td>${response.data[i].title}</td>
        //             <td><button class="btn btn-primary" >Edit <i class="fa fa-edit" style="color:white"></i></button></td>
        //             <td><button class="btn btn-danger" id="deleteBtn" >Delete <i class="fa fa-remove" style="color:white"></i></button></td>
        //             <td><a>View Details</a></td>
        //         </tr>
        // `
        // `<div>
        //     <pre>${response.data[i].title}</pre>
        //     <pre><img src="${response.data[i].imgUrl || ''}" > </pre>
        // </div>`;
        }
    }
    return result;   
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
    
    // let newResult = "";
    // newResult += `
    //     <pre>${newTodo.title}</pre>
    //     <pre>${newTodo.price}</pre>
    //     <pre>${newTodo.description}</pre>
    //     <img src="${newTodo.imgUrl}" >
    // `

    document.getElementById('postResult').innerHTML = `<pre>Your new todo with title of: ${newTodo.title} saved successfully</pre>`;
    window.location.reload();
    
    // setTimeout(document.getElementById('postResult').style.display = 'none' ,9000)
});


var update = document.getElementById('update');

// PUT
document.getElementById('edit').addEventListener('click',putResult)
function putResult(){
    var id = prompt('what is the id?');
    while(!id){
        id = prompt('what is the id?');
    }
    update.style.display = 'block';
    
    axios.get(`https://api.vschool.io/Ahmad/todo/${id}`).then(function(response){
        newTodoTitle.value = response.data.title;
        price.value = response.data.price;
        description.value = response.data.description;
        imgUrl.value = response.data.imgUrl;
    })

    update.addEventListener('click',updateResult)

    function updateResult(){
        axios.put(`https://api.vschool.io/Ahmad/todo/${id}`,{
            title: `${newTodoTitle.value}`,
            price: `${price.value}`,
            description: `${description.value}`,
            imgUrl:`${imgUrl.value}` 
        }).then(function(response){
            // newTodoTitle.value = response.data.title;
            // price.value = response.data.price;
            // description.value = response.data.description;
            // imgUrl.value = response.data.imgUrl;
            // console.log(response.data);
        })
    }
                   
    // let newResult = "";
    // for(let i = 0; i < response.data.length; i++){
    //     if(response.data[i].completed){
    //         newResult += `<input type="checkbox" value ="${response.data[i].completed}" checked/> <strike> ${response.data[i].title}</strike> <br>`;
    //     } else{
    //         newResult += `<input type="checkbox" value ="${response.data[i].completed}"/>${response.data[i].title} <br>`;
    //     }
    // }
    // document.getElementById('putResult').innerHTML = newResult;

}





// Delete
document.getElementById('delete').addEventListener('click',deleteRequest)

function deleteRequest(){
    var id = prompt('what is the id?');
    while(!id){
        id = prompt('what is the id?');
    }
    axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(alert("Todo successfully deleted"));

    // if(`https://api.vschool.io/Ahmad/todo/${id}`){
    //     axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(alert("Todo successfully deleted"));
    // } else{
    //     alert('the id is not correct')
    // }
        
   
    // console.log(id)
    
    // console.log(document.getElementsByClassName('btn-danger').parentElement)
    // console.log(id)

}

// function removeTask(e){

//     if(e.target.classList.contains('delete-item')){
//         console.log(e.target.parentNode.previousSibling.nodeValue)
//     }

// }




// function getOutput(response){
//     let result = "";
//     // deleteRequest(response.data[1]._id)
//     for(let i = 0; i < response.data.length; i++){

//         var tr = document.getElementById('tableRow');
//         var titleTd = document.createElement('td');
//         var editTd = document.createElement('td');
//         var deleteTd = document.createElement('td');
//         var strike = document.createElement('strike');
//         var editButton  = document.createElement('button');
//         editButton.className = 'btn btn-primary';
//         // editButton.classList = 'text-center'
//         editButton.textContent = 'Edit';

//         var deleteButton  = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.classList = 'btn btn-danger';
//         var input = document.createElement('input');

//         var li = document.createElement('li');
//         li.className = 'collection-item';
//         li.appendChild(document.createTextNode(response.data[i].title));
//         li.appendChild((editButton));
//         li.appendChild((deleteButton));

//         tr.appendChild(li)



//         editButton.addEventListener('click',editBtnClick(response.data[i]._id));
        
// }
// }