//lib
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CustomButton,
  LoadingSpinner,
  PopUpNotification,
} from "../../components";
import { CountryCodes } from "../../constants/CountryCodes";
import { PaymentMethods } from "../../constants/PaymentMethods";
import { useSumbitBooking } from "../../hooks/useBookedTours";
import { CustomTextField } from "../../styledComponents";
//styles
import "./BookingDetails.css";

const BookingDetails = () => {
  const location: any = useLocation();
  const navigate = useNavigate();

  const tourBookingDetails = location?.state?.bookingTourDetails;
  const tourBookingId = location?.state?.tourId;

  const numericRegExpression = new RegExp("^[0-9]*$");
  const [phoneNumberCurrency, setPhoneNumberCurrency] = React.useState("");
  const [bookingDetails, setBookingDetails] = React.useState({
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    tourId: tourBookingId,
    numberOfChildrens: "",
    numberOfAdults: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    phoneNumber: "",
    numberOfAdults: "",
    numberOfChildrens: "",
  });

  const {
    mutate: SubmitBooking,
    error: submitBookingError,
    isLoading,
    isSuccess,
  } = useSumbitBooking();

  React.useEffect(() => {
    if (tourBookingDetails) {
      Object.keys(tourBookingDetails).forEach((key, index) => {
        updateBookingValue(key, tourBookingDetails[key]);
      });
      setBookingDetails(tourBookingDetails);
    }
  }, [tourBookingDetails]);

  const updateBookingValue = (name: string, value: string) => {
    switch (name) {
      case "email":
        const emailError = {
          email:
            !value.includes("@") && !value.includes(".com")
              ? "Please check and re-enter email."
              : "",
        };
        setErrors((errors) => ({
          ...errors,
          ...emailError,
        }));
        break;
      case "phoneNumber":
        const phoneNumberError = {
          phoneNumber: !numericRegExpression.test(value)
            ? "Please check and re-enter Phone."
            : "",
        };
        setErrors((errors) => ({
          ...errors,
          ...phoneNumberError,
        }));
        break;
      case "numberOfChildrens":
        const numberOfChildrensError = {
          numberOfChildrens: !numericRegExpression.test(value)
            ? "Please enter some number."
            : "",
        };
        setErrors((errors) => ({
          ...errors,
          ...numberOfChildrensError,
        }));
        break;
      case "numberOfAdults":
        const numberOfAdultsError = {
          numberOfAdults: !numericRegExpression.test(value)
            ? "Please enter some number."
            : "",
        };
        setErrors((errors) => ({
          ...errors,
          ...numberOfAdultsError,
        }));
        break;
    }
    const updatedValue = { [name]: value };

    setBookingDetails((bookingDetails) => ({
      ...bookingDetails,
      ...updatedValue,
    }));
  };

  const onSubmitBooking = () => {
    if (
      errors["phoneNumber"] ||
      errors["email"] ||
      errors["numberOfAdults"] ||
      errors["numberOfChildrens"]
    )
      return;
    SubmitBooking({bookingData:bookingDetails});
   
  };

  return (
    <div className="booking-details-container">
      {isSuccess && (
        <PopUpNotification
          popUpText="Booking successfully completed."
          onOk={() => {
            navigate("/Tours");
          }}
        />
      )}
      <div className="booking-form">
        <h2 className="form-heading">Confirm Your Booking</h2>

        <CustomTextField
          id="outlined-disabled"
          label="Name"
          defaultValue=""
          className="text-field"
          value={bookingDetails["name"]}
          fullWidth
          onChange={(e) => {
            updateBookingValue("name", e.target.value);
          }}
        />
        <CustomTextField
          id="outlined-disabled"
          label="Email"
          defaultValue=""
          error={errors["email"] !== ""}
          value={bookingDetails["email"]}
          helperText={errors["email"]}
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
            error={errors["phoneNumber"] !== ""}
            helperText={errors["phoneNumber"]}
            value={bookingDetails["phoneNumber"]}
            className="text-field"
            fullWidth
            onChange={(e) => {
              updateBookingValue("phoneNumber", e.target.value);
            }}
          />
        </div>

        <div className="text-fields-container">
          {" "}
          <CustomTextField
            id="outlined-disabled"
            label="Number of Adults"
            defaultValue=""
            value={bookingDetails["numberOfAdults"]}
            className="text-field"
            error={errors["numberOfAdults"] !== ""}
            helperText={errors["numberOfAdults"]}
            fullWidth
            onChange={(e) => {
              updateBookingValue("numberOfAdults", e.target.value);
            }}
          />
          <CustomTextField
            id="outlined-disabled"
            label="Number of Childrens"
            defaultValue=""
            value={bookingDetails["numberOfChildrens"]}
            className="text-field"
            fullWidth
            error={errors["numberOfChildrens"] !== ""}
            helperText={errors["numberOfChildrens"]}
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
            <CustomButton
              width="100%"
              text={tourBookingDetails ? "Update" : "Confirm"}
              display="block"
            />
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
