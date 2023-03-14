import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SampleTestServiceBase } from "./base/sampleTest.service.base";

@Injectable()
export class SampleTestService extends SampleTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
