const express = require("express");
const {allProducts,detailProducts,createProduct,deleteProduct,updateProduct,createReview,adminProducts} = require("../controllers/product");
const {authenticationMid,roleChecked} = require("../middleware/auth");

const router = express.Router();

router.get("/products",allProducts);
router.get("/admin/products",authenticationMid,roleChecked("admin"),adminProducts);
router.get("/products/:id",detailProducts);
router.post("/products/new",authenticationMid,roleChecked("admin"),createProduct);
router.post("/products/newReview",authenticationMid,createReview);
router.delete("/products/:id",authenticationMid,roleChecked("admin"),deleteProduct);
router.put("/products/:id",authenticationMid,roleChecked("admin"),updateProduct);



module.exports = router;