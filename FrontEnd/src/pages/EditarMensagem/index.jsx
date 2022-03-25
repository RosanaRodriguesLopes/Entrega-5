import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { api } from "../../api"
import { useParams } from "react-router-dom"

function EditarPassagem() {
    const { id } = useParams()

    const nome = useRef()
    const email = useRef()
    const mensagem = useRef()


    function Editar(e) {
        e.preventDefault()
        axios.put(`${api}/mensagem`, {
                idMensagem: id,
                nomeMensagem: nome.current.value,
                emailMensagem: email.current.value,
                mensagemMsn: mensagem.current.value
        }).catch(err => console.log(err))
        window.location.href = "/contato"
    }
    const [dados, setDados] = useState({})

    useEffect(()=>{
        axios.get(`${api}/mensagem/${id}`).then(result => setDados(result.data) )
    },[])

    return (<main className='row justify-content-center'>
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
                placeholder={dados.nomeMensagem}
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
                placeholder={dados.emailMensagem}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Mensagem
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                ref={mensagem}
                placeholder={dados.mensagemMsn}
              ></textarea>
            </div>
            <button type="submit" onClick={(e)=> Editar(e)} class="btn btn-primary">
              Editar
            </button>
          </form>
            </div>
        </section>
    </main>
    )
}
export default EditarPassagem