
import { Entity, Column, BeforeInsert } from 'typeorm'
import bcrypt from 'bcrypt'
import { RoleEnumType } from '../types/enums'
import BaseModel from './base.model'
import config from '../config/config'

@Entity()
export class User extends BaseModel {
  @Column({ length: 100 })
  name!: string

  @Column({ nullable: false })
  lastname!: string

  @Column({ unique: true, nullable: false, length: 10 })
  dni!: string

  @Column({ unique: true, nullable: false })
  username!: string

  @Column({ nullable: false })
  password!: string

  @Column({
    type: 'enum',
    enum: RoleEnumType,
    default: RoleEnumType.USER,
    nullable: false
  })
  role!: RoleEnumType

  @Column({ length: 15 })
  phone!: string

  @Column({ nullable: false, default: true })
  active!: boolean

  constructor (opts: object) {
    super()
    Object.assign(this, opts)
  }

  @BeforeInsert()
  async hashPassword (): Promise<void> {
    try {
      console.log('salt:', config.saltRound)

      this.password = await bcrypt.hash(this.password, config.saltRound)
    } catch (error) {
      console.log(error)

      const exception = new Error('there are some issiue in the hash')
      exception.name = 'InternalError'
      throw exception
    }
  }

  toJSON (): object {
    return {
      ...this,
      password: ':)'
    }
  }
}
