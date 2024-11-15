import { CarrierResponseData } from "@/domain/Carrier";
import api from "@/http/api";

class CarrierService {
    static readonly path = "carrier";

    async get() {
        return await api.get<CarrierResponseData>(
          `${process.env.NEXT_PUBLIC_API}/${CarrierService.path}`
        );
      }

}

const instance = new CarrierService();
export default instance;