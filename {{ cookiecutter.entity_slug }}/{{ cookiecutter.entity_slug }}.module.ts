import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { {{ cookiecutter.entity_name }} } from "./entities/{{ cookiecutter.entity_slug }}.entity";
import { {{ cookiecutter.entity_name }}Service } from "./services/{{ cookiecutter.entity_slug }}.service";
import { {{ cookiecutter.entity_name }}Controller } from "./controllers/{{ cookiecutter.entity_slug }}.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([{{ cookiecutter.entity_name }}]),
    ],
    providers: [
        {{ cookiecutter.entity_name }}Service
    ],
    controllers: [
        {{ cookiecutter.entity_name }}Controller
    ]
})
export class {{ cookiecutter.entity_name }}Module {

}
