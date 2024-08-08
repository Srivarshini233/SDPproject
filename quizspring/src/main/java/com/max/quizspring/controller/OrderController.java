package com.max.quizspring.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.max.quizspring.dto.request.OrderRequest;
import com.max.quizspring.model.Orders;
import com.max.quizspring.service.OrderService;


@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/post")
    public Orders createOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.createOrder(
            orderRequest.getUserId(),
            orderRequest.getProductId(),
            orderRequest.getUserAddress(),
            orderRequest.getPayMethod()
        );
    }
}