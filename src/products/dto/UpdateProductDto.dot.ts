/* eslint-disable prettier/prettier */
import { CreateProductDto } from "./CreateProductDto.dto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateProductDto extends PartialType(CreateProductDto){}