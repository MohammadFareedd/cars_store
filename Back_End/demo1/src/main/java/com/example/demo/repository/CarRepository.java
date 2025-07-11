package com.example.demo.repository;

import com.example.demo.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    Page<Car> findByBrand_NameAndDescriptionContainingIgnoreCase(String brand, String description, Pageable pageable);

    Page<Car> findByDescriptionContainingIgnoreCase(String description, Pageable pageable);

   // Page<Car> findCarsByBrandName(String brand, Pageable pageable);

}
