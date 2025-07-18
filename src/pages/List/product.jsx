// src/components/Product.jsx
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';
import Chance from 'chance';

const chance = new Chance();

function createProduct(id) {
  return {
    id,
    name: chance.word({ length: 5 }),
    price: chance.floating({ min: 5, max: 500, fixed: 2 }),
    category: chance.pickone(['Electronics', 'Books', 'Clothing', 'Home', 'Beauty']),
    inStock: chance.bool(),
    supplier: chance.company(),
    image: `product.jpg`,
  };
}

const columns = [
  { dataKey: 'image', label: 'Image', numeric: false, width: 100 },
  { dataKey: 'id', label: 'ID', numeric: false, width: 10 },
  { dataKey: 'name', label: 'Name', numeric: false, width: 50 },
  { dataKey: 'price', label: 'Price ($)', numeric: true, width: 80 },
  { dataKey: 'category', label: 'Category', numeric: false, width: 100 },
  { dataKey: 'inStock', label: 'Stock', numeric: false, width: 100 },
];

function rowContent(_index, row) {
  return (
    <>
      {columns.map((col) => (
        <TableCell
          key={col.dataKey}
          align={col.numeric ? 'right' : 'left'}
          sx={{
            padding: '12px',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
            backgroundColor: '#fff',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          {col.dataKey === 'image' ? (
            <img
              src={row.image}
              alt={row.name}
              loading="lazy"
              style={{
                width:  40,
                height: 40 ,
                borderRadius: '6px',
                objectFit: 'cover',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ) : col.dataKey === 'inStock' ? (
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.75rem',
                backgroundColor: row.inStock ? '#e0f7ec' : '#fdecea',
                color: row.inStock ? '#007e5a' : '#d32f2f',
              }}
            >
              {row.inStock ? 'Available' : 'Out of Stock'}
            </span>
          ) : col.numeric ? (
            `$${row[col.dataKey].toFixed(2)}`
          ) : (
            row[col.dataKey]
          )}
        </TableCell>
      ))}
    </>
  );
}

const rows = Array.from({ length: 20 }, (_, i) => createProduct(i));

const VirtComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} sx={{ height: '100%' }} />
  )),
  Table: (props) => (
    <Table {...props} stickyHeader sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((col) => (
        <TableCell
          key={col.dataKey}
          align={col.numeric ? 'right' : 'left'}
          sx={{
            width: col.width,
            fontWeght: 'bold',
            fontSize: '0.9rem',
            backgroundColor: '#f5f5f5',
            color: '#333',
          }}
        >
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default function Product() {
  return (
    <div className=" p-4 rounded-xl h-full duration-300 w-full overflow-x-auto">
      <h1 className="text-3xl p-4 font-semibold  text-center text-blue-900">Product </h1>
      <Paper sx={{ width:'100%', height: { xs: '100%', md: '100%' }, overflow: 'hidden', borderRadius: 2 }}>
        <TableVirtuoso
          data={rows}
          components={VirtComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
          style={{ height: '100%' }}
        />
      </Paper>
    </div>
  );
}
