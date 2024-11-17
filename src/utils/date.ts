export const isWinter = () => {
  const dt = new Date()
  const m = dt.getMonth()
  return (m === 10 && dt.getDate() >= 15) || m > 10 || m <= 1
}
