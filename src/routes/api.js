const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const adminController = require("../controllers/AdminController");
const cartController = require("../controllers/CartController");
const categoryController = require("../controllers/CategoryController");
const customerController = require("../controllers/CustomerController");
const orderController = require("../controllers/OrderController");
const order_itemController = require("../controllers/Order_itemController");
const paymentController = require("../controllers/PaymentController");
const postController = require("../controllers/PostController");
const productController = require("../controllers/ProductController");
const shipmentController = require("../controllers/ShipmentController");
const subAdminController = require("../controllers/SubAdminController");
const wishlistController = require("../controllers/WishlistController");

// API Routing End Point

//userController
router.get("/user-controller/create", userController.create);
router.get("/user-controller/read", userController.read);
router.get("/user-controller/update", userController.update);
router.get("/user-controller/delete", userController.delete);

//adminController
router.get("/admin-controller/create", adminController.create);
router.get("/admin-controller/read", adminController.read);
router.get("/admin-controller/update", adminController.update);
router.get("/admin-controller/delete", adminController.delete);

//cartController
router.get("/cart-controller/create", cartController.create);
router.get("/cart-controller/read", cartController.read);
router.get("/cart-controller/update", cartController.update);
router.get("/cart-controller/delete", cartController.delete);

// categoryController
router.get("/category-controller/create", categoryController.create);
router.get("/category-controller/read", categoryController.read);
router.get("/category-controller/update", categoryController.update);
router.get("/category-controller/delete", categoryController.delete);

//customerController
router.get("/customer-controller/create", customerController.create);
router.get("/customer-controller/read", customerController.read);
router.get("/customer-controller/update", customerController.update);
router.get("/customer-controller/delete", customerController.delete);

//ordercontroller
router.get("/order-controller/create", orderController.create);
router.get("/order-controller/read", orderController.read);
router.get("/order-controller/update", orderController.update);
router.get("/order-controller/delete", orderController.delete);

//order-item controller
router.get("/order_item-controller/create", order_itemController.create);
router.get("/order_item-controller/read", order_itemController.read);
router.get("/order_item-controller/update", order_itemController.update);
router.get("/order_item-controller/delete", order_itemController.delete);

//payment controller
router.get("/payment-controller/create", paymentController.create);
router.get("/payment-controller/read", paymentController.read);
router.get("/payment-controller/update", paymentController.update);
router.get("/payment-controller/delete", paymentController.delete);

//postcontroller
router.get("/post-controller/create", postController.create);
router.get("/post-controller/read", postController.read);
router.get("/post-controller/update", postController.update);
router.get("/post-controller/delete", postController.delete);

//product controller
router.get("/product-controller/create", productController.create);
router.get("/product-controller/read", productController.read);
router.get("/product-controller/update", productController.update);
router.get("/product-controller/delete", productController.delete);

//shipment controller
router.get("/shipment-controller/create", shipmentController.create);
router.get("/shipment-controller/read", shipmentController.read);
router.get("/shipment-controller/update", shipmentController.update);
router.get("/shipment-controller/delete", shipmentController.delete);

//subadmin controller
router.get("/subadmin-controller/create", subAdminController.create);
router.get("/subadmin-controller/read", subAdminController.read);
router.get("/subadmin-controller/update", subAdminController.update);
router.get("/subadmin-controller/delete", subAdminController.delete);

//wishlist controller
router.get("/wishlist-controller/create", wishlistController.create);
router.get("/wishlist-controller/read", wishlistController.read);
router.get("/wishlist-controller/update", wishlistController.update);
router.get("/wishlist-controller/delete", wishlistController.delete);

module.exports = router;
