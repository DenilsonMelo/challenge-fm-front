import { FreightCreateDTO, FreightResponseData } from "@/domain/Freight";
import api from "@/http/api";
import { AxiosResponse } from "axios";

class FreightService {
  static readonly path = "freight";

  async get() {
    return await api.get<FreightResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${FreightService.path}`
    );
  }

  async create(body: FreightCreateDTO): Promise<AxiosResponse> {
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

  async delete(id: string){
    return await api.delete<FreightResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${FreightService.path}/${id}`
    );
  }
}

const instance = new FreightService();
export default instance;
