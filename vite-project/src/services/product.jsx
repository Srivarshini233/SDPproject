import {ProductData } from "./api";


const getProductData = async () => {
    const res = await ProductData()
    return res?.data;
}
export const Product = {getProductData};