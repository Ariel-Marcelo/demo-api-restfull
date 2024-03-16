package com.bytecodes.core.controllers;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bytecodes.core.models.UsuarioRequest;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/usuarios")
    public ResponseEntity<Map<String, String>> crearUsuario(@RequestBody UsuarioRequest request) {
        Map<String, String> response = new HashMap<>();
        try {
            String uuid = UUID.randomUUID().toString();
            LocalDateTime fechaCreacion = LocalDateTime.now();
            jdbcTemplate.update("INSERT INTO usuario (id, nombre, correo, password, fecha_creacion) VALUES (?, ?, ?, ?, ?)",
                    uuid, request.getNombre(), request.getCorreo(), request.getPassword(), fechaCreacion);

            response.put("message", "Usuario creado exitosamente con UUID: " + uuid);
            return ResponseEntity.ok(response);
        } catch (DataAccessException e) {
            response.put("error", "Error al crear el usuario: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
