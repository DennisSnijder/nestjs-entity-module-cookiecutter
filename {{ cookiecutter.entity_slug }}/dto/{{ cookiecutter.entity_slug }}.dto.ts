import { IsNotEmpty, Length } from "class-validator";

export class {{ cookiecutter.entity_name }}Dto {

    @IsNotEmpty()
    @Length(5, 50)
    name: string;
}
