function validarForm() {
    
        let name = document.querySelector('input#nome')
        let email = document.querySelector('input#e-mail')
        let tel = document.querySelector('input#telefone')
        let state = document.querySelector('select#estado')
        let msg = document.querySelector('textarea#mensagem')

                if(name.value == "" || name.value == null) {
                    alert('Por favor insira seu nome.')
                }
                else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value == "" || email.value == null) {
                    alert('Por favor digite um em-mail válido.') 
                }
                else if(tel.value.length < 11) {
                    alert('Por favor digite um número de telefone válido com DDD')
                }
                else if(state.value == "" || state.value == null){
                    alert('Por favor selecione seu Estado.')
                }
                else if(msg.value == 0 || msg.value == null) {
                    alert('Por favor digite sua mensagem.')
                }
                else{
                    let res = document.querySelector('div.formulario')
                let btn = document.createElement('button')

                    btn.setAttribute('type','button')
                    btn.appendChild(document.createTextNode('Voltar'));
                    document.body.appendChild(btn);
                    btn.style.marginLeft = '900px'
                    btn.style.border = 'none'
                    btn.style.width = '100px'
                    btn.style.height = '30px'
                    btn.style.borderRadius = '30px'
                    btn.onclick = function() {
                        window.history.go(0);
                    }
                    res.innerHTML = 'Obrigado por entrar em contato!'
                    res.style.textAlign = 'center'
                    res.style.fontSize = '30px'
                    res.style.color = 'black'
                    res.style.height = '80px'
                    res.style.background = 'white'
                    res.style.boxShadow = 'none'
    
                }
    }


