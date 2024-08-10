// utils.js
function formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    
    return date.toLocaleString('en-US', options);
  }
  
  module.exports = formatDate;
  