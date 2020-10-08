const squircle = (radius: any) => (theta: any) => ({
  x: Math.pow(Math.abs(Math.cos(theta)), 2 / radius) * 50 * Math.sign(Math.cos(theta)) + 50,
  y: Math.pow(Math.abs(Math.sin(theta)), 2 / radius) * 50 * Math.sign(Math.sin(theta)) + 50,
})
const smoothCorners = new Array(360)
  .fill(0)
  .map((x, i) => i)
  .map((deg) => deg * Math.PI) // Defined as deg => deg * Math.PI / 180 elsewhere
  .map(squircle(4)) // We'll use a border-radius of 4
  .map(({ x, y }) => ({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 })) // Round to the ones place
  .map(({ x, y }) => `${x}% ${y}%`)
  .join(', ')
export default smoothCorners
