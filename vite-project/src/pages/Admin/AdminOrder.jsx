import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import toast, { Toaster } from 'react-hot-toast';
import { Admin } from './../../services/admin';

const AdminOrders = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
 
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await Admin.getOrderData();
      setOrders(res);
    };
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await Admin.deleteOrder(id);
      setOrders(orders.filter(order => order.orderId !== id));
      toast.success('Order Deleted!');
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error('Error deleting order.');
    }
  };

  const handleConfirmOrder = (id) => {
    // Add logic here to handle order confirmation
    toast.success(`Order ${id} Confirmed!`);
  };

 



  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Orders</CardTitle>
          {/* <Button onClick={() => setOpen(true)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">OrderId</TableHead>
                <TableHead>UserId</TableHead>
                <TableHead>ProductId</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell className="font-medium">{order.orderId}</TableCell>
                  <TableCell>{order.user.uid}</TableCell>
                  <TableCell>{order.product.id}</TableCell>
                  <TableCell>{order.userAddress}</TableCell>
                  <TableCell>{order.payMethod}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <CheckCircle
                        className='h-8 w-8 p-1 text-green-500 cursor-pointer hover:bg-green-500 hover:text-background rounded-md'
                        onClick={() => handleConfirmOrder(order.orderId)}
                      />
                      {/* <TrashIcon 
                        className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md'
                        onClick={() => handleDelete(order.orderId)}
                      /> */}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

     
      <Toaster />
    </div>
  );
};

export default AdminOrders;
