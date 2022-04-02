import { NextApiRequest, NextApiResponse } from "next"; 
import { PrismaClient } from "@prisma/client";
export default async function bookRink(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient({log: ["query"]})
    console.log(req.body)
    try{
        const { booking: bookingData } = req.body;
        const booking = await prisma.booking.create({
            data: {
                userId: bookingData.userID,
                rinkId: bookingData.rinkId,
                startTime: bookingData.startTime,
                endTime: bookingData.endTime,
            },
        });

        res.status(201)
        res.json({"booking": booking})
    } catch(e){
        res.status(500);
        res.json({error: "Unable to get book"})
    } finally {
        await prisma.$disconnect()
    }

    
}