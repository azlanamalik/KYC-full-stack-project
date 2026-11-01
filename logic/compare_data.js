import maxmind from "maxmind";
const lookup = await maxmind.open("./GeoLite2-City.mmdb");
export function compliance_Loc_Check(ip, address){
    try{
        const result = lookup.get(ip)
        console.log(result)
    }
    catch(errror){
        console.log("errrorrr")
    }

}