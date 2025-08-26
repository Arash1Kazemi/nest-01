import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersMService } from './users-m.service'; 

@Controller('users-M')   // WORK LIKE """** WATERFALL **"""
export class UsersMController {

    constructor(private readonly userService: UsersMService){}
    
    @Get()   //Get /users-m  | /user-m?role=VALUE
    findAll( @Query( 'role' ) role?: 'ADMIN' | 'koskhol' | 'NoOne' ) {
        return this.userService.findAall(role)
    }

    @Get( ':id' )  //Get /user-m/:id
    findOne( @Param( 'id' ) id: string) {
        return this.userService.findOne(+id)
    }

    @Post() 
    create( @Body() user: {name: string, email: string, role: 'ADMIN' | 'koskhol' | 'NoOne' } ){
        return this.userService.create(user)
    }
    
    @Patch( ':id' ) 
    updateUser( @Param( 'id' ) id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'ADMIN' | 'koskhol' | 'NoOne' } ){
        return this.userService.updateUser(+id, userUpdate)
    }

    @Delete(':id')
    deleateOneUser(@Param('id') id: string){
        return this.userService.deleat(parseInt(id))
    }

}

    