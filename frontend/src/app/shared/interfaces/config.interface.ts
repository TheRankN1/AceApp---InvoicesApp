import { CompanyInterface } from './company.interface';

export interface ConfigInterface {
  batchNumbers: string;
  issuedAt: Date;
  defaultBatchNumber: string;
  iban: {
    ron: string;
    euro: string;
    usd: string;
  };
  company: CompanyInterface;
}
