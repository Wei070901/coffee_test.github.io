// API 配置
const config = {
    apiUrl: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api'
        : 'https://web-production-c39c3.up.railway.app/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export default config;
