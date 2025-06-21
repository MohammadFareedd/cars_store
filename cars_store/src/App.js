import './App.css';
import SideBar from './components/SideBar';
import React, { useState, useEffect } from 'react';
import Cars from './components/Cars';
import SearchBar from './components/SearchBar';

function App() {
    const [SideBarData, setData] = useState(["all"]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentBrand, setCurrentBrand] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getTypes = async () => {
            const typesFromServer = await fetchTypes();
            setData(typesFromServer);
        };

        const getAllCars = async () => {
            const allCarsPage = await fetchCarsByBrand("all", 0);
            setSelectedBrand(allCarsPage.content);
            setTotalPages(allCarsPage.totalPages);
            setCurrentBrand("all");
        };

        getAllCars();
        getTypes();
    }, []);

    const fetchTypes = async () => {
        const res = await fetch('http://localhost:8080/api/brands');
        const data = await res.json();
        return data;
    };

    const fetchCarsByBrand = async (brand, page = 0, size = 9) => {
        const res = await fetch(`http://localhost:8080/cars/brand/${brand}?page=${page}&size=${size}`);
        const dataCars = await res.json();
        return dataCars;
    };

    const searchCars = async (brand, description, page = 0, size = 9) => {
      console.log("Searching cars with brand:", brand, "and description:", description, "on page:", page);

        const res = await fetch(`http://localhost:8080/cars/search?brand=${brand}&description=${description}&page=${page}&size=${size}`);
        const dataCars = await res.json();
        return dataCars;
    };

    const onSelectBrand = async (brand) => {
        if (searchTerm.trim() !== "") {
          console.log("Searching for cars with brand:", brand, "and search term:", searchTerm);
            const carsPage = await searchCars(brand, searchTerm, 0);
            setSelectedBrand(carsPage.content);
            setTotalPages(carsPage.totalPages);
            setCurrentPage(0);
            setCurrentBrand(brand);
        } else {
            console.log("Fetching cars for brand:", brand);
            const carsPage = await fetchCarsByBrand(brand, 0);
            setSelectedBrand(carsPage.content);
            setTotalPages(carsPage.totalPages);
            setCurrentPage(0);
            setCurrentBrand(brand);
        }
    };

    const onSearch = async () => {
        const carsPage = await searchCars(currentBrand, searchTerm, 0);
        setSelectedBrand(carsPage.content);
        setTotalPages(carsPage.totalPages);
        setCurrentPage(0);
    };

    const goToPage = async (page) => {
        if (page < 0 || page >= totalPages) return;

        if (searchTerm.trim() !== "") {
            const carsPage = await searchCars(currentBrand, searchTerm, page);
            setSelectedBrand(carsPage.content);
            setCurrentPage(page);
        } else {
            const carsPage = await fetchCarsByBrand(currentBrand, page);
            setSelectedBrand(carsPage.content);
            setCurrentPage(page);
        }
    };

    return (
     <div className="App">
    <SideBar
        Data={SideBarData}
        onSelectBrand={onSelectBrand}
    />
    <div className="Content">
        <div className="SearchContainer">
            <SearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onSearch={onSearch}
            />
        </div>

        <Cars cars={selectedBrand} />

        {/* Pagination integrated below the cars */}
        <div className="pagination-controls">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>
                Previous
            </button>
            <span>Page {currentPage + 1} of {totalPages}</span>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage + 1 >= totalPages}>
                Next
            </button>
        </div>
    </div>
</div>

    );
}

export default App;
