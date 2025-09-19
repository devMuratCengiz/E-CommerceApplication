import React, { useEffect, useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.css";
import httpClient from "../../../common/services/httpClientService"; // updated path
import {
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TablePagination,
} from "@mui/material";

function Product() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: "", stock: 0, price: 0 });

    // Pagination state
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        httpClient
            .get("/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: name === "name" ? value : Number(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || form.stock < 0 || form.price < 0) {
            alertify.set("notifier", "position", "top-left");
            alertify.error("Please fill all fields correctly!");
            return;
        }

        httpClient
            .post("/products", form)
            .then(() => {
                fetchProducts();
                setForm({ name: "", stock: 0, price: 0 });

                alertify.set("notifier", "position", "top-right");
                alertify.success("Product added successfully!");
            })
            .catch((err) => {
                console.error(err);
                alertify.set("notifier", "position", "top-left");
                alertify.error("Failed to add product!");
            });
    };

    // Pagination handlers
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Tarih formatlama
    const formatDate = (dateString) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleString(); // örn: 19.09.2025 17:45:30
    };

    return (
        <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Left side - Form */}
            <Grid item xs={12} sx={{ flex: 4, display: "flex" }}>
                <Card elevation={3} sx={{ width: "100%" }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Add New Product
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Product Name"
                                name="name"
                                fullWidth
                                margin="normal"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Stock"
                                name="stock"
                                type="number"
                                fullWidth
                                margin="normal"
                                value={form.stock}
                                onChange={handleChange}
                                slotProps={{
                                    input: {
                                        min: 0,
                                    },
                                }}
                            />
                            <TextField
                                label="Price"
                                name="price"
                                type="number"
                                fullWidth
                                margin="normal"
                                value={form.price}
                                onChange={handleChange}
                                slotProps={{
                                    input: {
                                        min: 0,
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Add Product
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

            {/* Right side - Product List */}
            <Grid item xs={12} sx={{ flex: 8, display: "flex" }}>
                <Card elevation={3} sx={{ width: "100%" }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Product List
                        </Typography>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>Stock</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Created Date</TableCell>
                                        <TableCell>Updated Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.length > 0 ? (
                                        products
                                            .slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .map((p, index) => (
                                                <TableRow key={p.id || index}>
                                                    <TableCell>
                                                        {page * rowsPerPage + index + 1}
                                                    </TableCell>
                                                    <TableCell>{p.name}</TableCell>
                                                    <TableCell>{p.stock}</TableCell>
                                                    <TableCell>{p.price} $</TableCell>
                                                    <TableCell>{formatDate(p.createdDate)}</TableCell>
                                                    <TableCell>{formatDate(p.updatedDate)}</TableCell>
                                                </TableRow>
                                            ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={6} align="center">
                                                No products available.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            {/* Pagination */}
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Product;
