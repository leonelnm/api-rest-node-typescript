import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm'

export default abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
