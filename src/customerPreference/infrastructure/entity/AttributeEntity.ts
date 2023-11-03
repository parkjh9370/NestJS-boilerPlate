import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attribute')
export class AttributeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  title: string;

  @Column('varchar', { length: 2000, nullable: true })
  desc: string;

  @Column('varchar', { length: 30, nullable: true })
  valueType: string;
}
