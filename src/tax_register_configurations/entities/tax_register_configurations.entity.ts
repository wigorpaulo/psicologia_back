import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tax_register_configurations')
export class TaxRegisterConfigurations {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar' })
  api_key: string | undefined;

  @Column({ type: 'varchar' })
  description: string | undefined;

  @Column({ type: 'int' })
  environment: number | undefined;

  @Column({ type: 'int' })
  company_id: number | undefined;

  @Column({ type: 'int' })
  user_id: number | undefined;

  @Column({ type: 'timestamp' })
  deleted_at: Date | undefined;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date | undefined;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date | undefined;
}
