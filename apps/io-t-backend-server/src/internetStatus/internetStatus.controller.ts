import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternetStatusService } from "./internetStatus.service";
import { InternetStatusControllerBase } from "./base/internetStatus.controller.base";

@swagger.ApiTags("internetStatuses")
@common.Controller("internetStatuses")
export class InternetStatusController extends InternetStatusControllerBase {
  constructor(protected readonly service: InternetStatusService) {
    super(service);
  }
}
