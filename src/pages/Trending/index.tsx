import { Poll } from '../../recoil/create-poll/PollsState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PollModel, CriteriaModel } from '../../Model/Poll';
import { getAllPolls } from '../../recoil/create-poll/PollsState';
import { useState, useEffect } from 'react';
import { CriteriasCall } from '../../recoil/create-criterias/CriteriaStates';

function getDesCri(criteriasIds: number[], listCri: CriteriaModel[]): CriteriaModel[] {
  let newArr = listCri.filter((cris) => {
    return criteriasIds.indexOf(cris.id as number) >= 0;
  });
  return newArr;
}

function Trending() {
  const [polls, setPolls] = useState<PollModel[]>([]);
  const criterias = useRecoilValue(CriteriasCall);
  useEffect(() => {
    const getPolls = async () => {
      const allPolls = await getAllPolls();
      setPolls(allPolls);
    };
    getPolls();
  }, []);

  return (
    <div>
      {polls &&
        polls.map((poll, index) => {
          return (
            <div className="border-2 mb-4" key={index}>
              <h1 className="text-2xl">{poll.title}</h1>
              <p className="text-xl">{poll.description}</p>
              <div>
                {getDesCri(poll.criteria_ids as number[], criterias).map((criteria) => {
                  return <h5 key={criteria.id}>{criteria.description}</h5>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Trending;
