import './styles.css'
import { api } from '../../api';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contato() {

  const [resultAPI, setResultAPI] = useState([])
  useEffect(()=>{
    axios.get(`${api}/mensagem`).then(result => setResultAPI(result.data))
  },[enviarMensagem])

  const nome = useRef()
  const email = useRef()
  const mensagem = useRef()

  function enviarMensagem(e){
    e.preventDefault()
    axios.post(`${api}/mensagem`,{
      nomeMensagem: nome.current.value,
      emailMensagem: email.current.value,
      mensagemMsn: mensagem.current.value
    })
  }
function excluirMensagem(id) {
  axios.delete(`${api}/mensagem/${id}`,{
    nomeMensagem: nome.current.value,
    emailMensagem: email.current.value,
    mensagemMsn: mensagem.current.value
  })
}

  return (<main className='row justify-content-center'>
      <ul className="overflow-scroll auturaMsn col-6">
        {resultAPI.map(result => (
          <li class="alert alert-success d-flex justify-content-between"><sup>{result.idMensagem}{result.nomeMensagem}</sup> {result.mensagemMsn} <div><Link to={`/MensagemEditar/${result.idMensagem}`} className='btn btn-info'>Editar</Link><strong className='btn btn-danger' onClick={() => excluirMensagem(result.idMensagem)}>Excluir</strong></div></li>
        ))}     
      </ul>
      <section className="contato--secao col-6">
        <div className="form--conteudo row">
          <form className='form--contato'>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nome
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={nome}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type={"email"}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={email}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                ref={mensagem}
              ></textarea>
            </div>
            <button type="submit" onClick={(e)=> enviarMensagem(e)} class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contato;
