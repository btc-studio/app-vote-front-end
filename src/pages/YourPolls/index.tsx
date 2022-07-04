import { useEffect, useState } from 'react';

interface PollInterface {
  criteria_id: number;
  user_id: number;
  title: string;
  description: string;
  start_at?: number;
  end_at?: number;
  created_at?: number;
  updated_at?: number;
}

function YourPolls() {
  const [allPolls, setAllPolls] = useState<PollInterface[]>([]);
  const getAllPolls = async () => {
    const allPolls = await window.contract.get_all_polls();
    console.log(allPolls);
    setAllPolls(allPolls);
  };
  useEffect(() => {
    getAllPolls();
  }, []);
  return (
    <div>
      {allPolls &&
        allPolls.map((poll) => (
          <div key={poll.title}>
            <div>{poll.title}</div>
            <div>{poll.description}</div>
          </div>
        ))}
    </div>
  );
}

export default YourPolls;
