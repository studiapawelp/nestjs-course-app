import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeSerive: CoffeesService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeSerive.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeSerive.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeSerive.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeSerive.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeSerive.remove(id);
  }
}
