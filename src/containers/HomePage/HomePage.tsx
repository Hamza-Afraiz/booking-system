//lib
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuItem from "@mui/material/MenuItem";
import {
    DateRange, DateRangePicker
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
//Src
import { PopularSearches } from "../../components";
import { Prices } from "../../constants/Prices";
import { IconTitle } from "../../styledComponents";
import { CustomTextField } from "../../styledComponents";
//styles
import homePageStyles, { FilterContainer, SearchContainer } from "./HomePage.styled";



const HomePage = () => {
  const [price, setPrice] = React.useState("Choose Here");
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const homePageClasses = homePageStyles({ routeName: "Choose Here" });

  const setDateRange = (date: any) => {
    // console.log("date", date);
    const temp = date[0];
    // console.log("temp", temp);
    //   setValue(`${date[0]?.subString(4,12)}-${date[0]?.subString(4,12)}`)
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
          />
        </FilterContainer>
        <FilterContainer>
          <IconTitle text="Choose Date" iconName="date" bold={true} />
          {/* <IconTitle text="Choose Here" iconName="arrow-up" bold={false} /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue: any) => {
                console.log("value", newValue);
                setValue(newValue);
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
          <SearchRoundedIcon />
        </div>
      </SearchContainer>

      <PopularSearches />
    </div>
  );
};

export default HomePage;
