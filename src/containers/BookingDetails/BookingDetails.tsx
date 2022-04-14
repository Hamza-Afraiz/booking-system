//lib
import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton, LoadingSpinner } from "../../components";
import { CountryCodes } from "../../constants/CountryCodes";
import { PaymentMethods } from "../../constants/PaymentMethods";
import { useSumbitBooking } from "../../Hooks/useBookedTours";
import { CustomTextField } from "../../styledComponents";
//styles
import "./BookingDetails.css";

const BookingDetails = () => {
  const [phoneNumberCurrency, setPhoneNumberCurrency] = React.useState("");
  const [bookingDetails, setBookingDetails] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    tourId: 1,
    numberOfChildrens: "",
    numberOfAdults: "",
  });

  const navigate = useNavigate();
  const {
    mutate: SubmitBooking,
    error: submitBookingError,
    isLoading,
  } = useSumbitBooking(bookingDetails);

  const updateBookingValue = (name: string, value: string) => {
    const updatedValue = { [name]: value };

    setBookingDetails((bookingDetails) => ({
      ...bookingDetails,
      ...updatedValue,
    }));
    console.log("booking", bookingDetails);
  };

  const onSubmitBooking = () => {
    SubmitBooking();
  };

  return (
    <div className="booking-details-container">
      <div className="booking-form">
        <h2 className="form-heading">Confirm Your Booking</h2>

        <CustomTextField
          id="outlined-disabled"
          label="Name"
          defaultValue=""
          className="text-field"
          fullWidth
          onChange={(e) => {
            updateBookingValue("name", e.target.value);
          }}
        />
        <CustomTextField
          id="outlined-disabled"
          label="Email"
          defaultValue=""
          className="text-field"
          fullWidth
          onChange={(e) => {
            updateBookingValue("email", e.target.value);
          }}
        />
        <div className="text-fields-container">
          <CustomTextField
            id="outlined-select-currency-native"
            select
            value={phoneNumberCurrency}
            onChange={(phoneNumberCurrency: any) => {
              setPhoneNumberCurrency(phoneNumberCurrency.target.value);
            }}
            sx={{ width: "20%" }}
            SelectProps={{
              native: true,
            }}
            fullWidth
          >
            {CountryCodes?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </CustomTextField>
          <CustomTextField
            id="outlined-disabled"
            label="Phone Number"
            defaultValue=""
            className="text-field"
            fullWidth
            onChange={(e) => {
              updateBookingValue("phoneNumberCurrency", e.target.value);
            }}
          />
        </div>

        <div className="text-fields-container">
          {" "}
          <CustomTextField
            id="outlined-disabled"
            label="Number of Adults"
            defaultValue=""
            className="text-field"
            fullWidth
            onChange={(e) => {
              updateBookingValue("numberOfAdults", e.target.value);
            }}
          />
          <CustomTextField
            id="outlined-disabled"
            label="Number of Childrens"
            defaultValue=""
            className="text-field"
            fullWidth
            onChange={(e) => {
              updateBookingValue("numberOfChildrens", e.target.value);
            }}
          />
        </div>
        <CustomTextField
          id="outlined-select-currency-native"
          select
          value={phoneNumberCurrency}
          onChange={(phoneNumberCurrency: any) => {
            setPhoneNumberCurrency(phoneNumberCurrency.target.value);
          }}
          label="Select Payement"
          SelectProps={{
            native: true,
          }}
          fullWidth
        >
          {PaymentMethods?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </CustomTextField>
        <div style={{ width: "100%" }} onClick={onSubmitBooking}>
          {isLoading && submitBookingError ? (
            <LoadingSpinner width="100%" height="100%" color="inherit" />
          ) : (
            <CustomButton width="100%" text="Confirm" display="block" />
          )}
        </div>
      </div>
      <div className="booking-tour-image">
        <img
          alt="tourImage"
          style={{ width: "100%", height: "100%" }}
          src={require("../../assets/images/landingPageImage.png")}
        />
      </div>
    </div>
  );
};

export default BookingDetails;
