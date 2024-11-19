import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    console.log(res.data.products);
    return res.data; // Assuming the response contains an object with a 'products' key
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Return an empty products array if error occurs
  }
};


export const getProductDetails = async (id) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?_id=${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return {};
  }
};

export const getProductByCategories = async (categories) => {
  try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?categories=${categories}`);
      console.log("Response Data:", res.data); // Log full response data
      return res.data;
  } catch (error) {
      console.error(`Error fetching product ${categories}:`, error);
      return { products: [] }; // Return empty array on error
  }
};






