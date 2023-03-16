import { Module } from "@nestjs/common";
import { SampleTestModuleBase } from "./base/sampleTest.module.base";
import { SampleTestService } from "./sampleTest.service";
import { SampleTestController } from "./sampleTest.controller";
import { SampleTestResolver } from "./sampleTest.resolver";

@Module({
  imports: [SampleTestModuleBase],
  controllers: [SampleTestController],
  providers: [SampleTestService, SampleTestResolver],
  exports: [SampleTestService],
})
export class SampleTestModule {}
