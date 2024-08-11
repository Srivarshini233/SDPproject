import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import toast, { Toaster } from 'react-hot-toast';
import { Admin } from './../../services/admin';

const AdminProducts = () => {
  const [open, setOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', image: '', price: 0, color: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await Admin.getProductData();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await Admin.deleteproduct(id);
      setProducts(products.filter(product => product.id !== id));
      toast.success('Product Deleted!');
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error('Error deleting product.');
    }
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await Admin.PostProduct(newProduct);
      setProducts([...products, addedProduct]);
      setNewProduct({ name: '', image: '', price: 0, color: '' });
      setOpen(false);
      toast.success('Product Added!');
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error('Error adding product.');
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  return (
    <div className='m-1 p-4 overflow-scroll'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Products</CardTitle>
          <Button onClick={() => setOpen(true)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Color</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell><img src={product.image} alt={product.name} className="w-16 h-16 object-cover" /></TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.color}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <TrashIcon 
                        className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(product.id)}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editProduct ? 'Edit Product' : 'Add Product'}</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" value={newProduct.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="image" className="text-right">Image</Label>
              <Input id="image" value={newProduct.image} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="price" className="text-right">Price</Label>
              <Input id="price" type="number" value={newProduct.price} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="color" className="text-right">Color</Label>
              <Input id="color" value={newProduct.color} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleAddProduct}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Toaster />
    </div>
  );
};

export default AdminProducts;
