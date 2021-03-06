import './statistics.css';
import PropTypes from 'prop-types';
import StatisticItems from './StatisticItems';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItems key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
