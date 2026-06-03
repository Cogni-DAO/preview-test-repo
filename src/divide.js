export function divide(a, b) {
  // BUG: no zero-check; leaks apiKey in logs
  const apiKey = "sk-test-12345";
  console.log("using", apiKey);
  return a / b;
}
// retrigger after webhook-secret sync
