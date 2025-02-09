const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { validateUserId } = require('../validators/userValidator');

const router = express.Router();

/**
 * @swagger
 * /users/profile/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     description: Retrieve the user profile information by user ID. Requires JWT authentication.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer token for JWT authentication
 *         schema:
 *           type: string
 *           example: Bearer your_token_here
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                   enum: [customer, admin]
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get('/profile/:id', authenticateJWT, validateUserId, getUserProfile);

/**
 * @swagger
 * /users/profile/{id}:
 *   put:
 *     summary: Update user profile by ID
 *     description: Update the user profile information by user ID. Requires JWT authentication.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer token for JWT authentication
 *         schema:
 *           type: string
 *           example: Bearer your_token_here
 *       - in: body
 *         name: user
 *         description: User profile object that needs to be updated
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put('/profile/:id',  authenticateJWT, validateUserId, updateUserProfile);

module.exports = router;
