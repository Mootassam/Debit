import "./imps.css";
import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";

function Imps(props) {
  return (
    <>
      <div className='app__imps'>
        <div className='imps__header'>
          <div className='imps__title'>Imps</div>
          <div className='imps__logo'>
            <img src='/imps/success.png' alt='' width={83} height={83} />
          </div>
        </div>

        <div className='imps__bar'></div>

        <div className='imps__form'>
          <div className='form__group'>
            <label htmlFor=''>Transaction ID</label>
            <input
              type='text'
              placeholder='303256489490'
              value={props.transactionId}
              className='imps__input'
            />
          </div>

          <div className='form__group'>
            <label htmlFor=''>Date</label>
            <input
              type='text'
              placeholder='16/03/2023'
              value={Dates.DateImps()}
              className='imps__input'
            />
          </div>

          <div className='form__group'>
            <label htmlFor=''>Time </label>
            <input
              type='text'
              placeholder='05:09 pm'
              className='imps__input'
              value={Dates.timeImps()}
            />
          </div>

          <div className='form__group'>
            <label htmlFor=''>To account</label>
            <input
              type='text'
              placeholder='405189490651'
              className='imps__input'
              value='405189490651'
            />
          </div>

          <div className='form__group'>
            <label htmlFor=''>Amount</label>
            <input
              type='text'
              className='imps__input'
              value={Currency.IndiaImps(props.amount)}
            />
          </div>

          <div className='form__group'>
            <label htmlFor=''>Remarks</label>
            <input
              type='text'
              placeholder='Transfer Money'
              className='imps__input'
              value='Transfer Money'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imps;
