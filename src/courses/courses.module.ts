import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './entities/course.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Course.name, schema: CourseSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
