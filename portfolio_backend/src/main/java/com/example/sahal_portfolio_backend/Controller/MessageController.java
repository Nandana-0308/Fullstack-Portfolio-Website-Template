package com.example.sahal_portfolio_backend.Controller;

import com.example.sahal_portfolio_backend.Model.Message;
import com.example.sahal_portfolio_backend.Services.EmailService;
import com.example.sahal_portfolio_backend.Services.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class MessageController {

    @Autowired
    private MessageService service;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> sendMessage(@RequestBody Message message) {

        // Save in DB
        Message savedMessage = service.saveMessage(message);

        // Try sending email
        try {

            emailService.sendMail(
                    message.getName(),
                    message.getEmail(),
                    message.getMessage()
            );

        } catch (Exception e) {

            System.out.println("Email sending failed: " + e.getMessage());
        }

        return ResponseEntity.ok(savedMessage);
    }
}