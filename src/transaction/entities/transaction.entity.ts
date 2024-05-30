import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
	@PrimaryGeneratedColumn({ name: 'transaction_id' })
	id: number;

	@Column()
	title: string;

	@Column({ nullable: true })
	type: string;

	@ManyToOne(() => User, (user) => user.transactions)
	user: User;

	@ManyToOne(() => Category, (category) => category.transactions, {
		onDelete: 'SET NULL',
	})
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@Column('decimal', { precision: 10, scale: 2, nullable: true })
	amount: number;

	@Column({ nullable: true })
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
