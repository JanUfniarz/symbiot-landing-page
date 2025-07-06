package com.example.landing_backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LandingBackend

fun main(args: Array<String>) {
	runApplication<LandingBackend>(*args)
}