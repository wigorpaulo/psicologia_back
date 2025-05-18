import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tax_register_configurations')
export class TaxRegisterConfigurations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  api_key: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  environment: number;

  @Column({ type: 'int' })
  company_id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'timestamp' })
  deleted_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
