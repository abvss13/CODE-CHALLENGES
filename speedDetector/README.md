Speed Detector

This is a simple JavaScript program that calculates demerit points based on the speed of a car. It determines if the speed is within the speed limit or if demerit points should be assigned. If a driver accumulates more than 12 points, their license will be suspended.

Author
Name: Abdullahi Abass

Contact Information
Phone: +254798491946
Email: abdulabass1738@gmail.com

Occupation
Student at Moringa School

Course
Software Engineering

How to Use

Clone this repository to your local machine.
Open the terminal or command prompt and navigate to the project directory.
Open the speedDetector.js file in a code editor.
Modify the speed variable to the desired car speed (in km/h).
Save the changes in the speedDetector.js file.
In the terminal or command prompt, run the program using the following command:
      node speedDetector.js
The program will output the demerit points or "Ok" if the speed is within the limit.
         const speed = 80;
         const result = calculateDemeritPoints(speed);
        console.log(result);

Running the above example will output "Points: 2" to the console.

