import { Button } from "@/components/ui/button";
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
const PlaceCardItem = ({ place }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName
    };
    const result = await getPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.placeName}
      target="_blank"
    >
      <div className=" flex gap-5 border rounded-xl p-3 mt-2 hover:scale-105 transition-all hover:shadow-md">
        <img src={photoUrl?photoUrl:'/logo.svg'} className="w-[130px] h-[130px] rounded-xl object-cover" />
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
