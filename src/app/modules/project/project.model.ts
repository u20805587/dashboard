export class Project {

  id?: number;
  name?: string;
  description?: string;
  status?: string;
  notes?: string;
  startDate?: Date;
  endDate?: Date;
  acquiredDate?: Date;
  estimatedCost: number;
  estimatedStartDate?: Date;
  estimatedEndDate?: Date;
  defaultDailyHours: number;
  maximumAllowedHours: number;

}
