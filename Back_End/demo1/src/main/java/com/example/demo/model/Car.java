package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(name = "image_url")
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "brand_id")

    private Brand brand;

    // Constructors
    public Car() {}

    public Car(String title, String description, String imagePath, Brand brand) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.brand = brand;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getImagePath() { return imagePath; }

    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    public Brand getBrand() { return brand; }

    public void setBrand(Brand brand) { this.brand = brand; }
}
