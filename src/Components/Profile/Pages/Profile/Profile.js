import ButtonCyan from "../../../Ui/ButtonCyan";
import InputDark from "../../../Ui/InputDark";
import profileStyle from "./Profile.module.css";
// import infoIcon from "../../../../icons/info.svg";
// import checkedIcon from "../../../../icons/checked.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import InputMobile from "../../../Ui/InputMobile";
import Select from "../../../Ui/Select";
// import VerificationBtn from "../../Verification/VerificationBtn";
import Username from "./Username/Username";
import SectionTitle from "../../SectionTitle";
// import phoneIndexData from './phoneIndexData.json'
import SuccessModal from "../../../Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../Modals/ErrorModal/ErrorModal";

const Profile = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const baseURL = useSelector((store) => store.GlobalVariables.baseUrl);
  const userData = useSelector((store) => store.userData);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [zip, setZip] = useState("");
  // const [phoneIndex, setPhoneIndex] = useState("");
  const [birthDate, setBirthDate] = useState("");
  // const [phone, setPhone] = useState("");
  const [nickname, setNickName] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [isSeccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState(false);
  // const [indexSelected, setIdexSelected] = useState(false)

  const handler = {
    country(e) {
      setCountry(e);
      getCities("https://countriesnow.space/api/v0.1/countries/cities", e);
    },
    city(e) {
      setCity(e);
    },
    gender(e) {
      setGender(e);
    },
    // phoneIndex(e) {
    //   setPhoneIndex(e)
    // }
  };

  const validZipCode = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setZip(result);
  };

  const getCountries = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      setCountries(res.data);
    } catch (err) {
      setServerError(true);
    }
  };

  const getCities = async (url, countryName) => {
    try {
      const res = await axios.post(
        url,
        { country: countryName },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      setCities(res.data);
      setCity(res.data.data[0]);
      setIsDisable(false);
    } catch (err) {
      setServerError(true);
    }
  };

  const editProfile = async () => {
    try {
      const resp = await axios.put(
        `/users/${userData.userId}`,
        {
          name: name,
          surname: surname,
          country: country,
          city: city,
          gender: gender,
          zip: zip,
          // birthDate: new Date(birthDate).toISOString(),
          birthDate: birthDate,
          // phone: `${(phoneIndex)}-${phone}`,
          nickname: nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: baseURL,
        }
      );
      if(resp.data.error === 403) window.location.href = '/';
    } catch (err) {
      setServerError(true);
    }
  };

  const userDetailEdit = (e) => {
    e.preventDefault();
    // (phone && indexSelected)
    if (
      name ||
      surname ||
      country ||
      city ||
      gender ||
      zip ||
      birthDate ||
      nickname
    ) {
      editProfile();
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    getCountries("https://countriesnow.space/api/v0.1/countries/positions");
  }, []);

  return (
    <div className={profileStyle["edit"]}>
      <SectionTitle title="Profile" />
      <form className={profileStyle["profile__form"]} onSubmit={userDetailEdit}>
        <Username inputOnChange={(e) => setNickName(e.target.value)} />
        {/* <div className={profileStyle["profile__private"]}>
          <label className={profileStyle["profile__checkbox"]}>
            <input
              type="checkbox"
              onChange={(e) => e}
              className={profileStyle["profile__checkbox--input"]}
            />
            <div className={profileStyle["profile__checkbox--checked"]}>
              <img src={checkedIcon} alt="icon" />
            </div>
            <p className={profileStyle["profile__checkbox--text"]}>
              Private Profile
            </p>
            <div className={profileStyle["tooltip"]}>
              <img src={infoIcon} alt="info icon" />
              <span className={profileStyle["tooltiptext"]}>
                After making your profile private, other users won’t see your
                user name alongside bets, races, etc.
              </span>
            </div>
          </label>
        </div> */}
        <div className={profileStyle["profile__form--content"]}>
          <InputDark
            inputType="text"
            htmlPlaceholder={userData.name ? userData.name : "Your firstname"}
            inputOnChange={(e) => setName(e.target.value)}
            htmlLabel="Firstname"
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <InputDark
            inputType="text"
            htmlPlaceholder={
              userData.surname ? userData.surname : "Your lastname"
            }
            inputOnChange={(e) => setSurname(e.target.value)}
            htmlLabel="Lastname"
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <Select
            htmlPlaceholder={
              userData.country ? userData.country : "Select a country"
            }
            data={countries}
            htmlLabel="Country"
            changeValue={handler.country}
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <Select
            htmlPlaceholder={
              city ? city : userData.city ? userData.city : "Select a city"
            }
            data={cities}
            htmlLabel="City"
            changeValue={handler.city}
            disable={isDisable}
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <InputDark
            inputType="number"
            htmlPlaceholder={userData.zip ? userData.zip : "Enter a Zip code"}
            inputOnChange={(e) => validZipCode(e)}
            htmlLabel="Zip code"
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <Select
            htmlPlaceholder={
              userData.gender ? userData.gender : "Select a gender"
            }
            data={{ data: ["Male", "Female"] }}
            changeValue={handler.gender}
            htmlLabel="Gender"
          />
        </div>
        <div className={profileStyle["profile__form--content"]}>
          <InputDark
            inputType="date"
            htmlPlaceholder={
              userData.birthDate ? userData.birthDate : "dd/mm/yyyy"
            }
            inputOnChange={(e) => {
              setBirthDate(e.target.value)
            }}
            htmlLabel="Birthday"
            max={`${new Date().getFullYear() - 1}-${new Date().getMonth() > 10 ? '0' + (new Date().getMonth() +1 ) : ('0'+(new Date().getMonth() )) }-${new Date().getDate()}`}
          />
        </div>
        
        {/* <div className={profileStyle["profile__form--content"]}>
          <InputMobile
            inputType="text"
            htmlPlaceholder={
              userData.phone ? userData.phone  : "Enter a Phone Number"
            }
            inputOnChange={(e) => setPhone(e.target.value)}
            changeIndex={handler.phoneIndex}
            data={phoneIndexData}
            htmlLabel="Mobile Number"
            setIdexSelected={setIdexSelected}
          />
        </div> */}
        <div
          className={profileStyle["profile__form--content"]}
          style={{ width: "100%" }}
        >
          <ButtonCyan
            text="Save"
            className={profileStyle["profile__form--btn"]}
          />
        </div>
      </form>
      {/* <SectionTitle title="Identity Verification" /> */}
      {/* <VerificationBtn /> */}
      {/* <h1 className={Style["profile__content--title"]}>Link Account</h1>
      <div className={Style["profile__btn--links"]}>
        <Link to="/" className={`${Style["profile__btn--link-acc"]}`}>
          <img src={steamIcon} alt="icon" />
          Steam
        </Link>
        <Link to="/" className={`${Style["profile__btn--link-acc"]}`}>
          <img src={steamIcon} alt="icon" />
          Twitch
        </Link>
      </div> */}
      {isSeccess && (
        <SuccessModal
          text="Success"
          closeModalHandler={() => setIsSuccess(false)}
        />
      )}
      {serverError && (
        <ErrorModal
          text="Server Error"
          closeModalHandler={() => setServerError(false)}
        />
      )}
    </div>
  );
};

export default Profile;
