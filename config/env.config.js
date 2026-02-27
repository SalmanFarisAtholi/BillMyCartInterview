import dotenv from 'dotenv'
dotenv.config()

const envConfig = {
  general: {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000,
    APP_KEY: process.env.APP_KEY || "testkey",
  },
  db: {
    URL: process.env.DB_CONNECTION,
    NAME: process.env.DB_NAME || process.env.CLIENT_NAME?.toLowerCase(),
  },
}

export default envConfig
