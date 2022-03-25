import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { api } from "../../api"
import { useParams } from "react-router-dom"

function EditarPassagem() {
    const { id } = useParams()

    const nome = useRef()
    const dataSainda = useRef()
    const dataRetorno = useRef()
    const valor = useRef()
    const urlPassagem = useRef()

    function Editar(e) {
        e.preventDefault()
        axios.put(`${api}/passagem`, {
            idPassagem: id,
            DestinoPassagem: nome.current.value,
            DataIda: dataSainda.current.value,
            DataVolta: dataRetorno.current.value,
            Valor: valor.current.value,
            imgPassagem: urlPassagem.current.value,
        }).catch(err => console.log(err))
        window.location.href = "/destino"
    }

    const [dados, setDados] = useState({})

    useEffect(()=>{
        axios.get(`${api}/passagem/${id}`).then(result => setDados(result.data) )
    },[])

    return (<main className='row justify-content-center'>
        <section className="contato--secao col-6">
            <div className="form--conteudo row">
                <form className='form--contato'>
                    <div class="mb-3">
                        {dados.DestinoPassagem}
                        <label>Id : {id}</label><br></br>
                        <label for="exampleInputEmail1" class="form-label">Nome</label>
                        <input type="text" class="form-control" placeholder={dados.DestinoPassagem}  id="exampleInputEmail1" aria-describedby="emailHelp" ref={nome} />

                        <label for="exampleInputEmail1" class="form-label">Data Saida</label>
                        <input type="Date" class="form-control" placeholder={dados.DataIda} id="exampleInputEmail1" aria-describedby="emailHelp" ref={dataSainda} />

                        <label for="exampleInputEmail1" class="form-label">Data Retorno</label>
                        <input type="Date" class="form-control" placeholder={dados.DataVolta}  id="exampleInputEmail1" aria-describedby="emailHelp" ref={dataRetorno} />

                        <label for="exampleInputEmail1" class="form-label">Valor</label>
                        <input type="Number" class="form-control" placeholder={dados.Valor} id="exampleInputEmail1" aria-describedby="emailHelp" ref={valor} />

                        <label for="exampleInputEmail1" class="form-label">Url Imagem</label>
                        <input type="text" class="form-control" value={dados.imgPassagem}  id="exampleInputEmail1" aria-describedby="emailHelp" ref={urlPassagem} />
                    </div>
                    <button type="submit" onClick={(e) => Editar(e)} class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    </main>
    )
}
export default EditarPassagem