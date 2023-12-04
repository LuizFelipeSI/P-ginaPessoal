function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var motivo = document.getElementById('motivo').value;


    try {
        if (name == null || name == "") {
            throw new Error("o campo 'nome' está vazio");
        }
        if (email == null || email == "") {
            throw new Error("o campo 'email' está vazio");
        } else {
            var emailVerificado = validarEmail(email);
            if (emailVerificado == false) {
                throw new Error("o e-mail não existe");
            }
        }
        if (message == null || message == "") {
            throw new Error("o campo 'mensagem' está vazio");
        }


        alert("Nome: " + name + "\n" + "E-mail: " + email + "\n" + "Mensagem: " + message + "\n" + "Motivo do contato: " + motivo);



    } catch (erro) {
        alert(erro.message)
    }


    function validarEmail(email) {
        // Expressão regular para validar o formato do email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }







}