-- Create database tables for the WiFi captive portal

-- Users table to store customer information
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Plans table to store different voucher plans
CREATE TABLE IF NOT EXISTS plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    duration_hours INTEGER NOT NULL,
    price_cents INTEGER NOT NULL,
    max_speed_mbps INTEGER NOT NULL,
    max_devices INTEGER NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vouchers table to store voucher codes and their status
CREATE TABLE IF NOT EXISTS vouchers (
    id SERIAL PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    plan_id INTEGER REFERENCES plans(id),
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'unused', -- unused, active, expired, used
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activated_at TIMESTAMP,
    expires_at TIMESTAMP,
    device_mac VARCHAR(17),
    ip_address INET
);

-- Sessions table to track active user sessions
CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    voucher_id INTEGER REFERENCES vouchers(id),
    device_mac VARCHAR(17) NOT NULL,
    ip_address INET NOT NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bytes_downloaded BIGINT DEFAULT 0,
    bytes_uploaded BIGINT DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- Payments table to track voucher purchases
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    voucher_id INTEGER REFERENCES vouchers(id),
    amount_cents INTEGER NOT NULL,
    payment_method VARCHAR(50),
    payment_reference VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_vouchers_code ON vouchers(code);
CREATE INDEX IF NOT EXISTS idx_vouchers_status ON vouchers(status);
CREATE INDEX IF NOT EXISTS idx_sessions_active ON sessions(is_active);
CREATE INDEX IF NOT EXISTS idx_sessions_device_mac ON sessions(device_mac);
