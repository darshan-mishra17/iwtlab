// Function to update clocks for different time zones
const updateClocks = () => {
    const indiaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
    const usaTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    const japanTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
  
    document.getElementById('clock-india').textContent = `India: ${indiaTime}`;
    document.getElementById('clock-usa').textContent = `USA (New York): ${usaTime}`;
    document.getElementById('clock-japan').textContent = `Japan: ${japanTime}`;
  };
  
  // Update the clocks every second
  setInterval(updateClocks, 1000);
  
  // Initial clock update
  updateClocks();
  