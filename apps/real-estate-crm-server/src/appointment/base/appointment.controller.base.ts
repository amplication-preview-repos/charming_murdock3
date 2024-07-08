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
import { AppointmentService } from "../appointment.service";
import { AppointmentCreateInput } from "./AppointmentCreateInput";
import { Appointment } from "./Appointment";
import { AppointmentFindManyArgs } from "./AppointmentFindManyArgs";
import { AppointmentWhereUniqueInput } from "./AppointmentWhereUniqueInput";
import { AppointmentUpdateInput } from "./AppointmentUpdateInput";

export class AppointmentControllerBase {
  constructor(protected readonly service: AppointmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Appointment })
  async createAppointment(
    @common.Body() data: AppointmentCreateInput
  ): Promise<Appointment> {
    return await this.service.createAppointment({
      data: {
        ...data,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,

        client: data.client
          ? {
              connect: data.client,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Appointment] })
  @ApiNestedQuery(AppointmentFindManyArgs)
  async appointments(@common.Req() request: Request): Promise<Appointment[]> {
    const args = plainToClass(AppointmentFindManyArgs, request.query);
    return this.service.appointments({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async appointment(
    @common.Param() params: AppointmentWhereUniqueInput
  ): Promise<Appointment | null> {
    const result = await this.service.appointment({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAppointment(
    @common.Param() params: AppointmentWhereUniqueInput,
    @common.Body() data: AppointmentUpdateInput
  ): Promise<Appointment | null> {
    try {
      return await this.service.updateAppointment({
        where: params,
        data: {
          ...data,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,

          client: data.client
            ? {
                connect: data.client,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Appointment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAppointment(
    @common.Param() params: AppointmentWhereUniqueInput
  ): Promise<Appointment | null> {
    try {
      return await this.service.deleteAppointment({
        where: params,
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
