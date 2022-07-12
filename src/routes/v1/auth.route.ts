import { Router } from 'express'
import * as authController from '../../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)
authRouter.post('/refresh-tokens', authController.refreshTokens)
authRouter.post('/forgot-password', authController.forgotPassword)
authRouter.post('/reset-password', authController.resetPassword)
authRouter.post('/send-verification-email', authController.sendVerificationEmail)
authRouter.post('/verify-email', authController.verifyEmail)

export default authRouter
