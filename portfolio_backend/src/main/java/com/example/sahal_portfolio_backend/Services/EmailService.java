package com.example.sahal_portfolio_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${client.name}")
    private String clientName;

    @Value("${MAIL_USERNAME}")
    private String ownerEmail;

    public void sendMail(String name, String email, String message) {

        // =========================
        // Mail to You
        // =========================

        SimpleMailMessage ownerMail = new SimpleMailMessage();

        ownerMail.setTo(ownerEmail);

        ownerMail.setSubject("New Portfolio Contact Message from "+name);

        ownerMail.setText(
                "Name : " + name + "\n" +
                        "Email : " + email + "\n\n" +
                        "Message :\n" + message
        );

        mailSender.send(ownerMail);


        // =========================
        // Confirmation Mail to Client
        // =========================

        SimpleMailMessage clientMail = new SimpleMailMessage();

        clientMail.setTo(email);

        clientMail.setSubject("Message Received Successfully");

        clientMail.setText(
                "Hi " + name + ",\n\n" +
                        "Thank you for contacting me through my portfolio website.\n\n" +
                        "I have received your message and will get back to you soon.\n\n" +
                        "Regards,\n" +
                        clientName
        );

        mailSender.send(clientMail);
    }
}