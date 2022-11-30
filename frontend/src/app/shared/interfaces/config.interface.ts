import { CompanyInterface } from './company.interface';

export interface ConfigInterface {
  batchNumbers: string;
  issuedAt: Date;
  defaultBatchNumber: {
    type: string;
    default: 'DEV';
  };
  iban: {
    ron: string;
    euro: string;
    usd: string;
  };
  company: CompanyInterface;
}
