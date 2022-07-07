export interface PollModel {
  id?: number;
  title: string;
  description: string;
  criteria_ids?: number[];
  created_by?: number;
  start_at?: number;
  end_at?: number;
  updated_at?: Date;
  created_at?: Date;
}

export interface OptionModel {
  title: string;
  description: string;
  id?: number;
  user_ids?: number[];
  created_by?: number;
  updated_at?: Date;
  created_at?: Date;
}

export interface CriteriaModel {
  id?: number;
  created_by?: number;
  description: string;
}
