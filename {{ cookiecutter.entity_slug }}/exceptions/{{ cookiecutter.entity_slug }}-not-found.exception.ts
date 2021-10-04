import { NotFoundException } from "@nestjs/common";

export class {{ cookiecutter.entity_name }}NotFoundException extends NotFoundException {
    public static withIdentifier(id: number) {
        return new {{ cookiecutter.entity_name }}NotFoundException(`Could not find {{ cookiecutter.entity_name }} with id ${id}`);
    }
}
