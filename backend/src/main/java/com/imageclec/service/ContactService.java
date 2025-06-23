package com.imageclec.service;

import com.imageclec.dto.ContactRequest;
import com.imageclec.model.ContactMessage;
import com.imageclec.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    
    @Autowired
    private ContactMessageRepository contactMessageRepository;
    
    @Autowired
    private JavaMailSender mailSender;
    
    public ContactMessage saveContactMessage(ContactRequest request) {
        // Crear y guardar el mensaje en la base de datos
        ContactMessage contactMessage = new ContactMessage(
            request.getName(),
            request.getEmail(),
            request.getSubject(),
            request.getMessage()
        );
        
        ContactMessage savedMessage = contactMessageRepository.save(contactMessage);
        
        // Enviar email de notificación
        sendNotificationEmail(savedMessage);

        // Enviar email de notificación al usuario
        sendEmailToUser(savedMessage);
        
        return savedMessage;
    }
    
    private void sendNotificationEmail(ContactMessage contactMessage) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("imageclec.cl@gmail.com"); // Email de destino
            message.setSubject("Nuevo mensaje de contacto: " + contactMessage.getSubject());
            message.setText(
                "Has recibido un nuevo mensaje de contacto:\n\n" +
                "Nombre: " + contactMessage.getName() + "\n" +
                "Email: " + contactMessage.getEmail() + "\n" +
                "Asunto: " + contactMessage.getSubject() + "\n" +
                "Mensaje: " + contactMessage.getMessage() + "\n\n" +
                "Fecha: " + contactMessage.getCreatedAt()
            );
            
            mailSender.send(message);
        } catch (Exception e) {
            // Log del error pero no fallar la operación principal
            System.err.println("Error enviando email: " + e.getMessage());
        }
    }

    private void sendEmailToUser(ContactMessage contactMessage) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(contactMessage.getEmail());
            message.setSubject("Gracias por contactarnos");
            message.setText("Gracias por comunicarse con IMAGECLEC. Nos pondremos en contacto contigo lo antes posible.");
            mailSender.send(message);
        } catch (Exception e) {
            // Log del error pero no fallar la operación principal
            System.err.println("Error enviando email: " + e.getMessage());
        }
    }
} 