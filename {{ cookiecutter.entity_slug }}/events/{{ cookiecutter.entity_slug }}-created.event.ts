import { {{ cookiecutter.entity_name }} } from "../entities/{{ cookiecutter.entity_slug }}.entity";

export class {{ cookiecutter.entity_name }}CreatedEvent {
    static EVENT_NAME = '{{ cookiecutter.entity_slug }}.created';

    constructor(public {{ cookiecutter.entity_slug }}: {{ cookiecutter.entity_name }}) {
    }
}
