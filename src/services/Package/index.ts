import { PackageResponseData } from "@/domain/Package";
import api from "@/http/api";

class PackageService {
  static readonly path = "package";

  async get() {
    return await api.get<PackageResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${PackageService.path}`
    );
  }
}

const instance = new PackageService();
export default instance;
