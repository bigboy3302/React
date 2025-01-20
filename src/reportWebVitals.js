// Import the necessary functions from 'web-vitals' using the 'on' prefix
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Define the reportWebVitals function
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Call the performance functions with onPerfEntry
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

// Export the function
export default reportWebVitals;
