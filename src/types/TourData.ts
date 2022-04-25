import { itenarySchedule } from "./ItenarySchedule"
export interface TourData{
    id?:number,
    name?:string,
    description?:string,
    price?:string,
    duration?:string,
    startDate?:string,
    endDate?:string,
    itenarySchedule?:itenarySchedule[]
    
}