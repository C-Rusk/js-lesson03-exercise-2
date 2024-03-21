var hoursOfSleep = Number(
  prompt("How many hours of sleep did you get last night? (0-12)")
);

if (hoursOfSleep > 12) {
  console.log("Tell me the truth.");
} else if (hoursOfSleep >= 8) {
  console.log("Congratulations!");
} else if (hoursOfSleep >= 5) {
  console.log("OK, but consider getting more sleep.");
} else {
  console.log("You need to get more sleep!");
}
