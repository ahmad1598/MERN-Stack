
// GET
function performGetRequest1() {
    var output = document.getElementById('getResult');
    axios.get('https://api.vschool.io/Ahmad/todo').then(function(response){
    output.innerHTML = getOutput(response);  
    putResult(response)
})
}

function getOutput(response){
    let result = "";
    for(let i = 0; i < response.data.length; i++){
        //fix me / the strike part is not working
        if(response.data[i].completed){
            result +=
        `<ul>
            <pre> <strike> ${response.data[i].title}</strike></pre>
            <pre><img src="${response.data[i].imgUrl || ''}" > </pre>
        </ul>`;
        } else{
        result +=
        `<ul>
            <pre>${response.data[i].title}</pre>
            <pre><img src="${response.data[i].imgUrl || ''}" > </pre>
        </ul>`;
        }
    }
    return result;   
}



// POST
var newTodoTitle = document.getElementById('todoTitle');
var price = document.getElementById('todoPrice');
var description = document.getElementById('todoDescription');
var imgUrl = document.getElementById('todoImg').value;
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
    
    // setTimeout(document.getElementById('postResult').style.display = 'none' ,9000)
});

// function performPostRequest(e){
    

    
// }

// function postFunction(arr){
//     let newResult = "";
//     for(let i = 0; i < arr.length; i++){
//         newResult += `
//             <li>${arr[i].title}</li>
//             <li>${arr[i].price}</li>
//             <li>${arr[i].description}</li>
//             <img src="${arr[i].imgUrl}" >
//         `
//     }
//     // document.getElementById('postResult').innerHTML = newResult;
//     // alert(newResult)
// }




// PUT
function putResult(response){
    let newResult = "";
    for(let i = 0; i < response.data.length; i++){
        if(response.data[i].completed){
            newResult += `<input type="checkbox" value ="${response.data[i].completed}" checked/> <strike> ${response.data[i].title}</strike> <br>`;
        } else{
            newResult += `<input type="checkbox" value ="${response.data[i].completed}"/>${response.data[i].title} <br>`;
        }
    }
    document.getElementById('putResult').innerHTML = newResult;

}
