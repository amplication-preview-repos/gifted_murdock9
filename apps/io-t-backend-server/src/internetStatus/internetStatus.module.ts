import { Module } from "@nestjs/common";
import { InternetStatusModuleBase } from "./base/internetStatus.module.base";
import { InternetStatusService } from "./internetStatus.service";
import { InternetStatusController } from "./internetStatus.controller";
import { InternetStatusResolver } from "./internetStatus.resolver";

@Module({
  imports: [InternetStatusModuleBase],
  controllers: [InternetStatusController],
  providers: [InternetStatusService, InternetStatusResolver],
  exports: [InternetStatusService],
})
export class InternetStatusModule {}
