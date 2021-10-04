import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { {{ cookiecutter.entity_name }}Service } from "../services/{{ cookiecutter.entity_slug }}.service";
import { {{ cookiecutter.entity_name }}Dto } from "../dto/{{ cookiecutter.entity_slug }}.dto";

@Controller('{{ cookiecutter.entity_slug }}')
export class {{ cookiecutter.entity_name }}Controller {

    constructor(
        private readonly {{ cookiecutter.entity_slug }}Service: {{ cookiecutter.entity_name }}Service
    ) {
    }

    @Get()
    getAll{{ cookiecutter.entity_name }}s() {
        return this.{{ cookiecutter.entity_slug }}Service.getAll{{ cookiecutter.entity_name }}s();
    }

    @Post()
    create{{ cookiecutter.entity_name }}(@Body() dto: {{ cookiecutter.entity_name }}Dto) {
        return this.{{ cookiecutter.entity_slug }}.create{{ cookiecutter.entity_name }}(dto);
    }

    @Get(':id')
    get{{ cookiecutter.entity_name }}ByIdentifier(@Param('id') id: number) {
        return this.{{ cookiecutter.entity_slug }}Service.get{{ cookiecutter.entity_name }}ByIdentifier(id);
    }

    @Put(':id')
    async update{{ cookiecutter.entity_name }}ByIdentifier(@Param('id') id: number, @Body() dto: {{ cookiecutter.entity_name }}Dto) {
        const {{ cookiecutter.entity_slug }} = await this.{{ cookiecutter.entity_slug }}Service.get{{ cookiecutter.entity_name }}ByIdentifier(id);
        return this.{{ cookiecutter.entity_slug }}Service.update{{ cookiecutter.entity_name }}({{ cookiecutter.entity_slug }}, dto);
    }
}
