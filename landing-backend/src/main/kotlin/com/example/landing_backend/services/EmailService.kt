package com.example.landing_backend.services

import com.example.landing_backend.records.AuditRequest
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service

@Service
class EmailService(private val mailSender: JavaMailSender) {
    private final val emails = arrayOf(
        "jan.ufniarz@gmail.com",
        "stalkerpl000@gmail.com"
    )

    fun  sendEmail(auditRequest: AuditRequest) = mailSender.send(
        SimpleMailMessage().apply {
            setTo(*emails)
            subject = "New Audit Request from ${auditRequest.email}"
            text = """
                New audit request received:
                Email: ${auditRequest.email}
                Description: ${auditRequest.description}
            """.trimIndent()
        }
    )
}