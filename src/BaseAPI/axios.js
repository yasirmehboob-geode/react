import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://f5da-54-204-223-140.ngrok.io',
    headers: {
        'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHBzOlwvXC9wb3NpbnRlcmZhY2UuYWNldGlja2V0LmNvbTo5MDY2XC9hcGlcL2xvZ2luIiwiaWF0IjoxNDYxMTYwNjgwLCJleHAiOjIxNDc0ODM2NDcsIm5iZiI6MTQ2MTE2MDY4MCwianRpIjoiNzhhMjE5MjBmN2E5ZTRjZTYzZTY3OTM3NzM4M2MxZGUifQ.227yJ-M522fe0xT9rm754_TDs2rtGirIEsrnWMU2Tvo',
    }
});