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
import { PropertyService } from "../property.service";
import { PropertyCreateInput } from "./PropertyCreateInput";
import { Property } from "./Property";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";
import { PropertyUpdateInput } from "./PropertyUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { AgentAssignmentFindManyArgs } from "../../agentAssignment/base/AgentAssignmentFindManyArgs";
import { AgentAssignment } from "../../agentAssignment/base/AgentAssignment";
import { AgentAssignmentWhereUniqueInput } from "../../agentAssignment/base/AgentAssignmentWhereUniqueInput";

export class PropertyControllerBase {
  constructor(protected readonly service: PropertyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Property })
  async createProperty(
    @common.Body() data: PropertyCreateInput
  ): Promise<Property> {
    return await this.service.createProperty({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        description: true,
        address: true,
        size: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Property] })
  @ApiNestedQuery(PropertyFindManyArgs)
  async properties(@common.Req() request: Request): Promise<Property[]> {
    const args = plainToClass(PropertyFindManyArgs, request.query);
    return this.service.properties({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        description: true,
        address: true,
        size: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async property(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    const result = await this.service.property({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        price: true,
        description: true,
        address: true,
        size: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProperty(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() data: PropertyUpdateInput
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          price: true,
          description: true,
          address: true,
          size: true,
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
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProperty(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          price: true,
          description: true,
          address: true,
          size: true,
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

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        dateTime: true,
        notes: true,

        property: {
          select: {
            id: true,
          },
        },

        client: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/agentAssignments")
  @ApiNestedQuery(AgentAssignmentFindManyArgs)
  async findAgentAssignments(
    @common.Req() request: Request,
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<AgentAssignment[]> {
    const query = plainToClass(AgentAssignmentFindManyArgs, request.query);
    const results = await this.service.findAgentAssignments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        agentId: true,

        client: {
          select: {
            id: true,
          },
        },

        property: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/agentAssignments")
  async connectAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        connect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/agentAssignments")
  async updateAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        set: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/agentAssignments")
  async disconnectAgentAssignments(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: AgentAssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      agentAssignments: {
        disconnect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }
}
