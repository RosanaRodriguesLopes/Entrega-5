package com.AgDaRo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AgDaRo.models.Passagem;

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long> {

}
