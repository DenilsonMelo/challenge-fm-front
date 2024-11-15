import { FreightResponseData } from "@/domain/Freight";
import api from "@/http/api";
import { AxiosResponse } from "axios";

class FreightService {
  static readonly path = "freight";

  async get() {
    return await api.get<FreightResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${FreightService.path}`
    );
  }

  async create(body: ConsultationCreateDTO): Promise<AxiosResponse> {
    return await api.post(
      `${process.env.NEXT_PUBLIC_API}/${FreightService.path}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

const instance = new FreightService();
export default instance;
