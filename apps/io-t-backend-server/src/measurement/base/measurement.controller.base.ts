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
import { MeasurementService } from "../measurement.service";
import { MeasurementCreateInput } from "./MeasurementCreateInput";
import { Measurement } from "./Measurement";
import { MeasurementFindManyArgs } from "./MeasurementFindManyArgs";
import { MeasurementWhereUniqueInput } from "./MeasurementWhereUniqueInput";
import { MeasurementUpdateInput } from "./MeasurementUpdateInput";

export class MeasurementControllerBase {
  constructor(protected readonly service: MeasurementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Measurement })
  async createMeasurement(
    @common.Body() data: MeasurementCreateInput
  ): Promise<Measurement> {
    return await this.service.createMeasurement({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        averageBloodGlucoseLevel: true,
        averageHeartRate: true,
        averageOxygenSaturationLevel: true,
        bloodGlucoseLevel: true,
        createdAt: true,
        heartRate: true,
        id: true,
        oxygenSaturationLevel: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Measurement] })
  @ApiNestedQuery(MeasurementFindManyArgs)
  async measurements(@common.Req() request: Request): Promise<Measurement[]> {
    const args = plainToClass(MeasurementFindManyArgs, request.query);
    return this.service.measurements({
      ...args,
      select: {
        averageBloodGlucoseLevel: true,
        averageHeartRate: true,
        averageOxygenSaturationLevel: true,
        bloodGlucoseLevel: true,
        createdAt: true,
        heartRate: true,
        id: true,
        oxygenSaturationLevel: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Measurement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async measurement(
    @common.Param() params: MeasurementWhereUniqueInput
  ): Promise<Measurement | null> {
    const result = await this.service.measurement({
      where: params,
      select: {
        averageBloodGlucoseLevel: true,
        averageHeartRate: true,
        averageOxygenSaturationLevel: true,
        bloodGlucoseLevel: true,
        createdAt: true,
        heartRate: true,
        id: true,
        oxygenSaturationLevel: true,
        timestamp: true,
        updatedAt: true,

        user: {
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
  @swagger.ApiOkResponse({ type: Measurement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMeasurement(
    @common.Param() params: MeasurementWhereUniqueInput,
    @common.Body() data: MeasurementUpdateInput
  ): Promise<Measurement | null> {
    try {
      return await this.service.updateMeasurement({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          averageBloodGlucoseLevel: true,
          averageHeartRate: true,
          averageOxygenSaturationLevel: true,
          bloodGlucoseLevel: true,
          createdAt: true,
          heartRate: true,
          id: true,
          oxygenSaturationLevel: true,
          timestamp: true,
          updatedAt: true,

          user: {
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
  @swagger.ApiOkResponse({ type: Measurement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMeasurement(
    @common.Param() params: MeasurementWhereUniqueInput
  ): Promise<Measurement | null> {
    try {
      return await this.service.deleteMeasurement({
        where: params,
        select: {
          averageBloodGlucoseLevel: true,
          averageHeartRate: true,
          averageOxygenSaturationLevel: true,
          bloodGlucoseLevel: true,
          createdAt: true,
          heartRate: true,
          id: true,
          oxygenSaturationLevel: true,
          timestamp: true,
          updatedAt: true,

          user: {
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