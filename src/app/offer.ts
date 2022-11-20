export interface Offer {
    hotelid: string;
    departuredate: Date;
    returndate: Date;
    price: number;
    inboundairline: string;
    inboundarrivaldatetime: Date;
    outboundairline: string;
    outboundarrivaldatetime: Date;
    mealtype: string;
    oceanview: boolean;
    roomtype: string;
}