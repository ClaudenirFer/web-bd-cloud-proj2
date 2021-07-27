from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message

app = Flask(__name__)

mail_settings = {  
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'claudenirblue@gmail.com',
    "MAIL_PASSWORD": 'C1234567891'
}

app.config.update(mail_settings)

mail = Mail(app)

# Classe para receber as informações do formulário


class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


# Rota principal. Página principal
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nNome'], request.form['nMail'], request.form['nMsgr'])
        msg = Message(subject='Contato do seu portifólio de teste', sender=app.config.get("MAIL_USERNAME"), recipients=[app.config.get(
            "MAIL_USERNAME")], body=f''' O {formContato.nome} com o email {formContato.email}, te mandou a seguinte mensagem: {formContato.mensagem}''')
        mail.send(
            msg)  # Envio efetivo do objeto com o método send da Classe Flask_Mail que instancia o app.

    return render_template('/send.html', formContato=formContato)


if __name__ == '__main__':
    app.run(debug=True)
