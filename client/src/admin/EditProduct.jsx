import React, { useState } from "react";

const ProductForm = ({ product, onEdit, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleEdit = () => {
    onEdit(editedProduct);
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-60">
      <div className="bg-white p-4 rounded-lg w-full mx-40 ">
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedProduct.title}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, title: e.target.value })
            }
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: parseFloat(e.target.value),
              })
            }
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={editedProduct.category}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, category: e.target.value })
            }
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={editedProduct.rating.rate}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                rating: {
                  ...editedProduct.rating,
                  rate: parseFloat(e.target.value),
                },
              })
            }
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="count"
            className="block text-sm font-medium text-gray-700"
          >
            Count
          </label>
          <input
            type="number"
            id="count"
            name="count"
            value={editedProduct.rating.count}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                rating: {
                  ...editedProduct.rating,
                  count: parseInt(e.target.value),
                },
              })
            }
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
