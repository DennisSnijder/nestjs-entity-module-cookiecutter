import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { {{ cookiecutter.entity_name }}Dto } from "../dto/{{ cookiecutter.entity_slug }}.dto";

@Entity()
export class {{ cookiecutter.entity_name }} {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    public static fromDto(dto: {{ cookiecutter.entity_name }}Dto) {
        const {{ cookiecutter.entity_slug }} = new {{ cookiecutter.entity_name }}();
        {{ cookiecutter.entity_slug }}.updateFromDto(dto);

        return {{ cookiecutter.entity_slug }};
    }

    public updateFromDto(dto: {{ cookiecutter.entity_name }}Dto): void {
        this.name = dto.name;
    }
}
