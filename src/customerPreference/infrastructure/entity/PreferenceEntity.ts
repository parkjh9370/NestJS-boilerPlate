import { AttributeEntity } from './AttributeEntity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('preference')
export class PreferenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  attributeId: number;

  @ManyToOne((type) => AttributeEntity)
  @JoinColumn()
  attribute: AttributeEntity;

  @Column('varchar', { length: 255 })
  title: string;

  @Column('varchar', { length: 2000, nullable: true })
  desc?: string;

  @Column('tinyint', { default: 0 })
  ordinal: number;

  @Column('tinyint', { nullable: true })
  valueTinyInt?: number; // flag, choice, ...

  @Column('int', { nullable: true })
  valueInt?: number; // large number

  @Column('float', { nullable: true })
  valueFloat?: number; // real number (non-scientific)

  @Column('varchar', { length: 255, nullable: true })
  valueVarChar?: string; // small text

  // value...
}
