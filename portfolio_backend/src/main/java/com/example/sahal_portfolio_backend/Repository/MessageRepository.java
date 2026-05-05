package com.example.sahal_portfolio_backend.Repository;


import com.example.sahal_portfolio_backend.Model.Message;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MessageRepository extends JpaRepository<Message, Long> {
}