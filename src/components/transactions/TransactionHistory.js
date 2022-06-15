import './TransactionHistory.css';
import PropType from 'prop-types';
import Transaction from './Transaction';

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propType = {
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      type: PropType.string.isRequired,
      amount: PropType.number.isRequired,
      currency: PropType.string.isRequired,
    })
  ),
};
