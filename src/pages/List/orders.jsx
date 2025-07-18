import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Customar', headerName: 'Customer', width: 130 },
    {
    field: 'imgCustomar',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="product"
        style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4 }}
      />
    ),
  },
  { field: 'Product', headerName: 'Product', width: 150 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="product"
        style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4 }}
      />
    ),
  },
  { field: 'Price', headerName: 'Price ($)', width: 100 },
  { field: 'Quantity', headerName: 'Qty', width: 80 },
  { field: 'Total', headerName: 'Total ($)', width: 110 },
  {
    field: 'Status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => {
      const isDelivered = params.value === 'Delivered';
      return (
        <span
          style={{
            color: isDelivered ? 'green' : 'red',
            fontWeight: 600,
          }}
        >
          {params.value}
        </span>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    Customar: 'John Doe',
    imgCustomar: '1img.jpg',
    Product: 'Wireless Headphones',
    img: 'product.jpg',
    Price: 59.99,
    Quantity: 2,  
    Total: 119.98,
    Status: 'Delivered',
  },
  {
    id: 2,
    Customar: 'Jane Smith',
    imgCustomar: '1img.jpg',

    Product: 'Bluetooth Speaker',
    img: 'product.jpg',
    Price: 79.99,
    Quantity: 1,
    Total: 79.99,
    Status: 'Pending',
  },
  {
    id: 3,
    Customar: 'Ali Khan',
    imgCustomar: '1img.jpg',

    Product: 'Smartwatch',
    img: 'product.jpg',
    Price: 199.99,
    Quantity: 1,
    Total: 199.99,
    Status: 'Cancelled',
  },
  {
    id: 4,
    Customar: 'Maria Garcia',
    imgCustomar: '1img.jpg',

    Product: 'Laptop Stand',
    img: 'product.jpg',
    Price: 29.99,
    Quantity: 3,
    Total: 89.97,
    Status: 'Delivered',
  },
  {
    id: 5,
    Customar: 'David Lee',
    imgCustomar: '1img.jpg',

    Product: 'Mechanical Keyboard',
    img: 'product.jpg',
    Price: 89.99,
    Quantity: 1,
    Total: 89.99,
    Status: 'Delivered',
  },
  {
    id: 6,
    Customar: 'Emma Brown',
    imgCustomar: '1img.jpg',

    Product: 'Gaming Mouse',
    img: 'product.jpg',
    Price: 49.99,
    Quantity: 2,
    Total: 99.98,
    Status: 'Shipped',
  },
  {
    id: 7,
    Customar: 'Liam Wilson',
    imgCustomar: '1img.jpg',

    Product: 'USB-C Hub',
    img: 'product.jpg',
    Price: 39.99,
    Quantity: 1,
    Total: 39.99,
    Status: 'Processing',
  },
  {
    id: 8,
    Customar: 'Olivia Johnson',
    imgCustomar: '1img.jpg',

    Product: 'Desk Lamp',
    img: 'product.jpg',
    Price: 24.99,
    Quantity: 2,
    Total: 49.98,
    Status: 'Delivered',
  },
  {
    id: 9,
    Customar: 'Noah Martinez',
    imgCustomar: '1img.jpg',

    Product: 'Portable SSD',
    img: 'product.jpg',
    Price: 129.99,
    Quantity: 1,
    Total: 129.99,
    Status: 'Pending',
  },
  {
    id: 10,
    Customar: 'Sophia Davis',
    imgCustomar: '1img.jpg',

    Product: 'Noise Cancelling Earbuds',
    img: 'product.jpg',
    Price: 99.99,
    Quantity: 2,
    Total: 199.98,
    Status: 'Shipped',
  },
  {
    id: 11,
    Customar: 'James Anderson',
    imgCustomar: '1img.jpg',

    Product: 'Monitor Arm',
    img: 'product.jpg',
    Price: 69.99,
    Quantity: 1,
    Total: 69.99,
    Status: 'Delivered',
  },
  {
    id: 12,
    Customar: 'Mia Thomas',
    imgCustomar: '1img.jpg',

    Product: 'LED Strip Lights',
    img: 'product.jpg',

    Price: 19.99,
Quantity: 4,
    Total: 79.96,
    Status: 'Delivered',
  },
  {
    id: 13,
    Customar: 'Benjamin White',
    imgCustomar: '1img.jpg',

    Product: 'Wireless Charger',
    img: 'product.jpg',
    Price: 29.99,
    Quantity: 1,
    Total: 29.99,
    Status: 'Processing',
  },
  {
    id: 14,
    Customar: 'Charlotte Harris',
    imgCustomar: '1img.jpg',

    Product: 'Ergonomic Chair',
    img: 'product.jpg',
    Price: 199.99,
    Quantity: 1,
    Total: 199.99,
    Status: 'Pending',
  },
  {
    id: 15,
    Customar: 'Henry Clark',
    imgCustomar: '1img.jpg',

    Product: 'Webcam 1080p',
    img: 'product.jpg',

    Price: 49.99,
    Quantity: 1,
    Total: 49.99,
    Status: 'Delivered',
  },
  {
    id: 16,
    Customar: 'Amelia Lewis',

    imgCustomar: '1img.jpg',
    Product: 'Graphic Tablet',
    img: 'product.jpg',
    Price: 149.99,
    Quantity: 1,
    Total: 149.99,
    Status: 'Shipped',
  },
  {
    id: 17,
    Customar: 'Lucas Walker',
    imgCustomar: '1img.jpg',

    Product: 'Standing Desk',
    img: 'product.jpg',
    Price: 299.99,
    Quantity: 1,
    Total: 299.99,
    Status: 'Delivered',
  },
  {
    id: 18,
    Customar: 'Ella Hall',
    imgCustomar: '1img.jpg',

    Product: 'Fitness Tracker',
    img: 'product.jpg',
    Price: 69.99,
    Quantity: 2,
    Total: 139.98,
    Status: 'Processing',
  },
  {
    id: 19,
    Customar: 'Logan Allen',
    imgCustomar: '1img.jpg',

    Product: 'VR Headset',
    img: 'product.jpg',
    Price: 499.99,
    Quantity: 1,
    Total: 499.99,
    Status: 'Pending',
  },
  {
    id: 20,
    Customar: 'Grace Young',
    imgCustomar: '1img.jpg',

    Product: '4K Monitor',
    img: 'product.jpg',
    Price: 399.99,
    Quantity: 1,
    Total: 399.99,
    Status: 'Delivered',
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 500, width: '100%', p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: 0,
          fontFamily: 'sans-serif',
        }}
      />
    </Paper>
  );
}
