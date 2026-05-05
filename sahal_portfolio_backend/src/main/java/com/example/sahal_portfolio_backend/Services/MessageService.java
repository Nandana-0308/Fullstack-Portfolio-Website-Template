package com.example.sahal_portfolio_backend.Services;

import com.example.sahal_portfolio_backend.Model.Message;
import com.example.sahal_portfolio_backend.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    private MessageRepository repo;

    public Message saveMessage(Message message) {
        return repo.save(message);
    }
}