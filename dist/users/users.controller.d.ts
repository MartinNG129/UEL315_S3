import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").Users>;
    findAll(): Promise<import("./entities/user.entity").Users[]>;
    findOne(id: number): Promise<import("./entities/user.entity").Users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
}
