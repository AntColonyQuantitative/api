import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PortalUserKey')
export class UserKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'User ID',
    default: ''
  })
  @IsNotEmpty()
  uid: string;

  @Column({
    comment: 'Exchange name',
    default: ''
  })
  @IsNotEmpty()
  exchangeName: string;

  @Column({
    comment: 'Access key',
    default: '',
  })
  accessKey: string;

  @Column({
    comment: 'Secret key',
    default: '',
  })
  @IsNotEmpty()
  secretKey: string;

  @Column({
    comment: 'Remarks',
    default: '',
    nullable: true,
  })
  remarks: string;

  @Column({
    comment: 'Is account deleted',
    default: false,
  })
  isDeleted: boolean;
}
