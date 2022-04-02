import { NextApiRequest, NextApiResponse } from "next"; 
import { PrismaClient } from "@prisma/client";
export default async function getSearchedRinks(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient({log: ["query"]})

    try{
    } catch(e){
        res.status(500);
        res.json({error: "Unable to get rinks"})
    } finally {
        await prisma.$disconnect()
    }

    res.json({rinks: "rink1"})
    
}