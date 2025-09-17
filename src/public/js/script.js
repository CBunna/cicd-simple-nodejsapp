// Fetch and display system information
async function loadSystemInfo() {
    try {
        const response = await fetch('/health');
        const data = await response.json();
        
        if (data.system) {
            document.getElementById('nodeVersion').textContent = data.system.nodeVersion || 'N/A';
            document.getElementById('platform').textContent = data.system.platform || 'N/A';
            document.getElementById('uptime').textContent = formatUptime(data.uptime) || 'N/A';
        }
    } catch (error) {
        console.error('Failed to load system info:', error);
    }
}

function formatUptime(seconds) {
    if (!seconds) return 'N/A';
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    return `${hours}h ${minutes}m ${secs}s`;
}

window.showDockerInfo = function() {
    alert(`Docker Info:

🐳 This app is ready for containerization!

Key features:
- Health check endpoint: /health
- Metrics endpoint: /metrics
- Graceful shutdown handling
- Multi-stage build ready
- Non-root user support
- Environment configuration

Check the Dockerfile and docker-compose.yml files!`);
};

// Auto-refresh system info every 30 seconds
setInterval(loadSystemInfo, 30000);

// Load system info on page load
document.addEventListener('DOMContentLoaded', loadSystemInfo);

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});