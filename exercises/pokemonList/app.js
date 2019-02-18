var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        ourFunction(data.objects[0].pokemon)
        
    }
}

xhr.open('GET',"https://api.vschool.io/pokemon",true);
xhr.send();


function ourFunction(arr){
    let ul = document.getElementById('result');
    let button = document.getElementById('button');
    var createBtn = document.createElement('button');
    createBtn.textContent = 'RESULT'
    button.appendChild(createBtn);
    
    createBtn.addEventListener('click',function(){
        for(let i = 0; i < arr.length; i++){
        var li = document.createElement("li");
        li.textContent = arr[i].name;
        ul.appendChild(li);
        }
    })
}