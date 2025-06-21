
const Car = ({ car }) => {
  return (
    <div className="car-card">
      <h2>{car.title}</h2>
      <img 
        src={`http://localhost:8080/${car.imagePath}`} 
        alt={car.name} 
        style={{ width: '40%', maxHeight: '100px', objectFit: 'cover' }}
      />
      <p><strong>Brand:</strong> {car.brand?.name}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default Car;


