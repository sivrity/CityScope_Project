import React from 'react';
import '../styles/checkout_style.css';

export default function Checkout() {
  return (
    <>
           
<div class="container">
  <div id="Checkout" class="inline">
      <h1>Pay Invoice</h1>
      <div class="card-row">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
      <form>
          <div class="form-group">
              <label for="PaymentAmount">Payment amount</label>
              <div>
                <button class="btn btn-block btn-success submit-button">
                  <span>$</span>
                  <span>500.00</span>
                </button>
              </div>
          </div>
          <div class="form-group">
            <label or="NameOnCard">Video Metting: 30min</label>
            <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
        </div>
        <div class="form-group">
            <label or="NameOnCard">Your Name</label>
            <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
        </div>
        <div class="form-group">
            <label or="NameOnCard">Email</label>
            <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
        </div>
          <div class="form-group">
              <label or="NameOnCard">Linkedin Profile</label>
              <input id="NameOnCard" class="form-control" type="text" maxlength="255"></input>
          </div>
          <div class="form-group">
              <label for="CreditCardNumber">Phone Number</label>
              <input id="CreditCardNumber" class="null card-image form-control" type="text"></input>
          </div>
          <div class="expiry-date-group form-group">
              <label for="ExpiryDate">Expiry date</label>
              <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
          </div>
          <div class="security-code-group form-group">
              <label for="SecurityCode">Security code</label>
              <div class="input-container" >
                  <input id="SecurityCode" class="form-control" type="text" ></input>
                  <i id="cvc" class="fa fa-question-circle"></i>
              </div>
              <div class="cvc-preview-container two-card hide">
                  <div class="amex-cvc-preview"></div>
                  <div class="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div class="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div class="input-container">
                  <input id="ZIPCode" class="form-control" type="text" maxlength="10"></input>
                  <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button id="PayButton" class="btn btn-block btn-success submit-button mt-4" type="submit">
              <span class="submit-button-lock"></span>
              <span class="align-middle">Book Slot</span>
          </button>
      </form>
  </div>
</div>
    </>
  )
}
