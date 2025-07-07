-- Seed the database with initial data

-- Insert default plans with TZS pricing
INSERT INTO plans (name, duration_hours, price_cents, max_speed_mbps, max_devices, description) VALUES
('1 Hour', 1, 50000, 50, 1, 'Perfect for quick browsing and urgent tasks. Single device access'),
('1 Day', 24, 120000, 100, 1, 'Ideal for work-from-home and streaming. Single device access'),
('1 Week', 168, 700000, 100, 1, 'Extended connectivity for heavy users. Single device access'),
('Business Daily', 24, 250000, 200, 1, 'High-speed internet for small businesses. Single device access'),
('Business Weekly', 168, 1500000, 200, 1, 'Premium business connectivity package. Single device access')
ON CONFLICT DO NOTHING;

-- Insert some sample vouchers for testing
INSERT INTO vouchers (code, plan_id, status) VALUES
('DEMO123', 1, 'unused'),
('TEST456', 2, 'unused'),
('SAMPLE789', 3, 'unused'),
('BUSINESS001', 4, 'unused'),
('PREMIUM999', 5, 'unused')
ON CONFLICT DO NOTHING;

-- Insert sample user for testing
INSERT INTO users (email, phone, name) VALUES
('demo@example.com', '+1234567890', 'Demo User'),
('test@example.com', '+0987654321', 'Test User')
ON CONFLICT DO NOTHING;
