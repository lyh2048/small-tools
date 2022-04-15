export const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9001/watermark/v1/watermark'
export const UPLOAD_PATH = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9001/watermark/v1/image/upload'
export const BASE_WEBSOCKET_URL = process.env.NODE_ENV === 'production' ? '' : 'ws://localhost:9001/watermark/websocket'