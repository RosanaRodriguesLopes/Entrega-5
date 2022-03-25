package com.AgDaRo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AgDaRo.Repository.PassagemRepository;
import com.AgDaRo.models.Passagem;

@Service
public class PassagemServices {
	
	@Autowired
	PassagemRepository passagem;
	
	@Transactional(readOnly = true)
	public List<Passagem> buscarTodasPassagens() {
		List<Passagem> pass = passagem.findAll();
		return pass;
	}
	
	@Transactional(readOnly = true)
	public Passagem buscarPassagemId(Long id) {
		Passagem pass = passagem.findById(id).get();
		return pass;
	}
	
	@Transactional
	public Passagem cadastrarPassagem(Passagem passRecebida) {
		
		Passagem pas = new Passagem();
		
		pas.setDestinoPassagem(passRecebida.getDestinoPassagem());
		pas.setDataIda(passRecebida.getDataIda());
		pas.setDataVolta(passRecebida.getDataVolta());
		pas.setImgPassagem(passRecebida.getImgPassagem());
		pas.setValor(passRecebida.getValor());
		
		passagem.saveAndFlush(pas);
		return pas;
	}
	
	@Transactional
	public Passagem atualizarPassagem(Passagem pass) {
		
		Passagem passagemID = passagem.findById(pass.getIdPassagem()).get();

		passagemID.setDataIda(pass.getDataIda());
		passagemID.setDataVolta(pass.getDataVolta());
		passagemID.setDestinoPassagem(pass.getDestinoPassagem());
		passagemID.setImgPassagem(pass.getImgPassagem());
		passagemID.setValor(pass.getValor());

		passagem.saveAndFlush(passagemID);
		return passagemID;
	}
	
	@Transactional
	public Passagem excluirPassagem(Long id) {
		
		Passagem pas = passagem.findById(id).get();
		passagem.delete(pas);
		
		return pas;
	}
	
	
	
}
