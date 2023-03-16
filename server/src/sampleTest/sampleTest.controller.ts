import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SampleTestService } from "./sampleTest.service";
import { SampleTestControllerBase } from "./base/sampleTest.controller.base";

@swagger.ApiTags("sampleTests")
@common.Controller("sampleTests")
export class SampleTestController extends SampleTestControllerBase {
  constructor(
    protected readonly service: SampleTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
