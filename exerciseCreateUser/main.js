function cadastro() {
    const user = document.getElementById("usuario").value
    if (user ==""){
        alert("Digite um nome")
        return
    }
    const userListItem = document.createElement("li")
    const button = document.createElement("button")

    
    userListItem.innerHTML = user;
    userListItem.appendChild(button)
    const lista = document.getElementById("userlist")
    lista.appendChild(userListItem)

    button.innerHTML = "Remover";
    button.onclick = () => {
        userListItem.remove()
    }

    console.log("olá")
    document.getElementById("usuario").value = ""
}



