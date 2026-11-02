import maxmind from "maxmind";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "..", "GeoLite2-City.mmdb");
let lookup = null;
let openPromise = null;
async function getLookup() {
    if (lookup) return lookup;
    if (!openPromise) {
        openPromise = maxmind.open(DB_PATH).catch((err) => {
            console.error(`Could not open GeoIP database at ${DB_PATH}:`, err.message);
            openPromise = null; // allow a retry on the next call
            return null;
        });
    }
    lookup = await openPromise;
    return lookup;
}

export async function compliance_Loc_Check(ip, address) {
    const reader = await getLookup();
    if (!reader) return null;
    try {
        return reader.get(ip);
    } catch (err) {
        console.error("GeoIP lookup failed:", err.message);
        return null;
    }
}
