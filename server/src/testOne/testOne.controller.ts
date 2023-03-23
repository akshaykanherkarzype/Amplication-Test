import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestOneService } from "./testOne.service";
import { TestOneControllerBase } from "./base/testOne.controller.base";

@swagger.ApiTags("testOnes")
@common.Controller("testOnes")
export class TestOneController extends TestOneControllerBase {
  constructor(
    protected readonly service: TestOneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
