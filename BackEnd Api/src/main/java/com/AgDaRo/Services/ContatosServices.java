package com.AgDaRo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AgDaRo.Repository.ContatoRepository;
import com.AgDaRo.models.Contatos;

@Service
public class ContatosServices {

	@Autowired
	ContatoRepository contatoRepositorio;
	
	@Transactional(readOnly = true)
	public List<Contatos> pegarTodosContatos() {
		List<Contatos> con = contatoRepositorio.findAll();
		return con;
	}
	
	@Transactional(readOnly = true)
	public Contatos pegarContato(Long id) {
		return contatoRepositorio.findById(id).get();
	}
	
	@Transactional
	public Contatos cadastrarContato(Contatos con) {
		
		Contatos conn = new Contatos();
		
		conn.setNomeMensagem(con.getNomeMensagem());
		conn.setEmailMensagem(con.getEmailMensagem());
		conn.setMensagemMsn(con.getMensagemMsn());
		
		contatoRepositorio.saveAndFlush(conn);
		return conn;
	}
	
	@Transactional
	public Contatos atualizarContatos(Contatos conn) {

		Contatos con = contatoRepositorio.findById(conn.getIdMensagem()).get();

		con.setNomeMensagem(conn.getNomeMensagem());
		con.setEmailMensagem(conn.getEmailMensagem());
		con.setMensagemMsn(conn.getMensagemMsn());

		contatoRepositorio.saveAndFlush(con);
		return con;
	}
	
	@Transactional
	public Contatos deleteContatos(Long id) {
		Contatos con = contatoRepositorio.findById(id).get();
		contatoRepositorio.delete(con);
		return con;
	}
}
