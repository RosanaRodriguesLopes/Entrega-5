package com.AgDaRo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AgDaRo.Services.ContatosServices;
import com.AgDaRo.models.Contatos;

@RestController
@RequestMapping("/mensagem")
@CrossOrigin("*")
public class ContatosController {

	@Autowired
	ContatosServices contatoServices;
	
	@GetMapping
	public List<Contatos> pegarTodosContatos() {
		return contatoServices.pegarTodosContatos();
	}
	
	@GetMapping("/{id}")
	public Contatos pegarContato(@PathVariable Long id) {
		return contatoServices.pegarContato(id);
	}
	
	@PostMapping
	public Contatos criarContato(@RequestBody Contatos con) {
		return contatoServices.cadastrarContato(con);
	}
	
	@PutMapping
	public Contatos atualizarContatos(@RequestBody Contatos con) {
		return contatoServices.atualizarContatos(con);
	}
	
	@DeleteMapping("/{id}")
	public Contatos deletarContatos(@PathVariable Long id) {
		return contatoServices.deleteContatos(id);
	}
}
