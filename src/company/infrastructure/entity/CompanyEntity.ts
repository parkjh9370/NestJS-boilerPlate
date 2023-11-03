import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'company' })
export class CompanyEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
