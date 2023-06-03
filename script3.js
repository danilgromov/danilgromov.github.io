function con(){
    let age = document.getElementById("age").value;
    if (document.getElementById("age").value <= 0)
    alert("Возвраст не может быть отрицательным числом!")
    else if(!confirm("Вы уверены, что вам "+age))
    alert("Введите свой возвраст снова!")
    
    }