import Button from '../../components/Button/Button';
import { useRecoilValue } from 'recoil';
import { useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { UserInfo, ListUsers } from '../../recoil/users/UserInfo';
import { validateEmail, validateNearAddress, validateUserName } from '../../utils/ValidInput';

const Members: React.FC = () => {
  const listUsers = useRecoilValue(ListUsers);
  const userInfo = useRecoilValue(UserInfo);
  const walletInput = useRef<HTMLInputElement>(null);
  const [invalidUserName, setInvalidUserName] = useState<{ state: boolean; message: string | null }>({
    state: false,
    message: null,
  });
  const [invalidMail, setInvalidMail] = useState<{ state: boolean; message: string | null }>({
    state: false,
    message: null,
  });
  const [invalidNear, setInvalidNear] = useState<{ state: boolean; message: string | null }>({
    state: false,
    message: null,
  });
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
    if (invalidUserName.state === false && invalidMail.state === false && invalidNear.state === false) {
      console.log(invalidUserName, invalidMail, invalidNear);
      // console.log({ ...account, walletAddress: account.walletAddress + '.testnet' });
      return;
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
    <div className="relative flex mt-4 justify-center">
      {!createAccount && (
        <table className="animate-fadeIn text-center m-0">
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
        <div className="animate-fadeIn w-96 px-4 py-6 bg-primary-10 rounded-xl right-0 top-0 relative">
          <h1 className="text-xl mb-4 font-bold">Add member account</h1>
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
              setInvalidMail({ state: false, message: null });
              setInvalidNear({ state: false, message: null });
              setInvalidUserName({ state: false, message: null });
            }}
          >
            <IoClose />
          </div>
          {/* User name */}
          <div>
            <label htmlFor="user-name" className="flex items-center">
              User name *
              {invalidUserName.state && <p className="text-xs text-red-500 ml-3 mt-1">{invalidUserName.message}</p>}
            </label>
            <input
              className={`h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1 ${
                invalidUserName.state ? 'border-2 border-red-500' : ''
              }`}
              id="user-name"
              value={account.name ? account.name : ''}
              onChange={(e) => {
                setAccount({ ...account, name: e.target.value });
              }}
              onBlur={(e) => {
                setInvalidUserName(validateUserName(e.target.value));
              }}
            />
          </div>
          {/* Email */}
          <div className="mt-3">
            <label htmlFor="email" className="flex items-center">
              Email *{invalidMail.state && <p className="text-xs text-red-500 ml-3 mt-1">{invalidMail.message}</p>}
            </label>
            <input
              className={`h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1 ${
                invalidMail.state ? 'border-2 border-red-500' : ''
              }`}
              id="email"
              value={account.email ? account.email : ''}
              onChange={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
              onBlur={(e) => {
                setInvalidMail(validateEmail(e.target.value));
              }}
            />
          </div>
          {/* Wallet Address */}
          <div className="mt-3 relative">
            <label htmlFor="wallet-address" className="flex items-center">
              Wallet address *
              {invalidNear.state && <p className="text-xs text-red-500 ml-3 mt-1">{invalidNear.message}</p>}
            </label>
            <input
              // placeholder=".testnet"
              ref={walletInput}
              className={`z-100 h-10 w-full bg-primary-20 rounded-lg py-2 px-4 outline-none mt-1 ${
                invalidNear.state ? 'border-2 border-red-500' : ''
              }`}
              id="wallet-address"
              value={account.walletAddress ? account.walletAddress : ''}
              onChange={(e) => {
                setAccount({ ...account, walletAddress: e.target.value });
              }}
              onBlur={(e) => {
                const walletAddress = e.target.value;
                const checkExist = listUsers.find((user) => {
                  return user.walletAddress === walletAddress;
                });
                if (checkExist) {
                  setInvalidNear({ state: true, message: 'Wallet address was exist!' });
                } else setInvalidNear(validateNearAddress(walletAddress));
              }}
            />
            <span className={`absolute left-0 text-primary-50 left-4 bottom-2 flex`}>
              {<p className="text-transparent">{account.walletAddress}</p>}.testnet
            </span>
          </div>
          {/* Role */}
          <div className="mt-2 mb-8 flex">
            <div>
              <input
                type="radio"
                id="user"
                name="role"
                value="Employee"
                className="mr-2"
                checked={account.role === 'Employee'}
                onChange={(e) => {
                  setAccount({ ...account, role: e.target.value });
                }}
              />
              <label htmlFor="user">Employee</label>
            </div>
            <div className="ml-4">
              <input
                type="radio"
                id="admin"
                value="Admin"
                name="role"
                className="mr-2"
                checked={account.role === 'Admin'}
                onChange={(e) => {
                  setAccount({ ...account, role: e.target.value });
                }}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
          <Button
            title="create"
            upcase={true}
            outline={true}
            active={false}
            group={false}
            idDisable={invalidMail.state || invalidNear.state || invalidUserName.state}
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
