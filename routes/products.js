import { Router } from "express";
import Product from "../models/product";

const router = Router();

router.get("/", (req, res) => {
    Product.find((error, products) => {
        res.send(products);
    });
});

router.post("/", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save((error, product) => {
        res.send(product);
    });
});

router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (error, product) => {
        res.send(product);
    });
});

router.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (error, product) => {
        res.send(product);
    });
});

router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (error, product) => {
        res.send(product);
    });
});

export default router;