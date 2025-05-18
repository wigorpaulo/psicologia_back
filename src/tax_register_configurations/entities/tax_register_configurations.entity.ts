import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tax_register_configurations')
export class TaxRegisterConfigurations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  api_key: string;

  @Column()
  description: string;

  @Column()
  environment: number;

  @Column()
  company_id: number;

  @Column()
  user_id: number;

  @Column({ type: 'timestamp' })
  deleted_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
