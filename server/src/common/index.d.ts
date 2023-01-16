declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: number
      CORS_ORIGIN: string | '*'
      AUTH_COOKIE_NAME: string
      DB_URI: string
      BCRYPT_SALT: string
      JWT_SECRET: string
    }
  }
}

export {}
