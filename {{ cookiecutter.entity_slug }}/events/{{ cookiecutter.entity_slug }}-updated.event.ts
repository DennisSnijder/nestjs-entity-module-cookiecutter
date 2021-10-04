import { {{ cookiecutter.entity_name }} } from "../entities/{{ cookiecutter.entity_slug }}.entity";

export class {{ cookiecutter.entity_name }}UpdatedEvent {
    static EVENT_NAME = '{{ cookiecutter.entity_slug }}.updated';

    constructor(public {{ cookiecutter.entity_slug }}: {{ cookiecutter.entity_name }}) {
    }
}
