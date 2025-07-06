package com.example.landing_backend.controllers

import com.example.landing_backend.records.AuditRequest
import com.example.landing_backend.services.EmailService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Suppress("unused")
@RestController
@RequestMapping("api/audit")
class AuditController @Autowired constructor(
    private val service: EmailService
) {
    @PostMapping fun addAuditRequest(
        @RequestBody auditRequest: AuditRequest
    ) = service.sendEmail(auditRequest)
}