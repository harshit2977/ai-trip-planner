import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  const itinerary = trip.tripData?.itinerary;
  const daysArray = [];

  for (let key in itinerary) {
    if (key.startsWith("day")) {
      daysArray.push(itinerary[key]);
    }
  }

  console.log(daysArray);

  return (
    <div>
      <h2 className="font-bold text-xl">Places To Visit</h2>
      <div>
        {daysArray.map((item, index) => (
          <div className="mt-5">
            <h2 className=" font-bold  text-lg">Day {index + 1}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.places.map((place, index) => (
                <div>
                  <h2 className="font-medium text-sm text-orange-600">
                    ⏳ {place.timeTravel}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
