import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';
import { Resolver, Mutation, Args,Query } from "@nestjs/graphql";

@Resolver(StudentType)
export class StudentResolver {
  constructor(private studentService:StudentService){}

  @Mutation(()=> StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput:CreateStudentInput,
  ){
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(()=> [StudentType])
  students(){
    return this.studentService.getAllStudents();
  }

  @Query(()=> StudentType)
  student(
    @Args('id') id:string
  ){
    return this.studentService.getStudent(id);
  }
}