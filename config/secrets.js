module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'keep it safe, keep it secure',
    environment: process.env.DB_ENV || 'development'

}