import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { {{ cookiecutter.entity_name }} } from "../entities/{{ cookiecutter.entity_slug }}.entity";
import { {{ cookiecutter.entity_name }}Dto } from "../dto/{{ cookiecutter.entity_slug }}.dto";
import { {{ cookiecutter.entity_name }}NotFoundException } from "../exceptions/{{ cookiecutter.entity_slug }}-not-found.exception";
import { {{ cookiecutter.entity_name }}UpdatedEvent } from "../events/{{ cookiecutter.entity_slug }}-updated.event";
import { {{ cookiecutter.entity_name }}CreatedEvent } from "../events/{{ cookiecutter.entity_slug }}-created.event";

@Injectable()
export class {{ cookiecutter.entity_name }}Service {

    constructor(
        @InjectRepository({{ cookiecutter.entity_name }}) private readonly {{ cookiecutter.entity_slug }}Repository: Repository<{{ cookiecutter.entity_name }}>,
        private readonly eventEmitter: EventEmitter2
    ) {
    }

    getAll{{ cookiecutter.entity_name }}s(): Promise<{{ cookiecutter.entity_name }}[]> {
        return this.{{ cookiecutter.entity_slug }}Repository.find();
    }

    async get{{ cookiecutter.entity_name }}ByIdentifier(id: number): Promise<{{ cookiecutter.entity_name }}> {
        const {{ cookiecutter.entity_slug }} = await this.{{ cookiecutter.entity_slug }}Repository.findOne(id);

        if(!{{ cookiecutter.entity_slug }}) {
            throw {{ cookiecutter.entity_name }}NotFoundException.withIdentifier(id);
        }

        return {{ cookiecutter.entity_slug }};
    }

    async create{{ cookiecutter.entity_name }}(dto: {{ cookiecutter.entity_name }}Dto): Promise<{{ cookiecutter.entity_name }}> {
        const {{ cookiecutter.entity_slug }} = {{ cookiecutter.entity_name }}.fromDto(dto);

        await this.{{ cookiecutter.entity_slug }}Repository.save({{ cookiecutter.entity_slug }});
        this.eventEmitter.emit({{ cookiecutter.entity_name }}CreatedEvent.EVENT_NAME, new {{ cookiecutter.entity_name }}CreatedEvent({{ cookiecutter.entity_slug }}));

        return {{ cookiecutter.entity_slug }};
    }

    async update{{ cookiecutter.entity_name }}({{ cookiecutter.entity_slug }}: {{ cookiecutter.entity_name }}, dto: {{ cookiecutter.entity_name }}Dto) {
        {{ cookiecutter.entity_slug }}.updateFromDto(dto);

        await this.{{ cookiecutter.entity_slug }}Repository.save({{ cookiecutter.entity_slug }});
        this.eventEmitter.emit({{ cookiecutter.entity_name }}UpdatedEvent.EVENT_NAME, new {{ cookiecutter.entity_name }}UpdatedEvent({{ cookiecutter.entity_slug }}));

        return {{ cookiecutter.entity_slug }};
    }
}
