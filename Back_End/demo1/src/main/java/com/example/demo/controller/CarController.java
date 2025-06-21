package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
@CrossOrigin(origins = "*")
public class CarController {

    @Autowired
    private CarService carService;
    //  search endpoint (brand + description)
    @GetMapping("/search")
    public ResponseEntity<Page<Car>> searchCars(
            @RequestParam String brand,
            @RequestParam String description,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size
    ) {
        Page<Car> cars = carService.searchCars(brand, description, page, size);
        return ResponseEntity.ok(cars);
    }








//    // brand filtering
//    @GetMapping("/brand/{brandName}")
//    public ResponseEntity<Page<Car>> getCars(
//            @PathVariable String brandName,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "9") int size
//    ) {
//        Page<Car> cars = carService.getCarsByBrandOrAll(brandName, page, size);
//        return ResponseEntity.ok(cars);
//    }





}