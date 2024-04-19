import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/VerticalCarousel.module.scss";
import { BsChatLeft } from "react-icons/bs";
// import { useSelector } from "react-redux";

const VerticalCarouselItem = (props) => {
  const { req, id, hasRequest } = props;

  console.log("req inside carousel item :", req);

  const router = useRouter();
  const userType = useSelector((state) => state?.authReducer?.type);

  const supplier = `دکتر ${req?.supplier?.profile?.first_name} ${req?.supplier?.profile?.last_name}`;
  const customer = `${req?.customer?.profile?.first_name} ${req?.customer?.profile?.last_name}`;

  const src =
    userType === "customer"
      ? req?.supplier?.picture ?? "https://fakeimg.pl/300/"
      : req?.customer?.picture ?? "https://fakeimg.pl/300/";
  const department =
    userType === "customer"
      ? req?.supplier?.department
      : req?.customer?.description;
  const userName = userType === "customer" ? supplier : customer;

  const userInfo =
    userType === "customer"
      ? `${req?.supplier?.profile?.first_name} ${req?.supplier?.profile?.last_name}`
      : `${req?.customer?.profile?.first_name} ${req?.customer?.profile?.last_name}`;

  const activeDot =
    "before:content-[''] before:w-3 before:h-3 before:p-1 before:bg-red before:rounded-[50%] before:top-3 before:left-4 before:absolute";

  const handlePush = () => {
    let info =
      userType === "customer"
        ? "supplierInfo"
        : userType === "supplier"
        ? "customerInfo"
        : "userInfo";

    router.push({
      pathname: `${req.application_name}/requests/${id}`,
      query: { [info]: userInfo },
    });
  };

  return (
    <div
      className={`flex justify-between items-center shadow-lg cursor-pointer ${styles.card}`}
      onClick={handlePush}
    >
      <div className="flex justify-start gap-3">
        <div className="w-[4em] h-[3.5em]">
          <img
            src={src}
            alt="user"
            className="rounded-md xs-only:w-full aspect-square !h-full"
          />
        </div>

        <div className="flex flex-col justify-between items-start">
          <span className="text-primary text-sm">{department}</span>
          <span className="text-lg text-black">{userName}</span>
        </div>
      </div>

      <div
        className={`flex justify-center items-center p-2 ml-2 bg-primary rounded-lg ${
          hasRequest && activeDot
        }`}
      >
        <BsChatLeft className="w-6 h-6 mt-[1px] text-white" />
      </div>
    </div>
  );
};

export default VerticalCarouselItem;
