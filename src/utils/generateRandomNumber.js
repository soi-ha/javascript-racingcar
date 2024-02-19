export default function generateRandomNumber({ from = 0, to = 9 } = {}) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
