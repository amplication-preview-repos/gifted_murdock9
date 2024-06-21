import * as graphql from "@nestjs/graphql";
import { InternetStatusResolverBase } from "./base/internetStatus.resolver.base";
import { InternetStatus } from "./base/InternetStatus";
import { InternetStatusService } from "./internetStatus.service";

@graphql.Resolver(() => InternetStatus)
export class InternetStatusResolver extends InternetStatusResolverBase {
  constructor(protected readonly service: InternetStatusService) {
    super(service);
  }
}
