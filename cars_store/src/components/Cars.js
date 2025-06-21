import Car from './Car';

const Cars = ({ cars }) => {
console.log("Cars component received cars:", cars);
console.log("Array.isArray(cars):", Array.isArray(cars));
console.log("typeof cars:", typeof cars);
console.log("cars instanceof Array:", cars instanceof Array);
 

  return (
   <div className="cars">
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}

    </div>
  );
};

export default Cars;
