// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    // Set speed limit
    const speedLimit = 70;
    // Set demerit points per km
    const kmPerDemeritpoint = 5;

    // Check if speed is okay
    if (speed <= speedLimit) {
        return "Ok"; // Return okay if speed is fine
    }

    // Calculate points based on speed
    const points = Math.floor((speed - speedLimit) / kmPerDemeritpoint);

    // Check if license should be suspended
    if (points >= 12) {
        return "License suspended"; // Return license suspended if points are too high
    }

    // Return points
    return "Points: " + points;
}

// Set speed
const speed = 80;
// Calculate points
const result = calculateDemeritPoints(speed);
// Print result
console.log(result);
