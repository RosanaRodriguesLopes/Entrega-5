package com.AgDaRo.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contatos implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idMensagem;
	public String nomeMensagem;
	public String emailMensagem;
	public String mensagemMsn;
	
	public Contatos() {
		
	}

	public Contatos(Long idMensagem, String nomeMensagem, String emailMensagem, String mensagemMsn) {
		this.idMensagem = idMensagem;
		this.nomeMensagem = nomeMensagem;
		this.emailMensagem = emailMensagem;
		this.mensagemMsn = mensagemMsn;
	}

	public Long getIdMensagem() {
		return idMensagem;
	}

	public void setIdMensagem(Long idMensagem) {
		this.idMensagem = idMensagem;
	}

	public String getNomeMensagem() {
		return nomeMensagem;
	}

	public void setNomeMensagem(String nomeMensagem) {
		this.nomeMensagem = nomeMensagem;
	}

	public String getEmailMensagem() {
		return emailMensagem;
	}

	public void setEmailMensagem(String emailMensagem) {
		this.emailMensagem = emailMensagem;
	}

	public String getMensagemMsn() {
		return mensagemMsn;
	}

	public void setMensagemMsn(String mensagemMsn) {
		this.mensagemMsn = mensagemMsn;
	}
}
