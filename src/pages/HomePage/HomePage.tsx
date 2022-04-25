//lib
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuItem from "@mui/material/MenuItem";
import {
  DateRange,
  DateRangePicker,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { useNavigate } from "react-router-dom";
//Src
import { PopularSearches } from "../../components";
import { Prices } from "../../constants/Prices";
import { IconTitle } from "../../styledComponents";
import { CustomTextField } from "../../styledComponents";
//styles
import homePageStyles, {
  FilterContainer,
  SearchContainer,
} from "./HomePage.styled";

const HomePage = () => {
  const navigate = useNavigate();

  const [price, setPrice] = React.useState("$50 - $100");
  const [tourDate, setTourDate] = React.useState<DateRange<Date>>([null, null]);
  const [tourStartDate, setTourStartDate] = React.useState("");
  const [tourLocation, setTourLocation] = React.useState("");

  const homePageClasses = homePageStyles({ routeName: "Choose Here" });

  const setDateRange = (date: any) => {
    setTourStartDate(date[0]?.toString()?.substring(4, 15));
  };
  const onSearch = () => {
    navigate("/Tours", {
      state: { filters: { tourStartDate, tourLocation, price } },
    });
  };

  return (
    <div className={homePageClasses.homePage}>
      <div className={homePageClasses.backgroundImageDiv}>
        <img
          style={{ width: "100%", height: "400px" }}
          src={require("./../../assets/images/landingPageImage.png")}
          alt="background-home"
        />
      </div>
      <SearchContainer>
        <FilterContainer>
          <IconTitle text="Location" iconName="location" bold={true} />
          <CustomTextField
            id="standard-basic"
            label="Where you want to go?"
            variant="standard"
            value={tourLocation}
            onChange={(tourLocation) => {
              setTourLocation(tourLocation.target.value);
            }}
          />
        </FilterContainer>
        <FilterContainer>
          <IconTitle text="Choose Date" iconName="date" bold={true} />
          {/* <IconTitle text="Choose Here" iconName="arrow-up" bold={false} /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns} format="DD-MM">
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={tourDate}
              toolbarFormat="dd-mm"
              onChange={(newValue: any) => {
                setTourDate(newValue);
                setDateRange(newValue);
              }}
              renderInput={(startProps: any, endProps: any) => (
                <div className={homePageClasses.dateRange}>
                  <CustomTextField
                    className={homePageClasses.dateRangePicker}
                    variant="standard"
                    {...startProps}
                  />

                  <CustomTextField
                    className={homePageClasses.dateRangePicker}
                    variant="standard"
                    {...endProps}
                  />
                </div>
              )}
            />
          </LocalizationProvider>
        </FilterContainer>
        <FilterContainer>
          <IconTitle text="Price Range" iconName="price" bold={true} />
          <CustomTextField
            id="standard-select-currency"
            select
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            variant="standard"
          >
            {Prices.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        </FilterContainer>
        <div className={homePageClasses.searchIcon}>
          <SearchRoundedIcon onClick={onSearch} />
        </div>
      </SearchContainer>

      <PopularSearches />
    </div>
  );
};

export default HomePage;
