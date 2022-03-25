import axios from "axios";
import React, { useEffect, useState } from "react";
import {api} from "../../api";
import { Link } from "react-router-dom";

import "./styles.css";

function Destino() {
  const [resultAPI, setResultAPI] = useState([])
  useEffect(()=>{
    axios.get(`${api}/passagem`).then(result => setResultAPI(result.data))
  },[excluirPassagem])

  function excluirPassagem(id){
    axios.delete(`${api}/passagem/${id}`)
  }
  return (
   
    <main>
      <section className="destino--secao container">
        <div className="row">
          {resultAPI.map(result => (
              <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <img
                src={result.imgPassagem}
                class="card-img-top"
                alt="imagem-destino"
              />
              <div class="card-body">
                <strong>{result.idPassagem}</strong>
                <h5 class="card-title">{result.destinoPassagem}</h5>
                <p class="card-text">R$ {result.Valor},00</p>
                <a href="/PassagemAdm" class="btn btn-info w-100" rel="noreferrer">
                  Novo Destino
                </a>
                <Link to={`/PassagemEditar/${result.idPassagem}`} class="btn btn-primary col-6" rel="noreferrer">
                  Editar
                </Link>
                <div onClick={()=> excluirPassagem(result.idPassagem)} class="btn btn-danger col-6" rel="noreferrer">
                  Delete
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Destino;
