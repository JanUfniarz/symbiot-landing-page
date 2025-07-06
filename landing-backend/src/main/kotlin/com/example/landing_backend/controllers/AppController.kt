package com.example.landing_backend.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Suppress("unused")
@Controller
class AppController {
    @RequestMapping("/")
    fun app() = "index.html"

    @GetMapping(value = ["/{path:[^\\.]*}", "/**/{path:[^\\.]*}"])
    fun redirect() = "forward:/index.html"

}