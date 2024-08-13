import { Pencil, Plus, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Admin } from '../../services/admin';
import toast, { Toaster } from 'react-hot-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
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

const AdminUsers = () => {
  const navigate = useNavigate();
  const [addModel, setAddModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [users, setUsers] = useState(null);

  const editUser = (uid) => {
    
  };

  const deleteUser = (uid) => {
    setDeleteUserId(uid);
    setDeleteModel(true);
  };

  const addUser = () => {
    setAddModel(true);
  };

  const confirmDeleteUser = async () => {
    try {
      await Admin.deleteUser(deleteUserId);
      setUsers(users.filter(user => user.uid !== deleteUserId));
      setDeleteModel(false);
      toast.success('User Deleted!');
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error('Failed to delete user');
    }
  };

  const fetchUserData = async () => {
    const res = await Admin.getAllUsersData();
    setUsers(res.filter(user => user.role !== 'Admin'));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className='m-1 p-4'>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader className='w-full flex flex-row justify-between items-center'>
            <CardTitle>Users</CardTitle>
            <Button onClick={addUser}>
              <Plus className='h-10 w-10 mr-2' /> Add
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users && users.map((user) => (
                  <TableRow key={user.uid}>
                    <TableCell>{user.uid}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="flex justify-center items-center gap-4">
                      {/* <Button variant="outline" onClick={() => editUser(user.uid)}>
                        <Pencil className='text-blue-500' size={20} />
                      </Button> */}
                      <Button variant="outline" onClick={() => deleteUser(user.uid)}>
                        <Trash className='text-red-500' size={20} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Sheet open={addModel} onOpenChange={setAddModel}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <Button className='w-1/2' onClick={() => setAddModel(false)}>Cancel</Button>
            <Button className='w-1/2'>Add User</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet open={deleteModel} onOpenChange={setDeleteModel}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Delete User</SheetTitle>
          </SheetHeader>
          <div className="py-4 text-center">
            Are you sure you want to delete this user?
          </div>
          <SheetFooter>
            <Button className='w-1/2 bg-red-500 text-white' onClick={() => setDeleteModel(false)}>Cancel</Button>
            <Button className='w-1/2 bg-blue-500 text-white' onClick={confirmDeleteUser}>Delete</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Toaster />
    </>
  );
};

export default AdminUsers;
