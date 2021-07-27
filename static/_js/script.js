let nome = document.querySelector('#iNome')
let email = document.querySelector('#iMail')
let mensagem = document.querySelector('#iMsgr')
let btnEnviar = document.getElementById('iEnviar')
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled = true

nome.addEventListener('keyup', () => {
   if (nome.value.length < 3) {
      nome.style.borderColor = 'red'
      nomeOk = false
   } else {
      nome.style.borderColor = '#72b0e1'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = '#72b0e1'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

mensagem.addEventListener('keyup', () => {
   if (mensagem.value.length > 500) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
      mensagem.style.borderColor = '#3ca9fd'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

btnEnviar.addEventListener('click', () => {
   /* Mostra a div de carregamento */
   let carregamento = document.querySelector('#carregamento')
   carregamento.style.display = 'flex'

   /* Esconde o Form */
   let form = document.querySelector('form')
   form.style.display = 'none'

   let contact = document.querySelector('#contacts')
   contact.style.display = 'none'
})


// btnEnviar.addEventListener('click', () => {
//    alert('Mensagem enviada com sucesso!')
// })