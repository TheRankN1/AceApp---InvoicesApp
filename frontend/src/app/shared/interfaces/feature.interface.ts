import { CurrencyEnum } from '../enums/currency.enum';
import { UnitEnum } from '../enums/UnitEnum';

export interface FeatureInterface {
  name: String;
  unit: UnitEnum;
  price: Number;
  currency: CurrencyEnum;
}
