function StatisticItems({ label, percentage }) {
  return (
    <li style={{ backgroundColor: randomColor() }} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

export default StatisticItems;

function randomColor() {
  function random(number) {
    return Math.floor(Math.random() * number);
  }
  return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}
