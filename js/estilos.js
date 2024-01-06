var btnAgregar = document.getElementById("btnAdd");
btnAgregar.addEventListener('click',Agregar);

function Agregar(){
    var Nombre = document.getElementById("Nombre").value;
    var Email = document.getElementById("Email").value;
    var descripcion = document.getElementById("descripcion").value;
    if(btnAgregar.textContent == 'Cotizar'){
    var divTabla = document.getElementById("tabla");

    if(!document.getElementById("tb")){
        var tabla = `<table id="tb" class="table table-dark table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delet</th>	
                </tr>
                </thead>
                <tbody id="fila">
                </tbody>
            </table>`;
        divTabla.innerHTML=tabla;
        addfila("1",Nombre,Email,descripcion);
    }else{
        var tb = document.getElementById("tb");
        var col = tb.rows.length;
        addfila(col,Nombre,Email,descripcion);
    }

    
}else{
    var elemento = document.getElementById(localStorage.getItem("idfila"));
    elemento.cells[1].textContent = Nombre;
    elemento.cells[2].textContent = Email;
    elemento.cells[3].textContent = descripcion;
    btnAgregar.textContent = 'Cotizar';
}
    document.getElementById("Nombre").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("descripcion").value = "";
}
function addfila(col, Nombre, Email, descripcion) {
    var fila = document.createElement('tr');
    fila.id = 'fila' + col;

    fila.innerHTML = `
        <th scope="row">${col}</th>
        <td>${Nombre}</td>
        <td>${Email}</td>
        <td>${descripcion}</td>
        <td onclick="editar('${fila.id}')"><i class="fa-solid fa-pen-to-square text-info"></i></td>
        <td onclick="eliminar('${fila.id}')"><i class="fa-solid fa-trash text-danger"></i></td>
    `;
    document.getElementById("fila").appendChild(fila);
}
function eliminar(id){
    var elemento = document.getElementById(id);
    var padre = elemento.parentNode;
    padre.removeChild(elemento);
}
function editar(id){
    var elemento = document.getElementById(id);
    var Nombre = elemento.cells[1].textContent;
    var Email = elemento.cells[2].textContent;
    var descripcion = elemento.cells[3].textContent;
    document.getElementById("Nombre").value = Nombre;
    document.getElementById("Email").value = Email;
    document.getElementById("descripcion").value = descripcion;
    btnAgregar.textContent = 'Editar';
    localStorage.setItem('idfila',id);
}
