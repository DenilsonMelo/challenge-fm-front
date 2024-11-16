import { PaymentResponseData } from "@/domain/Payment";
import api from "@/http/api";

class PaymentService {
  static readonly path = "payment";

  async get() {
    return await api.get<PaymentResponseData>(
      `${process.env.NEXT_PUBLIC_API}/${PaymentService.path}`
    );
  }
}

const instance = new PaymentService();
export default instance;
