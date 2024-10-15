import './Contato.css';

const FormContato = () =>{
    return(
        <div className='contato'>
            <div className='container-form'>
                <img src='/img/banner-2.jpg' alt='Passageira dentro de um veículo' />
                <form id='form'>
                    <div>
                        <h2>Contato</h2>
                        <p>Faça seu orçamento entre já em contato.</p>
                    </div>
                    <div>
                        <input type='text' name='nome' id='nome' placeholder='Seu nome' required={true}/>
                    </div>
                    <div>
                        <input type='email' name='email' id='email' placeholder='Seu email' required={true}/>
                    </div>
                    <div>
                        <textarea id='msg' placeholder='Escreva uma mensagem' ></textarea>
                    </div>
                    <div>
                        <button className='btn-submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormContato;