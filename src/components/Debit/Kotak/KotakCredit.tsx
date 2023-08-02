import Currency from "../../../utils/Currency";

function KotakCredit(props) {
  return (
    <div className='app__kotak'>
      <h2>{Currency.India(props.amount)}</h2>
    </div>
  );
}

export default KotakCredit;
