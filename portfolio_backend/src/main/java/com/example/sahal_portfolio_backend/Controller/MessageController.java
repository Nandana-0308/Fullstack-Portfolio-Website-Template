package com.example.sahal_portfolio_backend.Controller;

import com.example.sahal_portfolio_backend.Model.Message;
import com.example.sahal_portfolio_backend.Services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
//@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {

    @Autowired
    private MessageService service;

    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        return service.saveMessage(message);
    }
}