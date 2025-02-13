import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entites";
import { UserKey } from "src/entites/User.entity";
import { Repository } from "typeorm";

export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    find(where?:Partial<User>,select?:UserKey[]){ 
        return this.userRepository.find({where,select});
    }

    findOne(where:Partial<User>,select?:UserKey[]){
        return this.userRepository.findOne({where,select});
    }

}