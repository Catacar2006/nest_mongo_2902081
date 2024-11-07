import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel (User.name) private userModel: Model <User>){}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save()  }

  async findAll() {
    return await this.userModel.find().exec();
  } 

  findOne(id: string) {
    return this.userModel.find({_id : id}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, {$set: updateUserDto});
  }

  async remove(id: string) {
       // Busca y elimina el bootcamp en una sola operación
  const deletedUser = await this.userModel.findByIdAndDelete(id);

  // Verifica si el bootcamp existía
  if (!deletedUser) {
    throw new Error(`User con ID ${id} no encontrado`);
  }

  // Retorna un mensaje de éxito
  return `User con ID ${id} eliminado correctamente.`;
  }
}
