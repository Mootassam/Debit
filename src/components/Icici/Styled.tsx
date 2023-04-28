import styled from "styled-components";

const StyledWrapper = styled.div`
  .icici2__white {
    width: 380px;
    height: 800px;
    background: #ffffff;
  }

  .icici2__black {
    width: 380px;
    height: 800px;
    background: #0e051a;
  }

  .text__white {
    color: #ffffff !important;
  }

  .icic2__header {
    width: 100%;
    background: #008043;
  }

  .icic2__header {
    display: flex !important;
    align-items: center;
    padding-top: 25.61px;
    padding-left: 31.7px;
    padding-bottom: 34.39px;
    gap: 18.07px;
  }

  .money__sent {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    color: #ffffff;
  }

  /* styling the icici2  */

  .icici2__content {
    padding-top: 27px;
    padding-left: 24px;
    padding-right: 27px;
  }
  .customer {
    display: flex;
    flex-direction: column;
    row-gap: 9px;
  }
  .customer > label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #000000;
  }

  .customer > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #000000;
  }

  .customer__bar {
    width: 332px;
    height: 0px;

    border: 1px solid #dddddd;
    margin-top: 19px;
    margin-bottom: 21px;
  }

  .customer__group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 21px;
    max-width: 261px;
  }

  .green__color {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #008043 !important;
  }

  .icici__bank {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
  }

  .debit__group {
    display: flex;
    gap: 10px;
  }

  .height__debit {
    margin-top: 15px !important;
  }

  .bottom__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    justify-content: center;
  }

  .icic2__bottom {
    margin-top: 76px;
  }

  .poweredby {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 7px;
    line-height: 8px;
    letter-spacing: 0.04em;
    color: #000000;
  }

  .icici__button {
    display: flex;
    gap: 26px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.04em;
    margin-top: 18px;
  }

  .button__details {
    background: #dddddd;
    border-radius: 4px;
    border-radius: 4px;
    padding: 13px 0;
    display: grid;
    place-items: center;
    width: 162px;
  }

  .button__home {
    background: #2c4089;
    border-radius: 4px;
    padding: 13px 0;
    display: grid;
    place-items: center;
    width: 162px;

    color: #ffffff;
  }

  .app__icici2 {
    display: flex;
    gap: 15px;
  }
`;

export default StyledWrapper;
