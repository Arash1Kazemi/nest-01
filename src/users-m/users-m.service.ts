import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersMService {
    private users =  [
    {
        "id": 1,
        "name": "arash",
        "email": "lli@gmil.com",
        "role": "ADMIN"
    },
    {
        "id": 2,
        "name": "ara",
        "email": "arasf@gmil.com",
        "role": "NoOne"
    },
    {
        "id": 3,
        "name": "ali",
        "email": "ali@gmil.com",
        "role": "NoOne"
    },
    {
        "id": 4,
        "name": "amir",
        "email": "amir@gmil.com",
        "role": "koskhols"
    },
    {
        "id": 5,
        "name": "Ton",
        "email": "TONN@gmil.com",
        "role": "koskhols"
    }
    ]

    findAall(role?: 'ADMIN' | 'koskhol' | 'NoOne'){
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: Number){
        const user = this.users.find(user => user.id === id)
        return user
    }
    
    create(user: {name: string, email: string, role: 'ADMIN' | 'koskhol' | 'NoOne' } ){
        const userHI = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = { id: userHI[0].id + 1, ...user}
        this.users.push(newUser)
        return newUser
    }

    updateUser(id: Number, updatedUser: {name?: string, email?: string, role?: 'ADMIN' | 'koskhol' | 'NoOne' }){  // number
        this.users = this.users.map( user => {
            if(user.id == id){
                return{...user,...updatedUser}
            }
            return user
        })
        return this.findOne(id)
    }

    deleat(id: Number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id )

        return removeUser

    }
 
}
