export const API_KEY='AIzaSyA9UgUXWwR1nm74dn9dpsaKrR1bJbYT6CM';


export const value_converter= (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000) + "M";

    }
    else if(value>=1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }

}