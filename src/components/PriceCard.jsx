const PriceCard = ({ type, price }) => {
  const border = {
    high: '8px solid #f44336',
    low: '8px solid #4caf50',
    current: '8px solid #3f47b5',
  };

  return (
    <div className="price-card" style={{ borderBottom: border[type] }}>
      <h4 className="price-type">{type}</h4>
      <h1 className="price">₹ {price}</h1>
    </div>
  );
};

export default PriceCard;
