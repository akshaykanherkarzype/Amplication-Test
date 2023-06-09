/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTestOneArgs } from "./CreateTestOneArgs";
import { UpdateTestOneArgs } from "./UpdateTestOneArgs";
import { DeleteTestOneArgs } from "./DeleteTestOneArgs";
import { TestOneFindManyArgs } from "./TestOneFindManyArgs";
import { TestOneFindUniqueArgs } from "./TestOneFindUniqueArgs";
import { TestOne } from "./TestOne";
import { TestOneService } from "../testOne.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TestOne)
export class TestOneResolverBase {
  constructor(
    protected readonly service: TestOneService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "read",
    possession: "any",
  })
  async _testOnesMeta(
    @graphql.Args() args: TestOneFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TestOne])
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "read",
    possession: "any",
  })
  async testOnes(
    @graphql.Args() args: TestOneFindManyArgs
  ): Promise<TestOne[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TestOne, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "read",
    possession: "own",
  })
  async testOne(
    @graphql.Args() args: TestOneFindUniqueArgs
  ): Promise<TestOne | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestOne)
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "create",
    possession: "any",
  })
  async createTestOne(
    @graphql.Args() args: CreateTestOneArgs
  ): Promise<TestOne> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestOne)
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "update",
    possession: "any",
  })
  async updateTestOne(
    @graphql.Args() args: UpdateTestOneArgs
  ): Promise<TestOne | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TestOne)
  @nestAccessControl.UseRoles({
    resource: "TestOne",
    action: "delete",
    possession: "any",
  })
  async deleteTestOne(
    @graphql.Args() args: DeleteTestOneArgs
  ): Promise<TestOne | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
