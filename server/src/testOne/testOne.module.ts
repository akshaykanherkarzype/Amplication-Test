import { Module } from "@nestjs/common";
import { TestOneModuleBase } from "./base/testOne.module.base";
import { TestOneService } from "./testOne.service";
import { TestOneController } from "./testOne.controller";
import { TestOneResolver } from "./testOne.resolver";

@Module({
  imports: [TestOneModuleBase],
  controllers: [TestOneController],
  providers: [TestOneService, TestOneResolver],
  exports: [TestOneService],
})
export class TestOneModule {}
