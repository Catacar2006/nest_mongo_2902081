import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(@InjectModel (Review.name) private reviewModel: Model <Review>){}

  async create(createReviewDto: CreateReviewDto) {
    const newReview = new this.reviewModel(createReviewDto);
    return await newReview.save()  }

  async findAll() {
    return await this.reviewModel.find().exec();
  }

  findOne(id: string) {
    return this.reviewModel.find({ _id : id}).exec();
  }
 
  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewModel.findByIdAndUpdate(id, {$set: updateReviewDto});
  }

  async remove(id: string) : Promise<string> {
         // Busca y elimina el bootcamp en una sola operación
  const deletedReview = await this.reviewModel.findByIdAndDelete(id);

  // Verifica si el bootcamp existía
  if (!deletedReview) {
    throw new Error(`Review con ID ${id} no encontrado`);
  }

  // Retorna un mensaje de éxito
  return `Review amp con ID ${id} eliminado correctamente.`;
  }
}
