import { CarResponseData } from "@/domain/Car";
import api from "@/http/api";

class CarService {
  static readonly path = "car";

  async get() {
    return await api.get<CarResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${CarService.path}`
    );
  }
}

const instance = new CarService();
export default instance;
