import { AttributeEntity } from './AttributeEntity';
import { PreferenceEntity } from './PreferenceEntity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('customerPreference')
export class CustomerPreferenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column({ nullable: true })
  attributeId: number;

  // ManyToOne ?
  @OneToOne((type) => AttributeEntity)
  @JoinColumn()
  attribute: AttributeEntity;

  @Column({ nullable: true })
  preferenceId: number;

  @OneToOne((type) => PreferenceEntity, {
    eager: true,
  })
  @JoinColumn()
  preference: PreferenceEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  updatedBy: number;

  // updater: User; TODO
}
