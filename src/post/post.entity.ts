import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({})
  id: number;
  @Column({ type: 'text', nullable: false })
  name: string;
  @Column({ type: 'text', nullable: false })
  data: string;
  @Column({ type: 'timestamp without time zone' })
  createdAt: Date;
}
