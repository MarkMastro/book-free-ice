import {Rinks} from './Rinks.js';
import {Bookings} from './Bookings.js';
import { RinkTimeSlots } from './RinkTimeSlot.js';
import { Users } from './Users.js';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main(){
    for(let rink of Rinks){
        await prisma.rink.create({
            data:rink
        })
    }

 
 
    for(let rinkTimeSlot of RinkTimeSlots){

        await prisma.rinkTimeSlot.create({
            data:rinkTimeSlot
        })
    }

    for(let booking of Bookings){
        console.log(typeof booking)
        await prisma.booking.create({
            data:booking
        })
    }
    for(let user of Users){
        await prisma.user.create({
            data:user
        })
    }
}

main().catch(e=>{
    console.log(e);
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect();
})