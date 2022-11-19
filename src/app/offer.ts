export interface Offer {
    hotelid: string;
    departuredate: Date;
    returndate: Date;
    //countadults: number;
    //countchildren: number;
    price: number;
    //inbounddepartureairport: string;
    //inboundarrivalairport: string;
    inboundairline: string;
    inboundarrivaldatetime: Date;
    //outbounddepartureairport: string;
    //outboundarrivalairport: string;
    outboundairline: string;
    outboundarrivaldatetime: Date;
    mealtype: string;
    oceanview: boolean;
    roomtype: string;
}