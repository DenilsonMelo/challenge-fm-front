import { DriverResponseData } from "@/domain/Driver";
import api from "@/http/api";

class DriverService {
    static readonly path = "driver";

    async get() {
        return await api.get<DriverResponseData>(
          `${process.env.NEXT_PUBLIC_API}/${DriverService.path}`
        );
      }

}

const instance = new DriverService();
export default instance;