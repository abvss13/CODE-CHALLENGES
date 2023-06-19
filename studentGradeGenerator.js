// This is how i did my code challange.
// Function to calculate the grade based on the marks
function calculateGrade(marks) {
    if (marks >= 0 && marks <= 100) {
      if (marks > 79) {
        return "A"; // Return "A" if marks are greater than 79
      } else if (marks >= 60 && marks <= 79) {
        return "B"; // Return "B" if marks are between 60 and 79 (inclusive)
      } else if (marks >= 50 && marks <= 59) {
        return "C"; // Return "C" if marks are between 50 and 59 (inclusive)
      } else if (marks >= 40 && marks <= 49) {
        return "D"; // Return "D" if marks are between 40 and 49 (inclusive)
      } else {
        return "E"; // Return "E" if marks are less than 40
      }
    } else {
      return "Invalid marks."; // Return "Invalid marks." if marks are outside the valid range
    }
  }
  
  // Readline module for reading input from the console
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Prompt the user to enter student marks
  rl.question('Enter student marks (between 0 and 100): ', (answer) => {
    const studentMarks = parseFloat(answer); // Parse the input as a floating-point number
    const grade = calculateGrade(studentMarks); // Call the calculateGrade function to get the grade
    console.log(`The grade for the student is: ${grade}`); // Display the grade in the console
    rl.close(); // Close the readline interface
  });
  