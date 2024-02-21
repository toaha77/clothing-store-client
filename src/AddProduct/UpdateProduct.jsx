import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

 
const UpdateProduct = () => {
    const product = useLoaderData()
    console.log(product);
    const {_id, name, brand, photo, type, description, price, rating
    } = product;
    const handleUpdateProduct = e => {
        
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updatedProduct= {
            name,
            brand,
            photo,
            type,
            description,
            price,
            rating
        }
        console.log(updatedProduct)
        fetch(`http://localhost:5000/brandsCard/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)	
        })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            toast.success('Product Updated Successfully')
          }
        })
     }
      
    return (
        <div className="  p-20">
        <h2 className="text-5xl text-center font-bold">Update a Product : {product.name}</h2>
        <form onSubmit={handleUpdateProduct}>
             <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" required/>
                    </label>
                </div>
            </div>
 
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="photo" name="photo" defaultValue={photo} placeholder="Photo URL  " className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group dropdown">
                        <input type="select" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" required/>
                    </label>
                </div>
            </div>
             <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price  </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" defaultValue={price} placeholder="Price  " className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" required/>
                    </label>
                </div>
                
            </div>
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
             
            <div className="flex justify-center  items-center">
            <input  type="submit" value="Update Product" className="btn bg-blue-500 text-white hover:bg-blue-500" required/>
            </div>

        </form>
    </div>
    );
};

export default UpdateProduct;