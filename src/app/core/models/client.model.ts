import { Resource } from './resource';

// Client data
export interface Client extends Resource {
  companyName: string;
  address: string;
  postcode: string;
  city: string;
  legalForm: string;
  capital: number;
  rcc: string;
  siren: string;
  vatNumber: string;
  foreign: boolean;
  currency: string;
}
