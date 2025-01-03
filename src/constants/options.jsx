const SelectTravelsList=[
    {
        id:1,
        title:'Just me',
        desc:'A sole travels in exploration',
        icon:'✈',
        people:'1'
    },
    {
        id:1,
        title:'A couple',
        desc:'Two tarvels in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 people'
    },
    {
    id:4,
    title:'Friends',
    desc:'A bunch of thrill-seekes',
    icon:'⛵️',
    people:'5 to 10 people'
    }

];
const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'

    }
    ,
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side',
        icon:'💰'

    },
    {
        id:1,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸'

    }
]
 const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with hotelName, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'
 export {SelectTravelsList,SelectBudgetOptions,AI_PROMPT};