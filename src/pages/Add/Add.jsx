/* eslint-disable no-unused-vars */
import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.add_icon_green} alt="" />
          </label>
          <input type="file" id="image" name="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <input
            type="text"
            name="Description"
            placeholder="Write content here"
            rows="6"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" id="" className="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
              <option value="Cake">Cake</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="Number" name="price" placeholder="₹200" />
          </div>
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
};

export default Add;
