import axios from "axios"
import { useRef } from "react"
import { api } from "../../api"

function PassagemAdm() {

    const nome = useRef()
    const dataSainda = useRef()
    const dataRetorno = useRef()
    const valor = useRef()
    const urlPassagem = useRef()

    function enviarMensagem(e) {
        e.preventDefault()
        axios.post(`${api}/passagem`, {
            DestinoPassagem: nome.current.value,
            DataIda: dataSainda.current.value,
            DataVolta: dataRetorno.current.value,
            Valor: valor.current.value,
            imgPassagem: urlPassagem.current.value,
        }).catch(err => console.log(err))
        window.location.href = "/destino"
    }

    return (<main className='row justify-content-center'>
        <section className="contato--secao col-6">
            <div className="form--conteudo row">
                <form className='form--contato'>
                    <div class="mb-3">


                        <label for="exampleInputEmail1" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={nome} />

                        <label for="exampleInputEmail1" class="form-label">Data Saida</label>
                        <input type="Date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={dataSainda} />

                        <label for="exampleInputEmail1" class="form-label">Data Retorno</label>
                        <input type="Date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={dataRetorno} />

                        <label for="exampleInputEmail1" class="form-label">Valor</label>
                        <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={valor} />

                        <label for="exampleInputEmail1" class="form-label">Url Imagem</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={urlPassagem} />
                    </div>
                    <button type="submit" onClick={(e) => enviarMensagem(e)} class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    </main>
    )
}
export default PassagemAdm