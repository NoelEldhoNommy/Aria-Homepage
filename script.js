function updateDateTime() {
    const now = new Date();
    
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('en-US', options)
        .replace(/(\d+)/, '$1th');
    document.getElementById('date').textContent = dateStr;
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeStr = `${hours} : ${minutes.toString().padStart(2, '0')} ${ampm}`;
    document.getElementById('time').textContent = timeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});