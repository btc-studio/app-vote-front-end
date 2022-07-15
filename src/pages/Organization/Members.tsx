import Button from '../../components/Button/Button';
import { ListUsers } from '../../recoil/users/UserInfo';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { UserInfo } from '../../recoil/users/UserInfo';
import { validateEmail, validateNearAddress } from '../../utils/ValidInput';

const Members: React.FC = () => {
  const listUsers = useRecoilValue(ListUsers);
  const userInfo = useRecoilValue(UserInfo);

  const [invalidMail, setInvalidMail] = useState<boolean>(false);
  const [invalidNear, setInvalidNear] = useState<boolean>(false);
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [account, setAccount] = useState<{
    name: string | undefined;
    role: string | undefined;
    email: string | undefined;
    walletAddress: string | undefined;
  }>({
    name: undefined,
    role: 'Employee',
    email: undefined,
    walletAddress: undefined,
  });
  const handleCreateAccount = async () => {
    if (account.name && account.walletAddress && account.email && !invalidMail && !invalidNear) {
      console.log(account);
      await window.contract.create_user({
        args: {
          name: account?.name,
          role: account?.role,
          email: account?.email,
          blockchain_type: 'Near',
          wallet_address: account?.walletAddress,
        },
        gas: '300000000000000', // attached GAS (optional)
        amount: '100000000000000000000000', // attached deposit in yoctoNEAR (optional)
      });
    }
  };
  return (
    <div className="relative flex mt-8 justify-center">
      {!createAccount && (
        <table className="text-center m-0">
          <thead>
            <tr>
              <th className="border border-slate-300 px-4 py-2">#</th>
              <th className="border border-slate-300 px-4 py-2 min-w-[200px]">Name</th>
              <th className="border border-slate-300 px-4 py-2">Role</th>
              <th className="border border-slate-300 px-4 py-2 min-w-[200px]">Email</th>
              <th className="border border-slate-300 px-4 py-2 min-w-[200px]">Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="border border-slate-300 px-3 py-1">{index + 1}</td>
                  <td className="border border-slate-300 px-3 py-1 min-w-[200px]">{item.name}</td>
                  <td className="border border-slate-300 px-3 py-1">{item.role}</td>
                  <td className="border border-slate-300 px-3 py-1 min-w-[200px]">{item.email}</td>
                  <td className="border border-slate-300 px-3 py-1 min-w-[200px]">{item.walletAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {createAccount ? (
        <div className="px-4 py-6 bg-primary-10 rounded-xl right-0 top-0 relative">
          <div
            className="absolute right-1 top-1 p-1 bg-primary-20 rounded-3xl cursor-pointer hover:bg-primary-50"
            onClick={() => {
              setCreateAccount(false);
              setAccount({
                name: undefined,
                role: 'Employee',
                email: undefined,
                walletAddress: undefined,
              });
              setInvalidMail(false);
              setInvalidNear(false);
            }}
          >
            <IoClose />
          </div>
          <div>
            <label htmlFor="user-name">User name</label>
            <input
              className="h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1"
              id="user-name"
              value={account.name ? account.name : ''}
              onChange={(e) => {
                setAccount({ ...account, name: e.target.value });
              }}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="flex items-center">
              Email
              {invalidMail && <p className="text-xs text-red-500 ml-3 mt-1">* Invalid email!</p>}
            </label>
            <input
              className={`h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1 ${
                invalidMail ? 'border-2 border-red-500' : ''
              }`}
              id="email"
              value={account.email ? account.email : ''}
              onChange={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
              onBlur={(e) => {
                if (!validateEmail(e.target.value)) setInvalidMail(true);
                else setInvalidMail(false);
              }}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="wallet-address" className="flex items-center">
              Wallet address
              {invalidNear && <p className="text-xs text-red-500 ml-3 mt-1">* Invalid near address!</p>}
            </label>
            <input
              placeholder=".testnet"
              className={`h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1 ${
                invalidNear ? 'border-2 border-red-500' : ''
              }`}
              id="wallet-address"
              value={account.walletAddress ? account.walletAddress : ''}
              onChange={(e) => {
                setAccount({ ...account, walletAddress: e.target.value });
              }}
              onBlur={(e) => {
                if (!validateNearAddress(e.target.value)) setInvalidNear(true);
                else setInvalidNear(false);
              }}
            />
          </div>
          <div className="mt-2 mb-8 flex">
            <div className="mr-4">
              <label htmlFor="admin">Admin</label>
              <input
                type="radio"
                id="admin"
                value="Admin"
                name="role"
                className="ml-2"
                checked={account.role === 'Admin'}
                onChange={(e) => {
                  setAccount({ ...account, role: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="user">Employee</label>
              <input
                type="radio"
                id="user"
                name="role"
                value="Employee"
                className="ml-2"
                checked={account.role === 'Employee'}
                onChange={(e) => {
                  setAccount({ ...account, role: e.target.value });
                }}
              />
            </div>
          </div>
          <Button
            title="create"
            upcase={true}
            outline={true}
            active={false}
            group={false}
            css="absolute right-4 bottom-2 "
            handle={handleCreateAccount}
          />
        </div>
      ) : (
        <div hidden={userInfo.role !== 'Admin'}>
          <Button
            title="Add account"
            upcase={true}
            group={false}
            outline={true}
            active={false}
            css="absolute right-0 top-0"
            handle={() => {
              setCreateAccount(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Members;
