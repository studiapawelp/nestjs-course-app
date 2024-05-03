import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'src/coffees/entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Lorem ipsum',
      brand: 'Abibas',
      flavors: ['japko', 'mięta'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) throw new NotFoundException('UPS');
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: string, updateCoffeDto: any) {
    const exiistingCoffee = this.findOne(id);

    if (exiistingCoffee) {
      // todo
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
