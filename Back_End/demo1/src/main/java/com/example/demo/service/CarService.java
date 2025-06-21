package com.example.demo.service;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;
    public Page<Car> getCarsByBrandOrAll(String brandName, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        if (brandName.equalsIgnoreCase("all")) {
            return carRepository.findAll(pageable);
        } else {
            return carRepository.findByBrand_Name(brandName, pageable);
        }
    }

    public Page<Car> searchCars(String brandName, String description, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        if (brandName.equalsIgnoreCase("all")) {
            return carRepository.findByDescriptionContainingIgnoreCase(description, pageable);
        } else {
            return carRepository.findByBrand_NameAndDescriptionContainingIgnoreCase(brandName, description, pageable);
        }
    }


}