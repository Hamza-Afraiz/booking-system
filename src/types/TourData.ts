import { itenarySchedule } from "./ItenarySchedule"
export interface TourData{
    id?:number,
    name?:string,
    description?:string,
    price?:string,
    duration?:string
    itenarySchedule?:itenarySchedule[]
    
}