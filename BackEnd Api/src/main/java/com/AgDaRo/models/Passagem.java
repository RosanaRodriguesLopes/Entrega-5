package com.AgDaRo.models;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Passagem implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idPassagem;
	public String DestinoPassagem;
	public Date DataIda;
	public Date DataVolta;
	public int Valor;
	public String imgPassagem;
	
	public Passagem() {
		
	}
	
	public Passagem(Long idPassagem, String destinoPassagem, Date dataIda, Date dataVolta, int valor,
			String imgPassagem) {
		this.idPassagem = idPassagem;
		this.DestinoPassagem = destinoPassagem;
		this.DataIda = dataIda;
		this.DataVolta = dataVolta;
		this.Valor = valor;
		this.imgPassagem = imgPassagem;
	}

	public Long getIdPassagem() {
		return idPassagem;
	}
	public void setIdPassagem(Long idPassagem) {
		this.idPassagem = idPassagem;
	}
	public String getDestinoPassagem() {
		return DestinoPassagem;
	}
	public void setDestinoPassagem(String destinoPassagem) {
		DestinoPassagem = destinoPassagem;
	}
	public Date getDataIda() {
		return DataIda;
	}
	public void setDataIda(Date dataIda) {
		DataIda = dataIda;
	}
	public Date getDataVolta() {
		return DataVolta;
	}
	public void setDataVolta(Date dataVolta) {
		DataVolta = dataVolta;
	}
	public int getValor() {
		return Valor;
	}
	public void setValor(int valor) {
		Valor = valor;
	}
	public String getImgPassagem() {
		return imgPassagem;
	}
	public void setImgPassagem(String imgPassagem) {
		this.imgPassagem = imgPassagem;
	}
	
	
}
