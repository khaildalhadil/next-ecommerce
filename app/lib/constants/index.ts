// first look at .env then it will take the || or this
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "KhalidStore";
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "this is next js app "
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"

export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;