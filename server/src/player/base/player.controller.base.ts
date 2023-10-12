/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PlayerService } from "../player.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlayerCreateInput } from "./PlayerCreateInput";
import { PlayerWhereInput } from "./PlayerWhereInput";
import { PlayerWhereUniqueInput } from "./PlayerWhereUniqueInput";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerUpdateInput } from "./PlayerUpdateInput";
import { Player } from "./Player";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlayerControllerBase {
  constructor(
    protected readonly service: PlayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Player })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PlayerCreateInput): Promise<Player> {
    return await this.service.create({
      data: data,
      select: {
        city: true,
        createdAt: true,
        games: true,
        id: true,
        ident: true,
        sport: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Player] })
  @ApiNestedQuery(PlayerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Player[]> {
    const args = plainToClass(PlayerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        city: true,
        createdAt: true,
        games: true,
        id: true,
        ident: true,
        sport: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        city: true,
        createdAt: true,
        games: true,
        id: true,
        ident: true,
        sport: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() data: PlayerUpdateInput
  ): Promise<Player | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          city: true,
          createdAt: true,
          games: true,
          id: true,
          ident: true,
          sport: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          city: true,
          createdAt: true,
          games: true,
          id: true,
          ident: true,
          sport: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
