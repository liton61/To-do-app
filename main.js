let serialNo = 0;
document.getElementById('add-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    
    const container = document.getElementById('content-container');
    serialNo = serialNo + 1;
    if(inputValue === ''){
        return alert("Please add your items !");
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serialNo}</td>
    <td>${inputValue}</td>
    <td>
    <Button class="btn btn-danger">Delete</Button>
    </td>
    `
    container.appendChild(tr);

    inputField.value = '';
})