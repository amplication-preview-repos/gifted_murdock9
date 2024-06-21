import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternetStatusServiceBase } from "./base/internetStatus.service.base";

@Injectable()
export class InternetStatusService extends InternetStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
