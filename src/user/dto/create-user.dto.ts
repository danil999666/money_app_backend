import { IsEmail, MinLength } from "class-validator";


export class CreateUserDto {
    @IsEmail()
    email: string;

    @MinLength(6, {message: 'Password not correct (more 6 symbols)'})
    password: string;
}
