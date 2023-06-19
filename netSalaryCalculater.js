// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const payee = calculatePayeeTax(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(basicSalary);
    const nssfDeductions = calculateNSSFDeductions(basicSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
  }
  
  // Function to calculate gross salary
  function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
  }
  
  // Function to calculate payee (tax)
  function calculatePayeeTax(grossSalary) {
    // Tax rates and deduction thresholds
    const thresholds = [0, 12298, 23885, 35472, 47059, 59964, 84432, Infinity];
    const rates = [0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45];
  
    let tax = 0;
  
    for (let i = 0; i < thresholds.length; i++) {
      if (grossSalary <= thresholds[i]) {
        tax += grossSalary * rates[i];
        break;
      } else {
        tax += thresholds[i] * rates[i];
        grossSalary -= thresholds[i];
      }
    }
  
    return tax;
  }
  
  // Function to calculate NHIF deductions
  function calculateNHIFDeductions(basicSalary) {
    // NHIF deduction thresholds and corresponding amounts
    const thresholds = [
      5999, 7999, 11999, 14999, 19999,
      24999, 29999, 34999, 39999, 44999, 49999
    ];
    const amounts = [
      150, 300, 400, 500, 600,
      750, 850, 900, 950, 1000, 1100
    ];
  
    let nhifDeductions = 0;
  
    for (let i = 0; i < thresholds.length; i++) {
      if (basicSalary <= thresholds[i]) {
        nhifDeductions = amounts[i];
        break;
      }
    }
  
    return nhifDeductions;
  }
  
  // Function to calculate NSSF deductions
  function calculateNSSFDeductions(basicSalary) {
    // NSSF deduction rate
    const nssfRate = 0.12;
  
    return basicSalary * nssfRate;
  }
  
  // Get user input for basic salary and benefits
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter basic salary: ', (basicSalary) => {
    rl.question('Enter benefits: ', (benefits) => {
      const netSalary = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
      console.log(`Net Salary: ${netSalary}`);
      rl.close();
    });
  });
  