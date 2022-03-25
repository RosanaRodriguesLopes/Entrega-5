package com.AgDaRo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AgDaRo.models.Contatos;

@Repository
public interface ContatoRepository extends JpaRepository<Contatos, Long> {

}
