const TestCreatePoll: React.FC = () => {
  const handleCreatePoll = async () => {
    console.log('Hello');
    await window.contract.create_poll({
      // callbackurl: 'https://example.com/callback', // callbackurl after the transaction approved (optional)
      // meta: 'some info', // meta information near wallet will send back to the application. `meta` will be attached to the `callbackurl` as a url search param
      args: {
        criteria_id: 0, // argument name and value - pass empty object if no args required
        user_id: 0,
        title: 'Test create poll title',
        description: 'Test create poll description',
        start_at: 0,
        end_at: 0,
      },
      gas: "300000000000000", // attached GAS (optional)
      amount: "100000000000000000000000", // attached deposit in yoctoNEAR (optional)
    });
  };

  return (
    <button onClick={handleCreatePoll} className="rounded-lg bg-primary-10 px-3 py-4">
      Create new Poll
    </button>
  );
};

export default TestCreatePoll;
