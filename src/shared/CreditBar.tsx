
function CreditBar() {
  return (
    <div className="credit__list">
      <div className="item">
        {Array.from({ length: 17 }).map(() => (
          <div className="item__detail">
            <div className="amount__">$2000.0</div>
            <div className="debit">xxx25367 </div>
            <div className="time">09:07 PM</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreditBar;
