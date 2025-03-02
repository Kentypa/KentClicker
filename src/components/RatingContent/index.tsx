import { FC, useState } from 'react';
import { SortingButtons } from '../SortingButtons';
import { SortingType } from '../../types/sorting-types';
import { useParams } from 'react-router';
import { MockUser } from '../../types/mock-user';
import { PlayerTable } from '../RatingTable';
import { PaginationButtons } from '../PaginationButtons';
import DarkAvatar from '../../assets/icons/user-dark.svg';

const users = {
  users: [
    { avatar: DarkAvatar, balance: 93046, name: 'Bessie Cooper', upgrades: 7 },
    { avatar: DarkAvatar, balance: 92771, name: 'Theresa Webb', upgrades: 3 },
    { avatar: DarkAvatar, balance: 45904, name: 'Esther Howard', upgrades: 12 },
    { avatar: DarkAvatar, balance: 39235, name: 'Annette Black', upgrades: 20 },
    { avatar: DarkAvatar, balance: 28200, name: 'Darrell Steward', upgrades: 11 },
    { avatar: DarkAvatar, balance: 20079, name: 'Jerome Bell', upgrades: 14 },
    { avatar: DarkAvatar, balance: 16627, name: 'Devon Lane', upgrades: 2 },
    { avatar: DarkAvatar, balance: 10708, name: 'Brooklyn Simmons', upgrades: 5 },
    { avatar: DarkAvatar, balance: 13671, name: 'Floyd Miles', upgrades: 18 },
    { avatar: DarkAvatar, balance: 53000, name: 'Maya Johnson', upgrades: 6 },
    { avatar: DarkAvatar, balance: 71000, name: 'Liam Thomas', upgrades: 4 },
    { avatar: DarkAvatar, balance: 63000, name: 'Sofia Garcia', upgrades: 9 },
    { avatar: DarkAvatar, balance: 81500, name: 'Jackson Martin', upgrades: 10 },
    { avatar: DarkAvatar, balance: 45000, name: 'Isabella Robinson', upgrades: 8 },
    { avatar: DarkAvatar, balance: 52000, name: 'Ethan Martinez', upgrades: 5 },
    { avatar: DarkAvatar, balance: 67000, name: 'Ava King', upgrades: 7 },
    { avatar: DarkAvatar, balance: 38000, name: 'Lucas Hall', upgrades: 15 },
    { avatar: DarkAvatar, balance: 54000, name: 'Zoe Harris', upgrades: 4 },
    { avatar: DarkAvatar, balance: 55000, name: 'Nolan Clark', upgrades: 13 },
    { avatar: DarkAvatar, balance: 60000, name: 'Olivia Scott', upgrades: 3 },
    { avatar: DarkAvatar, balance: 49000, name: 'Benjamin Lewis', upgrades: 2 },
    { avatar: DarkAvatar, balance: 71000, name: 'Lily Lee', upgrades: 6 },
    { avatar: DarkAvatar, balance: 46000, name: 'James Young', upgrades: 16 },
    { avatar: DarkAvatar, balance: 84000, name: 'Henry Adams', upgrades: 4 },
    { avatar: DarkAvatar, balance: 92000, name: 'Charlotte Moore', upgrades: 9 },
    { avatar: DarkAvatar, balance: 63000, name: 'Samantha Nelson', upgrades: 8 },
    { avatar: DarkAvatar, balance: 58000, name: 'Jack Carter', upgrades: 6 },
    { avatar: DarkAvatar, balance: 47000, name: 'Madison Mitchell', upgrades: 10 },
    { avatar: DarkAvatar, balance: 56000, name: 'Ella Perez', upgrades: 7 },
    { avatar: DarkAvatar, balance: 49000, name: 'Amelia Roberts', upgrades: 5 },
    { avatar: DarkAvatar, balance: 83000, name: 'Mason Walker', upgrades: 14 },
    { avatar: DarkAvatar, balance: 76000, name: 'Emily Collins', upgrades: 12 },
    { avatar: DarkAvatar, balance: 66000, name: 'Daniel Scott', upgrades: 3 },
    { avatar: DarkAvatar, balance: 73000, name: 'Ethan Lewis', upgrades: 7 },
    { avatar: DarkAvatar, balance: 51000, name: 'Grace Walker', upgrades: 5 },
    { avatar: DarkAvatar, balance: 84000, name: 'Jacob Wright', upgrades: 2 },
    { avatar: DarkAvatar, balance: 55000, name: 'Scarlett Carter', upgrades: 8 },
    { avatar: DarkAvatar, balance: 93000, name: 'Isaac Hill', upgrades: 4 },
    { avatar: DarkAvatar, balance: 78000, name: 'Liam Hall', upgrades: 9 },
    { avatar: DarkAvatar, balance: 46000, name: 'Lucas Green', upgrades: 6 },
    { avatar: DarkAvatar, balance: 59000, name: 'Elijah Adams', upgrades: 7 },
    { avatar: DarkAvatar, balance: 75000, name: 'Avery Allen', upgrades: 15 },
    { avatar: DarkAvatar, balance: 71000, name: 'Levi Baker', upgrades: 3 },
  ] as MockUser[],
};

export const RatingContent: FC = () => {
  const params = useParams();
  const [sortingType, setSortingType] = useState<SortingType>('Balance');
  const [page, setPage] = useState<number>(parseInt(params.page || '1') || 1);
  const maxUsersCountPerPage = 10;
  const totalPages = Math.ceil(users.users.length / maxUsersCountPerPage);
  const currentUsers = users.users
    .sort((a, b) => {
      if (sortingType === 'Balance') {
        return b.balance - a.balance;
      } else if (sortingType === 'Upgrades') {
        return b.upgrades - a.upgrades;
      }
      return 0;
    })
    .map((user, index) => ({ ...user, rating: index + 1 }))
    .slice((page - 1) * maxUsersCountPerPage, page * maxUsersCountPerPage);

  return (
    <main className='flex flex-col mt-10 w-full px-30 pb-15 max-w-[1440px]'>
      <div className='flex justify-between items-center w-full mb-8'>
        <h2 className='text-headline-small'>Rating</h2>
        <div className='flex items-center'>
          <h3 className='text-subtle-dark pr-4 text-body-large'>Sorted by</h3>
          <SortingButtons
            sortingType={sortingType}
            setSortingType={setSortingType}
            sortingTypes={['Balance', 'Upgrades']}
            buttonClassName='first:rounded-l-[10px] last:rounded-r-[10px] py-2.25 px-4.75 border text-label-medium'
          />
        </div>
      </div>
      <PlayerTable users={currentUsers} />
      <PaginationButtons
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </main>
  );
};
