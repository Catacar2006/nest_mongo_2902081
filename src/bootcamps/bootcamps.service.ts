import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {

  constructor(@InjectModel (Bootcamp.name) private bootcampModel: Model <Bootcamp>){

  }
  async create(createBootcampDto: CreateBootcampDto) {
    const newBootcamp = new this.bootcampModel(createBootcampDto);
    return await newBootcamp.save()
  }

  async findAll() {
    return await this.bootcampModel.find().exec();
  }

  findOne(id: string) {
    return this.bootcampModel.find({_id : id}).exec();
  }

  update(id: string, updateBootcampDto: UpdateBootcampDto) {
    return this.bootcampModel.findByIdAndUpdate(id, {$set: updateBootcampDto});
  }

  async remove(id: string): Promise<string> {
     // Busca y elimina el bootcamp en una sola operación
  const deletedBootcamp = await this.bootcampModel.findByIdAndDelete(id);

  // Verifica si el bootcamp existía
  if (!deletedBootcamp) {
    throw new Error(`Bootcamp con ID ${id} no encontrado`);
  }

  // Retorna un mensaje de éxito
  return `Bootcamp con ID ${id} eliminado correctamente.`;
  }
}
