"use strict";
// src/presentation/routes/adminRoute.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("../controllers/admin/AdminController");
const AdminUserController_1 = require("../controllers/admin/AdminUserController");
//import { adminAuthMiddleware } from '../../infrastructure/middleware/Adminmiddleware';
const router = (0, express_1.Router)();
const adminController = new AdminController_1.AdminController();
const adminUserController = new AdminUserController_1.AdminUserController();
router.post('/Login', adminController.login);
router.post('/refreshtoken', adminController.refreshToken);
router.get('/fetchUser', adminUserController.fetchUser);
router.put('/editUser', adminUserController.editUser);
router.get('/fetchVendor', adminUserController.fetchVendor);
router.put('/editVendor', adminUserController.editVendor);
router.put('/updateVendor', adminUserController.updateVendor);
exports.default = router;