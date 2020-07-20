import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Student } from './student.interface';
import { StudentsService } from './students.service';
import { StudentDTO } from './student.dto'


@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {

    }

    @Get()
    findAll(): Promise<Student[]> {
        return this.studentsService.findAll()
    }

    @Get(':id')
    find(@Param('id') id: string) {
        return this.studentsService.find(id)
    }

    @Post()
    create(@Body() student: StudentDTO): Promise<Student> {
        return this.studentsService.create(student)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() student: StudentDTO): Promise<Student> {
        return this.studentsService.update(id, student as Student)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Student> {
        return this.studentsService.delete(id)
    }


}
