import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  constructor(@InjectModel (Course.name) private coursepModel: Model <Course>){}

  async create(createCourseDto: CreateCourseDto) {
    const newCourse = new this.coursepModel(createCourseDto);
    return await newCourse.save()
  }

  async findAll() {
    return await this.coursepModel.find().exec();
  }

  findOne(id: string) {
    return this.coursepModel.find({_id : id}).exec();
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.coursepModel.findByIdAndUpdate(id, {$set: updateCourseDto});
  }

  async remove(id: string) : Promise<string> {
       // Busca y elimina el bootcamp en una sola operación
  const deletedCourse = await this.coursepModel.findByIdAndDelete(id);

  // Verifica si el bootcamp existía
  if (!deletedCourse) {
    throw new Error(`Course con ID ${id} no encontrado`);
  }

  // Retorna un mensaje de éxito
  return `Course amp con ID ${id} eliminado correctamente.`;
  }
}
