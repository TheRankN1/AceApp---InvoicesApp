import { CompanyInterface } from './company.interface';

export interface ConfigInterface {
  _id: string;
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
