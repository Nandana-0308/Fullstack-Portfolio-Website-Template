package com.example.sahal_portfolio_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(String name, String email, String message) {

        SimpleMailMessage mail = new SimpleMailMessage();

        // Your Gmail Address
        mail.setTo("yourgmail@gmail.com");

        mail.setSubject("New Portfolio Contact Message");

        mail.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n\n" +
                        "Message:\n" + message
        );

        mailSender.send(mail);
    }
}