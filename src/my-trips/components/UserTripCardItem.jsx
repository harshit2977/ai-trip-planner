import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const UserTripCardItem = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await getPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[0].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className="hover:scale-105 transition-all ">
      <img className="object-cover rounded-xl h-[220px] w-full" src={photoUrl?photoUrl:"/logo.svg"}></img>
      <div>
        <h2 className="font-bold text-lg">
          {trip?.userSelection?.location?.label}
        </h2>
        <h2 className="text-sm text-gray-500">
          {trip?.userSelection?.noOfDays} Days trip with{" "}
          {trip?.userSelection.budget} Budget
        </h2>
      </div>
    </div>
    </Link>
  );
};

export default UserTripCardItem;
