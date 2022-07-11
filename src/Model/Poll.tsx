export interface PollModel {
  id?: number;
  title: string | undefined;
  description: string | undefined;
  criteria_ids?: number[];
  option_id: number | undefined;
  created_by?: number;
  start_at?: number;
  end_at?: number | string;
  updated_at?: Date;
  created_at?: Date;
}

export interface OptionModel {
  title?: string;
  description?: string;
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
