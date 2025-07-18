import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Avatar, Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Avatar
        src={params.value}
        alt={`${params.row.firstName || ''} ${params.row.lastName || ''}`}
        sx={{ width: 40, height: 40 }}
      />
    ),
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Auto-generated from first and last name.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
       `${params?.row?.firstName ?? ''} ${params?.row?.lastName ?? ''}`.trim()

  },
  {
    field: 'product',
    headerName: 'Product',
    width: 150,
    renderCell: (params) => params.value || 'N/A',
  },
];

const rows = [
 
  
  
  {
  id: 10, firstName: 'Eddard', lastName: 'Stark', img: '/1img.jpg', age: 48, product: 'MacBook Pro'
},
{
  id: 11, firstName: 'Robert', lastName: 'Baratheon', img: '/1img.jpg', age: 50, product: 'Xbox Series X'
},
{
  id: 12, firstName: 'Jorah', lastName: 'Mormont', img: '/1img.jpg', age: 42, product: 'iPhone 13'
},
{
  id: 13, firstName: 'Brienne', lastName: 'Tarth', img: '/1img.jpg', age: 34, product: 'HP Laptop'
},
{
  id: 14, firstName: 'Tyrion', lastName: 'Lannister', img: '/1img.jpg', age: 39, product: 'Nintendo Switch'
},
{
  id: 15, firstName: 'Samwell', lastName: 'Tarly', img: '/1img.jpg', age: 32, product: 'Google Pixel 7'
},
{
  id: 16, firstName: 'Gendry', lastName: 'Waters', img: '/1img.jpg', age: 28, product: 'iPad Pro'
},
{
  id: 17, firstName: 'Bran', lastName: 'Stark', img: '/1img.jpg', age: 18, product: 'VR Headset'
},
{
  id: 18, firstName: 'Sansa', lastName: 'Stark', img: '/1img.jpg', age: 25, product: 'MacBook Air'
},
{
  id: 19, firstName: 'Theon', lastName: 'Greyjoy', img: '/1img.jpg', age: 31, product: 'Logitech Mouse'
},
{
  id: 20, firstName: 'Ygritte', lastName: '', img: '/1img.jpg', age: 29, product: 'Kindle Paperwhite'
},
{
  id: 21, firstName: 'Oberyn', lastName: 'Martell', img: '/1img.jpg', age: 40, product: 'PS5 Controller'
},
{
  id: 22, firstName: 'Missandei', lastName: '', img: '/1img.jpg', age: 27, product: 'Samsung Galaxy S21'
},
{
  id: 23, firstName: 'Grey', lastName: 'Worm', img: '/1img.jpg', age: 30, product: 'Wireless Charger'
},
{
  id: 24, firstName: 'Jaqen', lastName: 'Shar', img: '/1img.jpg', age: 38, product: 'iPhone SE'
},
{
  id: 25, firstName: 'Daario', lastName: 'Naharis', img: '/1img.jpg', age: 37, product: 'Alienware Monitor'
},
{
  id: 26, firstName: 'Beric', lastName: 'Dondarrion', img: '/1img.jpg', age: 45, product: 'Beats Headphones'
},
{
  id: 27, firstName: 'Podrick', lastName: 'Payne', img: '/1img.jpg', age: 24, product: 'Bluetooth Speaker'
},
{
  id: 28, firstName: 'Shae', lastName: '', img: '/1img.jpg', age: 33, product: 'Fitness Tracker'
},
{
  id: 29, firstName: 'Rickon', lastName: 'Stark', img: '/1img.jpg', age: 12, product: 'Gaming Mouse'
},
{
  id: 30, firstName: 'Hodor', lastName: '', img: '/1img.jpg', age: 40, product: 'Smart Light'
},
{
  id: 31, firstName: 'Meera', lastName: 'Reed', img: '/1img.jpg', age: 22, product: 'Noise Cancelling Earbuds'
},
{
  id: 32, firstName: 'Margaery', lastName: 'Tyrell', img: '/1img.jpg', age: 28, product: 'Apple Watch'
},
{
  id: 33, firstName: 'Loras', lastName: 'Tyrell', img: '/1img.jpg', age: 29, product: 'Surface Pro'
},
{
  id: 34, firstName: 'Stannis', lastName: 'Baratheon', img: '/1img.jpg', age: 52, product: 'Dell Monitor'
},
{
  id: 35, firstName: 'Shireen', lastName: 'Baratheon', img: '/1img.jpg', age: 14, product: 'Drawing Tablet'
},
{
  id: 36, firstName: 'Jojen', lastName: 'Reed', img: '/1img.jpg', age: 18, product: 'Lenovo ThinkPad'
},
{
  id: 37, firstName: 'Euron', lastName: 'Greyjoy', img: '/1img.jpg', age: 41, product: 'GoPro Camera'
},
{
  id: 38, firstName: 'Ellaria', lastName: 'Sand', img: '/1img.jpg', age: 35, product: 'Roku Stick'
},

];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
      
  return (
    <div className='max-w-full min-h-full          '> 
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[15,10]}
          checkboxSelection
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
              fontWeight: 'bold',
            },
            '& .MuiDataGrid-cell': {
              fontSize: '0.95rem',
            },
          }}
        />
      </Paper>
    </Box>
  </div>);
}
