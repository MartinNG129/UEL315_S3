import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto & Users>;
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
}
