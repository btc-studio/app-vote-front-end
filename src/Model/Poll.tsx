export interface PollModel {
  id?: number;
  title: string;
  description: string;
  criteriaIds?: number[];
  createdBy?: number;
  startAt?: string;
  endAt?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface OptionModel {
  title: string;
  description: string;
  id?: number;
  userIds?: number[];
  createdBy?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface CriteriaModel {
  createBy?: number;
  description: string;
}
