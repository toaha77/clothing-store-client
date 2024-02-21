import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value
    const rating = form.rating.value
    const price = form.price.value
    const type = form.type.value
    const pets = form.pets.value;
 
    const addProduct = {
      name,
      pets,
      image,
      rating,
      price,
      type,
     };
    console.log(addProduct);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added Successfully!");
        }
      });
  };
  return (
    <div className="  p-20">
      <h2 className="text-5xl text-center font-bold">Create Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex justify-center mb-8 gap-1">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered border-[#967844] w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Add your image URL"
                className="input input-bordered border-[#967844] w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center mb-8 gap-1">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered border-[#967844] w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered border-[#967844] w-full"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center mb-8 gap-1">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label"></label>
            <label htmlFor="pet-select">Choose a Brand Name:</label>

            <select
              className="input input-bordered border-[#967844]"
              name="pets"
            >
              <option value="">--Please choose a Brand--</option>
              <option value="Richman">Richman</option>
              <option value="Infinity">Infinity</option>
              <option value="Sailor">Sailor</option>
              <option value="Top Ten">Top Ten</option>
              <option value="Calvin Klein">Calvin Klein</option>
            </select>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered border-[#967844] w-full "
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center  items-center">
          <input
            type="submit"
            value="Add Product"
            className="btn bg-[#967844] text-white hover:bg-[#967844]"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
