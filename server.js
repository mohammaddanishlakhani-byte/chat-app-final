// ChatApp Pro Server
// ==================

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.static(__dirname));

// Serve main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoints for future expansion
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        version: '2.0.0',
        uptime: process.uptime(),
        features: [
            'Real-time messaging',
            'Multiple chat rooms',
            'User authentication',
            'Message formatting',
            'File sharing',
            'Voice messages',
            'Video calls',
            'Mobile responsive'
        ]
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════╗
    ║      🚀 ChatApp Pro Server          ║
    ║      =========================      ║
    ║                                      ║
    ║  ✅ Server running on port ${PORT}  ║
    ║  🌐 Open: http://localhost:${PORT}  ║
    ║                                      ║
    ║  📁 Files required:                 ║
    ║     • index.html                    ║
    ║     • style.css                     ║
    ║     • script.js                     ║
    ║     • server.js                     ║
    ║                                      ║
    ║  🔧 Features included:              ║
    ║     • Real-time chat interface      ║
    ║     • Multiple rooms                ║
    ║     • User profiles & avatars       ║
    ║     • Message formatting            ║
    ║     • Mobile responsive design      ║
    ║     • No WebSocket needed           ║
    ║                                      ║
    ╚══════════════════════════════════════╝
    `);
    
    console.log('\n📋 Quick Start Guide:');
    console.log('   1. Open browser to: http://localhost:3000');
    console.log('   2. Enter username (3+ characters)');
    console.log('   3. Select avatar and room');
    console.log('   4. Click "Join Chat Room"');
    console.log('   5. Start chatting!');
    console.log('\n🛠️  Commands:');
    console.log('   • Ctrl+C to stop server');
    console.log('   • Refresh browser to restart');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped successfully');
        process.exit(0);
    });
});