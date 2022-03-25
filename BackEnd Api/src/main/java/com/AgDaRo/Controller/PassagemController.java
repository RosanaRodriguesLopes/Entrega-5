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

import com.AgDaRo.Services.PassagemServices;
import com.AgDaRo.models.Passagem;

@RestController
@RequestMapping("/passagem")
@CrossOrigin("*")
public class PassagemController {

	@Autowired
	PassagemServices passagem;
	
	@GetMapping
	public List<Passagem> pegarTodasAsPassagens() {
		return passagem.buscarTodasPassagens();
	}
	
	@GetMapping("/{id}")
	public Passagem pegarUmaPassagem(@PathVariable Long id) {
		return passagem.buscarPassagemId(id);
	}
	
	@PostMapping
	public Passagem cadastrarPassagem(@RequestBody Passagem pass) {
		return passagem.cadastrarPassagem(pass);
	}
	
	@PutMapping
	public Passagem editarPassagem(@RequestBody Passagem pass) {
		return passagem.atualizarPassagem(pass);
	}
	
	@DeleteMapping("/{id}")
	public Passagem removerPassagem(@PathVariable Long id) {
		return passagem.excluirPassagem(id);
	}
}
