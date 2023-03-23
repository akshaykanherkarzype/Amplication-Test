import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestOneServiceBase } from "./base/testOne.service.base";

@Injectable()
export class TestOneService extends TestOneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
