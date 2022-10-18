function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    const salaryItem = salaries[key];
    if (typeof salaryItem === 'number' && isFinite(salaryItem)) {
      sum += salaryItem;
    }
  }
  return sum;
}
